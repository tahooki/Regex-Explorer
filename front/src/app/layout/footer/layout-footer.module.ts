import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from './layout-footer.component';
import { LayoutFooterService } from './layout-footer.service';


@NgModule({
  declarations: [ LayoutFooterComponent ],
  imports:      [
    CommonModule
  ],
  exports:      [
    LayoutFooterComponent
  ],
  providers:    [ LayoutFooterService ]
})
export class LayoutFooterModule {
}
