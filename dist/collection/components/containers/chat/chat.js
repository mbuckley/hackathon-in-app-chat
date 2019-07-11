// tag::CHT-1.1[]
// import React from 'react';
// import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { h } from '@stencil/core';
import PubNub from 'pubnub';
import { getUserAvatarUrl, } from "../../../utils/utils";
// import OnlineUsers from '../components/OnlineUsers';
// import MessageBody from './MessageBody';
// import MessageList from '../components/MessageList';
// import Header from '../components/Header';
// import users from '../config/users';
// import {publishKey, subscribeKey} from '../config/keys';
// import {forestChatChannel} from '../config/chat';
// import networkErrorImg from '../styles/networkError.png';
const channelName = "test-channel";
export class ChatContainer {
    componentWillLoad() {
        this.pubnub = new PubNub({
            publishKey: "pub-c-2c10eb4d-5066-4241-99f9-d82430455cf9",
            subscribeKey: "sub-c-a6263802-9dd9-11e9-8df4-32dd89bcc96f",
            uuid: "dfsgsdfgdsfgdsfgdsf",
            autoNetworkDetection: true,
            restore: true,
        });
        this.userProfile = {
            name: "Demo User",
            image: getUserAvatarUrl([], null, null),
        };
        this.uuid = "34634634563546543";
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
    componentWillMount() {
        // const networkError = new Image();
        // networkError.src = networkErrorImg;
        // this.setState({networkErrorImg: networkError});
        this.pubnub.subscribe();
        this.pubnub.getPresence(channelName, (presence) => {
            if (presence.action === 'join') {
                let users = this.state.onlineUsers;
                users.push({
                    state: presence.state,
                    uuid: presence.uuid
                });
                // this.setState({
                //   onlineUsers: users,
                //   onlineUsersCount: this.state.onlineUsersCount + 1
                // });
                this.state.onlineUsers = users,
                    this.state.onlineUsersCount = this.state.onlineUsersCount + 1;
            }
            if ((presence.action === 'leave') || (presence.action === 'timeout')) {
                let leftUsers = this.state.onlineUsers.filter(users => users.uuid !== presence.uuid);
                // this.setState({
                //   onlineUsers: leftUsers,
                // });
                this.state.onlineUsers = leftUsers;
                const length = this.state.onlineUsers.length;
                // this.setState({
                //   onlineUsersCount: length
                // });
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
                    // this.setState({
                    //   onlineUsers,
                    //   onlineUsersCount
                    // });
                    this.state.onlineUsers = onlineUsers;
                    this.state.onlineUsersCount = onlineUsersCount;
                }
            }
        });
        this.pubnub.getStatus((status) => {
            if (status.category === 'PNConnectedCategory') {
                this.hereNow();
                this.pubnub.history({
                    channel: channelName,
                    count: 25,
                    reverse: false,
                    stringifiedTimeToken: true
                }, (_status, response) => {
                    const lastMessageWeekday = this.getWeekday(response.endTimeToken);
                    // this.setState({
                    //   historyLoaded: true,
                    //   historyMessages: response.messages,
                    //   lastMessageWeekday
                    // });
                    this.state.historyLoaded = true;
                    this.state.historyMessages = response.messages;
                    this.state.lastMessageWeekday = lastMessageWeekday;
                    let messageSentDate = this.state.historyMessages.map(message => this.getWeekday(message.timetoken));
                    // this.setState({messageSentDate});
                    this.state.messageSentDate = messageSentDate;
                    this.scrollToBottom();
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
        });
        this.pubnub.getMessage(channelName, (m) => {
            const sendersInfo = this.state.sendersInfo;
            sendersInfo.push({
                senderId: m.message.senderId,
                text: m.message.text,
                timetoken: m.timetoken,
            });
            // this.setState(this.state);
            this.state = this.state;
            const lastMessageWeekday = this.getWeekday(m.timetoken);
            // this.setState({
            //   sendersInfo,
            //   lastMessageWeekday
            // });
            this.state.sendersInfo = sendersInfo;
            this.state.lastMessageWeekday = lastMessageWeekday;
            this.scrollToBottom();
        });
        window.addEventListener('beforeunload', this.leaveChat);
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
        this.pubnub.hereNow({
            channels: channelName,
            includeUUIDs: true,
            includeState: false
        }, (_status, response) => {
            // this.setState({
            //   onlineUsers: response.channels[forestChatChannel].occupants,
            //   onlineUsersCount: response.channels[forestChatChannel].occupancy
            // });
            this.state.onlineUsers = response.channels[channelName].occupants;
            this.state.onlineUsersCount = response.channels[channelName].occupancy;
        });
    }
    ;
    leaveChat() {
        this.pubnub.unsubscribeAll();
    }
    ;
    getTime(timetoken) {
        return new Date(parseInt(timetoken.substring(0, 13))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    }
    ;
    getWeekday(timetoken) {
        return new Date(parseInt(timetoken.substring(0, 13))).toLocaleDateString('en-US', { weekday: 'long' });
    }
    ;
    getDate(timetoken, messageType, index = 0) {
        const messageWeekday = this.getWeekday(timetoken);
        const date = new Date(parseInt(timetoken.substring(0, 13))).toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
        switch (messageType) {
            case 'historyMessage':
                if (this.state.messageSentDate[index - 1] !== messageWeekday) {
                    return `${date}, ${messageWeekday}`;
                }
                break;
            case 'senderMessage':
                if (this.state.lastMessageWeekday !== messageWeekday) {
                    return `${date}, ${messageWeekday}`;
                }
                break;
            default:
                return;
        }
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
            h("iac-message-body", { pubnub: this.pubnub, uuid: this.uuid, channelName: channelName })));
    }
    static get is() { return "iac-chat-container"; }
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
