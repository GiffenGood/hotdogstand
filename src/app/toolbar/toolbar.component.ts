import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from '../msgs/msg.service';

@Component({
  selector: 'mjb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, private msgService: MsgService) { }

  showMessages() {
    this.msgService.isShowing = true;
    this.msgService.addMessage('Yo another message');
    this.router.navigate([{ outlets: { sidebar: ['msgs'] } }]);
  }

  ngOnInit() {
  }

}
