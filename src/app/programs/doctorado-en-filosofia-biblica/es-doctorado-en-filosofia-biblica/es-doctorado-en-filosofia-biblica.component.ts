import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';

import { BannerComponent } from '@shared/components/banner/banner.component';
import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';
import { EsCoursesDocFilosofiaBiblicaComponent } from './es-courses-doc-filosofia-biblica/es-courses-doc-filosofia-biblica.component';

@Component({
  selector: 'app-es-doctorado-en-filosofia-biblica',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EsCoursesDocFilosofiaBiblicaComponent,
  ],
  templateUrl: './es-doctorado-en-filosofia-biblica.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsDoctoradoEnFilosofiaBiblicaComponent {
  public flyer = './assets/webp/doctorado_filosofia.webp';
  public alt = 'Flyer World Theology University';
  title = signal<string>('');

  ngOnInit() {}
}
