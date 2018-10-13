const express = require('express');

const router     = express.Router()

module.exports = router;

// Get all words in the dictionary
router.get('/dictionary/get-all-words', (req, res) => {
  const dictionary = require('../controllers/grammar/dictionary/dictionary-controller');

  dictionary.getAllWords(function (err, result){
    res.send(result);
  })
});

// Get all words in the dictionary
router.get('/dictionary/add-word', (req, res) => {
  const dictionary = require('../controllers/grammar/dictionary/dictionary-controller');
  var word = req.query.word;

  dictionary.addWord(word, function (err, result){
    res.send(result);
  })
});

// Mandatory checkings
router.post('/mandatory-check', (req, res) => {
  const mandatoryChecker = require('../controllers/grammar/checkers/mandatory-checker');
  var text = req.body.text;

  mandatoryChecker.check(text, function (err, result){
    res.send(result);
  })
});

// Test
router.get('/test', (req, res) => {
  const controller = require('../controllers/grammar/utils/text-utils');
  var x = controller.generateDocumentObject("sfaf\nsdf sdf");
  res.send(x)
});