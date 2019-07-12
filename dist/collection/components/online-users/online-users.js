import { h } from '@stencil/core';
export class Header {
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
        return (h("div", { class: 'onlineUsers' },
            this.putLoggedInUserFirst(this.parsedOnlineUsers),
            h("ul", { class: 'onlineUserList' }, this.parsedOnlineUsers.map((user, _index) => h("iac-user", { user: JSON.stringify(user), loggedInUser: this.loggedInUser })))));
    }
    static get is() { return "iac-online-users"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["online-users.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["online-users.css"]
    }; }
    static get properties() { return {
        "loggedInUser": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The logged in user uuid"
            },
            "attribute": "logged-in-user",
            "reflect": false
        },
        "onlineUsers": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Online Users array"
            },
            "attribute": "online-users",
            "reflect": false
        }
    }; }
}
