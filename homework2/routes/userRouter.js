import express from 'express';
import * as service from '../service/userService';
import userValidation from '../validation/userValidation';

const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', new Date());
  next();
});

router.get('/auto', (req, res) => {
  const { regex, limit } = req.query;
  const users = service.getAutoSuggestUsers(regex, limit);
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.getUser(id);
  res.send(user);
});

router.post('/', userValidation(), (req, res) => {
  const id = service.createUser(req.body);
  res.send(`User is created with id: ${id}`);
});

router.put('/:id', userValidation(), (req, res) => {
  const { id } = req.params;
  const updatedUser = service.updateUser(id, req.body);
  res.send(updatedUser);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = service.deleteUser(id);
  if (result) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
});

export default router;
