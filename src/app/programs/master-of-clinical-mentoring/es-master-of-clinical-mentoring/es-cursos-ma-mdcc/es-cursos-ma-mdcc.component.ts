import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';
import { MatButtonModule } from '@angular/material/button';

import { MatDialog } from '@angular/material/dialog';
import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100MaccFcComponent } from '../es-100-macc-fc/es-100-macc-fc.component';
import { Es1000MaccFcComponent } from '../es-1000-macc-fc/es-1000-macc-fc.component';
import { Es1200MaccPpComponent } from '../es-1200-macc-pp/es-1200-macc-pp.component';
import { Es1300MaccCcComponent } from '../es-1300-macc-cc/es-1300-macc-cc.component';
import { Es1400MaccMcComponent } from '../es-1400-macc-mc/es-1400-macc-mc.component';
import { Es1500MaccPmdComponent } from '../es-1500-macc-pmd/es-1500-macc-pmd.component';
import { Es1600MaccCyaComponent } from '../es-1600-macc-cya/es-1600-macc-cya.component';
import { Es1700MaccCaComponent } from '../es-1700-macc-ca/es-1700-macc-ca.component';
import { Es1800MaccPcpComponent } from '../es-1800-macc-pcp/es-1800-macc-pcp.component';
import { Es1900MaccTpComponent } from '../es-1900-macc-tp/es-1900-macc-tp.component';
import { Es200MaccGpComponent } from '../es-200-macc-gp/es-200-macc-gp.component';
import { Es2000MaccCglComponent } from '../es-2000-macc-cgl/es-2000-macc-cgl.component';
import { Es2100MaccFpcComponent } from '../es-2100-macc-fpc/es-2100-macc-fpc.component';
import { Es2200MaccCmhComponent } from '../es-2200-macc-cmh/es-2200-macc-cmh.component';
import { Es2300MaccDcpComponent } from '../es-2300-macc-dcp/es-2300-macc-dcp.component';
import { Es2400MaccCecComponent } from '../es-2400-macc-cec/es-2400-macc-cec.component';
import { Es2500MaccRccComponent } from '../es-2500-macc-rcc/es-2500-macc-rcc.component';
import { Es2600MaccAcpComponent } from '../es-2600-macc-acp/es-2600-macc-acp.component';
import { Es2700MaccApeComponent } from '../es-2700-macc-ape/es-2700-macc-ape.component';
import { Es2800MaccMtComponent } from '../es-2800-macc-mt/es-2800-macc-mt.component';
import { Es2900MaccCeComponent } from '../es-2900-macc-ce/es-2900-macc-ce.component';
import { Es300MaccHdComponent } from '../es-300-macc-hd/es-300-macc-hd.component';
import { Es400MaccFpComponent } from '../es-400-macc-fp/es-400-macc-fp.component';
import { Es500MaccDpsComponent } from '../es-500-macc-dps/es-500-macc-dps.component';
import { Es600MaccEmcComponent } from '../es-600-macc-emc/es-600-macc-emc.component';
import { Es700MaccIpComponent } from '../es-700-macc-ip/es-700-macc-ip.component';
import { Es800MaccIcComponent } from '../es-800-macc-ic/es-800-macc-ic.component';
import { Es900MaccAcpComponent } from '../es-900-macc-acp/es-900-macc-acp.component';
import { Es1100MaccPcComponent } from '../es-1100-macc-pc/es-1100-macc-pc.component';

@Component({
  selector: 'app-es-cursos-ma-mdcc',
  imports: [MatButtonModule],
  templateUrl: './es-cursos-ma-mdcc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCursosMaMdccComponent extends GlobalsInjects {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'macc-fc-100':
        this._dialog.open(Es100MaccFcComponent, stylesDialog);
        break;
      case 'macc-gp-200':
        this._dialog.open(Es200MaccGpComponent, stylesDialog);
        break;
      case 'macc-hd-300':
        this._dialog.open(Es300MaccHdComponent, stylesDialog);
        break;
      case 'macc-fp-400':
        this._dialog.open(Es400MaccFpComponent, stylesDialog);
        break;
      case 'macc-dps-500':
        this._dialog.open(Es500MaccDpsComponent, stylesDialog);
        break;
      case 'macc-emc-600':
        this._dialog.open(Es600MaccEmcComponent, stylesDialog);
        break;
      case 'macc-ip-700':
        this._dialog.open(Es700MaccIpComponent, stylesDialog);
        break;
      case 'macc-ic-800':
        this._dialog.open(Es800MaccIcComponent, stylesDialog);
        break;
      case 'macc-acp-900':
        this._dialog.open(Es900MaccAcpComponent, stylesDialog);
        break;
      case 'macc-fc-1000':
        this._dialog.open(Es1000MaccFcComponent, stylesDialog);
        break;
      case 'macc-pc-1100':
        this._dialog.open(Es1100MaccPcComponent, stylesDialog);
        break;
      case 'macc-pp-1200':
        this._dialog.open(Es1200MaccPpComponent, stylesDialog);
        break;
      case 'macc-cc-1300':
        this._dialog.open(Es1300MaccCcComponent, stylesDialog);
        break;
      case 'macc-mc-1400':
        this._dialog.open(Es1400MaccMcComponent, stylesDialog);
        break;
      case 'macc-pmd-1500':
        this._dialog.open(Es1500MaccPmdComponent, stylesDialog);
        break;
      case 'macc-cya-1600':
        this._dialog.open(Es1600MaccCyaComponent, stylesDialog);
        break;
      case 'macc-ca-1700':
        this._dialog.open(Es1700MaccCaComponent, stylesDialog);
        break;
      case 'macc-pcp-1800':
        this._dialog.open(Es1800MaccPcpComponent, stylesDialog);
        break;
      case 'macc-tp-1900':
        this._dialog.open(Es1900MaccTpComponent, stylesDialog);
        break;
      case 'macc-cgl-2000':
        this._dialog.open(Es2000MaccCglComponent, stylesDialog);
        break;
      case 'macc-fpc-2100':
        this._dialog.open(Es2100MaccFpcComponent, stylesDialog);
        break;
      case 'macc-cmh-2200':
        this._dialog.open(Es2200MaccCmhComponent, stylesDialog);
        break;
      case 'macc-dcp-2300':
        this._dialog.open(Es2300MaccDcpComponent, stylesDialog);
        break;
      case 'macc-cec-2400':
        this._dialog.open(Es2400MaccCecComponent, stylesDialog);
        break;
      case 'macc-rcc-2500':
        this._dialog.open(Es2500MaccRccComponent, stylesDialog);
        break;
      case 'macc-acp-2600':
        this._dialog.open(Es2600MaccAcpComponent, stylesDialog);
        break;
      case 'macc-ape-2700':
        this._dialog.open(Es2700MaccApeComponent, stylesDialog);
        break;
      case 'macc-mt-2800':
        this._dialog.open(Es2800MaccMtComponent, stylesDialog);
        break;
      case 'macc-ce-2900':
        this._dialog.open(Es2900MaccCeComponent, stylesDialog);
        break;
    }
  }
}
