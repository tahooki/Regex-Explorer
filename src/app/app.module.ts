import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers:    [
    {
      provide:  COMPOSITION_BUFFER_MODE,
      useValue: false
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
