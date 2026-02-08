import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

import { stylesDialog } from '@shared/const/styles-dialog';
import { EsMamhAp700Component } from '../es-mamh-ap-700/es-mamh-ap-700.component';
import { EsMamhAsp2100Component } from '../es-mamh-asp-2100/es-mamh-asp-2100.component';
import { EsMamhCap1800Component } from '../es-mamh-cap-1800/es-mamh-cap-1800.component';
import { EsMamhCbtt1300Component } from '../es-mamh-cbtt-1300/es-mamh-cbtt-1300.component';
import { EsMamhEd2200Component } from '../es-mamh-ed-2200/es-mamh-ed-2200.component';
import { EsMamhFct1900Component } from '../es-mamh-fct-1900/es-mamh-fct-1900.component';
import { EsMamhFmhcp100Component } from '../es-mamh-fmhcp-100/es-mamh-fmhcp-100.component';
import { EsMamhGdtp900Component } from '../es-mamh-gdtp-900/es-mamh-gdtp-900.component';
import { EsMamhHgd400Component } from '../es-mamh-hgd-400/es-mamh-hgd-400';
import { EsMamhIc1100Component } from '../es-mamh-ic-1100/es-mamh-ic-1100.component';
import { EsMamhIcsl200Component } from '../es-mamh-icsl-200/es-mamh-icsl-200.component';
import { EsMamhIctp300Component } from '../es-mamh-ictp-300/es-mamh-ictp-300.component';
import { EsMamhIpc1600Component } from '../es-mamh-ipc-1600/es-mamh-ipc-1600.component';
import { EsMamhNr1500Component } from '../es-mamh-nr-1500/es-mamh-nr-1500.component';
import { EsMamhPagd2000Component } from '../es-mamh-pagd-2000/es-mamh-pagd-2000.component';
import { EsMamhPcei500Component } from '../es-mamh-pcei-500/es-mamh-pcei-500.component';
import { EsMamhPmhcp600Component } from '../es-mamh-pmhcp-600/es-mamh-pmhcp-600.component';
import { EsMamhPov1200Component } from '../es-mamh-pov-1200/es-mamh-pov-1200.component';
import { EsMamhPsyp1400Component } from '../es-mamh-psyp-1400/es-mamh-psyp-1400.component';
import { EsMamhRebs800Component } from '../es-mamh-rebs-800/es-mamh-rebs-800.component';
import { EsMamhVdd1000Component } from '../es-mamh-vdd-1000/es-mamh-vdd-1000.component';
import { EsMamhApt1700Component } from '../es-mamh-apt-1700/es-mamh-apt-1700.component';
import { Es2300MamhFpComponent } from '../es-2300-mamh-fp/es-2300-mamh-fp.component';

@Component({
  selector: 'app-es-master-of-mental-healthc-courses',
  imports: [MatButtonModule],
  templateUrl: './es-master-of-mental-healthc-courses.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMasterOfMentalHealthcCoursesComponent {
  public flyer =
    './assets/webp/ma-salud-mental/dinamicas-del-desarrollo-vocacional-es.webp';
  public alt = 'Flyer World Theology University';

  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'mamhfmhcp100':
        this._dialog.open(EsMamhFmhcp100Component, stylesDialog);
        break;
      case 'mamhicsl200':
        this._dialog.open(EsMamhIcsl200Component, stylesDialog);
        break;
      case 'mamhictp300':
        this._dialog.open(EsMamhIctp300Component, stylesDialog);
        break;
      case 'mamhhgd400':
        this._dialog.open(EsMamhHgd400Component, stylesDialog);
        break;
      case 'mamhpcei500':
        this._dialog.open(EsMamhPcei500Component, stylesDialog);
        break;
      case 'mamhpmhcp600':
        this._dialog.open(EsMamhPmhcp600Component, stylesDialog);
        break;
      case 'mamhap700':
        this._dialog.open(EsMamhAp700Component, stylesDialog);
        break;
      case 'mamhrebs800':
        this._dialog.open(EsMamhRebs800Component, stylesDialog);
        break;
      case 'mamhgdtp900':
        this._dialog.open(EsMamhGdtp900Component, stylesDialog);
        break;
      case 'mamhvdd1000':
        this._dialog.open(EsMamhVdd1000Component, stylesDialog);
        break;
      case 'mamhic1100':
        this._dialog.open(EsMamhIc1100Component, stylesDialog);
        break;
      case 'mamhpov1200':
        this._dialog.open(EsMamhPov1200Component, stylesDialog);
        break;
      case 'mamhcbtt1300':
        this._dialog.open(EsMamhCbtt1300Component, stylesDialog);
        break;
      case 'mamhpsyp1400':
        this._dialog.open(EsMamhPsyp1400Component, stylesDialog);
        break;
      case 'mamhnr1500':
        this._dialog.open(EsMamhNr1500Component, stylesDialog);
        break;
      case 'mamhipc1600':
        this._dialog.open(EsMamhIpc1600Component, stylesDialog);
        break;
      case 'mamhapt1700':
        this._dialog.open(EsMamhApt1700Component, stylesDialog);
        break;
      case 'mamhcap1800':
        this._dialog.open(EsMamhCap1800Component, stylesDialog);
        break;
      case 'mamhfct1900':
        this._dialog.open(EsMamhFct1900Component, stylesDialog);
        break;
      case 'mamhpagd2000':
        this._dialog.open(EsMamhPagd2000Component, stylesDialog);
        break;
      case 'mamhasp2100':
        this._dialog.open(EsMamhAsp2100Component, stylesDialog);
        break;
      case 'mamhed2200':
        this._dialog.open(EsMamhEd2200Component, stylesDialog);
        break;

      case 'mamhfp2300':
        this._dialog.open(Es2300MamhFpComponent, stylesDialog);
        break;
    }
  }
}
