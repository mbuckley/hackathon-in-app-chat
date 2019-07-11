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
  }

  render() {
    return (
      <ul>
        <li>
          <div class='userName'>{this.parsedUser.name} {this.parsedUser.uuid === this.loggedInUser && <div class='youSign'>(You)</div>}
          </div>

          <img width='45' height='45' alt='Online users' src={this.parsedUser.image}/>
        </li>
      </ul>
    );
  }
}
