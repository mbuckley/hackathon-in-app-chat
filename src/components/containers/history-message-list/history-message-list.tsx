import { Component, Prop, h } from '@stencil/core';

import { getUserName, getTime, getDate } from "../../../utils/utils";


@Component({
  tag: 'iac-history-message-list',
  styleUrl: 'history-message-list.scss',
  shadow: true
})
export class HistoryMessageList {
  @Prop() historyMessages: any;
  @Prop() historyLoaded: any;
  @Prop() networkErrorImg: any;
  @Prop() networkErrorStatus: any;
  @Prop() getUserAvatarUrl: any;
  @Prop() styleForMessageSender: any;
  @Prop() users: any;

  render() {
    return (
      <div>
        {(this.historyLoaded &&
          <div class='historyMessageDialog'>
            {this.historyMessages.map( (m, index) =>
              <li class={this.styleForMessageSender(m.entry.senderId)} key={m.timetoken}>
                {/* <div class='messageSentDay'>{this.getDate(m.timetoken, 'historyMessage', index)}</div> */}
                <div class='message'>
                  <div class='name'>{getUserName(this.users, m.entry.senderId)}</div>
                  <div class='time'>{getTime(m.timetoken)}<div class="date">&nbsp;on&nbsp;{getDate(m.timetoken, 'historyMessage', index)}</div></div>
                  <div class='text'>{m.entry.text}</div>
                  <img width='28' height='28' alt='Sender avatar' src={this.getUserAvatarUrl(this.users, m.entry.senderId)} />
                </div>
              </li>
            )}
          </div>
        )}
      </div>
    );
  }
}
