import { Component, Prop, h } from '@stencil/core';

import { getUserName, getTime, getDate, styleForMessageSender, getUserAvatarUrl } from "../../../utils/utils";


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
  @Prop() users: any;
  @Prop() uuid: any;

  render() {
    return (
      <div>
        {(this.historyLoaded &&
          <div class='historyMessageDialog'>
            {this.historyMessages.map( (m, index) =>
              <li class={styleForMessageSender(m.entry.senderId, this.uuid)} key={m.timetoken}>
                {/* <div class='messageSentDay'>{this.getDate(m.timetoken, 'historyMessage', index)}</div> */}
                <div class='message'>
                  <img width='28' height='28' alt='Sender avatar' src={getUserAvatarUrl(this.users, m.entry.senderId)} />
                  <div class='name'>{getUserName(this.users, m.entry.senderId)}</div>
                  <div class='time'>{getTime(m.timetoken)}<div class="date">&nbsp;on&nbsp;{getDate(m.timetoken, 'historyMessage', index)}</div></div>
                  <div class='text'>{m.entry.text}</div>
                </div>
              </li>
            )}
          </div>
        )}
      </div>
    );
  }
}
