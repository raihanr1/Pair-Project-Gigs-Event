const express = require("express")
const router = express.Router()
const { middleware, isAdmin } = require("../helper/helper")
const Controller = require("../controllers/homeController")

router.get('/', Controller.homePage)

router.get('/category/add', Controller.addNewCategory)
router.post('/category/add', Controller.postNewCategory)

router.get('/guest-star/add', Controller.addGuestStar)
router.post('/guest-star/add', Controller.postAddGuestStar)

router.get('/concert/add', Controller.addNewConcert)
router.post('/concert/add', Controller.postNewConcert)

router.get('/list/concert', Controller.showListConcert)

router.get('/song/add', Controller.addSongs)
router.post('/song/add', Controller.postAddSongs)


router.get('/category/:categoryId', Controller.seeDetailListCategory)




module.exports = router