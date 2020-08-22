import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { SigninComponent } from './signin.component';


@NgModule({
  declarations: [ SigninComponent ],
  imports:      [
    CommonModule,
    SigninRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class SigninModule {
}
