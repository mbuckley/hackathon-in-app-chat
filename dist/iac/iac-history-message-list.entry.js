import { r as registerInstance, h } from './chunk-e6966618.js';
import { u as users } from './chunk-03c31a25.js';

class HistoryMessageList {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, (this.historyLoaded &&
            h("div", { class: 'historyMessageDialog' }, this.historyMessages.map((m, index) => h("li", { class: this.styleForMessageSender(m.entry.senderId), key: m.timetoken }, h("div", { class: 'messageSentDay' }, this.getDate(m.timetoken, 'historyMessage', index)), h("div", { class: 'message' }, h("div", { class: 'name' }, this.getUserName(users, m.entry.senderId)), h("div", { class: 'time' }, this.getTime(m.timetoken)), h("div", { class: 'text' }, m.entry.text))))))));
    }
    static get style() { return ".messageSentDay {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: relative;\n  width: 60vw;\n  top: -20px;\n  margin-top: 0px;\n  margin-bottom: 30px;\n  color: grey;\n  font-size: 1.2em;\n}\n.messageSentDay:empty {\n  display: none;\n}\n\n.message {\n  position: relative;\n  word-break: break-word;\n  word-wrap: break-word;\n}\n\n.name, .time {\n  left: 5px;\n}\n\n.name {\n  top: -18px;\n}\n\n.time {\n  bottom: -18px;\n}\n\n.text {\n  background-color: rgba(128, 128, 128, 0.164);\n}"; }
}

export { HistoryMessageList as iac_history_message_list };
