import shell from 'shelljs';

module.exports = {

  text2ImageDocker(inputPath, outputPath) {
    let cmd = `docker exec tesseract4-container text2image --text ${inputPath} --outputbase "${outputPath}" --fonts_dir /home/tessdata --font "Iskoola Pota"`;
    shell.echo(cmd);
    shell.exec(cmd, function (code, stdout, stderr) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
    });
  }

};
