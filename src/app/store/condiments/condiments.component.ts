import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mjb-condiments',
  templateUrl: './condiments.component.html',
  styleUrls: ['./condiments.component.css']
})
export class CondimentsComponent implements OnInit {
  counter = [1,2,3,4];
  
  constructor() { }

  ngOnInit() {
  }

}
