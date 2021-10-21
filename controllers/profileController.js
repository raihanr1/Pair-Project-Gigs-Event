const { User, Profile } = require("../models")
const { Op } = require("sequelize");

class profileController {
  static showProfile(req, res) {
    Profile.findAll({
      where: {
        UserId: req.session.UserId
      }
    })
      .then(data => {
        res.render('profile', { data })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static addProfile(req, res) {
    let id = req.session.UserId
    const project = Profile.findOne({ where: { UserId: +id} });
    if (project.UserId === undefined) {
      let err;
      if (req.query.error) {
        err = req.query.error.split(',')
      }
      res.render('addProfile', { err })
    } else {
      res.redirect('/home')
    }
  }

  static postAddProfile(req, res) {
    let UserId = req.session.UserId
    let { firstName, lastName, dateOfBirth, favoriteGenre } = req.body;
    Profile.create({ firstName, lastName, dateOfBirth, favoriteGenre ,UserId})
      .then(() => {
        res.redirect(`/user/profile`)
      })
      .catch(err => {
        let errors = err.errors.map(el => {
          return el.message
        })
        res.redirect(`/user/profile/add?error=${errors}`)
      })
  }

  static editProfile(req, res) {
    let id = req.session.UserId
    let error;
    if (req.query.error) {
      error = req.query.error.split(',')
    }
    Profile.findAll({
      where: {
        UserId: +id
      }
    })
      .then(data => {
        res.render('editProfileForm', { data, error })
      })
      .catch(err => {
        res.send(error)
      })
  }

  static postEditProfile(req, res) {
    let UserId = req.session.UserId
    let { firstName, lastName, favoriteGenre } = req.body
    Profile.update({ firstName, lastName, favoriteGenre },
      { where: { UserId } }
    )
      .then(() => {
        res.redirect(`/user/profile`)
      })
      .catch(err => {
        let errors = err.errors.map(el => {
          return el.message
        })
        res.redirect(`/user/profile/edit?error=${errors}`)
      })
  }
}

module.exports = profileController