const express = require('express')

const grammarRoutes = require('./grammar.route')

const router = express.Router()

router.use('/grammar', grammarRoutes)

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
})

module.exports = router
