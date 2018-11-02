import {Component, OnInit, ViewChild} from '@angular/core';
import {OcrTask} from '../../models/ocr-task';
import {OcrService} from '../../services/ocr.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.pug',
  styleUrls: ['./ocr.component.scss']
})
export class OcrComponent implements OnInit {

  @ViewChild('file') file;

  public files: Set<File> = new Set();
  public tasks: Array<OcrTask> = [];

  public progress: any;
  public uploading = false;
  public uploadSuccessful = false;

  constructor(public ocrService: OcrService) {
  }

  ngOnInit() {
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (const key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      // TODO
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.progress = this.ocrService.upload(this.files);

    // convert the progress map into an array
    const allProgressObservables = [];
    for (const key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }

}
