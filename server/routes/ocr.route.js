const express       = require('express');
const IncomingForm  = require('formidable').IncomingForm;
const moment        = require('moment');
const path          = require('path');
const makeDir       = require('make-dir');
const cpy           = require('cpy');
const writeJsonFile = require('write-json-file');
const imageService  = require('../services/ocr/image-service');

const router = express.Router();

router.post('/process/txt', (req, res) => {
  let now     = moment();
  let dirName = now.format('YYYY_MM_DD_HH_mm_ss');

  let log = {
    original_file_name: '',
    directory_absolute_path: '',
    directory_relative_path: ''
  };

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

    // Generate image
    (async () => {
      await imageService.text2ImageDocker(directoryAbsolutePath + '/input.txt', directoryAbsolutePath + '/out');
    })();

    // Set log values
    log.original_file_name      = file.name;
    log.directory_absolute_path = directoryAbsolutePath;
    log.directory_relative_path = directoryRelativePath;

    // Write log
    (async () => {
      await writeJsonFile(`storage/library/${dirName}/${file.name}/log.json`, log);
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
