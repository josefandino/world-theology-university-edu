import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.routing').then((r) => r.PagesRouting),
  },
  {
    path: 'programs',
    loadChildren: () =>
      import('./programs/programs.routing').then((r) => r.programsRouting),
  },
  {
    path: 'certificates',
    loadChildren: () =>
      import('./certificates/certificates.routing').then(
        (r) => r.certificatesRouting,
      ),
  },
  {
    path: 'catalogs',
    loadChildren: () =>
      import('./catalogs/catalogs.routing').then((r) => r.catalogsRouting),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./cuorses/cuorses.routing').then((r) => r.coursesRoutes),
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
