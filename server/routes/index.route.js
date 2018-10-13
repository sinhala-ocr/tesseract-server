const express = require('express')
const axios = require('axios')

const ocrRoutes = require('./ocr.route');
const grammarRoutes = require('./grammar.route');

const router     = express.Router()

router.use('/ocr', ocrRoutes);
router.use('/grammar', grammarRoutes);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
})

module.exports = router
