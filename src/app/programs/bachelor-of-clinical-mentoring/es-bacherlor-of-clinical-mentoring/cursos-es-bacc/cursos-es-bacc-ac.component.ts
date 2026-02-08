import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100BaccIpComponent } from '../es-100-bacc-ip/es-100-bacc-ip.component';
import { Es1000BaccCiComponent } from '../es-1000-bacc-ci/es-1000-bacc-ci.component';
import { Es1100BaccCbtComponent } from '../es-1100-bacc-cbt/es-1100-bacc-cbt.component';
import { Es1200BaccSpComponent } from '../es-1200-bacc-sp/es-1200-bacc-sp.component';
import { Es1300BaccCpiComponent } from '../es-1300-bacc-cpi/es-1300-bacc-cpi.component';
import { Es1400BaccLtComponent } from '../es-1400-bacc-lt/es-1400-bacc-lt.component';
import { Es1500BaccFpComponent } from '../es-1500-bacc-fp/es-1500-bacc-fp.component';
import { Es1600BaccFctComponent } from '../es-1600-bacc-fct/es-1600-bacc-fct.component';
import { Es1700BaccPiComponent } from '../es-1700-bacc-pi/es-1700-bacc-pi.component';
import { Es1800BaccCapComponent } from '../es-1800-bacc-cap/es-1800-bacc-cap.component';
import { Es1900BaccPaiComponent } from '../es-1900-bacc-pai/es-1900-bacc-pai.component';
import { Es200BaccHdiComponent } from '../es-200-bacc-hdi/es-200-bacc-hdi.component';
import { Es2000BaccPaiiComponent } from '../es-2000-bacc-paii/es-2000-bacc-paii.component';
import { Es2100BaccCcpiComponent } from '../es-2100-bacc-ccpi/es-2100-bacc-ccpi.component';
import { Es2200BaccCcpiiComponent } from '../es-2200-bacc-ccpii/es-2200-bacc-ccpii.component';
import { Es2300BaccCcpiiiComponent } from '../es-2300-bacc-ccpiii/es-2300-bacc-ccpiii.component';
import { Es2400BaccBbbComponent } from '../es-2400-bacc-bbb/es-2400-bacc-bbb.component';
import { Es2500BaccHstComponent } from '../es-2500-bacc-hst/es-2500-bacc-hst.component';
import { Es2600BaccEdaComponent } from '../es-2600-bacc-eda/es-2600-bacc-eda.component';
import { Es2700BaccTpComponent } from '../es-2700-bacc-tp/es-2700-bacc-tp.component';
import { Es2800BaccTgtComponent } from '../es-2800-bacc-tgt/es-2800-bacc-tgt.component';
import { Es2900BaccArpComponent } from '../es-2900-bacc-arp/es-2900-bacc-arp.component';
import { Es300BaccGpComponent } from '../es-300-bacc-gp/es-300-bacc-gp.component';
import { Es3000BaccAecpComponent } from '../es-3000-bacc-aecp/es-3000-bacc-aecp.component';
import { Es3100BaccAciComponent } from '../es-3100-bacc-aci/es-3100-bacc-aci.component';
import { Es3200BaccCpsComponent } from '../es-3200-bacc-cps/es-3200-bacc-cps.component';
import { Es3300BaccFripComponent } from '../es-3300-bacc-frip/es-3300-bacc-frip.component';
import { Es3400BaccPpcComponent } from '../es-3400-bacc-ppc/es-3400-bacc-ppc.component';
import { Es400BaccPtComponent } from '../es-400-bacc-pt/es-400-bacc-pt.component';
import { Es500BaccTpfComponent } from '../es-500-bacc-tpf/es-500-bacc-tpf.component';
import { Es600BaccCsalComponent } from '../es-600-bacc-csal/es-600-bacc-csal.component';
import { Es700BaccEpcComponent } from '../es-700-bacc-epc/es-700-bacc-epc.component';
import { Es800BaccPiComponent } from '../es-800-bacc-pi/es-800-bacc-pi.component';
import { Es900BaccPiiComponent } from '../es-900-bacc-pii/es-900-bacc-pii.component';

