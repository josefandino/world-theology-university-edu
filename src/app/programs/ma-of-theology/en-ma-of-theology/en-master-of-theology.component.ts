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
import { EnCursoMaOfTheologyComponent } from './en-curso-ma-of-theology/en-curso-ma-of-theology.component';
@Component({
  selector: 'app-en-master-of-theology',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EnCursoMaOfTheologyComponent,
  ],
  templateUrl: './en-master-of-theology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnMasterOfTheologyComponent {
  public flyer = './assets/webp/ma-of-theology/en/master-of-theology-en.webp';
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
