import { p as patchBrowser, b as bootstrapLazy } from './chunk-419d2468.js';
patchBrowser().then(function (resourcesUrl) {
    return bootstrapLazy([["iac-chat_8", [[1, "iac-chat", { "channelName": [1, "channel-name"], "pubnub": [8], "state": [1032], "userProfile": [8, "user-profile"], "users": [8], "uuid": [8], "sendersInfo": [1040], "lastMessageWeekday": [1032, "last-message-weekday"], "messageSentDate": [1032, "message-sent-date"], "historyLoaded": [1032, "history-loaded"], "historyMessages": [1032, "history-messages"], "onlineUsers": [1032, "online-users"], "onlineUsersCount": [1026, "online-users-count"], "networkErrorStatus": [1032, "network-error-status"], "networkErrorImg": [1032, "network-error-img"] }], [1, "iac-message-list", { "uuid": [1], "sendersInfo": [1032, "senders-info"], "historyLoaded": [4, "history-loaded"], "historyMessages": [8, "history-messages"], "user": [16], "messageSentDate": [8, "message-sent-date"] }], [1, "iac-online-users", { "loggedInUser": [1, "logged-in-user"], "onlineUsers": [1032, "online-users"] }], [1, "iac-header", { "userProfile": [8, "user-profile"], "onlineUsersCount": [2, "online-users-count"] }], [1, "iac-message-body", { "state": [8], "pubnub": [8], "uuid": [8], "channelName": [8, "channel-name"], "messageContent": [32] }, [[0, "keydown", "handleKeyDown"]]], [1, "iac-history-message-list", { "historyMessages": [8, "history-messages"], "historyLoaded": [8, "history-loaded"], "networkErrorImg": [8, "network-error-img"], "networkErrorStatus": [8, "network-error-status"], "getUserName": [8, "get-user-name"], "getTime": [8, "get-time"], "getDate": [8, "get-date"], "getUserAvatarUrl": [8, "get-user-avatar-url"], "styleForMessageSender": [8, "style-for-message-sender"] }], [1, "iac-sender-message-list", { "sendersInfo": [1032, "senders-info"], "getUserName": [8, "get-user-name"], "getTime": [8, "get-time"], "getDate": [8, "get-date"], "getUserAvatarUrl": [8, "get-user-avatar-url"], "styleForMessageSender": [8, "style-for-message-sender"] }], [1, "iac-user", { "user": [8], "loggedInUser": [8, "logged-in-user"] }]]]], { resourcesUrl: resourcesUrl });
});
