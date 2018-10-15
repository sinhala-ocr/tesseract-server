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

// Dictionary checkings
router.post('/dictionary-check', (req, res) => {
  const dictionaryChecker = require('../controllers/grammar/checkers/dictionary-checker');
  const textUtils = require('../controllers/grammar/utils/text-utils');

  var text = req.body.text;
  var doc = textUtils.generateDocumentObject(text);

  dictionaryChecker.check(doc, function (err, result){
    res.send(result);
  })
});

// Exblock checkings
router.post('/exblock-check', (req, res) => {
  const exblockChecker = require('../controllers/grammar/checkers/exblock-checker');
  const textUtils = require('../controllers/grammar/utils/text-utils');
  var text = req.body.text;

  var doc = textUtils.generateDocumentObject(text);

  exblockChecker.check(doc, function (err, result){
    res.send(result);
  })
});


// Check all
router.post('/', (req, res) => {
  const grammarCheck = require('../controllers/grammar/grammar');
  var text = req.body.text;
  grammarCheck.check(text, function(err, result){
    res.send(result);
  })
});


// Test
router.post('/test', (req, res) => {
  const legitimacyChecker = require('../controllers/grammar/checkers/legitimacy-checker');
  const textUtils = require('../controllers/grammar/utils/text-utils');
  var text = req.body.text;

  var doc = textUtils.generateDocumentObject(text);

  legitimacyChecker.check(doc, function (err, result){
    res.send(result);
  })
});