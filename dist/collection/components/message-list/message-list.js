import { h } from '@stencil/core';
export class MessageList {
    // private styleForMessageSender: Function;
    componentWillLoad() {
        // this.styleForMessageSender = senderId => this.uuid === senderId ? 'senderMessage' : senderId;
    }
    render() {
        return (h("div", { class: "messageList" },
            h("ul", { class: "messageDialog" },
                this.messageSentDate.length > 0 &&
                    h("h2", null, "HistoryMessageList goes here")
            // <HistoryMessageList
            //   historyMessages={historyMessages}
            //   historyLoaded={historyLoaded}
            //   networkErrorImg={networkErrorImg}
            //   networkErrorStatus={networkErrorStatus}
            //   getDate={getDate}
            //   getUserName={getUserName}
            //   getTime={getTime}
            //   getUserAvatarUrl={getUserAvatarUrl}
            //   styleForMessageSender={styleForMessageSender}/>
            ,
                h("h2", null, "SenderMessageList goes here"))));
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
                "text": "Network error status"
            },
            "attribute": "network-error-status",
            "reflect": false
        },
        "networkErrorImage": {
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
                "text": "Network error image"
            },
            "attribute": "network-error-image",
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
