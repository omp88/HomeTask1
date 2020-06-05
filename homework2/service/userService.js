import UserStorage from '../repository/userStorage';
import User from '../models/User';

const storage = new UserStorage();


let idNum = 0;

export function getUser(id) {
  return storage.getUser(id);
}

export function createUser(params) {
  const id = `l${idNum++}`;
  const user = new User(id, params.login, params.password, params.age, params.isDeleted);
  storage.putUser(user);
  return id;
}

export function updateUser(id, updateUser) {
  const user = storage.getUser(id);
  const {
    login, password, age, isDeleted,
  } = updateUser;
  if (login) user.login = login;
  if (password) user.password = password;
  if (age) user.age = age;
  if (isDeleted) user.idDeleted = isDeleted;
  storage.putUser(user);
  return user;
}

export function deleteUser(id) {
  const user = storage.getUser(id);
  if (user) {
    user.idDeleted = true;
    storage.putUser(user);
    return true;
  }
  return false;
}

export function getAutoSuggestUsers(loginSubstring, limit) {
  let users = storage.getAll();
  users = users.filter((user) => user.login.includes(loginSubstring));
  users.splice(limit);
  return users;
}
