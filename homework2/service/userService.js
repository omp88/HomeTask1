import userStorage from '../repository/userStorage.js';
import User from "../models/User";

const storage = new userStorage();

let service = function () {

    let idNum = 0;

    this.getUser = (id) => {
        return storage.getUser(id);
    }

    this.createUser = (params) => {
        let id = 'l' + idNum++;
        let user = new User(id, params.login, params.password, params.age, params.isDeleted);
        storage.putUser(user);
        return id;
    }

    this.updateUser = (id, updateUser) => {
        let user = storage.getUser(id);
        let { login, password, age, isDeleted } = updateUser;
        if (login) user.login = login;
        if (password) user.password = password;
        if (age) user.age = age;
        if (isDeleted) user.idDeleted = isDeleted;
        storage.putUser(user);
        return user;
    }

    this.deleteUser = (id) => {
        let user = storage.getUser(id);
        if (user) {
            user.idDeleted = true;
            storage.putUser(user);
            return true;
        } else
            return false;
    }

    this.getAutoSuggestUsers = (loginSubstring, limit) => {
        let users = storage.getAll();
        users = users.filter( (user) => user.login.includes(loginSubstring));
        users.splice(limit);
        return users;
    }

};

export default service;

