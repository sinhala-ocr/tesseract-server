const express = require('express')
const axios = require('axios')

const commonRoutes = require('./common.route');
const dictionaryRoutes = require('./dictionary.route');

const router     = express.Router()

router.use('/common', commonRoutes);
router.use('/dictionary', dictionaryRoutes);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
})

module.exports = router
