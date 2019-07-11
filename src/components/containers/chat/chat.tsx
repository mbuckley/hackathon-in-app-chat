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
  shadow: true
})
export class Chat {
  @Prop() pubnub: any;
  @Prop() state: any;
  @Prop() userProfile: any;
  @Prop() uuid: any;

  componentWillLoad() {
    this.pubnub = new PubNub({
      publishKey: "pub-c-2c10eb4d-5066-4241-99f9-d82430455cf9",
      subscribeKey: "sub-c-a6263802-9dd9-11e9-8df4-32dd89bcc96f",
      uuid: this.uuid, //Get from Mange
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

  componentWillMount() {
    // const networkError = new Image();
    // networkError.src = networkErrorImg;
    // this.setState({networkErrorImg: networkError});

    this.pubnub.subscribe();

    this.pubnub.getPresence(channelName, (presence: any) => {
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
        this.state.onlineUsersCount = this.state.onlineUsersCount + 1
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

          // this.setState({
          //   onlineUsers,
          //   onlineUsersCount
          // });
          this.state.onlineUsers = onlineUsers;
          this.state.onlineUsersCount = onlineUsersCount
        }
      }
    });

    this.pubnub.getStatus((status: any) => {
      if (status.category === 'PNConnectedCategory') {
        this.hereNow();

        this.pubnub.history({
          channel: channelName,
          count:25,
          reverse: false,
          stringifiedTimeToken: true
        }, (_status: any, response: any) => {
          const lastMessageWeekday = getWeekday(response.endTimeToken);

          // this.setState({
          //   historyLoaded: true,
          //   historyMessages: response.messages,
          //   lastMessageWeekday
          // });
          this.state.historyLoaded = true;
          this.state.historyMessages = response.messages;
          this.state.lastMessageWeekday = lastMessageWeekday;

          let messageSentDate = this.state.historyMessages.map(message => getWeekday(message.timetoken));
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

    this.pubnub.getMessage(channelName, (m: any) => {
      const sendersInfo = this.state.sendersInfo;

      sendersInfo.push({
        senderId: m.message.senderId,
        text: m.message.text,
        timetoken: m.timetoken,
      });

      // this.setState(this.state);
      this.state = this.state;

      const lastMessageWeekday = getWeekday(m.timetoken);
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
  };

  hereNow() {
    this.pubnub.hereNow({
      channels: channelName,
      includeUUIDs: true,
      includeState: false
    }, (_status: any, response: any) => {
      // this.setState({
      //   onlineUsers: response.channels[forestChatChannel].occupants,
      //   onlineUsersCount: response.channels[forestChatChannel].occupancy
      // });
      this.state.onlineUsers = response.channels[channelName].occupants;
      this.state.onlineUsersCount = response.channels[channelName].occupancy;
    });
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
      <div>
        <iac-header
          userProfile={this.userProfile}
          onlineUsersCount={50}
        ></iac-header>
        <h3>User</h3>
        <iac-user
          user='{ "uuid": "123", "name": "Demo User", "designation": "Admin", "avatarUrl": "https://picsum.photos/id/95/200/300" }'
          loggedInUser= "123">
        </iac-user>

        <h3>Online Users</h3>
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
        ></iac-message-list>
      </div>
    );
  }
}
