import { Routes } from '@angular/router';

export const programsRouting: Routes = [
  { path: '', redirectTo: 'programs', pathMatch: 'full' },

  {
    path: '',
    loadComponent: () => import('./programs.component'),
  },
  {
    path: 'bachelor-theology',
    loadComponent: () => import('./bacher-of-teology/bacher-teology.component'),
  },
];
