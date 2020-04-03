import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:       '',
    pathMatch:  'full',
    redirectTo: 'main'
  },
  {
    path:         'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path:         'test/:id',
    loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule)
  },
  {
    path:         'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
