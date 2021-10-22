const express = require('express')
const homeRouter = require('./home')
const loginRouter = require('./login')

const router = express.Router()

router.get('/', (req, res) => {
    try {
        return res.status(200).json({
            halo: 'ea ea ea '
        })
        
    } catch (error) {
        return res.status(400).json(error)
    }
})
router.use('/home', homeRouter)
router.use('/user', loginRouter)
module.exports = router

