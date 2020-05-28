import express from 'express';
import service from '../service/userService.js';

const router = express.Router();
const s = new service();

router.use((req, res, next) => {
  console.log('Time: ', new Date());
  next();
});

router.get('/auto', function (req, res) {
  let regex = req.query.regex;
  let limit = req.query.limit;
  let users = s.getAutoSuggestUsers(regex, limit);
  res.send(users);
});

router.get('/:id', function (req, res) {
  let id = req.params.id;
  let user = s.getUser(id);
  res.send(user);
});

router.post('/', function (req, res) {
  let id = s.createUser(req.body);
  res.send(`User is created with id: ${id}`);
});

router.put('/:id', function (req, res) {
  let id = req.params.id;
  let updatedUser = s.updateUser(id, req.body);
  res.send(updatedUser);
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  let result = s.deleteUser(id);
  if (result) {
    res.status(200).end()
  } else {
    res.status(400).end()
  }


});



export default router;
