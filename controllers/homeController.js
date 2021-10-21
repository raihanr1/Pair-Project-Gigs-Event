const {Category, Soloist, Band, Concert} = require("../models")

class Controller {
    static homePage(req, res) {
        Category.findAll()
        .then(data => {
            res.render('home', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addNewCategory(req, res) {
        res.render('addNewCategory')
    }

    static postNewCategory(req, res) {
        let {name, photo} = req.body
        Category.create({name, photo})
        .then(data => {
            res.redirect('/home')
        })
        .catch(err => {
            let error = err.errors.map(el => {
                return el.message
            })
            res.send(error)
        })
    }

    static showListConcert(req, res) {
        Concert.findAll()
        .then(data => {
            console.log(data);
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addGuestStar(req, res) {
        Category.findAll({
            include: [
                {
                    model: Band
                }, {
                    model: Soloist
                }
            ]
        })
        .then(data => {
            res.render('addNewGuestStar')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static postAddGuestStar(req, res) {

    }

    static addNewConcert(req, res) {
        res.render('addNewConcert')
    }

    static postNewConcert(req, res) {
        let {name, location, date, price, imageURL} = req.body
        Concert.create({name, location, date, price, imageURL})
        .then(data => {
            let success = 'Success create new concert'
            res.redirect(`/home/concert/add?success=${success}`)
        })
        .catch(err => {
            let error = err.errors.map(el => {
                return el.message
            })
            res.send(error)
        })
    }

    static seeDetailListCategory(req, res) {
        let categoryId = req.params.categoryId
        Category.findAll({
            include: [
                {
                    model: Band
                },
                {
                    model: Soloist
                }
            ]
        })
        .then(data => {
            res.render('listBands', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller