import { Component, Prop, h } from '@stencil/core';

import { User } from "../../global/types";

@Component({
  tag: 'iac-message-list',
  styleUrl: 'message-list.scss',
  shadow: true
})
export class MessageList {
  /**
   * User uuid
   */
  @Prop() uuid: string;

  /**
   * Senders Info
   */
  @Prop({ mutable: true }) sendersInfo: any;

  /**
   * Is History Loaded?
   */
  @Prop() historyLoaded: boolean;

  /**
   * History Messages
   */
  @Prop() historyMessages: any;

  /**
   * user
   */
  @Prop() user: User;

  @Prop() users: any;

  /**
   * Message Send Date
   */
  @Prop() messageSentDate: any;

  render() {
    return (
      <div class="messageList">
        <ul class="messageDialog">
          {this.messageSentDate.length > 0 &&
            <iac-history-message-list
              historyMessages={this.historyMessages}
              historyLoaded={this.historyMessages}
              users={this.users}>
            </iac-history-message-list>
          }
          <iac-sender-message-list
            sendersInfo={this.sendersInfo}
            users={this.users}>
          </iac-sender-message-list>
        </ul>
    </div>
    );
  }
}
