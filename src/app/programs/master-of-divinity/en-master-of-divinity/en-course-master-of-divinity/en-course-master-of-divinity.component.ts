import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { stylesDialog } from '@shared/const/styles-dialog';

import { En100MaDivAtfComponent } from '../en-100-ma-div-atf/en-100-ma-div-atf.component';
import { En1000MaDivItidComponent } from '../en-1000-ma-div-itid/en-1000-ma-div-itid.component';
import { En1100MaDivMttrComponent } from '../en-1100-ma-div-mttr/en-1100-ma-div-mttr.component';
import { En1200MaDivSmiComponent } from '../en-1200-ma-div-smi/en-1200-ma-div-smi.component';
import { En1300MaDivCapComponent } from '../en-1300-ma-div-cap/en-1300-ma-div-cap.component';
import { En200MaDivBehComponent } from '../en-200-ma-div-beh/en-200-ma-div-beh.component';
import { En300MaDivCsyComponent } from '../en-300-ma-div-csy/en-300-ma-div-csy.component';
import { En400MaDivHctComponent } from '../en-400-ma-div-hct/en-400-ma-div-hct.component';
import { En500MaDivCeaComponent } from '../en-500-ma-div-cea/en-500-ma-div-cea.component';
import { En600MaDivPlmComponent } from '../en-600-ma-div-plm/en-600-ma-div-plm.component';
import { En700MaDivTmgeComponent } from '../en-700-ma-div-tmge/en-700-ma-div-tmge.component';
import { En800MaDivPcscComponent } from '../en-800-ma-div-pcsc/en-800-ma-div-pcsc.component';
import { En900MaDivPtseComponent } from '../en-900-ma-div-ptse/en-900-ma-div-ptse.component';

@Component({
  selector: 'app-en-course-master-of-divinity',
  imports: [MatButtonModule],
  templateUrl: './en-course-master-of-divinity.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnCourseMasterOfDivinityComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-ma-div-atf':
        this._dialog.open(En100MaDivAtfComponent, stylesDialog);
        break;
      case '200-ma-div-beh':
        this._dialog.open(En200MaDivBehComponent, stylesDialog);
        break;
      case '300-ma-div-csy':
        this._dialog.open(En300MaDivCsyComponent, stylesDialog);
        break;
      case '400-ma-div-hct':
        this._dialog.open(En400MaDivHctComponent, stylesDialog);
        break;
      case '500-ma-div-cea':
        this._dialog.open(En500MaDivCeaComponent, stylesDialog);
        break;
      case '600-ma-div-plm':
        this._dialog.open(En600MaDivPlmComponent, stylesDialog);
        break;
      case '700-ma-div-tmge':
        this._dialog.open(En700MaDivTmgeComponent, stylesDialog);
        break;
      case '800-ma-div-pcsc':
        this._dialog.open(En800MaDivPcscComponent, stylesDialog);
        break;
      case '900-ma-div-ptse':
        this._dialog.open(En900MaDivPtseComponent, stylesDialog);
        break;
      case '1000-ma-div-itid':
        this._dialog.open(En1000MaDivItidComponent, stylesDialog);
        break;
      case '1100-ma-div-mttr':
        this._dialog.open(En1100MaDivMttrComponent, stylesDialog);
        break;
      case '1200-ma-div-smi':
        this._dialog.open(En1200MaDivSmiComponent, stylesDialog);
        break;
      case '1300-ma-div-cap':
        this._dialog.open(En1300MaDivCapComponent, stylesDialog);
        break;
    }
  }
}

/*
ng g c en-100-ma-div-atf -s
ng g c en-200-ma-div-beh -s
ng g c en-300-ma-div-csy -s
ng g c en-400-ma-div-hct -s
ng g c en-500-ma-div-cea -s
ng g c en-600-ma-div-plm -s
ng g c en-700-ma-div-tmge -s
ng g c en-800-ma-div-pcsc -s
ng g c en-900-ma-div-ptse -s
ng g c en-1000-ma-div-itid -s
ng g c en-1100-ma-div-mttr -s
ng g c en-1200-ma-div-smi -s
ng g c en-1300-ma-div-cap -s

*/
