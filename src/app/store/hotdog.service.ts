import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';

@Injectable()
export class HotdogService {

  constructor() { }

  getAll(): Observable<any[]> {
    return Observable.of(dogs);
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

