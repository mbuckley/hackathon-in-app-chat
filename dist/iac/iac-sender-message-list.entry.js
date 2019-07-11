import { r as registerInstance, h } from './chunk-10a5aa2e.js';
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
        return (h("div", { class: 'senderMessageDialog' }, this.parsedSendersInfo.map((m, index) => h("li", { class: "senderMessage", key: index }, h("div", { class: 'messageSentDay' }, this.getDate(m.timetoken, 'senderMessage')), h("div", { class: 'message' }, h("div", { class: 'name' }, this.getUserName(users, m.senderId)), h("div", { class: 'time' }, this.getTime(m.timetoken)), h("div", { class: 'text' }, m.text))))));
    }
    static get style() { return ":host .senderMessageDialog {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n:host .senderMessageDialog li {\n  width: 300px;\n  position: relative;\n  margin-top: 40px;\n  margin-left: 8px;\n}\n:host .senderMessageDialog .senderMessage {\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n  margin-right: 50px;\n  color: gray;\n  text-align: right;\n}\n\@media (max-width: 240px) {\n  :host .senderMessageDialog .senderMessage {\n    margin-right: 95px;\n  }\n}\n:host .senderMessageDialog .senderMessage img {\n  left: 305px;\n}\n\@media (max-width: 440px) {\n  :host .senderMessageDialog .senderMessage img {\n    left: 155px;\n  }\n}\n:host .senderMessageDialog .senderMessage .message {\n  position: relative;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n:host .senderMessageDialog .name, :host .senderMessageDialog .time {\n  left: unset;\n  right: 5px;\n  font-size: 15px;\n  color: #808080;\n  font-weight: bold;\n  position: absolute;\n}\n:host .senderMessageDialog .text {\n  max-width: 270px;\n  padding: 15px;\n  display: inline-block;\n  border-radius: 10px;\n  background-color: #d32f2f;\n  color: #fff;\n}\n\@media (max-width: 240px) {\n  :host .senderMessageDialog .text {\n    max-width: 80px;\n  }\n}"; }
}

export { SenderMessageList as iac_sender_message_list };
