import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header.component';
import { LayoutHeaderService } from './layout-header.service';

@NgModule({
  declarations: [ LayoutHeaderComponent ],
  exports:      [ LayoutHeaderComponent ],
  imports:      [
    CommonModule
  ],
  providers:    [ LayoutHeaderService ]
})
export class LayoutHeaderModule {
}
