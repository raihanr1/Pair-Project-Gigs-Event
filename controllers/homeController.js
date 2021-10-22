const {Category, GuestStar, Concert, Song, User,Event} = require("../models")
const { Op } = require("sequelize");

class Controller {
    static homePage(req, res) {
        let role;
        if (req.session.role === 'Admin') {
            role = req.session.role
            
        }
        let search = {
            include: {
                model: GuestStar
            }
        }

        if (req.query.search) {
            search.where = {
                name: {
                    [Op.iLike]: `%${req.query.search}%`
                }
            }
        }
        Category.findAll(search)
        .then(data => {
            res.render('home', {data, role})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addNewCategory(req, res) {
        let role;
        if (role === 'Admin') {
            role = req.session.role
            
        }
        res.render('addNewCategory',{role})
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
        let role = req.session.role
        Concert.findAll()
        .then(data => {
            res.render('listConcert', {data, role})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addGuestStar(req, res) {
        let category; 
        Category.findAll()
        .then(categoryData => {
            category = categoryData
            return Concert.findAll()
        })
        .then(concert => {
            res.render('addNewGuestStar', {category, concert})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static postAddGuestStar(req, res) {
        let {CategoryId, name, debutYear, ConcertId, imageURL} = req.body
        GuestStar.create({CategoryId, name, debutYear, ConcertId, imageURL})
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

    static addNewConcert(req, res) {
        res.render('addNewConcert')
    }

    static postNewConcert(req, res) {
        let {name, location, date, price, imageURL} = req.body
        Concert.create({name, location, date, price:+price, imageURL})
        .then(data => {
            res.redirect(`/home/list/concert`)
        })
        .catch(err => {
            console.log(err);
            let error = err.errors.map(el => {
                return el.message
            })
            res.send(error)
        })
    }

    static seeDetailListCategory(req, res) {
        let categoryId = req.params.categoryId
        GuestStar.findAll({
            include:[{
                model: Concert
            }, {
                model: Song
            }],
            where: {
                CategoryId: +categoryId
            }
        })
        .then(data => {
            res.render('listCategory', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addSongs(req, res) {
        GuestStar.findAll()
        .then(data => {
            res.render('addSong',{data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static postAddSongs(req, res) {
        let {GuestStarId, name, genre} = req.body
        console.log(req.body);
        Song.create({GuestStarId, name, genre})
        .then(data => {
            res.redirect('/home')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static bookTicket(req, res) {
        let id = req.session.UserId
        console.log(id);
        let ConcertId = req.query.Concert
        Event.findAll({
            where: {
                [Op.and]: [{ConcertId}, {UserId:id}]
            }
        })
        .then(findTicket => {
            if (!findTicket.length) {
                return Event.create({UserId:id, ConcertId})
            }
        })
        .then(data => {
            return Event.findAll({
                include: [{
                    model: Concert
                }, {
                    model: User
                }],
                where: {
                    UserId:+id
                }
            })
        })
        .then(dataBooked => {
            res.render('bookedTicket', {dataBooked})
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
    }

    static postTicket(req, res) {

    }

    static deleteGuest(req, res) {
        let id = req.params.id
        GuestStar.destroy({
            where: {
              id: +id
            }
          }) 
        .then(data => {
            res.redirect('/home')
        })
        .catch(err => {
            res.send(err)
        })
        
    
    }

}

module.exports = Controller