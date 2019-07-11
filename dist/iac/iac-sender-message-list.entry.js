import { r as registerInstance, h } from './chunk-623a7173.js';
import { u as users } from './chunk-03c31a25.js';

class SenderMessageList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        console.log(this.sendersInfo);
        this.parsedSendersInfo = JSON.parse(this.sendersInfo);
        // console.log(this.parsedOnlineUsers);
    }
    render() {
        return (h("div", { class: 'senderMessageDialog' }, this.parsedSendersInfo.map((m, index) => h("li", { class: this.styleForMessageSender(m.senderId), key: index }, h("div", { class: 'messageSentDay' }, this.getDate(m.timetoken, 'senderMessage')), h("div", { class: 'message' }, h("div", { class: 'name' }, this.getUserName(users, m.senderId)), h("div", { class: 'time' }, this.getTime(m.timetoken)), h("div", { class: 'text' }, m.text))))));
    }
    static get style() { return ".senderMessageDialog, .historyMessageDialog {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.senderMessageDialog .senderMessage, .historyMessageDialog .senderMessage {\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n  margin-right: 50px;\n  color: #fff;\n  text-align: right;\n}\n\@media (max-width: 240px) {\n  .senderMessageDialog .senderMessage, .historyMessageDialog .senderMessage {\n    margin-right: 95px;\n  }\n}\n.senderMessageDialog .senderMessage img, .historyMessageDialog .senderMessage img {\n  left: 305px;\n}\n\@media (max-width: 440px) {\n  .senderMessageDialog .senderMessage img, .historyMessageDialog .senderMessage img {\n    left: 155px;\n  }\n}\n.senderMessageDialog .senderMessage .text, .historyMessageDialog .senderMessage .text {\n  background-color: #d32f2f;\n  text-align: left;\n}\n.senderMessageDialog .senderMessage .name, .senderMessageDialog .senderMessage .time, .historyMessageDialog .senderMessage .name, .historyMessageDialog .senderMessage .time {\n  left: unset;\n  right: 5px;\n}"; }
}

export { SenderMessageList as iac_sender_message_list };
