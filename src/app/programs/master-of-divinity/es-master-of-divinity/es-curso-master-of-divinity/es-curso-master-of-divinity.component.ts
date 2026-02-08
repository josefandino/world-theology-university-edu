import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100MaDivAtfComponent } from '../es-100-ma-div-atf/es-100-ma-div-atf.component';
import { Es1000MaDivItidComponent } from '../es-1000-ma-div-itid/es-1000-ma-div-itid.component';
import { Es1100MaDivMttrComponent } from '../es-1100-ma-div-mttr/es-1100-ma-div-mttr.component';
import { Es1200MaDivSmiComponent } from '../es-1200-ma-div-smi/es-1200-ma-div-smi.component';
import { Es1300MaDivCapComponent } from '../es-1300-ma-div-cap/es-1300-ma-div-cap.component';
import { Es200MaDivBehComponent } from '../es-200-ma-div-beh/es-200-ma-div-beh.component';
import { Es300MaDivCsyComponent } from '../es-300-ma-div-csy/es-300-ma-div-csy.component';
import { Es400MaDivHctComponent } from '../es-400-ma-div-hct/es-400-ma-div-hct.component';
import { Es500MaDivCeaComponent } from '../es-500-ma-div-cea/es-500-ma-div-cea.component';
import { Es600MaDivPlmComponent } from '../es-600-ma-div-plm/es-600-ma-div-plm.component';
import { Es700MaDivTmgeComponent } from '../es-700-ma-div-tmge/es-700-ma-div-tmge.component';
import { Es800MaDivPcscComponent } from '../es-800-ma-div-pcsc/es-800-ma-div-pcsc.component';
import { Es900MaDivPtseComponent } from '../es-900-ma-div-ptse/es-900-ma-div-ptse.component';

@Component({
  selector: 'app-es-curso-master-of-divinity',
  imports: [MatButtonModule],
  templateUrl: './es-curso-master-of-divinity.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCursoMasterOfDivinityComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-ma-div-atf':
        this._dialog.open(Es100MaDivAtfComponent, stylesDialog);
        break;
      case '200-ma-div-beh':
        this._dialog.open(Es200MaDivBehComponent, stylesDialog);
        break;
      case '300-ma-div-csy':
        this._dialog.open(Es300MaDivCsyComponent, stylesDialog);
        break;
      case '400-ma-div-hct':
        this._dialog.open(Es400MaDivHctComponent, stylesDialog);
        break;
      case '500-ma-div-cea':
        this._dialog.open(Es500MaDivCeaComponent, stylesDialog);
        break;
      case '600-ma-div-plm':
        this._dialog.open(Es600MaDivPlmComponent, stylesDialog);
        break;
      case '700-ma-div-tmge':
        this._dialog.open(Es700MaDivTmgeComponent, stylesDialog);
        break;
      case '800-ma-div-pcsc':
        this._dialog.open(Es800MaDivPcscComponent, stylesDialog);
        break;
      case '900-ma-div-ptse':
        this._dialog.open(Es900MaDivPtseComponent, stylesDialog);
        break;
      case '1000-ma-div-itid':
        this._dialog.open(Es1000MaDivItidComponent, stylesDialog);
        break;
      case '1100-ma-div-mttr':
        this._dialog.open(Es1100MaDivMttrComponent, stylesDialog);
        break;
      case '1200-ma-div-smi':
        this._dialog.open(Es1200MaDivSmiComponent, stylesDialog);
        break;
      case '1300-ma-div-cap':
        this._dialog.open(Es1300MaDivCapComponent, stylesDialog);
        break;
    }
  }
}
