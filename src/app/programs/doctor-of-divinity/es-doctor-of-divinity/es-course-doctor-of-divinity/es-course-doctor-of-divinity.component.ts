import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100DocDivEamtrComponent } from '../es-100-doc-div-eamtr/es-100-doc-div-eamtr.component';
import { Es1000DocDivCesaComponent } from '../es-1000-doc-div-cesa/es-1000-doc-div-cesa.component';
import { Es1100DocDivIeComponent } from '../es-1100-doc-div-ie/es-1100-doc-div-ie.component';
import { Es1200DocDivTlsmmComponent } from '../es-1200-doc-div-tlsmm/es-1200-doc-div-tlsmm.component';
import { Es1300DocDivPltpComponent } from '../es-1300-doc-div-pltp/es-1300-doc-div-pltp.component';
import { Es1400DocDivScfttaComponent } from '../es-1400-doc-div-scftta/es-1400-doc-div-scftta.component';
import { Es1500DocDivLicsrComponent } from '../es-1500-doc-div-licsr/es-1500-doc-div-licsr.component';
import { Es1600DocDivIidComponent } from '../es-1600-doc-div-iid/es-1600-doc-div-iid.component';
import { Es1700DocDivCtiaComponent } from '../es-1700-doc-div-ctia/es-1700-doc-div-ctia.component';
import { Es1800DocDivRrpComponent } from '../es-1800-doc-div-rrp/es-1800-doc-div-rrp.component';
import { Es1900DocDivHwrComponent } from '../es-1900-doc-div-hwr/es-1900-doc-div-hwr.component';
import { Es200DocDivDrlComponent } from '../es-200-doc-div-drl/es-200-doc-div-drl.component';
import { Es2000DocDivMmrrComponent } from '../es-2000-doc-div-mmrr/es-2000-doc-div-mmrr.component';
import { Es2100DocDivBhComponent } from '../es-2100-doc-div-bh/es-2100-doc-div-bh.component';
import { Es2200DocDivBgComponent } from '../es-2200-doc-div-bg/es-2200-doc-div-bg.component';
import { Es2300DocDivElComponent } from '../es-2300-doc-div-el/es-2300-doc-div-el.component';
import { Es2400DocDivPprcComponent } from '../es-2400-doc-div-pprc/es-2400-doc-div-pprc.component';
import { Es2500DocDivTrsComponent } from '../es-2500-doc-div-trs/es-2500-doc-div-trs.component';
import { Es2600DocDivSoidComponent } from '../es-2600-doc-div-soid/es-2600-doc-div-soid.component';
import { Es2700DocDivTolComponent } from '../es-2700-doc-div-tol/es-2700-doc-div-tol.component';
import { Es2800DocDivSacComponent } from '../es-2800-doc-div-sac/es-2800-doc-div-sac.component';
import { Es2900DocDivEcComponent } from '../es-2900-doc-div-ec/es-2900-doc-div-ec.component';
import { Es300DocDivDsotdComponent } from '../es-300-doc-div-dsotd/es-300-doc-div-dsotd.component';
import { Es3000DocDivGmcComponent } from '../es-3000-doc-div-gmc/es-3000-doc-div-gmc.component';
import { Es400DocDivHcastComponent } from '../es-400-doc-div-hcast/es-400-doc-div-hcast.component';
import { Es500DocDivIhbsComponent } from '../es-500-doc-div-ihbs/es-500-doc-div-ihbs.component';
import { Es600DocDivNtcmComponent } from '../es-600-doc-div-ntcm/es-600-doc-div-ntcm.component';
import { Es700DocDivAssctComponent } from '../es-700-doc-div-assct/es-700-doc-div-assct.component';
import { Es800DocDivStComponent } from '../es-800-doc-div-st/es-800-doc-div-st.component';
import { Es900DocDivGeComponent } from '../es-900-doc-div-ge/es-900-doc-div-ge.component';

