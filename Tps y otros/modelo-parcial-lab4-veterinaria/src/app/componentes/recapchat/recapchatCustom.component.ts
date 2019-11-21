import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recapchat',
  templateUrl: './recapchatCustom.component.html',
})
export class RecapchatCustomComponent implements OnInit {

  @Output() capchatValidator = new EventEmitter();

  constructor() { }

  validado : boolean;

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    this.validado = captchaResponse != null;
    this.capchatValidator.emit(this.validado);
  }

}
