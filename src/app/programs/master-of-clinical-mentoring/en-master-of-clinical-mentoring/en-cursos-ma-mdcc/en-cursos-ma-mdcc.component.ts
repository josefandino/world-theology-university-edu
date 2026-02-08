import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { stylesDialog } from '@shared/const/styles-dialog';

import { En100MaccFcComponent } from '../en-100-macc-fc/en-100-macc-fc.component';
import { En1000MaccFcComponent } from '../en-1000-macc-fc/en-1000-macc-fc.component';
import { En1200MaccPpComponent } from '../en-1200-macc-pp/en-1200-macc-pp.component';
import { En1300MaccCcComponent } from '../en-1300-macc-cc/en-1300-macc-cc.component';
import { En1400MaccMcComponent } from '../en-1400-macc-mc/en-1400-macc-mc.component';
import { En1500MaccPmdComponent } from '../en-1500-macc-pmd/en-1500-macc-pmd.component';
import { En1600MaccCyaComponent } from '../en-1600-macc-cya/en-1600-macc-cya.component';
import { En1700MaccCaComponent } from '../en-1700-macc-ca/en-1700-macc-ca.component';
import { En1800MaccPcpComponent } from '../en-1800-macc-pcp/en-1800-macc-pcp.component';
import { En1900MaccTpComponent } from '../en-1900-macc-tp/en-1900-macc-tp.component';
import { En200MaccGpComponent } from '../en-200-macc-gp/en-200-macc-gp.component';
import { En2000MaccCglComponent } from '../en-2000-macc-cgl/en-2000-macc-cgl.component';
import { En2100MaccFpcComponent } from '../en-2100-macc-fpc/en-2100-macc-fpc.component';
import { En2200MaccCmhComponent } from '../en-2200-macc-cmh/en-2200-macc-cmh.component';
import { En2300MaccDcpComponent } from '../en-2300-macc-dcp/en-2300-macc-dcp.component';
import { En2400MaccCecComponent } from '../en-2400-macc-cec/en-2400-macc-cec.component';
import { En2500MaccRccComponent } from '../en-2500-macc-rcc/en-2500-macc-rcc.component';
import { En2600MaccAcpComponent } from '../en-2600-macc-acp/en-2600-macc-acp.component';
import { En2700MaccApeComponent } from '../en-2700-macc-ape/en-2700-macc-ape.component';
import { En2800MaccMtComponent } from '../en-2800-macc-mt/en-2800-macc-mt.component';
import { En2900MaccCeComponent } from '../en-2900-macc-ce/en-2900-macc-ce.component';
import { En300MaccHdComponent } from '../en-300-macc-hd/en-300-macc-hd.component';
import { En400MaccFpComponent } from '../en-400-macc-fp/en-400-macc-fp.component';
import { En500MaccDpsComponent } from '../en-500-macc-dps/en-500-macc-dps.component';
import { En600MaccEmcComponent } from '../en-600-macc-emc/en-600-macc-emc.component';
import { En700MaccIpComponent } from '../en-700-macc-ip/en-700-macc-ip.component';
import { En800MaccIcComponent } from '../en-800-macc-ic/en-800-macc-ic.component';
import { En900MaccAcpComponent } from '../en-900-macc-acp/en-900-macc-acp.component';
import { En1100MaccPcComponent } from '../en-1100-macc-pc/en-1100-macc-pc.component';

@Component({
  selector: 'app-en-cursos-ma-mdcc',
  imports: [MatButtonModule],
  templateUrl: './en-cursos-ma-mdcc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnCursosMaMdccComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'macc-fc-100':
        this._dialog.open(En100MaccFcComponent, stylesDialog);
        break;
      case 'macc-gp-200':
        this._dialog.open(En200MaccGpComponent, stylesDialog);
        break;
      case 'macc-hd-300':
        this._dialog.open(En300MaccHdComponent, stylesDialog);
        break;
      case 'macc-fp-400':
        this._dialog.open(En400MaccFpComponent, stylesDialog);
        break;
      case 'macc-dps-500':
        this._dialog.open(En500MaccDpsComponent, stylesDialog);
        break;
      case 'macc-emc-600':
        this._dialog.open(En600MaccEmcComponent, stylesDialog);
        break;
      case 'macc-ip-700':
        this._dialog.open(En700MaccIpComponent, stylesDialog);
        break;
      case 'macc-ic-800':
        this._dialog.open(En800MaccIcComponent, stylesDialog);
        break;
      case 'macc-acp-900':
        this._dialog.open(En900MaccAcpComponent, stylesDialog);
        break;
      case 'macc-fc-1000':
        this._dialog.open(En1000MaccFcComponent, stylesDialog);
        break;
      case 'macc-pc-1100':
        this._dialog.open(En1100MaccPcComponent, stylesDialog);
        break;
      case 'macc-pp-1200':
        this._dialog.open(En1200MaccPpComponent, stylesDialog);
        break;
      case 'macc-cc-1300':
        this._dialog.open(En1300MaccCcComponent, stylesDialog);
        break;
      case 'macc-mc-1400':
        this._dialog.open(En1400MaccMcComponent, stylesDialog);
        break;
      case 'macc-pmd-1500':
        this._dialog.open(En1500MaccPmdComponent, stylesDialog);
        break;
      case 'macc-cya-1600':
        this._dialog.open(En1600MaccCyaComponent, stylesDialog);
        break;
      case 'macc-ca-1700':
        this._dialog.open(En1700MaccCaComponent, stylesDialog);
        break;
      case 'macc-pcp-1800':
        this._dialog.open(En1800MaccPcpComponent, stylesDialog);
        break;
      case 'macc-tp-1900':
        this._dialog.open(En1900MaccTpComponent, stylesDialog);
        break;
      case 'macc-cgl-2000':
        this._dialog.open(En2000MaccCglComponent, stylesDialog);
        break;
      case 'macc-fpc-2100':
        this._dialog.open(En2100MaccFpcComponent, stylesDialog);
        break;
      case 'macc-cmh-2200':
        this._dialog.open(En2200MaccCmhComponent, stylesDialog);
        break;
      case 'macc-dcp-2300':
        this._dialog.open(En2300MaccDcpComponent, stylesDialog);
        break;
      case 'macc-cec-2400':
        this._dialog.open(En2400MaccCecComponent, stylesDialog);
        break;
      case 'macc-rcc-2500':
        this._dialog.open(En2500MaccRccComponent, stylesDialog);
        break;
      case 'macc-acp-2600':
        this._dialog.open(En2600MaccAcpComponent, stylesDialog);
        break;
      case 'macc-ape-2700':
        this._dialog.open(En2700MaccApeComponent, stylesDialog);
        break;
      case 'macc-mt-2800':
        this._dialog.open(En2800MaccMtComponent, stylesDialog);
        break;
      case 'macc-ce-2900':
        this._dialog.open(En2900MaccCeComponent, stylesDialog);
        break;
    }
  }
}
