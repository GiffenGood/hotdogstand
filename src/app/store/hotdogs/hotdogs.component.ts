import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mjb-hotdogs',
  templateUrl: './hotdogs.component.html',
  styleUrls: ['./hotdogs.component.css']
})
export class HotdogsComponent implements OnInit {
  hotdogs : any = [];

  constructor() {
   }

  ngOnInit() {
    this.hotdogs = [
      {name : 'Basic', url : ''}
    ]
  }

}
