import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { stylesDialog } from '@shared/const/styles-dialog';

import { En100BaccIpComponent } from '../en-100-bacc-ip/en-100-bacc-ip.component';
import { En1100BaccCbtComponent } from '../en-1100-bacc-cbt/en-1100-bacc-cbt.component';
import { En1200BaccSpComponent } from '../en-1200-bacc-sp/en-1200-bacc-sp.component';
import { En1300BaccCpiComponent } from '../en-1300-bacc-cpi/en-1300-bacc-cpi.component';
import { En1500BaccFpComponent } from '../en-1500-bacc-fp/en-1500-bacc-fp.component';
import { En1600BaccFctComponent } from '../en-1600-bacc-fct/en-1600-bacc-fct.component';
import { En1700BaccPiComponent } from '../en-1700-bacc-pi/en-1700-bacc-pi.component';
import { En1800BaccCapComponent } from '../en-1800-bacc-cap/en-1800-bacc-cap.component';
import { En1900BaccPaiComponent } from '../en-1900-bacc-pai/en-1900-bacc-pai.component';
import { En200BaccHdiComponent } from '../en-200-bacc-hdi/en-200-bacc-hdi.component';
import { En2400BaccBbbComponent } from '../en-2400-bacc-bbb/en-2400-bacc-bbb.component';
import { En2500BaccHstComponent } from '../en-2500-bacc-hst/en-2500-bacc-hst.component';
import { En300BaccGpComponent } from '../en-300-bacc-gp/en-300-bacc-gp.component';
import { En3000BaccAecpComponent } from '../en-3000-bacc-aecp/en-3000-bacc-aecp.component';
import { En3100BaccAciComponent } from '../en-3100-bacc-aci/en-3100-bacc-aci.component';
import { En3200BaccCpsComponent } from '../en-3200-bacc-cps/en-3200-bacc-cps.component';
import { En3300BaccFripComponent } from '../en-3300-bacc-frip/en-3300-bacc-frip.component';
import { En3400BaccPpcComponent } from '../en-3400-bacc-ppc/en-3400-bacc-ppc.component';
import { En400BaccPtComponent } from '../en-400-bacc-pt/en-400-bacc-pt.component';
import { En500BaccTpfComponent } from '../en-500-bacc-tpf/en-500-bacc-tpf.component';
import { En600BaccCsalComponent } from '../en-600-bacc-csal/en-600-bacc-csal.component';
import { En700BaccEpcComponent } from '../en-700-bacc-epc/en-700-bacc-epc.component';
import { En800BaccPiComponent } from '../en-800-bacc-pi/en-800-bacc-pi.component';
import { En900BaccPiiComponent } from '../en-900-bacc-pii/en-900-bacc-pii.component';
import { En2200BaccCcpiiComponent } from '../en-2200-bacc-ccpii/en-2200-bacc-ccpii.component';
import { En2000BaccPaiiComponent } from '../en-2000-bacc-paii/en-2000-bacc-paii.component';
import { En2100BaccCcpiComponent } from '../en-2100-bacc-ccpi/en-2100-bacc-ccpi.component';
import { En2300BaccCcpiiiComponent } from '../en-2300-bacc-ccpiii/en-2300-bacc-ccpiii.component';
import { En2600BaccEdaComponent } from '../en-2600-bacc-eda/en-2600-bacc-eda.component';
import { En2700BaccTpComponent } from '../en-2700-bacc-tp/en-2700-bacc-tp.component';
import { En2800BaccTgtComponent } from '../en-2800-bacc-tgt/en-2800-bacc-tgt.component';
import { En2900BaccArpComponent } from '../en-2900-bacc-arp/en-2900-bacc-arp.component';
import { En1400BaccLtComponent } from '../en-1400-bacc-lt/en-1400-bacc-lt.component';
import { En1000BaccCiComponent } from '../en-1000-bacc-ci/en-1000-bacc-ci.component';

