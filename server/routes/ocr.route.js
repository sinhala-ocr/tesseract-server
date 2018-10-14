const express       = require('express');
const IncomingForm  = require('formidable').IncomingForm;
const moment        = require('moment');
const makeDir       = require('make-dir');
const cpy           = require('cpy');
const writeJsonFile = require('write-json-file');

const router = express.Router();

router.post('/process/txt', (req, res) => {
  let now     = moment();
  let dirName = now.format('YYYY_MM_DD_HH_mm_ss');

  let log = {
    original_file_name: '',
    directory_path: ''
  };

  // Make directory
  makeDir(`storage/library/${dirName}`).then(path => {
    console.log(path);
  });

  // Create a form
  let form = new IncomingForm();

  // On file received
  form.on('file', (field, file) => {
    let directoryPath = `storage/library/${dirName}/${file.name}`;

    // Copy file to the library
    (async () => {
      await cpy([file.path], directoryPath, {
        rename: basename => `input.txt`
      });
    })();

    // Set log values
    log.original_file_name = file.name;
    log.directory_path = directoryPath;

    // Write log
    (async () => {
      await writeJsonFile(`storage/library/${dirName}/${file.name}/log.json`, {foo: true});
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
