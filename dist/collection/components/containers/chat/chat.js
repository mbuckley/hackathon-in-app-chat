import { h } from '@stencil/core';
import PubNub from 'pubnub';
import { getWeekday } from "../../../utils/utils";
import { getUserName, getUserAvatarUrl } from "../../../utils/utils";
export class Chat {
    constructor() {
        this.parsedUsers = [];
        this.channelName = "test-channel";
        this.onlineUsersCount = 0;
    }
    componentWillLoad() {
        this.parsedUsers = JSON.parse(this.users);
        this.pubnub = new PubNub({
            publishKey: "pub-c-2c10eb4d-5066-4241-99f9-d82430455cf9",
            subscribeKey: "sub-c-a6263802-9dd9-11e9-8df4-32dd89bcc96f",
            // uuid: this.uuid, //Get from Mange
            autoNetworkDetection: true,
            restore: true,
        });
        // this.designation = randomUser.designation;
        this.sendersInfo = [];
        this.lastMessageWeekday = '';
        this.messageSentDate = [];
        this.historyLoaded = false;
        this.historyMessages = [];
        this.onlineUsers = [];
        this.onlineUsersCount = 0;
        this.networkErrorStatus = false;
        this.networkErrorImg = null;
    }
    componentDidLoad() {
        // const networkError = new Image();
        // networkError.src = networkErrorImg;
        // this.setState({networkErrorImg: networkError});
        this.pubnub.subscribe({ channels: [this.channelName], withPresence: true });
        this.pubnub.addListener({
            status: (status) => {
                if (status.category === 'PNConnectedCategory') {
                    this.hereNow();
                    this.pubnub.history({
                        channel: this.channelName,
                        count: 50,
                        reverse: false,
                        stringifiedTimeToken: true,
                    }).then((response) => {
                        const lastMessageWeekday = getWeekday(response.endTimeToken);
                        this.historyLoaded = true;
                        this.historyMessages = response.messages;
                        this.lastMessageWeekday = lastMessageWeekday;
                        let messageSentDate = this.historyMessages.map(message => getWeekday(message.timetoken));
                        this.messageSentDate = messageSentDate;
                        this.scrollToBottom();
                    }).catch((error) => {
                        console.log(error);
                    });
                }
                if (status.category === 'PNNetworkDownCategory') {
                    // this.setState({networkErrorStatus: true});
                    this.networkErrorStatus = true;
                }
                if (status.category === 'PNNetworkUpCategory') {
                    // this.setState({networkErrorStatus: false});
                    this.networkErrorStatus = false;
                    this.pubnub.reconnect();
                    this.scrollToBottom();
                }
            },
            message: (m) => {
                this.sendersInfo = [
                    ...this.sendersInfo,
                    {
                        senderId: m.message.senderId,
                        text: m.message.text,
                        timetoken: m.timetoken,
                    }
                ];
                const lastMessageWeekday = getWeekday(m.timetoken);
                this.lastMessageWeekday = lastMessageWeekday;
                this.scrollToBottom();
            },
            presence: (presence) => {
                if (presence.action === 'join') {
                    this.onlineUsers = [
                        ...this.onlineUsers,
                        {
                            state: presence.state,
                            uuid: presence.uuid
                        }
                    ];
                    // this.onlineUsers = users,
                    this.onlineUsersCount = this.onlineUsersCount + 1;
                }
                if ((presence.action === 'leave') || (presence.action === 'timeout')) {
                    let leftUsers = this.onlineUsers.filter(users => users.uuid !== presence.uuid);
                    this.onlineUsers = leftUsers;
                    const length = this.onlineUsers.length;
                    this.onlineUsersCount = length;
                }
                if (presence.action === 'interval') {
                    if (presence.join || presence.leave || presence.timeout) {
                        let onlineUsers = this.onlineUsers;
                        let onlineUsersCount = this.onlineUsersCount;
                        if (presence.join) {
                            presence.join.map(user => (user !== this.uuid &&
                                onlineUsers.push({
                                    state: presence.state,
                                    uuid: user
                                })));
                            onlineUsersCount += presence.join.length;
                        }
                        if (presence.leave) {
                            presence.leave.map(leftUser => onlineUsers.splice(onlineUsers.indexOf(leftUser), 1));
                            onlineUsersCount -= presence.leave.length;
                        }
                        if (presence.timeout) {
                            presence.timeout.map(timeoutUser => onlineUsers.splice(onlineUsers.indexOf(timeoutUser), 1));
                            onlineUsersCount -= presence.timeout.length;
                        }
                        this.onlineUsers = onlineUsers;
                        this.onlineUsersCount = onlineUsersCount;
                    }
                }
            }
        });
        window.addEventListener('beforeunload', this.leaveChat);
    }
    componentWillUnmount() {
        this.leaveChat();
    }
    subscribe() {
        this.pubnub.subscribe({
            channels: this.channelName,
            withPresence: true
        });
    }
    ;
    hereNow() {
        this.pubnub.hereNow({
            channels: [this.channelName],
            includeUUIDs: true,
            includeState: false
        }, (_status, response) => {
            this.onlineUsers = response.channels[this.channelName].occupants;
            this.hydrateUsers();
            // this.onlineUsersCount = response.channels[this.channelName].occupancy;
        });
    }
    ;
    // Adds extra info to users (name, image, etc)
    hydrateUsers() {
        console.log("hydrateUsers");
        this.onlineUsers = this.parsedUsers.concat(this.onlineUsers);
        this.onlineUsers = this.onlineUsers.map((onlineUser) => {
            return {
                uuid: onlineUser.uuid,
                name: getUserName(this.parsedUsers, onlineUser.uuid),
                image: getUserAvatarUrl(this.parsedUsers, onlineUser.uuid)
            };
        })
            .filter((onlineUser) => {
            return onlineUser.name && onlineUser.name.length > 1;
        });
        this.onlineUsersCount = this.onlineUsers.length;
        console.log("done", this.onlineUsers);
    }
    leaveChat() {
        this.pubnub.unsubscribeAll();
    }
    ;
    scrollToBottom() {
        const elToScroll = this.messageList.shadowRoot.querySelector(".messageDialog");
        if (elToScroll) {
            setTimeout(() => {
                elToScroll.scrollTop = elToScroll.scrollHeight;
            }, 100);
        }
    }
    ;
    render() {
        return (h("div", { class: "grid" },
            h("iac-header", { userProfile: this.userProfile, onlineUsersCount: this.onlineUsersCount }),
            h("iac-message-list", { sendersInfo: this.sendersInfo, messageSentDate: "July 12, 2019", historyLoaded: this.historyLoaded, historyMessages: this.historyMessages, users: this.parsedUsers, ref: (el) => this.messageList = el }),
            h("iac-message-body", { pubnub: this.pubnub, uuid: this.uuid, channelName: this.channelName }),
            h("iac-online-users", { loggedInUser: "x9skdkdkslsddkjfsk", onlineUsers: this.onlineUsers })));
    }
    static get is() { return "iac-chat"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["chat.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chat.css"]
    }; }
    static get properties() { return {
        "channelName": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "channel-name",
            "reflect": false,
            "defaultValue": "\"test-channel\""
        },
        "pubnub": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "pubnub",
            "reflect": false
        },
        "state": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "state",
            "reflect": false
        },
        "userProfile": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "user-profile",
            "reflect": false
        },
        "users": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "users",
            "reflect": false
        },
        "uuid": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "uuid",
            "reflect": false
        },
        "sendersInfo": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "Array<any>",
                "resolved": "any[]",
                "references": {
                    "Array": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "lastMessageWeekday": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "last-message-weekday",
            "reflect": false
        },
        "messageSentDate": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "message-sent-date",
            "reflect": false
        },
        "historyLoaded": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "history-loaded",
            "reflect": false
        },
        "historyMessages": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "history-messages",
            "reflect": false
        },
        "onlineUsers": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "online-users",
            "reflect": false
        },
        "onlineUsersCount": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "online-users-count",
            "reflect": false,
            "defaultValue": "0"
        },
        "networkErrorStatus": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "network-error-status",
            "reflect": false
        },
        "networkErrorImg": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "network-error-img",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "messageReceived",
            "name": "messageReceived",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
