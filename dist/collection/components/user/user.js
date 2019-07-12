import { h } from '@stencil/core';
export class User {
    componentWillLoad() {
        this.parsedUser = JSON.parse(this.user);
    }
    render() {
        return (h("li", null,
            h("img", { width: '45', height: '45', alt: 'Online users', src: this.parsedUser.image }),
            h("div", { class: 'userName' },
                this.parsedUser.name,
                " ",
                this.parsedUser.uuid === this.loggedInUser && h("div", { class: 'youSign' }, "(You)"))));
    }
    static get is() { return "iac-user"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["user.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["user.css"]
    }; }
    static get properties() { return {
        "user": {
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
                "text": "User object"
            },
            "attribute": "user",
            "reflect": false
        },
        "loggedInUser": {
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
                "text": ""
            },
            "attribute": "logged-in-user",
            "reflect": false
        }
    }; }
}
