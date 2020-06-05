
const userStorage = function () {
  const users = new Map();

  this.getUser = (id) => {
    const user = users.get(`l${id}`);
    return user;
  };
  this.getAll = () => {
    const arr = Array.from(users.values());
    return arr;
  };

  this.putUser = (user) => {
    users.set(user.id, user);
    console.log(users);
  };
};

export default userStorage;
