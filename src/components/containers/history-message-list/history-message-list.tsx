import { Component, Prop, h } from '@stencil/core';
import users from "../../../config/users.js";

@Component({
  tag: 'iac-history-message-list',
  styleUrl: 'history-message-list.scss',
  shadow: true
})
export class HistoryMessageList {
  /*
  const {historyMessages, historyLoaded, networkErrorImg, networkErrorStatus,
    getUserName, getTime, getDate, getUserAvatarUrl, styleForMessageSender} = this.props; */


  private parsedHistoryMessages: any;

  @Prop() historyMessages: any;
  @Prop() historyLoaded: any;
  @Prop() networkErrorImg: any;
  @Prop() networkErrorStatus: any;
  @Prop() getUserName: any;
  @Prop() getTime: any;
  @Prop() getDate: any;
  @Prop() getUserAvatarUrl: any;
  @Prop() styleForMessageSender: any;

  componentWillLoad() {
    console.log(this.historyMessages);
    this.parsedHistoryMessages = JSON.parse(this.historyMessages);
    console.log(this.parsedHistoryMessages);
    // console.log(this.parsedOnlineUsers);
  }

  render() {
    return (
      <div>
        {(this.historyLoaded &&
          <div class='historyMessageDialog'>
            {this.parsedHistoryMessages.map( (m, index) =>
              <li class={this.styleForMessageSender(m.entry.senderId)} key={m.timetoken}>
                <div class='messageSentDay'>{this.getDate(m.timetoken, 'historyMessage', index)}</div>
                <div class='message'>
                  <div class='name'>{this.getUserName(users, m.entry.senderId)}</div>
                  <div class='time'>{this.getTime(m.timetoken)}</div>
                  <div class='text'>{m.entry.text}</div>
                  {/* {<img width='28' height='28' alt='Sender avatar' src={this.getUserAvatarUrl(m.entry.senderId, 'smImage')}/}> */}
                </div>
              </li>
            )}
          </div>
        )}
      </div>
    );
  }
}
