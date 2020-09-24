import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegexTestRoutingModule } from './regex-test-routing.module';
import { RegexTestComponent } from './regex-test.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegexTestComponent],
  imports: [
    CommonModule,
    RegexTestRoutingModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class RegexTestModule { }
