const express = require("express")
const router = express.Router()
const { middleware, isAdmin } = require("../helper/helper")
const Controller = require("../controllers/homeController")

router.get('/',middleware, Controller.homePage)

router.get('/category/add', isAdmin,Controller.addNewCategory)
router.post('/category/add', isAdmin,Controller.postNewCategory)

router.get('/guest-star/add', isAdmin,Controller.addGuestStar)
router.post('/guest-star/add', isAdmin,Controller.postAddGuestStar)

router.get('/concert/add', isAdmin,Controller.addNewConcert)
router.post('/concert/add', isAdmin,Controller.postNewConcert)

router.get('/list/concert', middleware,Controller.showListConcert)

router.get('/song/add', isAdmin,Controller.addSongs)
router.post('/song/add', isAdmin,Controller.postAddSongs)

router.get('/ticket/book', isAdmin,Controller.bookTicket)
router.post('/ticket/book', isAdmin,Controller.postTicket)

router.get('/category/:categoryId', isAdmin,Controller.seeDetailListCategory)




module.exports = router