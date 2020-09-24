import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header.component';
import { LayoutHeaderService } from './layout-header.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ LayoutHeaderComponent ],
  exports:      [ LayoutHeaderComponent ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  providers:    [ LayoutHeaderService ]
})
export class LayoutHeaderModule {
}
