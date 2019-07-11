import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'iac-message-body',
  shadow: true
})
export class MessageBody {
  @Prop() state: any;
  @Prop() pubnub: any;
  @Prop() uuid: any;
  @Prop() channelName: any;

  componentWillLoad() {
    this.state = {
      messageContent: '',
    }
  };

  onChange = (e: any) => {
    this.state.messageContent = e.target.value;
  };

  onSubmit = (e: any) => {
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

  render() {
    return (
      <div class='messageBody'>
        <form class='messageForm'>
          <input
            class='messageInput'
            value={this.state.messageContent}
            onChange={this.onChange}
            placeholder='Type your message here . . .'/>
          <button class='submitBtn' onClick={this.onSubmit} type='submit'>Send</button>
        </form>
      </div>
    );
  }
}
