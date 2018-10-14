import shell from 'shelljs';

module.exports = {

  ocrDocker(inputPath, outputPath) {
    let cmd = `docker exec tesseract4-container tesseract --tessdata-dir /home/tessdata "${inputPath}" "${outputPath}" -l sin segdemo inter`;
    shell.echo(cmd);
    shell.exec(cmd, function (code, stdout, stderr) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
    });
  }

};
