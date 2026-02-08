import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { En2800BaDccBtComponent } from '../en-2800-ba-dcc-bt/en-2800-ba-dcc-bt.component';
import { En2900BaDccCfeComponent } from '../en-2900-ba-dcc-cfe/en-2900-ba-dcc-cfe.component';
import { En200BaDccPsComponent } from '../en-200-ba-dcc-ps/en-200-ba-dcc-ps.component';
import { En300BaDccCtComponent } from '../en-300-ba-dcc-ct/en-300-ba-dcc-ct.component';
import { En400BaDccWcwComponent } from '../en-400-ba-dcc-wcw/en-400-ba-dcc-wcw.component';
import { En500BaDccMtComponent } from '../en-500-ba-dcc-mt/en-500-ba-dcc-mt.component';
import { En600BaDccPpstComponent } from '../en-600-ba-dcc-ppst/en-600-ba-dcc-ppst.component';
import { En700BaDccOcComponent } from '../en-700-ba-dcc-oc/en-700-ba-dcc-oc.component';
import { En800BaDccDmComponent } from '../en-800-ba-dcc-dm/en-800-ba-dcc-dm.component';
import { En900BaDccJwComponent } from '../en-900-ba-dcc-jw/en-900-ba-dcc-jw.component';
import { En1000BaDccPdvComponent } from '../en-1000-ba-dcc-pdv/en-1000-ba-dcc-pdv.component';
import { En1100BaDccIcComponent } from '../en-1100-ba-dcc-ic/en-1100-ba-dcc-ic.component';
import { En1200BaDccPrimComponent } from '../en-1200-ba-dcc-prim/en-1200-ba-dcc-prim.component';
import { En1300BaDccRtpComponent } from '../en-1300-ba-dcc-rtp/en-1300-ba-dcc-rtp.component';
import { En1400BaDccDcpComponent } from '../en-1400-ba-dcc-dcp/en-1400-ba-dcc-dcp.component';
import { En1500BaDccAcaComponent } from '../en-1500-ba-dcc-aca/en-1500-ba-dcc-aca.component';
import { En1600BaDccCpmComponent } from '../en-1600-ba-dcc-cpm/en-1600-ba-dcc-cpm.component';
import { En1700BaDccCscComponent } from '../en-1700-ba-dcc-csc/en-1700-ba-dcc-csc.component';
import { En1800BaDccCcmComponent } from '../en-1800-ba-dcc-ccm/en-1800-ba-dcc-ccm.component';
import { En1900BaDccPcComponent } from '../en-1900-ba-dcc-pc/en-1900-ba-dcc-pc.component';
import { En2000DccEmccComponent } from '../en-2000-dcc-emcc/en-2000-dcc-emcc.component';
import { En2100BaDccAbsComponent } from '../en-2100-ba-dcc-abs/en-2100-ba-dcc-abs.component';
import { En2200BaDccAdaComponent } from '../en-2200-ba-dcc-ada/en-2200-ba-dcc-ada.component';
import { En2300BaDccMlaComponent } from '../en-2300-ba-dcc-mla/en-2300-ba-dcc-mla.component';
import { En2400BaDccSmmsComponent } from '../en-2400-ba-dcc-smms/en-2400-ba-dcc-smms.component';
import { En2500BaDccCrComponent } from '../en-2500-ba-dcc-cr/en-2500-ba-dcc-cr.component';
import { En2600BaDccCmaComponent } from '../en-2600-ba-dcc-cma/en-2600-ba-dcc-cma.component';
import { En2700BaDccPiComponent } from '../en-2700-ba-dcc-pi/en-2700-ba-dcc-pi.component';
import { En100BaDccItComponent } from '../en-100-ba-dcc-it/en-100-ba-dcc-it.component';

