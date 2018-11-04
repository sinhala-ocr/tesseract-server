import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  title = 'JavaSampleApproach';
  description = 'Angular-SpringBoot Demo';

  constructor() {
  }

  ngOnInit() {
  }

}
