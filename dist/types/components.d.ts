/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  User,
} from './global/types';

export namespace Components {
  interface IacChat {
    'channelName': string;
    'historyLoaded': any;
    'historyMessages': any;
    'lastMessageWeekday': any;
    'messageSentDate': any;
    'networkErrorImg': any;
    'networkErrorStatus': any;
    'onlineUsers': any;
    'onlineUsersCount': number;
    'pubnub': any;
    'sendersInfo': Array<any>;
    'state': any;
    'userProfile': any;
    'users': any;
    'uuid': any;
  }
  interface IacHeader {
    /**
    * Total users online
    */
    'onlineUsersCount': number;
    /**
    * The user profile object
    */
    'userProfile': any;
  }
  interface IacHistoryMessageList {
    'getUserAvatarUrl': any;
    'historyLoaded': any;
    'historyMessages': any;
    'networkErrorImg': any;
    'networkErrorStatus': any;
    'styleForMessageSender': any;
    'users': any;
  }
  interface IacMessageBody {
    'channelName': any;
    'pubnub': any;
    'state': any;
    'uuid': any;
  }
  interface IacMessageList {
    /**
    * Is History Loaded?
    */
    'historyLoaded': boolean;
    /**
    * History Messages
    */
    'historyMessages': any;
    /**
    * Message Send Date
    */
    'messageSentDate': any;
    /**
    * Senders Info
    */
    'sendersInfo': any;
    /**
    * user
    */
    'user': User;
    'users': any;
    /**
    * User uuid
    */
    'uuid': string;
  }
  interface IacOnlineUsers {
    /**
    * The logged in user uuid
    */
    'loggedInUser': string;
    /**
    * Online Users array
    */
    'onlineUsers': any;
  }
  interface IacSenderMessageList {
    'getUserAvatarUrl': any;
    'sendersInfo': any;
    'styleForMessageSender': any;
    'users': any;
  }
  interface IacUser {
    'loggedInUser': any;
    /**
    * User object
    */
    'user': any;
  }
}

declare global {


  interface HTMLIacChatElement extends Components.IacChat, HTMLStencilElement {}
  var HTMLIacChatElement: {
    prototype: HTMLIacChatElement;
    new (): HTMLIacChatElement;
  };

  interface HTMLIacHeaderElement extends Components.IacHeader, HTMLStencilElement {}
  var HTMLIacHeaderElement: {
    prototype: HTMLIacHeaderElement;
    new (): HTMLIacHeaderElement;
  };

  interface HTMLIacHistoryMessageListElement extends Components.IacHistoryMessageList, HTMLStencilElement {}
  var HTMLIacHistoryMessageListElement: {
    prototype: HTMLIacHistoryMessageListElement;
    new (): HTMLIacHistoryMessageListElement;
  };

  interface HTMLIacMessageBodyElement extends Components.IacMessageBody, HTMLStencilElement {}
  var HTMLIacMessageBodyElement: {
    prototype: HTMLIacMessageBodyElement;
    new (): HTMLIacMessageBodyElement;
  };

  interface HTMLIacMessageListElement extends Components.IacMessageList, HTMLStencilElement {}
  var HTMLIacMessageListElement: {
    prototype: HTMLIacMessageListElement;
    new (): HTMLIacMessageListElement;
  };

  interface HTMLIacOnlineUsersElement extends Components.IacOnlineUsers, HTMLStencilElement {}
  var HTMLIacOnlineUsersElement: {
    prototype: HTMLIacOnlineUsersElement;
    new (): HTMLIacOnlineUsersElement;
  };

  interface HTMLIacSenderMessageListElement extends Components.IacSenderMessageList, HTMLStencilElement {}
  var HTMLIacSenderMessageListElement: {
    prototype: HTMLIacSenderMessageListElement;
    new (): HTMLIacSenderMessageListElement;
  };

  interface HTMLIacUserElement extends Components.IacUser, HTMLStencilElement {}
  var HTMLIacUserElement: {
    prototype: HTMLIacUserElement;
    new (): HTMLIacUserElement;
  };
  interface HTMLElementTagNameMap {
    'iac-chat': HTMLIacChatElement;
    'iac-header': HTMLIacHeaderElement;
    'iac-history-message-list': HTMLIacHistoryMessageListElement;
    'iac-message-body': HTMLIacMessageBodyElement;
    'iac-message-list': HTMLIacMessageListElement;
    'iac-online-users': HTMLIacOnlineUsersElement;
    'iac-sender-message-list': HTMLIacSenderMessageListElement;
    'iac-user': HTMLIacUserElement;
  }
}

