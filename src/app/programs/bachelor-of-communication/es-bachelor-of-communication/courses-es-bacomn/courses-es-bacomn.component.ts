import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100BaDccItComponent } from '../es-100-ba-dcc-it/es-100-ba-dcc-it.component';
import { Es1000BaDccPdvComponent } from '../es-1000-ba-dcc-pdv/es-1000-ba-dcc-pdv.component';
import { Es1100BaDccIcComponent } from '../es-1100-ba-dcc-ic/es-1100-ba-dcc-ic.component';
import { Es1200BaDccPrimComponent } from '../es-1200-ba-dcc-prim/es-1200-ba-dcc-prim.component';
import { Es1300BaDccRtpComponent } from '../es-1300-ba-dcc-rtp/es-1300-ba-dcc-rtp.component';
import { Es1400BaDccDcpComponent } from '../es-1400-ba-dcc-dcp/es-1400-ba-dcc-dcp.component';
import { Es1500BaDccAcaComponent } from '../es-1500-ba-dcc-aca/es-1500-ba-dcc-aca.component';
import { Es1600BaDccCpmComponent } from '../es-1600-ba-dcc-cpm/es-1600-ba-dcc-cpm.component';
import { Es1700BaDccCscComponent } from '../es-1700-ba-dcc-csc/es-1700-ba-dcc-csc.component';
import { Es1800BaDccCcmComponent } from '../es-1800-ba-dcc-ccm/es-1800-ba-dcc-ccm.component';
import { Es1900BaDccPcComponent } from '../es-1900-ba-dcc-pc/es-1900-ba-dcc-pc.component';
import { Es200BaDccPsComponent } from '../es-200-ba-dcc-ps/es-200-ba-dcc-ps.component';
import { Es2000DccEmccComponent } from '../es-2000-dcc-emcc/es-2000-dcc-emcc.component';
import { Es2100BaDccAbsComponent } from '../es-2100-ba-dcc-abs/es-2100-ba-dcc-abs.component';
import { Es2200BaDccAdaComponent } from '../es-2200-ba-dcc-ada/es-2200-ba-dcc-ada.component';
import { Es2300BaDccMlaComponent } from '../es-2300-ba-dcc-mla/es-2300-ba-dcc-mla.component';
import { Es2400BaDccSmmsComponent } from '../es-2400-ba-dcc-smms/es-2400-ba-dcc-smms.component';
import { Es2500BaDccCrComponent } from '../es-2500-ba-dcc-cr/es-2500-ba-dcc-cr.component';
import { Es2600BaDccCmaComponent } from '../es-2600-ba-dcc-cma/es-2600-ba-dcc-cma.component';
import { Es2700BaDccPiComponent } from '../es-2700-ba-dcc-pi/es-2700-ba-dcc-pi.component';
import { Es2800BaDccBtComponent } from '../es-2800-ba-dcc-bt/es-2800-ba-dcc-bt.component';
import { Es2900BaDccCfeComponent } from '../es-2900-ba-dcc-cfe/es-2900-ba-dcc-cfe.component';
import { Es300BaDccCtComponent } from '../es-300-ba-dcc-ct/es-300-ba-dcc-ct.component';
import { Es400BaDccWcwComponent } from '../es-400-ba-dcc-wcw/es-400-ba-dcc-wcw.component';
import { Es500BaDccMtComponent } from '../es-500-ba-dcc-mt/es-500-ba-dcc-mt.component';
import { Es600BaDccPpstComponent } from '../es-600-ba-dcc-ppst/es-600-ba-dcc-ppst.component';
import { Es700BaDccOcComponent } from '../es-700-ba-dcc-oc/es-700-ba-dcc-oc.component';
import { Es800BaDccDmComponent } from '../es-800-ba-dcc-dm/es-800-ba-dcc-dm.component';
import { Es900BaDccJwComponent } from '../es-900-ba-dcc-jw/es-900-ba-dcc-jw.component';

