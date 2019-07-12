// tag::CHT-1.1[]
// import React from 'react';
// import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { Component, Element, Prop, State, h } from '@stencil/core';

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
  @Element() el: HTMLElement;

  private messageList?: HTMLElement;

  @Prop() pubnub: any;
  @Prop({ mutable: true }) state: any;
  @Prop() userProfile: any;
  @Prop() users: any;
  @Prop() uuid: any;

  @State() sendersInfo: Array<any>;
  @State() lastMessageWeekday: any;
  @State() messageSentDate: any;
  @State() historyLoaded: any;
  @State() historyMessages: any;
  @State() onlineUsers: any;
  @State() onlineUsersCount: number = 0;
  @State() networkErrorStatus: any;
  @State() networkErrorImg: any;

  componentWillLoad() {
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
        this.scrollToBottom();
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
  };

  hereNow() {
    this.pubnub.hereNow({
      channels: [channelName],
      includeUUIDs: true,
      includeState: false
    }, (_status: any, response: any) => {
      this.onlineUsers = response.channels[channelName].occupants;

      //FIXME: add temp names until we have full list of firm users passed in
      // that we can look up real names from based on uuid.
      this.onlineUsers.forEach((item: any, index: number) => {
        item.name = `User #${index}`;
        item.image = "https://picsum.photos/45/45"
      });

      this.onlineUsersCount = response.channels[channelName].occupancy;
    });
  };

  leaveChat() {
    this.pubnub.unsubscribeAll();
  };

  scrollToBottom() {
    if(this.messageList) {
        this.messageList.scrollTop = this.messageList.scrollHeight;
    }
  };

  render() {
    return (
      <div class="grid">
        <iac-header
          userProfile={this.userProfile}
          onlineUsersCount={this.onlineUsersCount}
        ></iac-header>

        <iac-message-list
          message-sent-date="July 12, 2019"
          historyLoaded={this.historyLoaded}
          historyMessages={this.historyMessages}
          ref={(el) => this.messageList = el as HTMLElement}
        ></iac-message-list>

        <iac-message-body
          pubnub={this.pubnub}
          uuid={this.uuid}
          channelName={channelName}
          >
        </iac-message-body>

        <iac-online-users
          loggedInUser= {"x9skdkdkslsddkjfsk"}
          onlineUsers={this.onlineUsers}
        ></iac-online-users>
      </div>
    );
  }
}
