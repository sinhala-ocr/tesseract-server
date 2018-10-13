const express = require('express');

const router     = express.Router()

module.exports = router;

// Get all words in the dictionary
router.get('/get-all-words', (req, res) => {
  var dictionary = require('../controllers/grammar/dictionary-controller');

  dictionary.getAllWords(function (err, result){
    res.send(result);
  })
});

// Get all words in the dictionary
router.get('/add-word', (req, res) => {
  var dictionary = require('../controllers/grammar/dictionary-controller');
  var word = req.query.word;

  dictionary.addWord(word, function (err, result){
    res.send(result);
  })
});

// Apply mandatory rules
router.post('/apply-mandatory-rules', (req, res) => {
  var controller = require('../controllers/grammar/mandatory-rule-controller');
  var text = req.body.text;

  controller.applyMandatoryRules(text, function (err, result){
    res.send(result);
  })
});