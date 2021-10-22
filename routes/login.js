const express = require("express")
const router = express.Router()
const routerHome = require("./home")
const { middleware } = require("../helper/helper")
const userController = require("../controllers/userController")
const profileController = require("../controllers/profileController")

router.get('/register', userController.registerForm)
router.post('/register', userController.postRegisterForm)

router.get('/login', userController.loginForm)
router.post('/login', userController.postLogin)
 
// router.use(middleware)

router.get('/profile', middleware,profileController.showProfile)

router.get('/profile/add', middleware,profileController.addProfile)
router.post('/profile/add', middleware,profileController.postAddProfile)

router.get('/profile/edit', middleware,profileController.editProfile)
router.post('/profile/edit', middleware,profileController.postEditProfile)


router.get('/logout', middleware,userController.logOut)

module.exports = router