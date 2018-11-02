import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tessconfig',
  templateUrl: './tessconfig.component.pug',
  styleUrls: ['./tessconfig.component.scss']
})
export class TessconfigComponent implements OnInit {

  public trainedData = [];

  constructor() { }

  ngOnInit() {
  }

}
