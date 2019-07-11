import { h } from '@stencil/core';
import users from "../../../config/users.js";
export class HistoryMessageList {
    componentWillLoad() {
        console.log(this.historyMessages);
        this.parsedHistoryMessages = JSON.parse(this.historyMessages);
        console.log(this.parsedHistoryMessages);
        // console.log(this.parsedOnlineUsers);
    }
    render() {
        return (h("div", null, (this.historyLoaded &&
            h("div", { class: 'historyMessageDialog' }, this.parsedHistoryMessages.map((m, index) => h("li", { class: this.styleForMessageSender(m.entry.senderId), key: m.timetoken },
                h("div", { class: 'messageSentDay' }, this.getDate(m.timetoken, 'historyMessage', index)),
                h("div", { class: 'message' },
                    h("div", { class: 'name' }, this.getUserName(users, m.entry.senderId)),
                    h("div", { class: 'time' }, this.getTime(m.timetoken)),
                    h("div", { class: 'text' }, m.entry.text))))))));
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
        "getUserName": {
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
            "attribute": "get-user-name",
            "reflect": false
        },
        "getTime": {
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
            "attribute": "get-time",
            "reflect": false
        },
        "getDate": {
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
            "attribute": "get-date",
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
        }
    }; }
}
