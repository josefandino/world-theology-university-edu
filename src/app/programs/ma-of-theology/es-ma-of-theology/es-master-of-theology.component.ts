import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { AngularModule, MaterialModule } from '@shared/modules';

import { EsCursoMaOfTheologyComponent } from './es-curso-ma-of-theology/es-curso-ma-of-theology.component';

@Component({
  selector: 'app-es-ma-of-theology',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EsCursoMaOfTheologyComponent,
  ],
  templateUrl: './es-ma-of-theology.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMasterOfTheologyComponent {
  public flyer = './assets/webp/ma-of-theology/es/maestria-en-teologia-es.webp';
  public alt = 'Flyer World Theology University';
}
