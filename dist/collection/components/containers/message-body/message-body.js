import { h } from '@stencil/core';
export class MessageBody {
    constructor() {
        this.onChange = (e) => {
            this.state.messageContent = e.target.value;
        };
        this.onSubmit = (e) => {
            e.preventDefault();
            if (!this.state.messageContent.length) {
                return;
            }
            this.pubnub.publish({
                message: {
                    senderId: this.uuid,
                    text: this.state.messageContent,
                },
                channel: this.channelName
            });
            this.state.messageContent = '';
        };
    }
    componentWillLoad() {
        this.state = {
            messageContent: '',
        };
    }
    ;
    render() {
        return (h("div", { class: 'messageBody' },
            h("form", { class: 'messageForm' },
                h("input", { class: 'messageInput', value: this.state.messageContent, onChange: this.onChange, placeholder: 'Type your message here . . .' }),
                h("button", { class: 'submitBtn', onClick: this.onSubmit, type: 'submit' }, "Send"))));
    }
    static get is() { return "iac-message-body"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "state": {
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
            "attribute": "state",
            "reflect": false
        },
        "pubnub": {
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
            "attribute": "pubnub",
            "reflect": false
        },
        "uuid": {
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
            "attribute": "uuid",
            "reflect": false
        },
        "channelName": {
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
            "attribute": "channel-name",
            "reflect": false
        }
    }; }
}
