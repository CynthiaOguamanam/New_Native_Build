const express = require('express');
const router = express.Router();

const { getAllUser, deleteUser, getUser, SignInUser } = require ("../Controller/userController");

router
    .route('/user')
    .get(getAllUser)
    .post(SignInUser)
    

router 
    .route('/:id')
    .get(getUser)
    .delete(deleteUser)


module.exports = router;