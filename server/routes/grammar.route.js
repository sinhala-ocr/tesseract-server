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
  const docUtils = require('../controllers/grammar/utils/doc-utils');

  var text = req.body.text;
  var doc = docUtils.generateDocumentObject(text);

  dictionaryChecker.check(doc, function (err, result){
    res.send(result);
  })
});

// Character Legitimacy checkings
router.post('/character-legitimacy-check', (req, res) => {
  const characterLegitimacyChecker = require('../controllers/grammar/checkers/character-legitimacy-checker');
  const docUtils = require('../controllers/grammar/utils/doc-utils');
  var text = req.body.text;

  var doc = docUtils.generateDocumentObject(text);

  characterLegitimacyChecker.check(doc, function (err, result){
    res.send(result);
  })
});


// Check all
router.post('/', (req, res) => {
  const grammarHelpers = require('../controllers/grammar/utils/grammar-helpers');
  const grammarCheck = require('../controllers/grammar/grammar');
  var filename = req.body.filename;
  grammarHelpers.loadFile(filename, function(err, inputText){
    if (err) res.send({});
    grammarCheck.check(inputText, function(err, result){
      if (err) res.send({});
      res.send({
        "input": inputText,
        "output": result
      });
    })
  })
});

// Check all
router.post('/custom', (req, res) => {
  const grammarCheck = require('../controllers/grammar/grammar');
  var text = req.body.text;
  grammarCheck.check(text, function(err, result){
    if (err){
      res.send({});
    }
    res.send(result);
  })
});

// Get output file list
router.get('/output-file-list', (req, res) => {
  const grammarHelpers = require('../controllers/grammar/utils/grammar-helpers');
  const LIBRARY_PATH = '../storage/library';
  grammarHelpers.getOutputFiles(LIBRARY_PATH, function(err, result){
    if (err){
      res.send({});
    }
    res.send(result)
  })
});

// Get output file content
router.get('/load-file', (req, res) => {
  const grammarHelpers = require('../controllers/grammar/utils/grammar-helpers');
  var filename = req.query.filename;
  if (!filename){
    res.send({});
    return;
  }
  grammarHelpers.loadFile(filename, function(err, result){
    if (err){
      res.send({});
    }
    res.send(result)
  })
});


// Test
router.post('/test', (req, res) => {
  const grammarLegitimacyChecker = require('../controllers/grammar/checkers/grammar-legitimacy-checker');
  const docUtils = require('../controllers/grammar/utils/doc-utils');
  var text = req.body.text;

  var doc = docUtils.generateDocumentObject(text);

  grammarLegitimacyChecker.check(doc, function (err, result){
    res.send(result);
  })
});