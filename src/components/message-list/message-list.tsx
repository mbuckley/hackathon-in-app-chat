import { Component, Prop, h } from '@stencil/core';

import { User } from "../../global/types";

@Component({
  tag: 'iac-message-list',
  styleUrl: 'message-list.scss',
  shadow: true
})
export class MessageList {

  // const {uuid, sendersInfo, getTime, historyLoaded, historyMessages, getUserName,
  //   getUserAvatarUrl, networkErrorStatus, networkErrorImg, messageSentDate, getDate} = props;
  // end::MSGS-1.1[]

  /**
   * User uuid
   */
  @Prop() uuid: string;

  /**
   * Senders Info
   */
  @Prop() sendersInfo: any;

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
   * Network error status
   */
  @Prop() networkErrorStatus: any;

  /**
   * Network error image
   */
  @Prop() networkErrorImage: any;

  /**
   * Message Send Date
   */
  @Prop() messageSentDate: any;


  // private styleForMessageSender: Function;

  componentWillLoad() {
    // this.styleForMessageSender = senderId => this.uuid === senderId ? 'senderMessage' : senderId;
  }

  render() {
    return (
      <div class="messageList">
        <ul class="messageDialog">
          {this.messageSentDate.length > 0 &&
            <h2>HistoryMessageList goes here</h2>
            // <HistoryMessageList
            //   historyMessages={historyMessages}
            //   historyLoaded={historyLoaded}
            //   networkErrorImg={networkErrorImg}
            //   networkErrorStatus={networkErrorStatus}
            //   getDate={getDate}
            //   getUserName={getUserName}
            //   getTime={getTime}
            //   getUserAvatarUrl={getUserAvatarUrl}
            //   styleForMessageSender={styleForMessageSender}/>
          }
          <h2>SenderMessageList goes here</h2>
          {/* <SenderMessageList
            sendersInfo={sendersInfo}
            getDate={getDate}
            getUserName={getUserName}
            getTime={getTime}
            getUserAvatarUrl={getUserAvatarUrl}
            styleForMessageSender={styleForMessageSender}/> */}
        </ul>
    </div>
    );
  }
}
