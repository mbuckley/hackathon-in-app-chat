import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'iac-online-users',
  styleUrl: 'online-users.scss',
  shadow: true
})
export class Header {
  private parsedOnlineUsers: any;

  /**
   * The logged in user uuid
   */
  @Prop() loggedInUser: string;

  /**
   * Online Users array
   */
  @Prop() onlineUsers: any;

  putLoggedInUserFirst(arr) {
    if(arr.length) {
      const loggedInUserIndex = arr.map(elem => elem.uuid).indexOf(this.loggedInUser);

      if(loggedInUserIndex !== -1) {
        [arr[0], arr[loggedInUserIndex]] = [arr[loggedInUserIndex], arr[0]];
      }
    }
  };

  componentWillLoad() {
    this.parsedOnlineUsers = JSON.parse(this.onlineUsers);
  }

  render() {
    return (
      <div class='onlineUsers'>
        {this.putLoggedInUserFirst(this.parsedOnlineUsers)}
        <ul class='onlineUserList'>
          {this.parsedOnlineUsers.map((user, _index) =>
            <p>Uncomment user component below {user.uuid}</p>
            // <User
            //   key={index}
            //   user={user}
            //   getUserName={getUserName}
            //   loggedInUser={loggedInUser}
            //   getUserDesignation={getUserDesignation}
            //   getUserAvatarUrl={getUserAvatarUrl}/>
          )}
        </ul>
      </div>
    );
  }
}
