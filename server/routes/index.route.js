const express = require('express')
const axios = require('axios')

const commonRoutes = require('./common.route');
const dictionaryRoutes = require('./dictionary.route');

const router     = express.Router()

router.use('/common', commonRoutes);
router.use('/dictionary', dictionaryRoutes);








// TODO : Move the routes
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
})

// Get all words in the dictionary
router.get('/dictionary/get-all-words', (req, res) => {
  var dictionary = require('../controllers/grammar/dictionary-controller');

  dictionary.getAllWords(function (err, result){
    console.log(result)
    res.send(result);
  })
});

// Get all words in the dictionary
router.get('/dictionary/add-word', (req, res) => {
  var dictionary = require('../controllers/grammar/dictionary-controller');
  var word = req.query.word;

  dictionary.addWord(word, function (err, result){
    console.log(result)
    res.send(result);
  })
})


// Apply mandatory rules
router.post('/dictionary/apply-mandatory-rules', (req, res) => {
  var controller = require('../controllers/grammar/mandatory-rule-controller');
  var text = req.body.text;

  controller.applyMandatoryRules(text, function (err, result){
    res.send(result);
  })
})





module.exports = router
