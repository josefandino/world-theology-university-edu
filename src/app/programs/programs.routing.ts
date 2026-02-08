import { Routes } from '@angular/router';
export const programsRouting: Routes = [
  { path: '', redirectTo: 'programs', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./programs.component'),
  },
  {
    path: 'bachelor-of-clinical-mentoring',
    loadComponent: () =>
      import(
        './bachelor-of-clinical-mentoring/bachelor-of-clinical-mentoring.component'
      ),
  },
  {
    path: 'bachelor-of-communication',
    loadComponent: () =>
      import('./bachelor-of-communication/bachelor-of-communication.component'),
  },
  {
    path: 'bachelor-of-clinical-psychology',
    loadComponent: () =>
      import(
        './bachelor-of-clinical-psychology/bachelor-of-clinical-psychology.component'
      ),
  },
  {
    path: 'bachelor-of-international-relations',
    loadComponent: () =>
      import(
        './bachelor-of-international-relations/bachelor-of-international-relations.component'
      ),
  },
  {
    path: 'bacher-teology',
    loadComponent: () => import('./bacher-of-teology/bacher-teology.component'),
  },
  {
    path: 'capellania',
    loadComponent: () => import('./capellania/capellania.component'),
  },
  {
    path: 'capellania',
    loadComponent: () => import('./capellania/capellania.component'),
  },
  {
    path: 'master-of-theology',
    loadComponent: () =>
      import('./ma-of-theology/master-of-theology.component'),
  },
  {
    path: 'master-of-divinity',
    loadComponent: () =>
      import('./master-of-divinity/master-of-divinity.component'),
  },
  {
    path: 'master-of-clinical-mentoring',
    loadComponent: () =>
      import(
        './master-of-clinical-mentoring/master-of-clinical-mentoring.component'
      ),
  },
  {
    path: 'master-degree-religion-public-leadership',
    loadComponent: () =>
      import(
        './master-degree-religion-public-leadership/master-degree-religion-public-leadership.component'
      ),
  },
  {
    path: 'master-of-international-relations',
    loadComponent: () =>
      import(
        './master-of-international-relations/master-of-international-relations.component'
      ),
  },
  {
    path: 'master-of-mental-health',
    loadComponent: () =>
      import('./master-of-mental-health/master-of-mental-health.component'),
  },
  {
    path: 'master-of-clinical-psychology',
    loadComponent: () =>
      import(
        './master-of-clinical-psychology/master-of-clinical-psychology.component'
      ),
  },
  {
    path: 'doctor-of-divinity',
    loadComponent: () =>
      import('./doctor-of-divinity/doctor-of-divinity.component'),
  },
  {
    path: 'doctorado-en-filosofia-biblica',
    loadComponent: () =>
      import(
        './doctorado-en-filosofia-biblica/doctorado-en-filosofia-biblica.component'
      ),
  },
  {
    path: 'doctor-of-ministry',
    loadComponent: () =>
      import('./doctor-of-ministry/doctor-of-ministry.component'),
  },
  {
    path: 'doctor-of-science-biblical-studies',
    loadComponent: () =>
      import(
        './doctor-of-science-biblical-studies/doctor-of-science-biblical-studies.component'
      ),
  },
  {
    path: 'bachelor-of-nursing',
    loadComponent: () =>
      import('./bachelor-of-nursing/bachelor-of-nursing.component'),
  },

  { path: '**', redirectTo: 'programs', pathMatch: 'full' },
];
