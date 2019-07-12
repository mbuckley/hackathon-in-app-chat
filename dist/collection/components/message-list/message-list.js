import { h } from '@stencil/core';
import { getUserAvatarUrl } from '../../utils/utils';
export class MessageList {
    constructor() {
        this.styleForMessageSender = senderId => this.uuid === senderId ? 'senderMessage' : senderId;
    }
    render() {
        return (h("div", { class: "messageList" },
            h("ul", { class: "messageDialog" },
                this.messageSentDate.length > 0 &&
                    h("iac-history-message-list", { historyMessages: this.historyMessages, historyLoaded: this.historyMessages, getUserAvatarUrl: getUserAvatarUrl, users: this.users, styleForMessageSender: this.styleForMessageSender }),
                h("iac-sender-message-list", { sendersInfo: this.sendersInfo, styleForMessageSender: this.styleForMessageSender, users: this.users, getUserAvatarUrl: getUserAvatarUrl }))));
    }
    static get is() { return "iac-message-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["message-list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["message-list.css"]
    }; }
    static get properties() { return {
        "uuid": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "User uuid"
            },
            "attribute": "uuid",
            "reflect": false
        },
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
                "text": "Senders Info"
            },
            "attribute": "senders-info",
            "reflect": false
        },
        "historyLoaded": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Is History Loaded?"
            },
            "attribute": "history-loaded",
            "reflect": false
        },
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
                "text": "History Messages"
            },
            "attribute": "history-messages",
            "reflect": false
        },
        "user": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "User",
                "resolved": "{ uuid: string; }",
                "references": {
                    "User": {
                        "location": "import",
                        "path": "../../global/types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "user"
            }
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
        },
        "messageSentDate": {
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
                "text": "Message Send Date"
            },
            "attribute": "message-sent-date",
            "reflect": false
        }
    }; }
}
