const express      = require('express')
const IncomingForm = require('formidable').IncomingForm
const moment       = require('moment')
const makeDir      = require('make-dir')
const cpy          = require('cpy')

const router = express.Router()

router.post('/process/txt', (req, res) => {
  let now     = moment()
  let dirName = now.format('YYYY_MM_DD_HH_mm_ss')

  // Make directory
  makeDir(`storage/library/${dirName}`).then(path => {
    console.log(path)
  })

  // Create a form
  let form = new IncomingForm()

  // On file received
  form.on('file', (field, file) => {
    // Copy file to the library
    (async () => {
      await cpy([file.path], `storage/library/${dirName}/${file.name}`, {
        rename: basename => `input.txt`
      })
    })()
  })

  // On form end
  form.on('end', () => {
    res.json()
  })

  // Parse the request
  form.parse(req)
})

module.exports = router
