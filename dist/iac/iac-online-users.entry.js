import { r as registerInstance, h } from './chunk-623a7173.js';

class Header {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    putLoggedInUserFirst(arr) {
        if (arr.length) {
            const loggedInUserIndex = arr.map(elem => elem.uuid).indexOf(this.loggedInUser);
            if (loggedInUserIndex !== -1) {
                [arr[0], arr[loggedInUserIndex]] = [arr[loggedInUserIndex], arr[0]];
            }
        }
    }
    ;
    componentWillLoad() {
        this.parsedOnlineUsers = JSON.parse(this.onlineUsers);
        console.log(this.parsedOnlineUsers);
    }
    render() {
        return (h("div", { class: 'onlineUsers' }, this.putLoggedInUserFirst(this.parsedOnlineUsers), h("ul", { class: 'onlineUserList' }, this.parsedOnlineUsers.map((user, _index) => h("iac-user", { user: JSON.stringify(user), loggedInUser: this.loggedInUser })))));
    }
    static get style() { return ":host {\n  grid-row: 2/4;\n  grid-column: 1;\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  border: 1px solid rgba(128, 128, 128, 0.164);\n  border-top: unset;\n}\n\@media (max-width: 770px) {\n  :host {\n    display: none;\n  }\n}\n:host .onlineUserList {\n  list-style: none;\n  position: relative;\n  left: -30px;\n}\n:host .onlineUserList li {\n  margin-bottom: 40px;\n  position: relative;\n}\n:host .onlineUserList li img {\n  position: absolute;\n  left: 0;\n}\n:host .onlineUserList li .userName {\n  position: relative;\n  display: inline;\n  top: 0;\n  left: 60px;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n:host .onlineUserList li .userName .youSign {\n  position: absolute;\n  top: 0;\n  right: -40px;\n  font-weight: bold;\n}\n:host .onlineUserList li .designation {\n  position: absolute;\n  top: 20px;\n  left: 60px;\n  font-size: 0.9em;\n  color: grey;\n}"; }
}

export { Header as iac_online_users };
