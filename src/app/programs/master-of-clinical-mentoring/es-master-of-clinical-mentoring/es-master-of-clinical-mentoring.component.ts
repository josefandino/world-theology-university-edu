import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';
import { EsCursosMaMdccComponent } from './es-cursos-ma-mdcc/es-cursos-ma-mdcc.component';

@Component({
  selector: 'app-es-master-of-clinical-mentoring',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EsCursosMaMdccComponent,
  ],
  templateUrl: './es-master-of-clinical-mentoring.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMasterOfClinicalMentoringComponent {
  public flyer =
    './assets/webp/ma-consejeria-clinica/es/maestria-en-consejeria-clinica-es.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}
}
