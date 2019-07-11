import { r as registerInstance, h } from './chunk-e6966618.js';

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
    static get style() { return ":host {\n  grid-row: 3;\n  grid-column: 2;\n  position: relative;\n}\n\@media (max-width: 770px) {\n  :host {\n    grid-column: 1/3;\n  }\n}\n:host .messageForm {\n  width: 100%;\n  position: absolute;\n  left: 5px;\n  bottom: 12px;\n}\n\@media (max-width: 440px) {\n  :host .messageForm {\n    bottom: 10px;\n  }\n}\n:host .messageForm .messageInput {\n  width: 82%;\n  height: 35px;\n  margin-top: 30px;\n  border: none;\n  font-size: 15px;\n}\n:host .messageForm .messageInput:focus {\n  outline: none;\n}\n\@media (max-width: 1024px) {\n  :host .messageForm .messageInput {\n    width: 75%;\n  }\n}\n\@media (max-width: 770px) {\n  :host .messageForm .messageInput {\n    width: 75%;\n    margin-left: 5px;\n  }\n}\n\@media (max-width: 500px) {\n  :host .messageForm .messageInput {\n    width: 72%;\n  }\n}\n\@media (max-width: 440px) {\n  :host .messageForm .messageInput {\n    width: 60%;\n  }\n}\n\@media (max-width: 240px) {\n  :host .messageForm .messageInput {\n    width: 47%;\n  }\n}\n:host .messageForm .emojiIcon {\n  position: relative;\n  top: 8px;\n  right: 10px;\n  cursor: pointer;\n}\n\@media (max-width: 3000px) {\n  :host .messageForm .emojiIcon {\n    right: -100px;\n  }\n}\n\@media (max-width: 2000px) {\n  :host .messageForm .emojiIcon {\n    right: -30px;\n  }\n}\n\@media (max-width: 1300px) {\n  :host .messageForm .emojiIcon {\n    right: 0;\n  }\n}\n\@media (max-width: 1024px) {\n  :host .messageForm .emojiIcon {\n    right: -2px;\n  }\n}\n\@media (max-width: 770px) {\n  :host .messageForm .emojiIcon {\n    right: -5px;\n  }\n}\n:host .messageForm .emojisWindow {\n  width: 250px;\n  height: 200px;\n  position: absolute;\n  right: 30px;\n  top: -135px;\n  background-color: white;\n}\n\@media (max-width: 1024px) {\n  :host .messageForm .emojisWindow {\n    right: 10px;\n  }\n}\n\@media (max-width: 440px) {\n  :host .messageForm .emojisWindow {\n    width: 220px;\n  }\n}\n:host .messageForm .emojisWindow .emoji {\n  margin: 1px 6px -1px 7px;\n  cursor: pointer;\n}\n\@media (max-width: 440px) {\n  :host .messageForm .emojisWindow .emoji {\n    margin: 1px 3px 0 5px;\n  }\n}\n:host .messageForm .emojisWindow .closeBtn {\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n  background-color: unset;\n  border: none;\n  color: grey;\n  font-size: 1.1em;\n  cursor: pointer;\n}\n:host .messageForm .emojisWindow .closeBtn:focus {\n  outline: none;\n}\n:host .messageForm .submitBtn {\n  width: 12%;\n  height: 30px;\n  background-color: #d32f2f;\n  border: 1px solid #d32f2f;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 35px;\n  right: 38px;\n  z-index: 1;\n  cursor: pointer;\n}\n:host .messageForm .submitBtn:focus {\n  outline: none;\n}\n\@media (max-width: 3000px) {\n  :host .messageForm .submitBtn {\n    width: 5%;\n  }\n}\n\@media (max-width: 2000px) {\n  :host .messageForm .submitBtn {\n    width: 9%;\n  }\n}\n\@media (max-width: 1024px) {\n  :host .messageForm .submitBtn {\n    width: 15%;\n    right: 22px;\n  }\n}\n\@media (max-width: 770px) {\n  :host .messageForm .submitBtn {\n    width: 12%;\n  }\n}\n\@media (max-width: 440px) {\n  :host .messageForm .submitBtn {\n    width: 18%;\n    padding-left: 1px;\n    padding-right: 2px;\n  }\n}\n\@media (max-width: 240px) {\n  :host .messageForm .submitBtn {\n    right: 60px;\n  }\n}"; }
}

export { MessageBody as iac_message_body };
