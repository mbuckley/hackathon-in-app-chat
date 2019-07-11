import { Component, Prop, h } from '@stencil/core';
// import animalForestChatLogo from '../../global/styles/avatars/45px/logo.png';
// import onlineUsersLogo from '../../global/styles/avatars/45px/onlineUsersLogo.png';

@Component({
  tag: 'iac-header',
  styleUrl: 'header.scss',
  shadow: true
})
export class Header {
  private parsedUserProfile: any;
  /**
   * The user profile object
   */
  @Prop() userProfile: any;

  /**
   * Total users online
   */
  @Prop() onlineUsersCount: number;

  componentWillLoad() {
    this.parsedUserProfile = this.userProfile;
  }

  render() {
    return (
      <div class='header'>
        <div class='onlineUsersInfo'>
          <img class='onlineUsersLogo' width='45' height='45' alt='Online users logo' src="https://picsum.photos/id/641/45/45"/>
          <div class='onlineUsersCount'>{this.onlineUsersCount} members</div>
          <span>Online</span>
          <span class='onlineIndicator'/>
        </div>
        <img class='animalForestChatLogo' width='45' height='45' alt='Animal Forest Chat logo' src="https://picsum.photos/id/641/45/45"/>
        <h1>Clio Chat</h1>
        <h2>In-App Firm Chat</h2>
        <div class='loggedInUser'>
          <div class='userWelcome'>
            <span class='hello'>Hello, </span>
            <span class='user'>{this.parsedUserProfile.name}</span>
          </div>
          <img width='45' height='45' alt={`Avatar for ${this.parsedUserProfile.name}`} src={this.parsedUserProfile.image}/>
        </div>
      </div>
    );
  }
}
