import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header.component';

@NgModule({
  declarations: [LayoutHeaderComponent],
  exports:      [LayoutHeaderComponent],
  imports:      [
    CommonModule
  ]
})
export class LayoutHeaderModule {
}
