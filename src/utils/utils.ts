export function getUserAvatarUrl(users: any, uuid: any, size: any) {
  const user = getUser(users, uuid);

  if (user) {
    return user.profileImage[size];
  }
};

export function getUserDesignation(users: any, uuid: any) {
  const user = getUser(users, uuid);

  if (user) {
    return user.designation;
  }
};

export function getUserName(users: any, uuid: any) {
  const user = getUser(users, uuid);

  if (user) {
    return user.firstName + ' ' + user.lastName;
  }
};

export function getUser(users: any, uuid: any) {
  return users.find(element => element.uuid === uuid);
};
