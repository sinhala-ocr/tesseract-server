const express = require('express');
const IncomingForm = require('formidable').IncomingForm;

const router     = express.Router()

router.post('/upload', (req, res) => {
  var form = new IncomingForm();

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path

    console.log(file);
    console.log(file.path);
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
});

module.exports = router;