@Component({
  selector: 'app-courses-es-bacomn',
  imports: [MatButtonModule],
  templateUrl: './courses-es-bacomn.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesEsBacomnComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-ba-dcc-it':
        this._dialog.open(Es100BaDccItComponent, stylesDialog);
        break;
      case '200-ba-dcc-ps':
        this._dialog.open(Es200BaDccPsComponent, stylesDialog);
        break;
      case '300-ba-dcc-ct':
        this._dialog.open(Es300BaDccCtComponent, stylesDialog);
        break;
      case '400-ba-dcc-wcw':
        this._dialog.open(Es400BaDccWcwComponent, stylesDialog);
        break;
      case '500-ba-dcc-mt':
        this._dialog.open(Es500BaDccMtComponent, stylesDialog);
        break;
      case '600-ba-dcc-ppst':
        this._dialog.open(Es600BaDccPpstComponent, stylesDialog);
        break;
      case '700-ba-dcc-oc':
        this._dialog.open(Es700BaDccOcComponent, stylesDialog);
        break;
      case '800-ba-dcc-dm':
        this._dialog.open(Es800BaDccDmComponent, stylesDialog);
        break;
      case '900-ba-dcc-jw':
        this._dialog.open(Es900BaDccJwComponent, stylesDialog);
        break;
      case '1000-ba-dcc-pdv':
        this._dialog.open(Es1000BaDccPdvComponent, stylesDialog);
        break;
      case '1100-ba-dcc-ic':
        this._dialog.open(Es1100BaDccIcComponent, stylesDialog);
        break;
      case '1200-ba-dcc-prim':
        this._dialog.open(Es1200BaDccPrimComponent, stylesDialog);
        break;
      case '1300-ba-dcc-rtp':
        this._dialog.open(Es1300BaDccRtpComponent, stylesDialog);
        break;
      case '1400-ba-dcc-dcp':
        this._dialog.open(Es1400BaDccDcpComponent, stylesDialog);
        break;
      case '1500-ba-dcc-aca':
        this._dialog.open(Es1500BaDccAcaComponent, stylesDialog);
        break;
      case '1600-ba-dcc-cpm':
        this._dialog.open(Es1600BaDccCpmComponent, stylesDialog);

        break;
      case '1700-ba-dcc-csc':
        this._dialog.open(Es1700BaDccCscComponent, stylesDialog);
        break;
      case '1800-ba-dcc-ccm':
        this._dialog.open(Es1800BaDccCcmComponent, stylesDialog);
        break;
      case '1900-ba-dcc-pc':
        this._dialog.open(Es1900BaDccPcComponent, stylesDialog);
        break;
      case '2000-dcc-emcc':
        this._dialog.open(Es2000DccEmccComponent, stylesDialog);
        break;
      case '2100-ba-dcc-abs':
        this._dialog.open(Es2100BaDccAbsComponent, stylesDialog);
        break;
      case '2200-ba-dcc-ada':
        this._dialog.open(Es2200BaDccAdaComponent, stylesDialog);
        break;
      case '2300-ba-dcc-mla':
        this._dialog.open(Es2300BaDccMlaComponent, stylesDialog);
        break;
      case '2400-ba-dcc-smms':
        this._dialog.open(Es2400BaDccSmmsComponent, stylesDialog);
        break;
      case '2500-ba-dcc-cr':
        this._dialog.open(Es2500BaDccCrComponent, stylesDialog);
        break;
      case '2600-ba-dcc-cma':
        this._dialog.open(Es2600BaDccCmaComponent, stylesDialog);
        break;
      case '2700-ba-dcc-pi':
        this._dialog.open(Es2700BaDccPiComponent, stylesDialog);

        break;
      case '2800-ba-dcc-bt':
        this._dialog.open(Es2800BaDccBtComponent, stylesDialog);
        break;
      case '2900-ba-dcc-cfe':
        this._dialog.open(Es2900BaDccCfeComponent, stylesDialog);
        break;
    }
  }
}
