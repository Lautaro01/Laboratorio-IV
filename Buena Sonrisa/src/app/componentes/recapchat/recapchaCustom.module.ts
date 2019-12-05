import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecapchatCustomComponent } from './recapchatCustom.component';
import { RecaptchaModule } from 'ng-recaptcha';


@NgModule({
  declarations: [RecapchatCustomComponent],
  imports: [
    CommonModule,
    RecaptchaModule,
  ],
  exports : [RecapchatCustomComponent, RecaptchaModule]
})
export class RecapchatCustomModule { }
