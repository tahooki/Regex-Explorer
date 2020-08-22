import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegexTestRoutingModule } from './regex-test-routing.module';
import { RegexTestComponent } from './regex-test.component';


@NgModule({
  declarations: [RegexTestComponent],
  imports: [
    CommonModule,
    RegexTestRoutingModule
  ]
})
export class RegexTestModule { }
