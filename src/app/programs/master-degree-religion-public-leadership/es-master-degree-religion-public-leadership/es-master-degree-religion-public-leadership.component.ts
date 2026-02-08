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

@Component({
  selector: 'app-es-master-degree-religion-public-leadership',
  imports: [AngularModule, MaterialModule, BannerComponent],
  templateUrl: './es-master-degree-religion-public-leadership.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMasterDegreeReligionPublicLeadershipComponent {
  public flyer = './assets/webp/maestria_religion.webp';
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
