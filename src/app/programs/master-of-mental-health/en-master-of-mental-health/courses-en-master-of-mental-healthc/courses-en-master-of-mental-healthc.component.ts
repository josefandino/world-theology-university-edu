import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { EnMamhAp700Component } from '../en-mamh-ap-700/en-mamh-ap-700.component';
import { EnMamhAsp2100Component } from '../en-mamh-asp-2100/en-mamh-asp-2100.component';
import { EnMamhCap1800Component } from '../en-mamh-cap-1800/en-mamh-cap-1800.component';
import { EnMamhCbtt1300Component } from '../en-mamh-cbtt-1300/en-mamh-cbtt-1300.component';
import { EnMamhEd2200Component } from '../en-mamh-ed-2200/en-mamh-ed-2200.component';
import { EnMamhFct1900Component } from '../en-mamh-fct-1900/en-mamh-fct-1900.component';
import { EnMamhFmhcp100Component } from '../en-mamh-fmhcp-100/en-mamh-fmhcp-100.component';
import { EnMamhFp2600Component } from '../en-mamh-fp-2600/en-mamh-fp-2600.component';
import { EnMamhGdtp900Component } from '../en-mamh-gdtp-900/en-mamh-gdtp-900.component';
import { EnMamhHgd400Component } from '../en-mamh-hgd-400/en-mamh-hgd-400.component';
import { EnMamhIc1100Component } from '../en-mamh-ic-1100/en-mamh-ic-1100.component';
import { EnMamhIcsl200Component } from '../en-mamh-icsl-200/en-mamh-icsl-200.component';
import { EnMamhIctp300Component } from '../en-mamh-ictp-300/en-mamh-ictp-300.component';
import { EnMamhIpc1600Component } from '../en-mamh-ipc-1600/en-mamh-ipc-1600.component';
import { EnMamhNr1500Component } from '../en-mamh-nr-1500/en-mamh-nr-1500.component';
import { EnMamhPagd2000Component } from '../en-mamh-pagd-2000/en-mamh-pagd-2000.component';
import { EnMamhPcei500Component } from '../en-mamh-pcei-500/en-mamh-pcei-500.component';
import { EnMamhPmhcp600Component } from '../en-mamh-pmhcp-600/en-mamh-pmhcp-600.component';
import { EnMamhPov1200Component } from '../en-mamh-pov-1200/en-mamh-pov-1200.component';
import { EnMamhPsyp1400Component } from '../en-mamh-psyp-1400/en-mamh-psyp-1400.component';
import { EnMamhRebs800Component } from '../en-mamh-rebs-800/en-mamh-rebs-800.component';
import { EnMamhVdd1000Component } from '../en-mamh-vdd-1000/en-mamh-vdd-1000.component';
import { EnMamhApt1700Component } from '../en-mamh-apt-1700/en-mamh-apt-1700.component';
import { En2300MamhFpComponent } from '../en-2300-mamh-fp/en-2300-mamh-fp.component';

@Component({
  selector: 'app-courses-en-master-of-mental-healthc',
  imports: [MatButtonModule],
  templateUrl: './courses-en-master-of-mental-healthc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesEnMasterOfMentalHealthcComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'mamhfmhcp100':
        this._dialog.open(EnMamhFmhcp100Component, stylesDialog);
        break;
      case 'mamhicsl200':
        this._dialog.open(EnMamhIcsl200Component, stylesDialog);
        break;
      case 'mamhictp300':
        this._dialog.open(EnMamhIctp300Component, stylesDialog);
        break;
      case 'mamhhgd400':
        this._dialog.open(EnMamhHgd400Component, stylesDialog);
        break;
      case 'mamhpcei500':
        this._dialog.open(EnMamhPcei500Component, stylesDialog);
        break;
      case 'mamhpmhcp600':
        this._dialog.open(EnMamhPmhcp600Component, stylesDialog);
        break;
      case 'mamhap700':
        this._dialog.open(EnMamhAp700Component, stylesDialog);
        break;
      case 'mamhrebs800':
        this._dialog.open(EnMamhRebs800Component, stylesDialog);
        break;
      case 'mamhgdtp900':
        this._dialog.open(EnMamhGdtp900Component, stylesDialog);
        break;
      case 'mamhvdd1000':
        this._dialog.open(EnMamhVdd1000Component, stylesDialog);
        break;
      case 'mamhic1100':
        this._dialog.open(EnMamhIc1100Component, stylesDialog);
        break;
      case 'mamhpov1200':
        this._dialog.open(EnMamhPov1200Component, stylesDialog);
        break;
      case 'mamhcbtt1300':
        this._dialog.open(EnMamhCbtt1300Component, stylesDialog);
        break;
      case 'mamhpsyp1400':
        this._dialog.open(EnMamhPsyp1400Component, stylesDialog);
        break;
      case 'mamhnr1500':
        this._dialog.open(EnMamhNr1500Component, stylesDialog);
        break;
      case 'mamhipc1600':
        this._dialog.open(EnMamhIpc1600Component, stylesDialog);
        break;
      case 'mamhapt1700':
        this._dialog.open(EnMamhApt1700Component, stylesDialog);
        break;
      case 'mamhcap1800':
        this._dialog.open(EnMamhCap1800Component, stylesDialog);
        break;
      case 'mamhfct1900':
        this._dialog.open(EnMamhFct1900Component, stylesDialog);
        break;
      case 'mamhpagd2000':
        this._dialog.open(EnMamhPagd2000Component, stylesDialog);
        break;
      case 'mamhasp2100':
        this._dialog.open(EnMamhAsp2100Component, stylesDialog);
        break;
      case 'mamhed2200':
        this._dialog.open(EnMamhEd2200Component, stylesDialog);
        break;
      case 'mamhfp2600':
        this._dialog.open(EnMamhFp2600Component, stylesDialog);
        break;
      case 'mamhfp2300':
        this._dialog.open(En2300MamhFpComponent, stylesDialog);
        break;
    }
  }
}
