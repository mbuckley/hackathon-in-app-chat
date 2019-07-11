// tag::CHT-1.1[]
// import React from 'react';
// import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { Component, Prop, h } from '@stencil/core';

import PubNub from 'pubnub';
import { getWeekday  } from "../../../utils/utils";
// import OnlineUsers from '../components/OnlineUsers';
// import MessageBody from './MessageBody';
// import MessageList from '../components/MessageList';
// import Header from '../components/Header';
// import users from '../config/users';
// import {publishKey, subscribeKey} from '../config/keys';
// import {forestChatChannel} from '../config/chat';

// import networkErrorImg from '../styles/networkError.png';

const channelName = "test-channel";

@Component({
  tag: 'iac-chat',
  styleUrl: 'chat.scss',
  shadow: true
})
export class Chat {
  @Prop() pubnub: any;
  @Prop({ mutable: true }) state: any;
  @Prop() userProfile: any;
  @Prop() uuid: any;

  @Prop() sendersInfo: Array<any>;
  @Prop() lastMessageWeekday: any;
  @Prop() messageSentDate: any;
  @Prop() historyLoaded: any;
  @Prop() historyMessages: any;
  @Prop() onlineUsers: any;
  @Prop() onlineUsersCount: any;
  @Prop() networkErrorStatus: any;
  @Prop() networkErrorImg: any;

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
      // sendersInfo: [],
      // lastMessageWeekday: '',
      // messageSentDate: [],
      // historyLoaded: false,
      // historyMessages: [],
      // onlineUsers: [],
      // onlineUsersCount: '',
      // networkErrorStatus: false,
      // networkErrorImg: null,
    };

    this.sendersInfo = [];
    this.lastMessageWeekday = '';
    this.messageSentDate = [];
    this.historyLoaded = false;
    this.historyMessages = [];
    this.onlineUsers = [];
    this.onlineUsersCount = '';
    this.networkErrorStatus = false;
    this.networkErrorImg = null;
  }

  componentDidLoad() {
    // const networkError = new Image();
    // networkError.src = networkErrorImg;
    // this.setState({networkErrorImg: networkError});

    this.pubnub.subscribe({channels: [channelName], withPresence: true });

    this.pubnub.addListener({
      status: (status) => {
        if (status.category === 'PNConnectedCategory') {
          this.hereNow();

          this.pubnub.history({
            channel: "test-channel",
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
            console.log(error)
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
      message: (m: any) => {
        const sendersInfo = this.sendersInfo;

        sendersInfo.push({
          senderId: m.message.senderId,
          text: m.message.text,
          timetoken: m.timetoken,
        });

        const lastMessageWeekday = getWeekday(m.timetoken);
        this.sendersInfo = sendersInfo;
        this.lastMessageWeekday = lastMessageWeekday;
        // this.scrollToBottom();
      },
      presence: (presence: any) => {
        if (presence.action === 'join') {
          let users = this.onlineUsers;

          users.push({
            state: presence.state,
            uuid: presence.uuid
          });

          this.onlineUsers = users,
          this.onlineUsersCount = this.onlineUsersCount + 1
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
              presence.join.map(user => (
                user !== this.uuid &&
                onlineUsers.push({
                  state: presence.state,
                  uuid: user
                })
              ));

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
            this.onlineUsersCount = onlineUsersCount
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
  };

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
    //   this.onlineUsers = response.channels[channelName].occupants;
    //   this.onlineUsersCount = response.channels[channelName].occupancy;
    // });
  };

  leaveChat() {
    this.pubnub.unsubscribeAll();
  };



  scrollToBottom() {
    const elem = document.querySelector(".messageDialog");

    if(elem) {
        elem.scrollTop = elem.scrollHeight;
    }
  };

  render() {
    return (
      <div class="grid">
        <iac-header
          userProfile={this.userProfile}
          onlineUsersCount={50}
        ></iac-header>

        <iac-user
          user='{ "uuid": "123", "name": "Demo User", "designation": "Admin", "avatarUrl": "https://picsum.photos/id/95/200/300" }'
          loggedInUser= "123">
        </iac-user>

        <iac-online-users
          loggedInUser= {"x9skdkdkslsddkjfsk"}
          onlineUsers='[{ "uuid": "abcdedad", "name": "Craig", "image": "https://picsum.photos/45/45" },{ "uuid": "x9skdkdkslsddkjfsk", "name": "Kiran", "image": "https://picsum.photos/45/45" },{ "uuid": "asdf", "name": "Mike", "image": "https://picsum.photos/45/45" }]'
        ></iac-online-users>

        <iac-message-body
          pubnub={this.pubnub}
          uuid={this.uuid}
          channelName={channelName}
          >
        </iac-message-body>

        <iac-message-list
          message-sent-date="July 12, 2019"
          historyLoaded={this.historyLoaded}
          historyMessages={this.historyMessages}
        ></iac-message-list>
      </div>
    );
  }
}
