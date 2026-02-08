import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';

import { BannerComponent } from '@shared/components/banner/banner.component';
import { MatDialog } from '@angular/material/dialog';
import { TextService } from '@shared/helpers';
import { EnCursosMaMdccComponent } from './en-cursos-ma-mdcc/en-cursos-ma-mdcc.component';

@Component({
  selector: 'app-en-master-of-clinical-mentoring',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    EnCursosMaMdccComponent,
  ],
  templateUrl: './en-master-of-clinical-mentoring.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnMasterOfClinicalMentoringComponent {
  public flyer =
    './assets/webp/ma-consejeria-clinica/en/masters-degree-in-clinical-counseling-en.webp';

  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}
}
