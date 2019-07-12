import { r as registerInstance, h } from './chunk-10a5aa2e.js';

class User {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.parsedUser = JSON.parse(this.user);
    }
    render() {
        return (h("li", null, h("div", { class: 'userName' }, this.parsedUser.name, " ", this.parsedUser.uuid === this.loggedInUser && h("div", { class: 'youSign' }, "(You)")), h("img", { width: '45', height: '45', alt: 'Online users', src: this.parsedUser.image })));
    }
    static get style() { return "img {\n  border-radius: 50%;\n  height: 45px;\n  width: 45px;\n}\n\nli {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 12px;\n}\n\n.userName {\n  position: relative;\n  display: inline;\n  top: 0;\n  left: 100px;\n  font-size: 0.9em;\n  font-weight: bold;\n  line-height: 45px;\n}\n.userName .youSign {\n  position: absolute;\n  top: 0;\n  right: -40px;\n  font-weight: bold;\n}\n\n.designation {\n  position: absolute;\n  top: 20px;\n  left: 60px;\n  font-size: 0.9em;\n  color: grey;\n}"; }
}

export { User as iac_user };
