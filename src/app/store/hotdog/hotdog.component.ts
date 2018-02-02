import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mjb-hotdog',
  templateUrl: './hotdog.component.html',
  styleUrls: ['./hotdog.component.css']
})
export class HotdogComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {
    this.id = '';
    console.log('created;');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(pm => {
      this.id = pm.get('id');
    });
  }

}
