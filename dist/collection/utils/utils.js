export function getUserAvatarUrl(users, uuid, size) {
    const user = getUser(users, uuid);
    if (user) {
        return user.profileImage[size];
    }
}
;
export function getUserDesignation(users, uuid) {
    const user = getUser(users, uuid);
    if (user) {
        return user.designation;
    }
}
;
export function getUserName(users, uuid) {
    const user = getUser(users, uuid);
    if (user) {
        return user.firstName + ' ' + user.lastName;
    }
}
;
export function getUser(users, uuid) {
    return users.find(element => element.uuid === uuid);
}
;
