import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';

import { BannerComponent } from '@shared/components/banner/banner.component';
import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';
import { EnCoursesDocFilosofiaBiblicaComponent } from './en-courses-doc-filosofia-biblica/en-courses-doc-filosofia-biblica.component';

@Component({
  selector: 'app-en-doctorado-en-filosofia-biblica',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EnCoursesDocFilosofiaBiblicaComponent,
  ],
  templateUrl: './en-doctorado-en-filosofia-biblica.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnDoctoradoEnFilosofiaBiblicaComponent {
  public flyer = './assets/webp/doctorado_filosofia.webp';

  public alt = 'Flyer World Theology University';
  title = signal<string>('');

  ngOnInit() {}
}
