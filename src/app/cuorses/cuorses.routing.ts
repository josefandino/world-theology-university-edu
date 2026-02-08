import { Route } from '@angular/router';

export const coursesRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./servicios.component').then((m) => m.ServiciosComponent),
  },
];
