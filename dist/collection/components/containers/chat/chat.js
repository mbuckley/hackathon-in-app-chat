// tag::CHT-1.1[]
// import React from 'react';
// import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { h } from '@stencil/core';
import PubNub from 'pubnub';
import { getWeekday } from "../../../utils/utils";
// import OnlineUsers from '../components/OnlineUsers';
// import MessageBody from './MessageBody';
// import MessageList from '../components/MessageList';
// import Header from '../components/Header';
// import users from '../config/users';
// import {publishKey, subscribeKey} from '../config/keys';
// import {forestChatChannel} from '../config/chat';
// import networkErrorImg from '../styles/networkError.png';
const channelName = "test-channel";
export class Chat {
    componentWillLoad() {
        this.pubnub = new PubNub({
            publishKey: "pub-c-2c10eb4d-5066-4241-99f9-d82430455cf9",
            subscribeKey: "sub-c-a6263802-9dd9-11e9-8df4-32dd89bcc96f",
            // uuid: this.uuid, //Get from Mange
            autoNetworkDetection: true,
            restore: true,
        });
        // this.designation = randomUser.designation;
        this.state = {
            sendersInfo: [],
            lastMessageWeekday: '',
            messageSentDate: [],
            historyLoaded: false,
            historyMessages: [],
            onlineUsers: [],
            onlineUsersCount: '',
            networkErrorStatus: false,
            networkErrorImg: null
        };
    }
    componentDidLoad() {
        // const networkError = new Image();
        // networkError.src = networkErrorImg;
        // this.setState({networkErrorImg: networkError});
        this.pubnub.subscribe({ channels: [channelName], withPresence: true });
        console.log(this.pubnub);
        this.pubnub.addListener({
            status: (status) => {
                console.log("STATUS called", status);
                if (status.category === 'PNConnectedCategory') {
                    this.hereNow();
                    console.log("GETTING HISTORY");
                    this.pubnub.history({
                        channel: "test-channel",
                        count: 1,
                    }, (status, response) => {
                        console.log("STATUS", status);
                        console.log("RESPONSE", response);
                        // const lastMessageWeekday = getWeekday(response.endTimeToken);
                        //   // // this.setState({
                        //   // //   historyLoaded: true,
                        //   // //   historyMessages: response.messages,
                        //   // //   lastMessageWeekday
                        //   // // });
                        //   // this.state.historyLoaded = true;
                        //   // this.state.historyMessages = response.messages;
                        //   // this.state.lastMessageWeekday = lastMessageWeekday;
                        //   // let messageSentDate = this.state.historyMessages.map(message => getWeekday(message.timetoken));
                        //   // // this.setState({messageSentDate});
                        //   // this.state.messageSentDate = messageSentDate;
                        //   // this.scrollToBottom();
                    });
                }
                if (status.category === 'PNNetworkDownCategory') {
                    // this.setState({networkErrorStatus: true});
                    this.state.networkErrorStatus = true;
                }
                if (status.category === 'PNNetworkUpCategory') {
                    // this.setState({networkErrorStatus: false});
                    this.state.networkErrorStatus = false;
                    this.pubnub.reconnect();
                    this.scrollToBottom();
                }
            },
            message: (m) => {
                console.log("MESSAGE called");
                const sendersInfo = this.state.sendersInfo;
                sendersInfo.push({
                    senderId: m.message.senderId,
                    text: m.message.text,
                    timetoken: m.timetoken,
                });
                this.state = this.state;
                const lastMessageWeekday = getWeekday(m.timetoken);
                this.state.sendersInfo = sendersInfo;
                this.state.lastMessageWeekday = lastMessageWeekday;
                // this.scrollToBottom();
            },
            presence: (presence) => {
                console.log("PRESENCE called");
                if (presence.action === 'join') {
                    let users = this.state.onlineUsers;
                    users.push({
                        state: presence.state,
                        uuid: presence.uuid
                    });
                    this.state.onlineUsers = users,
                        this.state.onlineUsersCount = this.state.onlineUsersCount + 1;
                }
                if ((presence.action === 'leave') || (presence.action === 'timeout')) {
                    let leftUsers = this.state.onlineUsers.filter(users => users.uuid !== presence.uuid);
                    this.state.onlineUsers = leftUsers;
                    const length = this.state.onlineUsers.length;
                    this.state.onlineUsersCount = length;
                }
                if (presence.action === 'interval') {
                    if (presence.join || presence.leave || presence.timeout) {
                        let onlineUsers = this.state.onlineUsers;
                        let onlineUsersCount = this.state.onlineUsersCount;
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
                        this.state.onlineUsers = onlineUsers;
                        this.state.onlineUsersCount = onlineUsersCount;
                    }
                }
            }
        });
        // window.addEventListener('beforeunload', this.leaveChat);
    }
    componentWillUnmount() {
        this.leaveChat();
    }
    subscribe() {
        this.pubnub.subscribe({
            channels: channelName,
            withPresence: true
        });
    }
    ;
    hereNow() {
        // this.pubnub.hereNow({
        //   channels: channelName,
        //   includeUUIDs: true,
        //   includeState: false
        // }, (_status: any, response: any) => {
        //   // this.setState({
        //   //   onlineUsers: response.channels[forestChatChannel].occupants,
        //   //   onlineUsersCount: response.channels[forestChatChannel].occupancy
        //   // });
        //   this.state.onlineUsers = response.channels[channelName].occupants;
        //   this.state.onlineUsersCount = response.channels[channelName].occupancy;
        // });
    }
    ;
    leaveChat() {
        this.pubnub.unsubscribeAll();
    }
    ;
    scrollToBottom() {
        const elem = document.querySelector(".messageDialog");
        if (elem) {
            elem.scrollTop = elem.scrollHeight;
        }
    }
    ;
    render() {
        return (h("div", null,
            h("iac-header", { userProfile: this.userProfile, onlineUsersCount: 50 }),
            h("iac-message-body", { pubnub: this.pubnub, uuid: this.uuid, channelName: channelName }),
            h("iac-message-list", { "message-sent-date": "July 12, 2019", historyLoaded: this.state.historyLoaded, historyMessages: this.state.historyMessages })));
    }
    static get is() { return "iac-chat"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
        }
    }; }
}
