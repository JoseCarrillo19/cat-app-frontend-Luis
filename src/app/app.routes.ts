import { Routes } from '@angular/router';
import { AuthGuard } from './Core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Modules/home/home.routes').then((m) => m.LOGIN_HOME),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Modules/auth/auth.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'cats',
    loadChildren: () =>
      import('./Modules/cats/cats.routes').then((m) => m.LOGIN_CATS),
  },
  {
    path: 'user-info',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./Modules/auth/user-info/user-info.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];