import { r as registerInstance, h } from './chunk-10a5aa2e.js';
import { a as getDate, b as getUserName, c as getTime, d as getUserAvatarUrl } from './chunk-2ca81062.js';

class MessageList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.styleForMessageSender = senderId => this.uuid === senderId ? 'senderMessage' : senderId;
    }
    render() {
        return (h("div", { class: "messageList" }, h("ul", { class: "messageDialog" }, h("h2", null, "HistoryMessageList goes here"), this.messageSentDate.length > 0 &&
            h("iac-history-message-list", { historyMessages: this.historyMessages, historyLoaded: this.historyMessages, getDate: getDate, getUserName: getUserName, getTime: getTime, getUserAvatarUrl: getUserAvatarUrl, styleForMessageSender: this.styleForMessageSender }), h("h2", null, "SenderMessageList goes here"), h("iac-sender-message-list", { "senders-info": '[{ "senderId": "forest-animal-1", "text": "hello", "timetoken": "15628726763037678" }]', styleForMessageSender: this.styleForMessageSender, getDate: getDate, getUserName: getUserName, getTime: getTime, getUserAvatarUrl: getUserAvatarUrl }))));
    }
    static get style() { return ":host {\n  grid-row: 2;\n  grid-column: 2;\n  width: 100%;\n  height: 100%;\n  border-right: 1px solid rgba(128, 128, 128, 0.164);\n  border-bottom: 1px solid rgba(128, 128, 128, 0.164);\n}\n\@media (max-width: 770px) {\n  :host {\n    grid-column: 1/3;\n  }\n}\n:host .networkErrorImg {\n  width: 80%;\n  height: 100%;\n  position: relative;\n  left: 100px;\n}\n\@media (max-width: 1024px) {\n  :host .networkErrorImg {\n    width: 100%;\n    height: 70%;\n    left: 20px;\n    bottom: -100px;\n  }\n}\n\@media (max-width: 440px) {\n  :host .networkErrorImg {\n    width: 120%;\n    left: -20px;\n  }\n}\n:host .messageDialog {\n  height: inherit;\n  position: relative;\n  margin-top: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  list-style: none;\n}\n:host .messageDialog .text {\n  max-width: 270px;\n  padding: 15px;\n  display: inline-block;\n  border-radius: 10px;\n}\n\@media (max-width: 240px) {\n  :host .messageDialog .text {\n    max-width: 80px;\n  }\n}\n:host .messageDialog .name, :host .messageDialog .time {\n  font-size: 15px;\n  color: #808080;\n  font-weight: bold;\n  position: absolute;\n}\n:host .messageDialog li {\n  width: 300px;\n  position: relative;\n  margin-top: 40px;\n  margin-left: 8px;\n}\n\@media (max-width: 440px) {\n  :host .messageDialog li {\n    width: 150px;\n  }\n}\n:host .messageDialog li .messageSentDay {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: relative;\n  width: 60vw;\n  top: -20px;\n  margin-top: 0px;\n  margin-bottom: 30px;\n  color: grey;\n  font-size: 1.2em;\n}\n\@media (max-width: 770px) {\n  :host .messageDialog li .messageSentDay {\n    width: 90vw;\n  }\n}\n\@media (max-width: 440px) {\n  :host .messageDialog li .messageSentDay {\n    width: 75vw;\n    font-size: 1.1em;\n  }\n}\n\@media (max-width: 240px) {\n  :host .messageDialog li .messageSentDay {\n    width: 100vw;\n    left: -45px;\n  }\n}\n:host .messageDialog li .messageSentDay:empty {\n  display: none;\n}\n:host .messageDialog li img {\n  position: absolute;\n  bottom: 0;\n  left: -30px;\n}\n:host .messageDialog li .message {\n  position: relative;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n:host .messageDialog li .name, :host .messageDialog li .time {\n  left: 5px;\n}\n:host .messageDialog li .name {\n  top: -18px;\n}\n:host .messageDialog li .time {\n  bottom: -18px;\n}\n:host .messageDialog li .text {\n  background-color: rgba(128, 128, 128, 0.164);\n}\n:host .messageDialog .senderMessageDialog, :host .messageDialog .historyMessageDialog {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n:host .messageDialog .senderMessageDialog .senderMessage, :host .messageDialog .historyMessageDialog .senderMessage {\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n  margin-right: 50px;\n  color: #fff;\n  text-align: right;\n}\n\@media (max-width: 240px) {\n  :host .messageDialog .senderMessageDialog .senderMessage, :host .messageDialog .historyMessageDialog .senderMessage {\n    margin-right: 95px;\n  }\n}\n:host .messageDialog .senderMessageDialog .senderMessage img, :host .messageDialog .historyMessageDialog .senderMessage img {\n  left: 305px;\n}\n\@media (max-width: 440px) {\n  :host .messageDialog .senderMessageDialog .senderMessage img, :host .messageDialog .historyMessageDialog .senderMessage img {\n    left: 155px;\n  }\n}\n:host .messageDialog .senderMessageDialog .senderMessage .text, :host .messageDialog .historyMessageDialog .senderMessage .text {\n  background-color: #d32f2f;\n  text-align: left;\n}\n:host .messageDialog .senderMessageDialog .senderMessage .name, :host .messageDialog .senderMessageDialog .senderMessage .time, :host .messageDialog .historyMessageDialog .senderMessage .name, :host .messageDialog .historyMessageDialog .senderMessage .time {\n  left: unset;\n  right: 5px;\n}"; }
}

export { MessageList as iac_message_list };
