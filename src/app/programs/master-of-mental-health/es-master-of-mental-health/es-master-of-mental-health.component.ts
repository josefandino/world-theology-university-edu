import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BannerComponent } from '@shared/components/banner/banner.component';
import { AngularModule, MaterialModule } from '@shared/modules';
import { TextService } from '@shared/helpers';

import { EsMasterOfMentalHealthcCoursesComponent } from './es-master-of-mental-healthc-courses/es-master-of-mental-healthc-courses.component';

@Component({
  selector: 'app-es-master-of-mental-health',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EsMasterOfMentalHealthcCoursesComponent,
  ],
  templateUrl: './es-master-of-mental-health.component.html',
  styleUrl: './es-master-of-mental-health.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMasterOfMentalHealthComponent {
  public flyer = './assets/webp/ma-salud-mental/master-en-salud-mental-es.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}
}
