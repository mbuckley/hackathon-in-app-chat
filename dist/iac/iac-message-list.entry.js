import { r as registerInstance, h } from './chunk-623a7173.js';

class MessageList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    // private styleForMessageSender: Function;
    componentWillLoad() {
        // this.styleForMessageSender = senderId => this.uuid === senderId ? 'senderMessage' : senderId;
    }
    render() {
        return (h("div", { class: "messageList" }, h("ul", { class: "messageDialog" }, this.messageSentDate.length > 0 &&
            h("h2", null, "HistoryMessageList goes here")
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
        , h("h2", null, "SenderMessageList goes here"))));
    }
    static get style() { return ".messageList {\n  width: 100%;\n  height: 100%;\n  border-right: 1px solid rgba(128, 128, 128, 0.164);\n  border-bottom: 1px solid rgba(128, 128, 128, 0.164);\n}\n.messageList .networkErrorImg {\n  width: 80%;\n  height: 100%;\n  position: relative;\n  left: 100px;\n}\n\@media (max-width: 1024px) {\n  .messageList .networkErrorImg {\n    width: 100%;\n    height: 70%;\n    left: 20px;\n    bottom: -100px;\n  }\n}\n\@media (max-width: 440px) {\n  .messageList .networkErrorImg {\n    width: 120%;\n    left: -20px;\n  }\n}\n.messageList .messageDialog {\n  height: inherit;\n  position: relative;\n  margin-top: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  list-style: none;\n}\n.messageList .messageDialog .text {\n  max-width: 270px;\n  padding: 15px;\n  display: inline-block;\n  border-radius: 10px;\n}\n\@media (max-width: 240px) {\n  .messageList .messageDialog .text {\n    max-width: 80px;\n  }\n}\n.messageList .messageDialog .name, .messageList .messageDialog .time {\n  font-size: 15px;\n  color: #808080;\n  font-weight: bold;\n  position: absolute;\n}\n.messageList .messageDialog li {\n  width: 300px;\n  position: relative;\n  margin-top: 40px;\n  margin-left: 8px;\n}\n\@media (max-width: 440px) {\n  .messageList .messageDialog li {\n    width: 150px;\n  }\n}\n.messageList .messageDialog li .messageSentDay {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: relative;\n  width: 60vw;\n  top: -20px;\n  margin-top: 0px;\n  margin-bottom: 30px;\n  color: grey;\n  font-size: 1.2em;\n}\n\@media (max-width: 770px) {\n  .messageList .messageDialog li .messageSentDay {\n    width: 90vw;\n  }\n}\n\@media (max-width: 440px) {\n  .messageList .messageDialog li .messageSentDay {\n    width: 75vw;\n    font-size: 1.1em;\n  }\n}\n\@media (max-width: 240px) {\n  .messageList .messageDialog li .messageSentDay {\n    width: 100vw;\n    left: -45px;\n  }\n}\n.messageList .messageDialog li .messageSentDay:empty {\n  display: none;\n}\n.messageList .messageDialog li img {\n  position: absolute;\n  bottom: 0;\n  left: -30px;\n}\n.messageList .messageDialog li .message {\n  position: relative;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n.messageList .messageDialog li .name, .messageList .messageDialog li .time {\n  left: 5px;\n}\n.messageList .messageDialog li .name {\n  top: -18px;\n}\n.messageList .messageDialog li .time {\n  bottom: -18px;\n}\n.messageList .messageDialog li .text {\n  background-color: rgba(128, 128, 128, 0.164);\n}\n.messageList .messageDialog .senderMessageDialog, .messageList .messageDialog .historyMessageDialog {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.messageList .messageDialog .senderMessageDialog .senderMessage, .messageList .messageDialog .historyMessageDialog .senderMessage {\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n  margin-right: 50px;\n  color: #fff;\n  text-align: right;\n}\n\@media (max-width: 240px) {\n  .messageList .messageDialog .senderMessageDialog .senderMessage, .messageList .messageDialog .historyMessageDialog .senderMessage {\n    margin-right: 95px;\n  }\n}\n.messageList .messageDialog .senderMessageDialog .senderMessage img, .messageList .messageDialog .historyMessageDialog .senderMessage img {\n  left: 305px;\n}\n\@media (max-width: 440px) {\n  .messageList .messageDialog .senderMessageDialog .senderMessage img, .messageList .messageDialog .historyMessageDialog .senderMessage img {\n    left: 155px;\n  }\n}\n.messageList .messageDialog .senderMessageDialog .senderMessage .text, .messageList .messageDialog .historyMessageDialog .senderMessage .text {\n  background-color: #d32f2f;\n  text-align: left;\n}\n.messageList .messageDialog .senderMessageDialog .senderMessage .name, .messageList .messageDialog .senderMessageDialog .senderMessage .time, .messageList .messageDialog .historyMessageDialog .senderMessage .name, .messageList .messageDialog .historyMessageDialog .senderMessage .time {\n  left: unset;\n  right: 5px;\n}"; }
}

export { MessageList as iac_message_list };
