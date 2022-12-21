const { Router } = require('express')
const LikeController = require('../Controllers/LikeController')
const LoginController = require('../Controllers/LoginController')
const PostController = require('../Controllers/PostController')
const ProfileController = require('../Controllers/ProfileController')
const UserController = require('../Controllers/UserController')

const router = Router()

router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)

router.post('/login', LoginController.login)
// Fazer logout

router.post('/posts/:post_id/like', LikeController.likePost)
router.post('/posts/:post_id/dislike', LikeController.dislikePost)

router.post('/posts', PostController.createPost)

router.get('/posts', PostController.listAllPosts)

router.delete('/post/:post_id', PostController.deletePost)

router.put('/post/:post_id', PostController.editPost)

router.get('/user/:user_id', ProfileController.getProfile)

module.exports = router