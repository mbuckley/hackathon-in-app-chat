import { h } from '@stencil/core';
// import animalForestChatLogo from '../../global/styles/avatars/45px/logo.png';
// import onlineUsersLogo from '../../global/styles/avatars/45px/onlineUsersLogo.png';
export class Header {
    componentWillLoad() {
        this.parsedUserProfile = this.userProfile;
    }
    render() {
        return (h("div", { class: 'header' },
            h("div", { class: 'onlineUsersInfo' },
                h("img", { class: 'onlineUsersLogo', width: '45', height: '45', alt: 'Online users logo', src: "https://picsum.photos/id/641/45/45" }),
                h("div", { class: 'onlineUsersCount' },
                    this.onlineUsersCount,
                    " members"),
                h("span", null, "Online"),
                h("span", { class: 'onlineIndicator' })),
            h("img", { class: 'animalForestChatLogo', width: '45', height: '45', alt: 'Animal Forest Chat logo', src: "https://picsum.photos/id/641/45/45" }),
            h("h1", null, "Clio Chat"),
            h("h2", null, "In-App Firm Chat"),
            h("div", { class: 'loggedInUser' },
                h("div", { class: 'userWelcome' },
                    h("span", { class: 'hello' }, "Hello, "),
                    h("span", { class: 'user' }, this.parsedUserProfile.name)),
                h("img", { width: '45', height: '45', alt: `Avatar for ${this.parsedUserProfile.name}`, src: this.parsedUserProfile.image }))));
    }
    static get is() { return "iac-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["header.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["header.css"]
    }; }
    static get properties() { return {
        "userProfile": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The user profile object"
            },
            "attribute": "user-profile",
            "reflect": false
        },
        "onlineUsersCount": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Total users online"
            },
            "attribute": "online-users-count",
            "reflect": false
        }
    }; }
}
