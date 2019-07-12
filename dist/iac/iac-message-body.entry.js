import { r as registerInstance, h } from './chunk-10a5aa2e.js';

class MessageBody {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.onChange = (e) => {
            this.messageContent = e.target.value;
        };
        this.onSubmit = (e) => {
            e.preventDefault();
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
            this.messageContent = '';
        };
    }
    componentWillLoad() {
        this.messageContent = "";
    }
    ;
    render() {
        return (h("div", { class: 'messageBody' }, h("form", { class: 'messageForm' }, h("input", { class: 'messageInput', value: this.messageContent, onChange: this.onChange, placeholder: 'Type your message here . . .' }), h("button", { class: 'submitBtn', onClick: this.onSubmit, type: 'submit' }, "Send"))));
    }
    static get style() { return ":host {\n  grid-row: 3;\n  grid-column: 2;\n  position: relative;\n}\n\@media (max-width: 770px) {\n  :host {\n    grid-column: 1/3;\n  }\n}\n:host .messageForm {\n  width: calc(100% - 24px);\n  position: absolute;\n  bottom: 0;\n  z-index: 100;\n  border-top: 1px solid #B0BEC5;\n  border-bottom: 1px solid #B0BEC5;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 12px;\n  background: #fff;\n  display: -ms-flexbox;\n  display: flex;\n}\n\@media (max-width: 440px) {\n  :host .messageForm {\n    bottom: 10px;\n  }\n}\n:host .messageForm .messageInput {\n  height: 35px;\n  border: none;\n  font-size: 15px;\n  -ms-flex: 1;\n  flex: 1;\n  margin-right: 12px;\n}\n:host .messageForm .messageInput:focus {\n  outline: none;\n}\n:host .messageForm .submitBtn {\n  position: relative;\n  display: inline-block;\n  height: 35px;\n  padding: 0px 12px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: \"Proxima Nova\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 30px;\n  color: #263238;\n  vertical-align: middle;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  text-decoration: none;\n  white-space: nowrap;\n  font-weight: 700;\n  color: white;\n  background-color: #1F9EFC;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4AB2FD), to(#1E9EFC));\n  background-image: linear-gradient(-180deg, #4AB2FD 0%, #1E9EFC 100%);\n  border-color: #0075bb;\n}\n:host .messageForm .submitBtn:hover {\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(2%, #2D9DEF), to(#007DD9));\n  background-image: linear-gradient(-180deg, #2D9DEF 2%, #007DD9 100%);\n}\n:host .messageForm .submitBtn:active {\n  background-image: none;\n  background-color: #0769B0;\n  border-color: #0769B0;\n  -webkit-box-shadow: inset 0 1px 3px 0 #004670;\n  box-shadow: inset 0 1px 3px 0 #004670;\n}\n:host .messageForm .submitBtn:focus {\n  outline: none;\n}"; }
}

export { MessageBody as iac_message_body };
