const express = require('express')
const homeRouter = require('./home')
const loginRouter = require('./login')

const router = express.Router()

router.get('/', (req, res) => {
    return res.status(200).json({
        halo: 'hai'
    })
})
router.use('/home', homeRouter)
router.use('/user', loginRouter)

module.exports = router

