import { r as registerInstance, h } from './chunk-748e4677.js';

// import animalForestChatLogo from '../../global/styles/avatars/45px/logo.png';
// import onlineUsersLogo from '../../global/styles/avatars/45px/onlineUsersLogo.png';
class Header {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.parsedUserProfile = JSON.parse(this.userProfile);
    }
    render() {
        return (h("div", { class: 'header' }, h("div", { class: 'onlineUsersInfo' }, h("img", { class: 'onlineUsersLogo', width: '45', height: '45', alt: 'Online users logo', src: "https://picsum.photos/id/641/45/45" }), h("div", { class: 'onlineUsersCount' }, this.onlineUsersCount, " members"), h("span", null, "Online"), h("span", { class: 'onlineIndicator' })), h("img", { class: 'animalForestChatLogo', width: '45', height: '45', alt: 'Animal Forest Chat logo', src: "https://picsum.photos/id/641/45/45" }), h("h1", null, "Clio Chat"), h("h2", null, "In-App Firm Chat"), h("div", { class: 'loggedInUser' }, h("div", { class: 'userWelcome' }, h("span", { class: 'hello' }, "Hello, "), h("span", { class: 'user' }, this.parsedUserProfile.name)), h("img", { width: '45', height: '45', alt: `Avatar for ${this.parsedUserProfile.name}`, src: this.parsedUserProfile.image }))));
    }
    static get style() { return ":host {\n  grid-row: 1;\n  grid-column: 1/3;\n  width: 100%;\n  position: relative;\n  border: 1px solid rgba(128, 128, 128, 0.164);\n}\n:host .onlineUsersInfo {\n  width: 278px;\n  height: 70px;\n  position: relative;\n  font-size: 17px;\n  font-weight: bold;\n  border-right: 1px solid rgba(128, 128, 128, 0.164);\n}\n:host .onlineUsersInfo .onlineUsersLogo {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  border-radius: 50%;\n}\n:host .onlineUsersInfo .onlineUsersCount {\n  position: relative;\n  top: 14px;\n  left: 68px;\n}\n:host .onlineUsersInfo span {\n  position: absolute;\n  top: 33px;\n  left: 80px;\n  color: grey;\n  font-weight: normal;\n  display: block;\n}\n:host .onlineUsersInfo .onlineIndicator {\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 40px;\n  left: 68px;\n  border-radius: 50%;\n  background-color: #0ccc0c;\n}\n:host .animalForestChatLogo {\n  display: none !important;\n  position: absolute;\n  top: 12px;\n  left: 290px;\n}\n:host h1 {\n  position: absolute;\n  font-weight: bold;\n  font-size: 17px;\n  top: 2px;\n  left: 295px;\n}\n:host h2 {\n  font-weight: normal;\n  font-size: 15px;\n  position: absolute;\n  top: 20px;\n  left: 295px;\n}\n:host .loggedInUser {\n  display: none !important;\n  position: absolute;\n  top: 12px;\n  right: 20px;\n  color: grey;\n}\n:host .loggedInUser .userWelcome .user {\n  display: block;\n  color: #000;\n  font-weight: bold;\n}\n:host .loggedInUser img {\n  position: absolute;\n  top: 0;\n  left: -50px;\n}"; }
}

export { Header as iac_header };
