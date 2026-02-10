import { Routes } from '@angular/router';

export const catalogsRouting: Routes = [
  { path: '', redirectTo: 'catalogs', pathMatch: 'full' },

  {
    path: '',
    loadComponent: () =>
      import('./catalogs.component').then((m) => m.CatalogsComponent),
  },
];
