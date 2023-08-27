const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/users', userController.getAllUser);

router.get('/:id/edit', userController.edit);

router.put('/:id', userController.update);

router.delete('/:id', userController.destroy);

router.post('/store', userController.store);
module.exports = router;
