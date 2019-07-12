import { r as registerInstance, h } from './chunk-813e9014.js';
import { a as getUserName, c as getTime, d as getDate } from './chunk-5d71aab3.js';

class HistoryMessageList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, (this.historyLoaded &&
            h("div", { class: 'historyMessageDialog' }, this.historyMessages.map((m, index) => h("li", { class: this.styleForMessageSender(m.entry.senderId), key: m.timetoken }, h("div", { class: 'message' }, h("div", { class: 'name' }, getUserName(this.users, m.entry.senderId)), h("div", { class: 'time' }, getTime(m.timetoken), h("div", { class: "date" }, "\u00A0on\u00A0", getDate(m.timetoken, 'historyMessage', index))), h("div", { class: 'text' }, m.entry.text))))))));
    }
    static get style() { return ".historyMessageDialog {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.historyMessageDialog li {\n  position: relative;\n  margin-top: 40px;\n  margin-left: 8px;\n  width: 100%;\n  margin-bottom: 18px;\n}\n.historyMessageDialog li .message {\n  position: relative;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n.historyMessageDialog li .message .name, .historyMessageDialog li .message .time {\n  right: 5px;\n  font-size: 12px;\n  color: #808080;\n  font-weight: bold;\n  position: absolute;\n}\n.historyMessageDialog li .message .text {\n  max-width: 270px;\n  padding: 15px;\n  display: inline-block;\n  border-radius: 10px;\n  background-color: #1F9EFC;\n  color: #fff;\n}\n\n.messageSentDay {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  top: -20px;\n  margin-top: 0px;\n  margin-bottom: 30px;\n  color: grey;\n  font-size: 13px;\n}\n.messageSentDay:empty {\n  display: none;\n}\n\n.name, .time {\n  left: 5px;\n}\n\n.name {\n  top: -18px;\n}\n\n.time {\n  width: 100%;\n  bottom: -18px;\n}\n.time .date {\n  opacity: 0.5;\n  display: inline;\n}\n\n.text {\n  background-color: rgba(128, 128, 128, 0.164);\n}"; }
}

export { HistoryMessageList as iac_history_message_list };
