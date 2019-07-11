import { a as patchEsm, b as bootstrapLazy } from './chunk-ac868a75.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["iac-chat_8",[[1,"iac-chat",{"pubnub":[8],"state":[8],"userProfile":[8,"user-profile"],"uuid":[8]}],[1,"iac-message-list",{"uuid":[1],"sendersInfo":[8,"senders-info"],"historyLoaded":[4,"history-loaded"],"historyMessages":[8,"history-messages"],"user":[16],"messageSentDate":[8,"message-sent-date"]}],[1,"iac-online-users",{"loggedInUser":[1,"logged-in-user"],"onlineUsers":[8,"online-users"]}],[1,"iac-header",{"userProfile":[8,"user-profile"],"onlineUsersCount":[2,"online-users-count"]}],[1,"iac-history-message-list",{"historyMessages":[8,"history-messages"],"historyLoaded":[8,"history-loaded"],"networkErrorImg":[8,"network-error-img"],"networkErrorStatus":[8,"network-error-status"],"getUserName":[8,"get-user-name"],"getTime":[8,"get-time"],"getDate":[8,"get-date"],"getUserAvatarUrl":[8,"get-user-avatar-url"],"styleForMessageSender":[8,"style-for-message-sender"]}],[1,"iac-message-body",{"state":[8],"pubnub":[8],"uuid":[8],"channelName":[8,"channel-name"]}],[1,"iac-sender-message-list",{"sendersInfo":[8,"senders-info"],"getUserName":[8,"get-user-name"],"getTime":[8,"get-time"],"getDate":[8,"get-date"],"getUserAvatarUrl":[8,"get-user-avatar-url"],"styleForMessageSender":[8,"style-for-message-sender"]}],[1,"iac-user",{"user":[8],"loggedInUser":[8,"logged-in-user"]}]]]], options);
  });
};

export { defineCustomElements };
