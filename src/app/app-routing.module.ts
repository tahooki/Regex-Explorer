import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoLoginGuard } from './core/service/guard/auto-login.guard';

const routes: Routes = [
  {
    path:       '',
    pathMatch:  'full',
    redirectTo: 'main'
  },
  {
    path:        '',
    canActivate: [
      AutoLoginGuard
    ],
    // resolver: {
    //   currentLocation: CurrentLocationResolver
    // },
    children:    [
      {
        path:         'main',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
      },
      {
        path:         'regex/:uid',
        loadChildren: () => import('./pages/regex-test/regex-test.module').then(m => m.RegexTestModule)
      },
      {
        path:         'regex-create',
        loadChildren: () => import('./pages/regex-test-create/regex-test-create.module').then(m => m.RegexTestCreateModule)
      },
      {
        path:         'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
      },
      {
        path:         'login',
        loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule)
      },
      {
        path:         'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
