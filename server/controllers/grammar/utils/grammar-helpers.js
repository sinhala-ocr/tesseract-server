module.exports = {
  // Get the list of output files
  getOutputFiles(libraryPath, callback){
    const testFolder = './';
    const fs = require('fs');
    const glob = require("glob")

    glob(libraryPath + "/**/output.txt",{}, function (er, files) {
      console.log(files)

      var fileList = [];
      files.forEach(file => {
        var itemName = file.substring(libraryPath.length + 1, file.length - 11).replace('/', ' ').toUpperCase();
        var item = {
          "name": itemName,
          "path": file
        }
        fileList.push(item);
      })
      callback(false, fileList);
    })
  },

  // Load file
  loadFile(filename, callback){
    const fs = require('fs');
    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) throw err;
      callback(false, data);
    });
  }
}