declare namespace LocalJSX {
  interface IacChat extends JSXBase.HTMLAttributes<HTMLIacChatElement> {
    'channelName'?: string;
    'historyLoaded'?: any;
    'historyMessages'?: any;
    'lastMessageWeekday'?: any;
    'messageSentDate'?: any;
    'networkErrorImg'?: any;
    'networkErrorStatus'?: any;
    'onlineUsers'?: any;
    'onlineUsersCount'?: number;
    'pubnub'?: any;
    'sendersInfo'?: Array<any>;
    'state'?: any;
    'userProfile'?: any;
    'users'?: any;
    'uuid'?: any;
  }
  interface IacHeader extends JSXBase.HTMLAttributes<HTMLIacHeaderElement> {
    /**
    * Total users online
    */
    'onlineUsersCount'?: number;
    /**
    * The user profile object
    */
    'userProfile'?: any;
  }
  interface IacHistoryMessageList extends JSXBase.HTMLAttributes<HTMLIacHistoryMessageListElement> {
    'getUserAvatarUrl'?: any;
    'historyLoaded'?: any;
    'historyMessages'?: any;
    'networkErrorImg'?: any;
    'networkErrorStatus'?: any;
    'styleForMessageSender'?: any;
    'users'?: any;
  }
  interface IacMessageBody extends JSXBase.HTMLAttributes<HTMLIacMessageBodyElement> {
    'channelName'?: any;
    'pubnub'?: any;
    'state'?: any;
    'uuid'?: any;
  }
  interface IacMessageList extends JSXBase.HTMLAttributes<HTMLIacMessageListElement> {
    /**
    * Is History Loaded?
    */
    'historyLoaded'?: boolean;
    /**
    * History Messages
    */
    'historyMessages'?: any;
    /**
    * Message Send Date
    */
    'messageSentDate'?: any;
    /**
    * Senders Info
    */
    'sendersInfo'?: any;
    /**
    * user
    */
    'user'?: User;
    'users'?: any;
    /**
    * User uuid
    */
    'uuid'?: string;
  }
  interface IacOnlineUsers extends JSXBase.HTMLAttributes<HTMLIacOnlineUsersElement> {
    /**
    * The logged in user uuid
    */
    'loggedInUser'?: string;
    /**
    * Online Users array
    */
    'onlineUsers'?: any;
  }
  interface IacSenderMessageList extends JSXBase.HTMLAttributes<HTMLIacSenderMessageListElement> {
    'getUserAvatarUrl'?: any;
    'sendersInfo'?: any;
    'styleForMessageSender'?: any;
    'users'?: any;
  }
  interface IacUser extends JSXBase.HTMLAttributes<HTMLIacUserElement> {
    'loggedInUser'?: any;
    /**
    * User object
    */
    'user'?: any;
  }

  interface IntrinsicElements {
    'iac-chat': IacChat;
    'iac-header': IacHeader;
    'iac-history-message-list': IacHistoryMessageList;
    'iac-message-body': IacMessageBody;
    'iac-message-list': IacMessageList;
    'iac-online-users': IacOnlineUsers;
    'iac-sender-message-list': IacSenderMessageList;
    'iac-user': IacUser;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


