import { Message } from './../../models/message.model';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'message-box',
  templateUrl: 'message-box.component.html'
})
export class MessageBoxComponent {

  @Input()message: Message;
  @Input()isFromSender: boolean;
  host: {
    '[style.justify-content]':'(!isFromSender) ? "flex-start" : "flex-end")',
    '[style.text-align]' : '((!isFromSender) ? "left" : "right" )'
  }

  text: string;

  constructor() {
    console.log('Hello MessageBoxComponent Component');
    this.text = 'Hello World';
  }

}