@Component({
  selector: 'app-es-course-doctor-of-divinity',
  imports: [MatButtonModule],
  templateUrl: './es-course-doctor-of-divinity.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCourseDoctorOfDivinityComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-doc-div-eamtr':
        this._dialog.open(Es100DocDivEamtrComponent, stylesDialog);
        break;
      case '200-doc-div-drl':
        this._dialog.open(Es200DocDivDrlComponent, stylesDialog);
        break;
      case '300-doc-div-dsotd':
        this._dialog.open(Es300DocDivDsotdComponent, stylesDialog);
        break;
      case '400-doc-div-hcast':
        this._dialog.open(Es400DocDivHcastComponent, stylesDialog);
        break;
      case '500-doc-div-ihbs':
        this._dialog.open(Es500DocDivIhbsComponent, stylesDialog);
        break;
      case '600-doc-div-ntcm':
        this._dialog.open(Es600DocDivNtcmComponent, stylesDialog);
        break;
      case '700-doc-div-assct':
        this._dialog.open(Es700DocDivAssctComponent, stylesDialog);
        break;
      case '800-doc-div-st':
        this._dialog.open(Es800DocDivStComponent, stylesDialog);
        break;
      case '900-doc-div-ge':
        this._dialog.open(Es900DocDivGeComponent, stylesDialog);
        break;
      case '1000-doc-div-cesa':
        this._dialog.open(Es1000DocDivCesaComponent, stylesDialog);
        break;
      case '1100-doc-div-ie':
        this._dialog.open(Es1100DocDivIeComponent, stylesDialog);
        break;
      case '1200-doc-div-tlsmm':
        this._dialog.open(Es1200DocDivTlsmmComponent, stylesDialog);
        break;
      case '1300-doc-div-pltp':
        this._dialog.open(Es1300DocDivPltpComponent, stylesDialog);
        break;
      case '1400-doc-div-scftta':
        this._dialog.open(Es1400DocDivScfttaComponent, stylesDialog);
        break;
      case '1500-doc-div-licsr':
        this._dialog.open(Es1500DocDivLicsrComponent, stylesDialog);
        break;
      case '1600-doc-div-iid':
        this._dialog.open(Es1600DocDivIidComponent, stylesDialog);
        break;
      case '1700-doc-div-ctia':
        this._dialog.open(Es1700DocDivCtiaComponent, stylesDialog);
        break;
      case '1800-doc-div-rrp':
        this._dialog.open(Es1800DocDivRrpComponent, stylesDialog);
        break;
      case '1900-doc-div-hwr':
        this._dialog.open(Es1900DocDivHwrComponent, stylesDialog);
        break;
      case '2000-doc-div-mmrr':
        this._dialog.open(Es2000DocDivMmrrComponent, stylesDialog);
        break;
      case '2100-doc-div-bh':
        this._dialog.open(Es2100DocDivBhComponent, stylesDialog);
        break;
      case '2200-doc-div-bg':
        this._dialog.open(Es2200DocDivBgComponent, stylesDialog);
        break;
      case '2300-doc-div-el':
        this._dialog.open(Es2300DocDivElComponent, stylesDialog);
        break;
      case '2400-doc-div-pprc':
        this._dialog.open(Es2400DocDivPprcComponent, stylesDialog);
        break;
      case '2500-doc-div-trs':
        this._dialog.open(Es2500DocDivTrsComponent, stylesDialog);
        break;
      case '2600-doc-div-soid':
        this._dialog.open(Es2600DocDivSoidComponent, stylesDialog);
        break;
      case '2700-doc-div-tol':
        this._dialog.open(Es2700DocDivTolComponent, stylesDialog);
        break;
      case '2800-doc-div-sac':
        this._dialog.open(Es2800DocDivSacComponent, stylesDialog);
        break;
      case '2900-doc-div-ec':
        this._dialog.open(Es2900DocDivEcComponent, stylesDialog);
        break;
      case '3000-doc-div-gmc':
        this._dialog.open(Es3000DocDivGmcComponent, stylesDialog);
        break;
    }
  }
}
