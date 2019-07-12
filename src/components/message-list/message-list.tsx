import { Component, Prop, h } from '@stencil/core';

import { User } from "../../global/types";
import { getDate, getTime, getUserAvatarUrl, getUserName } from '../../utils/utils';

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

  /**
   * Message Send Date
   */
  @Prop() messageSentDate: any;

  private styleForMessageSender = senderId => this.uuid === senderId ? 'senderMessage' : senderId;

  render() {
    return (
      <div class="messageList">
        <ul class="messageDialog">
          {this.messageSentDate.length > 0 &&
            <iac-history-message-list
              historyMessages={this.historyMessages}
              historyLoaded={this.historyMessages}
              getDate={getDate}
              getUserName={getUserName}
              getTime={getTime}
              getUserAvatarUrl={getUserAvatarUrl}
              styleForMessageSender={this.styleForMessageSender}>
            </iac-history-message-list>
          }
          <iac-sender-message-list
            sendersInfo={this.sendersInfo}
            styleForMessageSender={this.styleForMessageSender}
            getDate={getDate}
            getUserName={getUserName}
            getTime={getTime}
            getUserAvatarUrl={getUserAvatarUrl}>
          </iac-sender-message-list>
        </ul>
    </div>
    );
  }
}