@Component({
  selector: 'app-courses-en-bacomn',
  imports: [MatButtonModule],
  templateUrl: './courses-en-bacomn.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesEnBacomnComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-ba-dcc-it':
        this._dialog.open(En100BaDccItComponent, stylesDialog);
        break;
      case '200-ba-dcc-ps':
        this._dialog.open(En200BaDccPsComponent, stylesDialog);
        break;
      case '300-ba-dcc-ct':
        this._dialog.open(En300BaDccCtComponent, stylesDialog);
        break;
      case '400-ba-dcc-wcw':
        this._dialog.open(En400BaDccWcwComponent, stylesDialog);
        break;
      case '500-ba-dcc-mt':
        this._dialog.open(En500BaDccMtComponent, stylesDialog);
        break;
      case '600-ba-dcc-ppst':
        this._dialog.open(En600BaDccPpstComponent, stylesDialog);
        break;
      case '700-ba-dcc-oc':
        this._dialog.open(En700BaDccOcComponent, stylesDialog);
        break;
      case '800-ba-dcc-dm':
        this._dialog.open(En800BaDccDmComponent, stylesDialog);
        break;
      case '900-ba-dcc-jw':
        this._dialog.open(En900BaDccJwComponent, stylesDialog);
        break;
      case '1000-ba-dcc-pdv':
        this._dialog.open(En1000BaDccPdvComponent, stylesDialog);
        break;
      case '1100-ba-dcc-ic':
        this._dialog.open(En1100BaDccIcComponent, stylesDialog);
        break;
      case '1200-ba-dcc-prim':
        this._dialog.open(En1200BaDccPrimComponent, stylesDialog);
        break;
      case '1300-ba-dcc-rtp':
        this._dialog.open(En1300BaDccRtpComponent, stylesDialog);
        break;
      case '1400-ba-dcc-dcp':
        this._dialog.open(En1400BaDccDcpComponent, stylesDialog);
        break;
      case '1500-ba-dcc-aca':
        this._dialog.open(En1500BaDccAcaComponent, stylesDialog);
        break;
      case '1600-ba-dcc-cpm':
        this._dialog.open(En1600BaDccCpmComponent, stylesDialog);

        break;
      case '1700-ba-dcc-csc':
        this._dialog.open(En1700BaDccCscComponent, stylesDialog);
        break;
      case '1800-ba-dcc-ccm':
        this._dialog.open(En1800BaDccCcmComponent, stylesDialog);
        break;
      case '1900-ba-dcc-pc':
        this._dialog.open(En1900BaDccPcComponent, stylesDialog);
        break;
      case '2000-dcc-emcc':
        this._dialog.open(En2000DccEmccComponent, stylesDialog);
        break;
      case '2100-ba-dcc-abs':
        this._dialog.open(En2100BaDccAbsComponent, stylesDialog);
        break;
      case '2200-ba-dcc-ada':
        this._dialog.open(En2200BaDccAdaComponent, stylesDialog);
        break;
      case '2300-ba-dcc-mla':
        this._dialog.open(En2300BaDccMlaComponent, stylesDialog);
        break;
      case '2400-ba-dcc-smms':
        this._dialog.open(En2400BaDccSmmsComponent, stylesDialog);
        break;
      case '2500-ba-dcc-cr':
        this._dialog.open(En2500BaDccCrComponent, stylesDialog);
        break;
      case '2600-ba-dcc-cma':
        this._dialog.open(En2600BaDccCmaComponent, stylesDialog);
        break;
      case '2700-ba-dcc-pi':
        this._dialog.open(En2700BaDccPiComponent, stylesDialog);

        break;
      case '2800-ba-dcc-bt':
        this._dialog.open(En2800BaDccBtComponent, stylesDialog);
        break;
      case '2900-ba-dcc-cfe':
        this._dialog.open(En2900BaDccCfeComponent, stylesDialog);
        break;
    }
  }
}
/*
ng g c es-100-ba-dcc-it -s
ng g c es-200-ba-dcc-ps -s
ng g c es-300-ba-dcc-ct -s
ng g c es-400-ba-dcc-wcw -s
ng g c es-500-ba-dcc-mt -s
ng g c es-600-ba-dcc-ppst -s
ng g c es-700-ba-dcc-oc -s
ng g c es-800-ba-dcc-dm -s
ng g c es-900-ba-dcc-jw -s
ng g c es-1000-ba-dcc-pdv -s
ng g c es-1100-ba-dcc-ic -s
ng g c es-1200-ba-dcc-prim -s
ng g c es-1300-ba-dcc-rtp -s
ng g c es-1400-ba-dcc-dcp -s
ng g c es-1500-ba-dcc-aca -s
ng g c es-1600-ba-dcc-cpm -s
ng g c es-1700-ba-dcc-csc -s
ng g c es-1800-ba-dcc-ccm -s
ng g c es-1900-ba-dcc-pc -s
ng g c es-2000-dcc-emcc -s
ng g c es-2100-ba-dcc-abs -s
ng g c es-2200-ba-dcc-ada -s
ng g c es-2300-ba-dcc-mla -s
ng g c es-2400-ba-dcc-smms -s
ng g c es-2500-ba-dcc-cr -s
ng g c es-2600-ba-dcc-cma -s
ng g c es-2700-ba-dcc-pi -s
ng g c es-2800-ba-dcc-bt -s
ng g c es-2900-ba-dcc-cfe -s
*/
