import { Component } from '@angular/core';
import { MsgService } from './msgs/msg.service';

@Component({
  selector: 'mjb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mjb';

  constructor(private msgService: MsgService) {

  }

}
