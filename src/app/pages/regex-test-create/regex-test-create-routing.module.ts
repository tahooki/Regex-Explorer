import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegexTestCreateComponent } from './regex-test-create.component';
import { AuthGuard } from '../../core/service/guard/auth.guard';


const routes: Routes = [
  {
    path:        '',
    component:   RegexTestCreateComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RegexTestCreateRoutingModule {
}
