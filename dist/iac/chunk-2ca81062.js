function getUserAvatarUrl(users, uuid, size) {
    const user = getUser(users, uuid);
    if (user) {
        return user.profileImage[size];
    }
}
;
function getUserDesignation(users, uuid) {
    const user = getUser(users, uuid);
    if (user) {
        return user.designation;
    }
}
;
function getUserName(users, uuid) {
    const user = getUser(users, uuid);
    if (user) {
        return user.firstName + ' ' + user.lastName;
    }
}
;
function getUser(users, uuid) {
    return users.find(element => element.uuid === uuid);
}
;
function getTime(timetoken) {
    return new Date(parseInt(timetoken.substring(0, 13))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
}
;
function getWeekday(timetoken) {
    return new Date(parseInt(timetoken.substring(0, 13))).toLocaleDateString('en-US', { weekday: 'long' });
}
;
function getDate(timetoken, messageType, index = 0) {
    const messageWeekday = getWeekday(timetoken);
    const date = new Date(parseInt(timetoken.substring(0, 13))).toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    switch (messageType) {
        case 'historyMessage':
            console.log(index);
            // TODO commented until we have a state
            // if (this.state.messageSentDate[index - 1] !== messageWeekday) {
            return `${date}, ${messageWeekday}`;
        // }
        // break;
        case 'senderMessage':
            // if (this.state.lastMessageWeekday !== messageWeekday) {
            return `${date}, ${messageWeekday}`;
        // }
        // break;
        default:
            return;
    }
}
;

export { getDate as a, getUserName as b, getTime as c, getUserAvatarUrl as d, getWeekday as g };
