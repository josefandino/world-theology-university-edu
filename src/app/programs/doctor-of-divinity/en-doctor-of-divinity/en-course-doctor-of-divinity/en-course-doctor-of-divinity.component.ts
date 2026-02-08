import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { En100DocDivEamtrComponent } from '../en-100-doc-div-eamtr/en-100-doc-div-eamtr.component';
import { En1000DocDivCesaComponent } from '../en-1000-doc-div-cesa/en-1000-doc-div-cesa.component';
import { En1100DocDivIeComponent } from '../en-1100-doc-div-ie/en-1100-doc-div-ie.component';
import { En1200DocDivTlsmmComponent } from '../en-1200-doc-div-tlsmm/en-1200-doc-div-tlsmm.component';
import { En1300DocDivPltpComponent } from '../en-1300-doc-div-pltp/en-1300-doc-div-pltp.component';
import { En1400DocDivScfttaComponent } from '../en-1400-doc-div-scftta/en-1400-doc-div-scftta.component';
import { En1500DocDivLicsrComponent } from '../en-1500-doc-div-licsr/en-1500-doc-div-licsr.component';
import { En1600DocDivIidComponent } from '../en-1600-doc-div-iid/en-1600-doc-div-iid.component';
import { En1700DocDivCtiaComponent } from '../en-1700-doc-div-ctia/en-1700-doc-div-ctia.component';
import { En1800DocDivRrpComponent } from '../en-1800-doc-div-rrp/en-1800-doc-div-rrp.component';
import { En1900DocDivHwrComponent } from '../en-1900-doc-div-hwr/en-1900-doc-div-hwr.component';
import { En200DocDivDrlComponent } from '../en-200-doc-div-drl/en-200-doc-div-drl.component';
import { En2000DocDivMmrrComponent } from '../en-2000-doc-div-mmrr/en-2000-doc-div-mmrr.component';
import { En2100DocDivBhComponent } from '../en-2100-doc-div-bh/en-2100-doc-div-bh.component';
import { En2200DocDivBgComponent } from '../en-2200-doc-div-bg/en-2200-doc-div-bg.component';
import { En2300DocDivElComponent } from '../en-2300-doc-div-el/en-2300-doc-div-el.component';
import { En2400DocDivPprcComponent } from '../en-2400-doc-div-pprc/en-2400-doc-div-pprc.component';
import { En2500DocDivTrsComponent } from '../en-2500-doc-div-trs/en-2500-doc-div-trs.component';
import { En2600DocDivSoidComponent } from '../en-2600-doc-div-soid/en-2600-doc-div-soid.component';
import { En2700DocDivTolComponent } from '../en-2700-doc-div-tol/en-2700-doc-div-tol.component';
import { En2800DocDivSacComponent } from '../en-2800-doc-div-sac/en-2800-doc-div-sac.component';
import { En2900DocDivEcComponent } from '../en-2900-doc-div-ec/en-2900-doc-div-ec.component';
import { En300DocDivDsotdComponent } from '../en-300-doc-div-dsotd/en-300-doc-div-dsotd.component';
import { En3000DocDivGmcComponent } from '../en-3000-doc-div-gmc/en-3000-doc-div-gmc.component';
import { En400DocDivHcastComponent } from '../en-400-doc-div-hcast/en-400-doc-div-hcast.component';
import { En500DocDivIhbsComponent } from '../en-500-doc-div-ihbs/en-500-doc-div-ihbs.component';
import { En600DocDivNtcmComponent } from '../en-600-doc-div-ntcm/en-600-doc-div-ntcm.component';
import { En700DocDivAssctComponent } from '../en-700-doc-div-assct/en-700-doc-div-assct.component';
import { En800DocDivStComponent } from '../en-800-doc-div-st/en-800-doc-div-st.component';
import { En900DocDivGeComponent } from '../en-900-doc-div-ge/en-900-doc-div-ge.component';
@Component({
  selector: 'app-en-course-doctor-of-divinity',
  imports: [MatButtonModule],
  templateUrl: './en-course-doctor-of-divinity.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnCourseDoctorOfDivinityComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-doc-div-eamtr':
        this._dialog.open(En100DocDivEamtrComponent, stylesDialog);
        break;
      case '200-doc-div-drl':
        this._dialog.open(En200DocDivDrlComponent, stylesDialog);
        break;
      case '300-doc-div-dsotd':
        this._dialog.open(En300DocDivDsotdComponent, stylesDialog);
        break;
      case '400-doc-div-hcast':
        this._dialog.open(En400DocDivHcastComponent, stylesDialog);
        break;
      case '500-doc-div-ihbs':
        this._dialog.open(En500DocDivIhbsComponent, stylesDialog);
        break;
      case '600-doc-div-ntcm':
        this._dialog.open(En600DocDivNtcmComponent, stylesDialog);
        break;
      case '700-doc-div-assct':
        this._dialog.open(En700DocDivAssctComponent, stylesDialog);
        break;
      case '800-doc-div-st':
        this._dialog.open(En800DocDivStComponent, stylesDialog);
        break;
      case '900-doc-div-ge':
        this._dialog.open(En900DocDivGeComponent, stylesDialog);
        break;
      case '1000-doc-div-cesa':
        this._dialog.open(En1000DocDivCesaComponent, stylesDialog);
        break;
      case '1100-doc-div-ie':
        this._dialog.open(En1100DocDivIeComponent, stylesDialog);
        break;
      case '1200-doc-div-tlsmm':
        this._dialog.open(En1200DocDivTlsmmComponent, stylesDialog);
        break;
      case '1300-doc-div-pltp':
        this._dialog.open(En1300DocDivPltpComponent, stylesDialog);
        break;
      case '1400-doc-div-scftta':
        this._dialog.open(En1400DocDivScfttaComponent, stylesDialog);
        break;
      case '1500-doc-div-licsr':
        this._dialog.open(En1500DocDivLicsrComponent, stylesDialog);
        break;
      case '1600-doc-div-iid':
        this._dialog.open(En1600DocDivIidComponent, stylesDialog);
        break;
      case '1700-doc-div-ctia':
        this._dialog.open(En1700DocDivCtiaComponent, stylesDialog);
        break;
      case '1800-doc-div-rrp':
        this._dialog.open(En1800DocDivRrpComponent, stylesDialog);
        break;
      case '1900-doc-div-hwr':
        this._dialog.open(En1900DocDivHwrComponent, stylesDialog);
        break;
      case '2000-doc-div-mmrr':
        this._dialog.open(En2000DocDivMmrrComponent, stylesDialog);
        break;
      case '2100-doc-div-bh':
        this._dialog.open(En2100DocDivBhComponent, stylesDialog);
        break;
      case '2200-doc-div-bg':
        this._dialog.open(En2200DocDivBgComponent, stylesDialog);
        break;
      case '2300-doc-div-el':
        this._dialog.open(En2300DocDivElComponent, stylesDialog);
        break;
      case '2400-doc-div-pprc':
        this._dialog.open(En2400DocDivPprcComponent, stylesDialog);
        break;
      case '2500-doc-div-trs':
        this._dialog.open(En2500DocDivTrsComponent, stylesDialog);
        break;
      case '2600-doc-div-soid':
        this._dialog.open(En2600DocDivSoidComponent, stylesDialog);
        break;
      case '2700-doc-div-tol':
        this._dialog.open(En2700DocDivTolComponent, stylesDialog);
        break;
      case '2800-doc-div-sac':
        this._dialog.open(En2800DocDivSacComponent, stylesDialog);
        break;
      case '2900-doc-div-ec':
        this._dialog.open(En2900DocDivEcComponent, stylesDialog);
        break;
      case '3000-doc-div-gmc':
        this._dialog.open(En3000DocDivGmcComponent, stylesDialog);
        break;
    }
  }
}