@Component({
  selector: 'app-cursos-es-bacc-ac',
  imports: [MatButtonModule],
  templateUrl: './cursos-es-bacc-ac.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursosEsBaccAcComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'es100baccip':
        this._dialog.open(Es100BaccIpComponent, stylesDialog);
        break;
      case 'es200bacchdi':
        this._dialog.open(Es200BaccHdiComponent, stylesDialog);
        break;
      case 'es300baccgp':
        this._dialog.open(Es300BaccGpComponent, stylesDialog);
        break;
      case 'es400baccpt':
        this._dialog.open(Es400BaccPtComponent, stylesDialog);
        break;
      case 'es500bacctpf':
        this._dialog.open(Es500BaccTpfComponent, stylesDialog);
        break;
      case 'es600bacccsal':
        this._dialog.open(Es600BaccCsalComponent, stylesDialog);
        break;
      case 'es700baccepc':
        this._dialog.open(Es700BaccEpcComponent, stylesDialog);
        break;
      case 'es800baccpi':
        this._dialog.open(Es800BaccPiComponent, stylesDialog);
        break;
      case 'es900baccpii':
        this._dialog.open(Es900BaccPiiComponent, stylesDialog);
        break;
      case 'es1000baccci':
        this._dialog.open(Es1000BaccCiComponent, stylesDialog);
        break;
      case 'es1100bacccbt':
        this._dialog.open(Es1100BaccCbtComponent, stylesDialog);
        break;
      case 'es1200baccsp':
        this._dialog.open(Es1200BaccSpComponent, stylesDialog);
        break;
      case 'es1300bacccpi':
        this._dialog.open(Es1300BaccCpiComponent, stylesDialog);
        break;
      case 'es1400bacclt':
        this._dialog.open(Es1400BaccLtComponent, stylesDialog);
        break;
      case 'es1500baccfp':
        this._dialog.open(Es1500BaccFpComponent, stylesDialog);
        break;
      case 'es1600baccfct':
        this._dialog.open(Es1600BaccFctComponent, stylesDialog);
        break;
      case 'es1700baccpi':
        this._dialog.open(Es1700BaccPiComponent, stylesDialog);
        break;
      case 'es1800bacccap':
        this._dialog.open(Es1800BaccCapComponent, stylesDialog);
        break;
      case 'es1900baccpai':
        this._dialog.open(Es1900BaccPaiComponent, stylesDialog);
        break;
      case 'es2000baccpaii':
        this._dialog.open(Es2000BaccPaiiComponent, stylesDialog);
        break;
      case 'es2100baccccpi':
        this._dialog.open(Es2100BaccCcpiComponent, stylesDialog);
        break;
      case 'es2200baccccpii':
        this._dialog.open(Es2200BaccCcpiiComponent, stylesDialog);
        break;
      case 'es2300baccccpiii':
        this._dialog.open(Es2300BaccCcpiiiComponent, stylesDialog);
        break;
      case 'es2400baccbbb':
        this._dialog.open(Es2400BaccBbbComponent, stylesDialog);
        break;
      case 'es2500bacchst':
        this._dialog.open(Es2500BaccHstComponent, stylesDialog);
        break;
      case 'es2600bacceda':
        this._dialog.open(Es2600BaccEdaComponent, stylesDialog);
        break;
      case 'es2700bacctp':
        this._dialog.open(Es2700BaccTpComponent, stylesDialog);
        break;
      case 'es2800bacctgt':
        this._dialog.open(Es2800BaccTgtComponent, stylesDialog);
        break;
      case 'es2900baccarp':
        this._dialog.open(Es2900BaccArpComponent, stylesDialog);
        break;
      case 'es3000baccaecp':
        this._dialog.open(Es3000BaccAecpComponent, stylesDialog);
        break;
      case 'es3100baccaci':
        this._dialog.open(Es3100BaccAciComponent, stylesDialog);
        break;
      case 'es3200bacccps':
        this._dialog.open(Es3200BaccCpsComponent, stylesDialog);
        break;
      case 'es3300baccfrip':
        this._dialog.open(Es3300BaccFripComponent, stylesDialog);
        break;
      case 'es3400baccppc':
        this._dialog.open(Es3400BaccPpcComponent, stylesDialog);
        break;
    }
  }
}
