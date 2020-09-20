import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegexTestCreateComponent } from './regex-test-create.component';
import { RegexTestCreateRoutingModule } from './regex-test-create-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [RegexTestCreateComponent],
  imports: [
    CommonModule,
    RegexTestCreateRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class RegexTestCreateModule { }
