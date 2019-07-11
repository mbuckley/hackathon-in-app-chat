import { r as registerInstance, h } from './chunk-ec7743cc.js';

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
    static get style() { return ":host {\n  grid-row: 1;\n  grid-column: 1/3;\n  width: 100%;\n  position: relative;\n  border: 1px solid rgba(128, 128, 128, 0.164);\n}\n:host .onlineUsersInfo {\n  width: 278px;\n  height: 70px;\n  position: relative;\n  font-size: 17px;\n  font-weight: bold;\n  border-right: 1px solid rgba(128, 128, 128, 0.164);\n}\n\@media (max-width: 770px) {\n  :host .onlineUsersInfo {\n    display: none;\n  }\n}\n:host .onlineUsersInfo .onlineUsersLogo {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n}\n\@media (max-width: 850px) {\n  :host .onlineUsersInfo .onlineUsersLogo {\n    top: 20px;\n  }\n}\n:host .onlineUsersInfo .onlineUsersCount {\n  position: relative;\n  top: 14px;\n  left: 70px;\n}\n\@media (max-width: 850px) {\n  :host .onlineUsersInfo .onlineUsersCount {\n    top: 20px;\n  }\n}\n:host .onlineUsersInfo span {\n  position: absolute;\n  top: 30px;\n  left: 86px;\n  color: grey;\n  font-weight: normal;\n  display: block;\n}\n\@media (max-width: 850px) {\n  :host .onlineUsersInfo span {\n    top: 40px;\n  }\n}\n:host .onlineUsersInfo .onlineIndicator {\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 38px;\n  left: 72px;\n  border-radius: 50%;\n  background-color: #0ccc0c;\n}\n\@media (max-width: 850px) {\n  :host .onlineUsersInfo .onlineIndicator {\n    top: 50px;\n  }\n}\n:host .animalForestChatLogo {\n  position: absolute;\n  top: 12px;\n  left: 290px;\n}\n\@media (max-width: 850px) {\n  :host .animalForestChatLogo {\n    top: 20px;\n  }\n}\n\@media (max-width: 770px) {\n  :host .animalForestChatLogo {\n    left: 10px;\n  }\n}\n\@media (max-width: 440px) {\n  :host .animalForestChatLogo {\n    top: 18px;\n    left: 2px;\n  }\n}\n:host h1 {\n  position: absolute;\n  font-weight: bold;\n  font-size: 17px;\n  top: 2px;\n  left: 345px;\n}\n\@media (max-width: 850px) {\n  :host h1 {\n    top: 10px;\n  }\n}\n\@media (max-width: 770px) {\n  :host h1 {\n    left: 70px;\n  }\n}\n\@media (max-width: 440px) {\n  :host h1 {\n    font-size: 1em;\n    top: 5px;\n    left: 50px;\n  }\n}\n\@media (max-width: 350px) {\n  :host h1 {\n    top: 15px;\n    width: 50px;\n    font-size: 13px;\n  }\n}\n:host h2 {\n  font-weight: normal;\n  font-size: 15px;\n  position: absolute;\n  top: 20px;\n  left: 345px;\n}\n\@media (max-width: 850px) {\n  :host h2 {\n    top: 30px;\n    line-height: 0.9em;\n    width: 150px;\n  }\n}\n\@media (max-width: 770px) {\n  :host h2 {\n    width: 550px;\n    left: 70px;\n  }\n}\n\@media (max-width: 586px) {\n  :host h2 {\n    width: 150px;\n  }\n}\n\@media (max-width: 440px) {\n  :host h2 {\n    width: 130px;\n    font-size: 13px;\n    top: 23px;\n    left: 50px;\n  }\n}\n\@media (max-width: 350px) {\n  :host h2 {\n    display: none;\n  }\n}\n:host .loggedInUser {\n  position: absolute;\n  top: 12px;\n  right: 20px;\n  color: grey;\n}\n\@media (max-width: 850px) {\n  :host .loggedInUser {\n    top: 20px;\n  }\n}\n\@media (max-width: 440px) {\n  :host .loggedInUser {\n    top: 25px;\n    right: 7px;\n    font-size: 13px;\n  }\n}\n\@media (max-width: 350px) {\n  :host .loggedInUser {\n    top: 25px;\n    height: 50px;\n    letter-spacing: -1px;\n  }\n}\n\@media (max-width: 240px) {\n  :host .loggedInUser {\n    right: 50px;\n  }\n}\n:host .loggedInUser .userWelcome .user {\n  display: block;\n  color: #000;\n  font-weight: bold;\n}\n\@media (max-width: 240px) {\n  :host .loggedInUser .userWelcome {\n    width: 55px;\n  }\n}\n:host .loggedInUser img {\n  position: absolute;\n  top: 0;\n  left: -50px;\n}\n\@media (max-width: 440px) {\n  :host .loggedInUser img {\n    top: -5px;\n  }\n}"; }
}

export { Header as iac_header };
