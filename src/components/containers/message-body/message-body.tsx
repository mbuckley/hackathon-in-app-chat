import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'iac-message-body',
  styleUrl: 'message-body.scss',
  shadow: true
})
export class MessageBody {
  @Prop() state: any;
  @Prop() pubnub: any;
  @Prop() uuid: any;
  @Prop() channelName: any;

  @State() messageContent;

  componentWillLoad() {
    this.messageContent = "";
  };

  onChange = (e: any) => {
    this.messageContent = e.target.value;
  };

  onSubmit = (e: any) => {
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

  render() {
    return (
      <div class='messageBody'>
        <form class='messageForm'>
          <input
            class='messageInput'
            value={this.messageContent}
            onChange={this.onChange}
            placeholder='Type your message here . . .'/>
          <button class='submitBtn' onClick={this.onSubmit} type='submit'>Send</button>
        </form>
      </div>
    );
  }
}
