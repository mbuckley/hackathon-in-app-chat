import { h } from '@stencil/core';
export class MessageBody {
    componentWillLoad() {
        this.messageContent = "";
    }
    ;
    handleKeyDown(ev) {
        if (ev.key === 'Enter') {
            this.sendMessage();
        }
    }
    onChange(e) {
        this.messageContent = e.target.value;
    }
    ;
    onSubmit(e) {
        e.preventDefault();
        this.sendMessage();
    }
    ;
    sendMessage() {
        if (!this.messageContent.length) {
            return;
        }
        this.pubnub.publish({
            message: {
                senderId: this.uuid,
                text: this.messageContent,
            },
            channel: this.channelName
        });
        setTimeout(() => {
            this.messageContent = '';
        }, 0);
    }
    render() {
        return (h("div", { class: 'messageBody' },
            h("form", { class: 'messageForm' },
                h("input", { class: 'messageInput', value: this.messageContent, onChange: (event) => this.onChange(event), placeholder: 'Type your message here . . .' }),
                h("button", { class: 'submitBtn', onClick: (event) => this.onSubmit(event), type: 'submit' }, "Send"))));
    }
    static get is() { return "iac-message-body"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["message-body.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["message-body.css"]
    }; }
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
    static get states() { return {
        "messageContent": {}
    }; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
