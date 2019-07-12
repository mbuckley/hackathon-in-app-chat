'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-456e2a12.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["iac-chat_8.cjs",[[1,"iac-chat",{"pubnub":[8],"state":[1032],"userProfile":[8,"user-profile"],"uuid":[8],"sendersInfo":[32],"lastMessageWeekday":[32],"messageSentDate":[32],"historyLoaded":[32],"historyMessages":[32],"onlineUsers":[32],"onlineUsersCount":[32],"networkErrorStatus":[32],"networkErrorImg":[32]}],[1,"iac-message-list",{"uuid":[1],"sendersInfo":[8,"senders-info"],"historyLoaded":[4,"history-loaded"],"historyMessages":[8,"history-messages"],"user":[16],"messageSentDate":[8,"message-sent-date"]}],[1,"iac-online-users",{"loggedInUser":[1,"logged-in-user"],"onlineUsers":[1032,"online-users"]}],[1,"iac-header",{"userProfile":[8,"user-profile"],"onlineUsersCount":[2,"online-users-count"]}],[1,"iac-message-body",{"state":[8],"pubnub":[8],"uuid":[8],"channelName":[8,"channel-name"],"messageContent":[32]}],[1,"iac-history-message-list",{"historyMessages":[8,"history-messages"],"historyLoaded":[8,"history-loaded"],"networkErrorImg":[8,"network-error-img"],"networkErrorStatus":[8,"network-error-status"],"getUserName":[8,"get-user-name"],"getTime":[8,"get-time"],"getDate":[8,"get-date"],"getUserAvatarUrl":[8,"get-user-avatar-url"],"styleForMessageSender":[8,"style-for-message-sender"]}],[1,"iac-sender-message-list",{"sendersInfo":[8,"senders-info"],"getUserName":[8,"get-user-name"],"getTime":[8,"get-time"],"getDate":[8,"get-date"],"getUserAvatarUrl":[8,"get-user-avatar-url"],"styleForMessageSender":[8,"style-for-message-sender"]}],[1,"iac-user",{"user":[8],"loggedInUser":[8,"logged-in-user"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
