import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { TestItemModule } from './test-item/test-item.module';
import { MainService } from './main.service';


@NgModule({
  declarations: [ MainComponent ],
  imports:      [
    CommonModule,
    MainRoutingModule,
    TestItemModule,
  ],
  providers: [MainService]
})
export class MainModule {
}
