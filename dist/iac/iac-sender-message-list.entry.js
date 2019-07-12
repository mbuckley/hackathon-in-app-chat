import { r as registerInstance, h } from './chunk-10a5aa2e.js';
import { u as users } from './chunk-03c31a25.js';

class SenderMessageList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        console.log(this.sendersInfo);
    }
    render() {
        return (h("div", { class: 'senderMessageDialog' }, this.sendersInfo.map((m, index) => h("li", { class: "senderMessage", key: index }, h("div", { class: 'messageSentDay' }, this.getDate(m.timetoken, 'senderMessage')), h("div", { class: 'message' }, h("div", { class: 'name' }, this.getUserName(users, m.senderId)), h("div", { class: 'time' }, this.getTime(m.timetoken), h("div", { class: "date" }, "\u00A0on\u00A0", this.getDate(m.timetoken, 'historyMessage', index))), h("div", { class: 'text' }, m.text))))));
    }
    static get style() { return ":host .senderMessageDialog {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n:host .senderMessageDialog li {\n  position: relative;\n  margin-top: 40px;\n  margin-left: 8px;\n  width: 100%;\n}\n:host .senderMessageDialog .senderMessage {\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n  margin-right: 50px;\n  color: gray;\n  text-align: right;\n}\n:host .senderMessageDialog .senderMessage .messageSentDay {\n  display: none;\n}\n:host .senderMessageDialog .senderMessage img {\n  left: 305px;\n}\n:host .senderMessageDialog .senderMessage .message {\n  position: relative;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n:host .senderMessageDialog .name, :host .senderMessageDialog .time {\n  left: unset;\n  right: 5px;\n  font-size: 11px;\n  color: #808080;\n  font-weight: bold;\n  position: absolute;\n}\n:host .senderMessageDialog .name {\n  top: -18px;\n}\n:host .senderMessageDialog .time {\n  bottom: -18px;\n}\n:host .senderMessageDialog .text {\n  max-width: 270px;\n  padding: 15px;\n  display: inline-block;\n  border-radius: 10px;\n  background-color: #999;\n  color: #fff;\n}\n\n.time .date {\n  opacity: 0.5;\n  display: inline;\n}"; }
}

export { SenderMessageList as iac_sender_message_list };
