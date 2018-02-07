import { Injectable } from '@angular/core';

@Injectable()
export class MsgService {
  messages: string[] = ['one', 'two', 'three', 'four'];
  isShowing = false;

  constructor() {

  }

  addMessage(msg: string) {
    this.messages.push(msg);
  }

}
