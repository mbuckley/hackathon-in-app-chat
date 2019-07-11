/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IacChatContainer {
    'pubnub': any;
    'state': any;
    'userProfile': any;
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
}

declare global {


  interface HTMLIacChatContainerElement extends Components.IacChatContainer, HTMLStencilElement {}
  var HTMLIacChatContainerElement: {
    prototype: HTMLIacChatContainerElement;
    new (): HTMLIacChatContainerElement;
  };

  interface HTMLIacHeaderElement extends Components.IacHeader, HTMLStencilElement {}
  var HTMLIacHeaderElement: {
    prototype: HTMLIacHeaderElement;
    new (): HTMLIacHeaderElement;
  };

  interface HTMLIacOnlineUsersElement extends Components.IacOnlineUsers, HTMLStencilElement {}
  var HTMLIacOnlineUsersElement: {
    prototype: HTMLIacOnlineUsersElement;
    new (): HTMLIacOnlineUsersElement;
  };
  interface HTMLElementTagNameMap {
    'iac-chat-container': HTMLIacChatContainerElement;
    'iac-header': HTMLIacHeaderElement;
    'iac-online-users': HTMLIacOnlineUsersElement;
  }
}

declare namespace LocalJSX {
  interface IacChatContainer extends JSXBase.HTMLAttributes<HTMLIacChatContainerElement> {
    'pubnub'?: any;
    'state'?: any;
    'userProfile'?: any;
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

  interface IntrinsicElements {
    'iac-chat-container': IacChatContainer;
    'iac-header': IacHeader;
    'iac-online-users': IacOnlineUsers;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


