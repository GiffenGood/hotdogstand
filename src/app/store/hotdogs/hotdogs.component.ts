import { Component, OnInit, HostBinding } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'mjb-hotdogs',
  templateUrl: './hotdogs.component.html',
  styleUrls: ['./hotdogs.component.css'],
})

export class HotdogsComponent implements OnInit {
  hotdogs: any = [];
  displayedColumns = ['name', 'description', 'image'];

  constructor() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.hotdogs.filter = filterValue;
  }

  ngOnInit() {
    this.hotdogs = new MatTableDataSource(dogs);
  }
}

const dogs = [
  {
    name: 'Basic',
    description: 'Typical American hotdog.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1200px-Hot_dog_with_mustard.png'
  },
  {
    name: 'Grand',
    description: 'Hotdog with the works',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9G5Lz_O0I1F-HH_qNgU3BPBV4CjCoTDPHWX28c02GaFZ5Zk0FHg'
  },
  {
    name: 'Bratwurs',
    description: 'Farm fresh Brat!',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehMmeNhju-w-OwG4V3D1rSxTvGDFGuSImtTjIG2gGOhec0jK0'
  }
];
