import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { AccordionItem } from '@shared/components/accordion/accordion.interface';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';
import { EnCourseDoctorOfDivinityComponent } from './en-course-doctor-of-divinity/en-course-doctor-of-divinity.component';

@Component({
  selector: 'app-en-doctor-of-divinity',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EnCourseDoctorOfDivinityComponent,
  ],
  templateUrl: './en-doctor-of-divinity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnDoctorOfDivinityComponent {
  public flyer = './assets/webp/doctorado_divinidades.webp';
  public alt = 'Flyer World Theology University';
  title = signal<string>('');

  ngOnInit() {}

  /* DESPLEGABLE 01 */
  prescribedCoursesData: AccordionItem[] = [
    {
      title: 'CAS 204 Communication Research Methods',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          bodyNote: '3 credits',
        },
        {
          type: 'paragraph',
          text: 'Overview of the skills ',
        },
      ],
    },
  ];
}
