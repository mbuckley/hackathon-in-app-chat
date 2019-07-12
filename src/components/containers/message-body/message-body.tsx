import { Component, Prop, State, h, Listen } from '@stencil/core';

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

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent){
    if (ev.key === 'Enter'){
      console.log('enter pressed')
    }
  }

  onChange(e: any) {
    this.messageContent = e.target.value;
  };

  onSubmit(e: any) {
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
            onChange={(event: UIEvent) => this.onChange(event)}
            placeholder='Type your message here . . .'/>
          <button class='submitBtn' onClick={(event: UIEvent) => this.onSubmit(event)} type='submit'>Send</button>
        </form>
      </div>
    );
  }
}
