import { Component, Prop, h } from '@stencil/core';
import users from "../../config/users.js";

type sender = {
  senderId: number;
  text: string;
  timetoken: string;
}

@Component({
  tag: 'iac-sender-message-list',
  styleUrl: 'sender-message-list.scss',
  shadow: true
})
export class SenderMessageList {
  // const {sendersInfo, getUserName, getTime, getDate, getUserAvatarUrl, styleForMessageSender} = props;
  private parsedSendersInfo: sender[];

  @Prop() sendersInfo: any;
  @Prop() getUserName: any;
  @Prop() getTime: any;
  @Prop() getDate: any;
  @Prop() getUserAvatarUrl: any;
  @Prop() styleForMessageSender: any;

  componentWillLoad() {
    console.log(this.sendersInfo);
    this.parsedSendersInfo = JSON.parse(this.sendersInfo);
    // console.log(this.parsedOnlineUsers);
  }

  render() {
    return (
      <div class='senderMessageDialog'>
        {this.parsedSendersInfo.map( (m, index) =>
          <li class="senderMessage" key={index}>
            <div class='messageSentDay'>{this.getDate(m.timetoken, 'senderMessage')}</div>
            <div class='message'>
              <div class='name'>{this.getUserName(users, m.senderId)}</div>
              <div class='time'>{this.getTime(m.timetoken)}</div>
              <div class='text'>{m.text}</div>
              {/*<img width='28' height='28' alt='Sender avatar' src={this.getUserAvatarUrl(users, m.senderId, 'smImage')}*/}
            </div>
          </li>
      )}
    </div>
    );
  }
}
