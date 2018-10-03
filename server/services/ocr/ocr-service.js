import shell from 'shelljs'

export default class OcrServices {

  static ocrLocal(inputPath, outputPath) {

  }

  static ocrDocker(inputPath, outputPath) {
    let cmd = 'docker exec tesseract4-container tesseract --tessdata-dir /home/tessdata ' + inputPath + ' ' + outputPath + '-l sin segdemo inter'
    shell.exec(cmd, function (code, stdout, stderr) {
      console.log('Exit code:', code)
      console.log('Program output:', stdout)
      console.log('Program stderr:', stderr)
    })
  }

}
