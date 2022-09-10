const router = require('express').Router();


const {
    getAllUsers, 
    getUserById, 
    createUser,
    updateUser, 
    deleteUser, 
    addFriend, 
    deleteFriend
} = require('../../controllers/users');

//user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

//by user id

router
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser)

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router; 