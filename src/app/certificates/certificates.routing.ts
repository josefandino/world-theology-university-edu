import { Routes } from '@angular/router';

export const certificatesRouting: Routes = [
  { path: '', redirectTo: 'certificates', pathMatch: 'full' },

  {
    path: '',
    loadComponent: () => import('./certificates.component'),
  },
  {
    path: 'phlebotomy-technician',
    loadComponent: () =>
      import('./phlebotomy-technician/phlebotomy-technician.component'),
  },
  {
    path: 'ekg-technician',
    loadComponent: () => import('./ekg-technician/ekg-technician.component'),
  },
  {
    path: 'patient-care-technician',
    loadComponent: () =>
      import('./patient-care-technician/patient-care-technician.component'),
  },
  {
    path: 'clinical-administrative-medical-assistant',
    loadComponent: () =>
      import(
        './clinical-administrative-medical-assistant/clinical-administrative-medical-assistant.component'
      ),
  },
  {
    path: 'medical-administrative-assistant',
    loadComponent: () =>
      import(
        './medical-administrative-assistant/medical-administrative-assistant.component'
      ),
  },
  {
    path: 'medical-laboratory-assistant',
    loadComponent: () =>
      import(
        './medical-laboratory-assistant/medical-laboratory-assistant.component'
      ),
  },
  {
    path: 'medical-billing-coding',
    loadComponent: () =>
      import('./medical-billing-coding/medical-billing-coding.component'),
  },
  {
    path: 'pharmacy-technician',
    loadComponent: () =>
      import('./pharmacy-technician/pharmacy-technician.component'),
  },
  {
    path: 'veterinary-assistant',
    loadComponent: () =>
      import('./veterinary-assistant/veterinary-assistant.component'),
  },
  {
    path: 'insurance-exam-technician',
    loadComponent: () =>
      import('./insurance-exam-technician/insurance-exam-technician.component'),
  },
  {
    path: 'medical-scribe',
    loadComponent: () => import('./medical-scribe/medical-scribe.component'),
  },
  {
    path: 'electronic-health-records-specialist',
    loadComponent: () =>
      import(
        './electronic-health-records-specialist/electronic-health-records-specialist.component'
      ),
  },
  {
    path: 'allied-health-instructor',
    loadComponent: () =>
      import('./allied-health-instructor/allied-health-instructor.component'),
  },

  // {
  //   path: 'bachelor-theology',
  //   loadComponent: () => import('./bacher-of-teology/bacher-teology.component'),
  // },
];
