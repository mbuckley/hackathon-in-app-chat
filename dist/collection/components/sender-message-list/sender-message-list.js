import { h } from '@stencil/core';
import { getUserName, getTime, getDate, styleForMessageSender, getUserAvatarUrl } from "../../utils/utils";
export class SenderMessageList {
    componentWillLoad() {
        console.log(this.sendersInfo);
    }
    render() {
        return (h("div", { class: 'senderMessageDialog' }, this.sendersInfo.map((m, index) => h("li", { class: styleForMessageSender(m.senderId, m.senderId), key: index },
            h("div", { class: 'messageSentDay' }, getDate(m.timetoken, 'senderMessage')),
            h("div", { class: 'message' },
                h("div", { class: 'name' }, getUserName(this.users, m.senderId)),
                h("div", { class: 'time' },
                    getTime(m.timetoken),
                    h("div", { class: "date" },
                        "\u00A0on\u00A0",
                        getDate(m.timetoken, 'historyMessage', index))),
                h("div", { class: 'text' }, m.text),
                h("img", { width: '28', height: '28', alt: 'Sender avatar', src: getUserAvatarUrl(this.users, m.senderId) }))))));
    }
    static get is() { return "iac-sender-message-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["sender-message-list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["sender-message-list.css"]
    }; }
    static get properties() { return {
        "sendersInfo": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "senders-info",
            "reflect": false
        },
        "users": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "users",
            "reflect": false
        }
    }; }
}
