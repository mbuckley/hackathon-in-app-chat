import { h } from '@stencil/core';
import users from "../../config/users.js";
export class SenderMessageList {
    componentWillLoad() {
        console.log(this.sendersInfo);
        this.parsedSendersInfo = JSON.parse(this.sendersInfo);
        // console.log(this.parsedOnlineUsers);
    }
    render() {
        return (h("div", { class: 'senderMessageDialog' }, this.parsedSendersInfo.map((m, index) => h("li", { class: this.styleForMessageSender(m.senderId), key: index },
            h("div", { class: 'messageSentDay' }, this.getDate(m.timetoken, 'senderMessage')),
            h("div", { class: 'message' },
                h("div", { class: 'name' }, this.getUserName(users, m.senderId)),
                h("div", { class: 'time' }, this.getTime(m.timetoken)),
                h("div", { class: 'text' }, m.text))))));
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
            "attribute": "senders-info",
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
