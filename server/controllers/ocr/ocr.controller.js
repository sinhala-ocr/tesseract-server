const axios    = require('axios');

module.exports = {

  ocr(inputPath, outputPath) {
    axios.post('http://localhost:8080/ocr', {
      inputPath: inputPath,
      outputPath: outputPath
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

};
