import {Component, OnInit} from '@angular/core';
import {TessdataService} from '../../services/tessdata.service';

@Component({
  selector: 'app-tessconfig',
  templateUrl: './tessconfig.component.html',
  styleUrls: ['./tessconfig.component.scss']
})
export class TessconfigComponent implements OnInit {

  public trainedData;

  constructor(private tessdataService: TessdataService) {
  }

  ngOnInit() {
    this.tessdataService.getTrainedData().then(res => {
      this.trainedData = res;
    }).catch(err => {
      return console.log(err);
    });
  }

  onClickDefaultButton(id: string) {
    this.tessdataService.setDefaultTrainedData(id);
  }

  onClickSaveButton(id: string, newName: string, newDescription: string) {
    this.tessdataService.setTrainedDataProperties(id, newName, newDescription);
  }

  onClickDeleteButton(id: string, ) {
    this.tessdataService.deleteTrainedData(id);
  }

}
