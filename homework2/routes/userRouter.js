import express from 'express';
import * as service from '../service/userService.js';
import userValidation from '../validation/userValidation.js';


const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', new Date());
  next();
});

router.get('/auto', function (req, res) {
  let regex = req.query.regex;
  let limit = req.query.limit;
  let users = service.getAutoSuggestUsers(regex, limit);
  res.send(users);
});

router.get('/:id', function (req, res) {
  let id = req.params.id;
  let user = service.getUser(id);
  res.send(user);
});

router.post('/',userValidation(), function (req, res) {
  let id = service.createUser(req.body);
  res.send(`User is created with id: ${id}`);
});

router.put('/:id',userValidation(), function (req, res) {
  let id = req.params.id;
  let updatedUser = service.updateUser(id, req.body);
  res.send(updatedUser);
});

router.delete('/:id', function (req, res) {
  let id = req.params.id;
  let result = service.deleteUser(id);
  if (result) {
    res.status(200).end()
  } else {
    res.status(400).end()
  }


});



export default router;
