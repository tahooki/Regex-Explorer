import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestItemComponent } from './test-item.component';



@NgModule({
  declarations: [TestItemComponent],
  exports: [TestItemComponent],
  imports: [
    CommonModule
  ]
})
export class TestItemModule { }
