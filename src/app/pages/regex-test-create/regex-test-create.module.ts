import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegexTestCreateComponent } from './regex-test-create.component';
import { RegexTestCreateRoutingModule } from './regex-test-create-routing.module';



@NgModule({
  declarations: [RegexTestCreateComponent],
  imports: [
    CommonModule,
    RegexTestCreateRoutingModule
  ]
})
export class RegexTestCreateModule { }
