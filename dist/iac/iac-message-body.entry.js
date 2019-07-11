import { r as registerInstance, h } from './chunk-623a7173.js';

class MessageBody {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { class: 'messageBody' }, h("form", { class: 'messageForm' }, h("input", { class: 'messageInput', value: this.state.messageContent, onChange: this.onChange, placeholder: 'Type your message here . . .' }), h("button", { class: 'submitBtn', onClick: this.onSubmit, type: 'submit' }, "Send"))));
    }
}

export { MessageBody as iac_message_body };
