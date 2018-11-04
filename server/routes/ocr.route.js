const express       = require('express');
const IncomingForm  = require('formidable').IncomingForm;
const moment        = require('moment');
const path          = require('path');
const makeDir       = require('make-dir');
const cpy           = require('cpy');
const writeJsonFile = require('write-json-file');
const axios         = require('axios');
const router = express.Router();

router.post('/process/txt', (req, res) => {
  let dirName = 'xxxx';

  // Make directory
  makeDir(`storage/library/${dirName}`).then(path => {
    console.log(path);
  });

  // Create a form
  let form = new IncomingForm();

  // On file received
  form.on('file', (field, file) => {
    let directoryRelativePath = `storage/library/${dirName}/${file.name}`;
    let directoryAbsolutePath = path.join(__dirname, '../../' + directoryRelativePath);

    // Copy file to the library
    (async () => {
      await cpy([file.path], directoryRelativePath, {
        rename: basename => `input.txt`
      });
    })();

    // Process
    (async () => {
      await axios({
        method: 'POST',
        url: 'http://localhost:8080/process',
        params: {
          inputPath: directoryAbsolutePath,
          outputPath: directoryAbsolutePath,

          originalFileName: file.name,
          dirAbsolutePath: directoryAbsolutePath,
          dirRelativePath: directoryRelativePath
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    })();
  });

  // On form end
  form.on('end', () => {
    res.json();
  });

  // Parse the request
  form.parse(req);
});

module.exports = router;
