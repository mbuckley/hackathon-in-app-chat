import { h } from '@stencil/core';
import { getUserName, getTime, getDate } from "../../../utils/utils";
export class HistoryMessageList {
    render() {
        return (h("div", null, (this.historyLoaded &&
            h("div", { class: 'historyMessageDialog' }, this.historyMessages.map((m, index) => h("li", { class: this.styleForMessageSender(m.entry.senderId), key: m.timetoken },
                h("div", { class: 'message' },
                    h("div", { class: 'name' }, getUserName(this.users, m.entry.senderId)),
                    h("div", { class: 'time' },
                        getTime(m.timetoken),
                        h("div", { class: "date" },
                            "\u00A0on\u00A0",
                            getDate(m.timetoken, 'historyMessage', index))),
                    h("div", { class: 'text' }, m.entry.text),
                    h("img", { width: '28', height: '28', alt: 'Sender avatar', src: this.getUserAvatarUrl(this.users, m.entry.senderId) }))))))));
    }
    static get is() { return "iac-history-message-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["history-message-list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["history-message-list.css"]
    }; }
    static get properties() { return {
        "historyMessages": {
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
            "attribute": "history-messages",
            "reflect": false
        },
        "historyLoaded": {
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
            "attribute": "history-loaded",
            "reflect": false
        },
        "networkErrorImg": {
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
            "attribute": "network-error-img",
            "reflect": false
        },
        "networkErrorStatus": {
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
            "attribute": "network-error-status",
            "reflect": false
        },
        "getUserAvatarUrl": {
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
            "attribute": "get-user-avatar-url",
            "reflect": false
        },
        "styleForMessageSender": {
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
            "attribute": "style-for-message-sender",
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
