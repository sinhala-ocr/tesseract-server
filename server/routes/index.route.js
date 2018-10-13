const express = require('express')
const axios = require('axios')

const commonRoutes = require('./common.route');
const grammarRoutes = require('./grammar.route');

const router     = express.Router()

router.use('/common', commonRoutes);
router.use('/grammar', grammarRoutes);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
})

module.exports = router
