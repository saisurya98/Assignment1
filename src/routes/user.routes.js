const express = require('express');

// Create a mini Express app that can handle routes separately from the main app object.
const router = express.Router();

//  .. go to parent directory so that we can acess user.controller
const userController = require('../controllers/user.controller');

// GET /users - return all users
router.get('/', userController.getAllUsers);
// POST /users - create a new user
router.post('/', userController.createUser);

// GET /users/:id - return single user by ID
router.get('/:id', userController.getUserById);

// PUT /users/:id - update a user
router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);


module.exports = router;
