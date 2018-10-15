const axios    = require('axios');

module.exports = {

  text2Image(inputPath, outputPath) {
    axios.post('http://localhost:8080/text2image', {
      inputPath: inputPath,
      outputPath: outputPath
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

};
