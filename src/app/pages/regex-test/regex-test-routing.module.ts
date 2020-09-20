import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegexTestComponent } from './regex-test.component';
import { RegexTestResolver } from './resolver/regex-test.resolver';


const routes: Routes = [{
  path: '',
  component: RegexTestComponent,
  resolve: {
    regexTest: RegexTestResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegexTestRoutingModule { }
