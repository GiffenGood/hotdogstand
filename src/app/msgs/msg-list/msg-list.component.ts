import { Component, OnInit } from '@angular/core';
import { MsgService } from '../msg.service';

@Component({
  selector: 'mjb-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.css']
})
export class MsgListComponent implements OnInit {

  constructor(private msgService: MsgService) { }

  ngOnInit() {
    this.msgService.addMessage('A test message!');
  }

}
