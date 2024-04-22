const router = require('express').Router()

const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controller/userController')

router.route('/').get(getAllUsers).post(createUser)

router.route('/:id').get(getUser).delete(deleteUser).put(updateUser)


module.exports = router