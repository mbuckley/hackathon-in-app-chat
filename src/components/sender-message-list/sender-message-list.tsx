import { Component, Prop, h } from '@stencil/core';

import { getUserName, getTime, getDate } from "../../utils/utils";

@Component({
  tag: 'iac-sender-message-list',
  styleUrl: 'sender-message-list.scss',
  shadow: true
})
export class SenderMessageList {

  @Prop({ mutable: true }) sendersInfo: any;
  @Prop() getUserAvatarUrl: any;
  @Prop() styleForMessageSender: any;

  @Prop() users: any;

  componentWillLoad() {
    console.log(this.sendersInfo);
  }

  render() {
    return (
      <div class='senderMessageDialog'>
        {this.sendersInfo.map( (m, index) =>
          <li class="senderMessage" key={index}>
            <div class='messageSentDay'>{getDate(m.timetoken, 'senderMessage')}</div>
            <div class='message'>
              <div class='name'>{getUserName(this.users, m.senderId)}</div>
              <div class='time'>{getTime(m.timetoken)}<div class="date">&nbsp;on&nbsp;{getDate(m.timetoken, 'historyMessage', index)}</div></div>
              <div class='text'>{m.text}</div>
              {/*<img width='28' height='28' alt='Sender avatar' src={this.getUserAvatarUrl(users, m.senderId, 'smImage')}*/}
            </div>
          </li>
      )}
    </div>
    );
  }
}
