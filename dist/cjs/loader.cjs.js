'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-ffcb9256.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["iac-chat-container_6.cjs",[[1,"iac-chat-container",{"pubnub":[8],"state":[8],"userProfile":[8,"user-profile"],"uuid":[8]}],[1,"iac-online-users",{"loggedInUser":[1,"logged-in-user"],"onlineUsers":[8,"online-users"]}],[1,"iac-message-list",{"uuid":[1],"sendersInfo":[8,"senders-info"],"historyLoaded":[4,"history-loaded"],"historyMessages":[8,"history-messages"],"user":[16],"networkErrorStatus":[8,"network-error-status"],"networkErrorImage":[8,"network-error-image"],"messageSentDate":[8,"message-sent-date"]}],[1,"iac-header",{"userProfile":[8,"user-profile"],"onlineUsersCount":[2,"online-users-count"]}],[1,"iac-message-body",{"state":[8],"pubnub":[8],"uuid":[8],"channelName":[8,"channel-name"]}],[1,"iac-user",{"user":[8],"loggedInUser":[8,"logged-in-user"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
