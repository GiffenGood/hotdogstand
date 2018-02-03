import { Component, OnInit, HostBinding } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { HotdogService } from '../hotdog.service';

@Component({
  selector: 'mjb-hotdogs',
  templateUrl: './hotdogs.component.html',
  styleUrls: ['./hotdogs.component.css'],
})

export class HotdogsComponent implements OnInit {
  hotdogs: any = new MatTableDataSource();
  displayedColumns = ['name', 'description', 'image'];

  constructor(private route: ActivatedRoute, private hotdogService: HotdogService) {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.hotdogs.filter = filterValue;
  }

  ngOnInit() {
    this.hotdogs = new MatTableDataSource(this.route.snapshot.data['hotdogs']);
  }
}

