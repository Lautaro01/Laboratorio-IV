import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire';
import { config } from '../../modals/firebase';
import { JwtModule,JwtHelperService } from '@auth0/angular-jwt';

export function getToken(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    JwtModule.forRoot({
      config: {
          tokenGetter: getToken
      }
  })
  ],
  exports:[LoginComponent],
  providers:[LoginService,JwtHelperService]
})
export class LoginModule { }
