import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'iac-user',
  styleUrl: 'user.scss',
  shadow: true
})
export class User {
  private parsedUser: any;
  // const {user, getUserName, loggedInUser, getUserDesignation, getUserAvatarUrl} = props;
  /**
   * User object
   */
  @Prop() user: any;

  @Prop() loggedInUser: any;


  componentWillLoad() {
    this.parsedUser = JSON.parse(this.user);
    console.log(this.parsedUser);
    /*
    this.user = {
      uuid: "123",
      name: "Demo User",
      designation: "Admin",
      avatarUrl: "https://picsum.photos/id/95/200/300",
    } */
  }

  render() {
    return (
      <ul>
        <li>
          <div class='userName'>{this.parsedUser.name} {this.parsedUser.uuid === this.loggedInUser && <div class='youSign'>(You)</div>}
          </div>
          <div class='designation'>{this.parsedUser.designation}</div>
          <img width='45' height='45' alt='Online users' src={this.parsedUser.avatarUrl}/>
        </li>
      </ul>
    );
  }
}
