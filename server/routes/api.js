const express = require('express')
const router  = express.Router()

// declare axios for making http requests
const axios = require('axios')
const API   = 'https://jsonplaceholder.typicode.com'

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

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
       .then(posts => {
         res.status(200).json(posts.data)
       })
       .catch(error => {
         res.status(500).send(error)
       })
})


module.exports = router
