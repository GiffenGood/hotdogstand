import { Component, OnInit, HostBinding } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'mjb-hotdogs',
  templateUrl: './hotdogs.component.html',
  styleUrls: ['./hotdogs.component.css'],
})

export class HotdogsComponent implements OnInit {
  hotdogs: any = [];
  displayedColumns = ['name', 'description', 'image'];

  constructor(private route: ActivatedRoute) {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.hotdogs.filter = filterValue;
  }

  ngOnInit() {
    this.hotdogs = new MatTableDataSource(dogs);
    console.log(this.route.snapshot.data['title']);
  }
}

const dogs = [
  {
    id: 1,
    name: 'Basic',
    description: 'Typical American hotdog.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1200px-Hot_dog_with_mustard.png'
  },
  {
    id: 2,
    name: 'Grand',
    description: 'Hotdog with the works',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9G5Lz_O0I1F-HH_qNgU3BPBV4CjCoTDPHWX28c02GaFZ5Zk0FHg'
  },
  {
    id: 3,
    name: 'Bratwurst',
    description: 'Farm fresh Brat!',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehMmeNhju-w-OwG4V3D1rSxTvGDFGuSImtTjIG2gGOhec0jK0'
  }
];