@Component({
  selector: 'app-courses-en-bacc-ac',
  imports: [MatButtonModule],
  templateUrl: './courses-en-bacc-ac.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesEnBaccAcComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'en100baccip':
        this._dialog.open(En100BaccIpComponent, stylesDialog);
        break;
      case 'en200bacchdi':
        this._dialog.open(En200BaccHdiComponent, stylesDialog);
        break;
      case 'en300baccgp':
        this._dialog.open(En300BaccGpComponent, stylesDialog);
        break;
      case 'en400baccpt':
        this._dialog.open(En400BaccPtComponent, stylesDialog);
        break;
      case 'en500bacctpf':
        this._dialog.open(En500BaccTpfComponent, stylesDialog);
        break;
      case 'en600bacccsal':
        this._dialog.open(En600BaccCsalComponent, stylesDialog);
        break;
      case 'en700baccpi':
        this._dialog.open(En700BaccEpcComponent, stylesDialog);
        break;
      case 'en800baccpi':
        this._dialog.open(En800BaccPiComponent, stylesDialog);
        break;
      case 'en900baccpii':
        this._dialog.open(En900BaccPiiComponent, stylesDialog);
        break;
      case 'en1000baccic':
        this._dialog.open(En1000BaccCiComponent, stylesDialog);
        break;
      case 'en1100bacccbt':
        this._dialog.open(En1100BaccCbtComponent, stylesDialog);
        break;
      case 'en1200baccsp':
        this._dialog.open(En1200BaccSpComponent, stylesDialog);
        break;
      case 'en1300bacccpi':
        this._dialog.open(En1300BaccCpiComponent, stylesDialog);
        break;
      case 'en1400bacclt':
        this._dialog.open(En1400BaccLtComponent, stylesDialog);
        break;
      case 'en1500baccfp':
        this._dialog.open(En1500BaccFpComponent, stylesDialog);
        break;
      case 'en1600baccfct':
        this._dialog.open(En1600BaccFctComponent, stylesDialog);
        break;
      case 'en1700baccpi':
        this._dialog.open(En1700BaccPiComponent, stylesDialog);
        break;
      case 'en1800bacccap':
        this._dialog.open(En1800BaccCapComponent, stylesDialog);
        break;
      case 'en1900baccpai':
        this._dialog.open(En1900BaccPaiComponent, stylesDialog);
        break;
      case 'en2000baccpaii':
        this._dialog.open(En2000BaccPaiiComponent, stylesDialog);
        break;
      case 'en2100baccccpi':
        this._dialog.open(En2100BaccCcpiComponent, stylesDialog);
        break;
      case 'en2200baccccpii':
        this._dialog.open(En2200BaccCcpiiComponent, stylesDialog);
        break;
      case 'en2300baccccpiii':
        this._dialog.open(En2300BaccCcpiiiComponent, stylesDialog);
        break;
      case 'en2400baccbbb':
        this._dialog.open(En2400BaccBbbComponent, stylesDialog);
        break;
      case 'en2500bacchst':
        this._dialog.open(En2500BaccHstComponent, stylesDialog);
        break;
      case 'en2600bacceda':
        this._dialog.open(En2600BaccEdaComponent, stylesDialog);
        break;
      case 'en2700bacctp':
        this._dialog.open(En2700BaccTpComponent, stylesDialog);
        break;
      case 'en2800bacctgt':
        this._dialog.open(En2800BaccTgtComponent, stylesDialog);
        break;
      case 'en2900baccarp':
        this._dialog.open(En2900BaccArpComponent, stylesDialog);
        break;
      case 'en3000baccaecp':
        this._dialog.open(En3000BaccAecpComponent, stylesDialog);
        break;
      case 'en3100baccaci':
        this._dialog.open(En3100BaccAciComponent, stylesDialog);
        break;
      case 'en3200bacccps':
        this._dialog.open(En3200BaccCpsComponent, stylesDialog);
        break;
      case 'en3300baccfrip':
        this._dialog.open(En3300BaccFripComponent, stylesDialog);
        break;
      case 'en3400baccppc':
        this._dialog.open(En3400BaccPpcComponent, stylesDialog);
        break;
    }
  }
}
