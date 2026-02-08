import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';
import { AccordionItem } from '@shared/components/accordion/accordion.interface';
import { TextService } from '@shared/helpers';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { EnCourseMasterOfDivinityComponent } from './en-course-master-of-divinity/en-course-master-of-divinity.component';

@Component({
  selector: 'app-en-master-of-divinity',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EnCourseMasterOfDivinityComponent,
  ],
  templateUrl: './en-master-of-divinity.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnMasterOfDivinityComponent {
  public flyer = './assets/webp/maestria_divinidades.webp';
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
