import { NgModule } from '@angular/core';
import { LayoutHeaderModule } from './header/layout-header.module';
import { LayoutFooterModule } from './footer/layout-footer.module';

@NgModule({
  imports: [
    LayoutHeaderModule,
    LayoutFooterModule
  ],
  exports: [
    LayoutHeaderModule,
    LayoutFooterModule,
  ]
})
export class LayoutModule { }
