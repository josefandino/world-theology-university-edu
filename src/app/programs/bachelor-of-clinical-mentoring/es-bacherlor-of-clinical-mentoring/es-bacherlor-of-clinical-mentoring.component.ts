import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { AngularModule, MaterialModule } from '@shared/modules';
import { MatDialog } from '@angular/material/dialog';
import { stylesDialog } from '@shared/const/styles-dialog';
import { TextService } from '@shared/helpers';

import { BannerComponent } from '@shared/components/banner/banner.component';

import { CursosEsBaccAcComponent } from './cursos-es-bacc/cursos-es-bacc-ac.component';
@Component({
  selector: 'app-es-bacherlor-of-clinical-mentoring',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    CursosEsBaccAcComponent,
  ],
  templateUrl: './es-bacherlor-of-clinical-mentoring.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsBacherlorOfClinicalMentoringComponent {
  public flyer =
    './assets/webp/ba-degree-in-clinical-counseling/licenciatura-en-consejeria-clinica-es.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}

  /**
en100baccip
en200bacchdi
en300baccgp
en400baccpt
en500bacctpf
en600bacccsal
en700baccepc
en800baccpi
en900baccpii
en1000baccci
en1100bacccbt
en1200baccsp
en1300bacccpi
en1400bacclt
en1500baccfp
en1600baccfct
en1700baccpi
en1800bacccap
en1900baccpai
en2000baccpaii
en2100baccccpi
en2200baccccpii
en2300baccccpiii
en2400baccbbb
en2500bacchst
en2600bacceda
en2700bacctp
en2800bacctgt
en2900baccarp
en3000baccaecp
en3100baccaci
en3200bacccps
en3300baccfrip
en3400baccppc

=================================
es100baccip
es200bacchdi
es300baccgp
es400baccpt
es500bacctpf
es600bacccsal
es700baccepc
es800baccpi
es900baccpii
es1000baccci
es1100bacccbt
es1200baccsp
es1300bacccpi
es1400bacclt
es1500baccfp
es1600baccfct
es1700baccpi
es1800bacccap
es1900baccpai
es2000baccpaii
es2100baccccpi
es2200baccccpii
es2300baccccpiii
es2400baccbbb
es2500bacchst
es2600bacceda
es2700bacctp
es2800bacctgt
es2900baccarp
es3000baccaecp
es3100baccaci
es3200bacccps
es3300baccfrip
es3400baccppc
 */
}
