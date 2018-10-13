import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ocr-task-list',
  templateUrl: './ocr-task-list.component.html',
  styleUrls: ['./ocr-task-list.component.scss']
})
export class OcrTaskListComponent implements OnInit {

  tasks: any = [];

  constructor() {
  }

  ngOnInit() {
  }

}
