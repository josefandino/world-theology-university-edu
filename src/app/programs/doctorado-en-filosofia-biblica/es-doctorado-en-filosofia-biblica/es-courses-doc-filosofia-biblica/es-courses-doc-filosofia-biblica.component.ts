import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100DocFbIbpsComponent } from '../es-100-doc-fb-ibps/es-100-doc-fb-ibps.component';
import { Es1000DocFbPhstComponent } from '../es-1000-doc-fb-phst/es-1000-doc-fb-phst.component';
import { Es1100DocFbParComponent } from '../es-1100-doc-fb-par/es-1100-doc-fb-par.component';
import { Es1200DocFbEbcsComponent } from '../es-1200-doc-fb-ebcs/es-1200-doc-fb-ebcs.component';
import { Es1300DocFbPhrComponent } from '../es-1300-doc-fb-phr/es-1300-doc-fb-phr.component';
import { Es1400DocFbPpbtComponent } from '../es-1400-doc-fb-ppbt/es-1400-doc-fb-ppbt.component';
import { Es1500DocFbCtrComponent } from '../es-1500-doc-fb-ctr/es-1500-doc-fb-ctr.component';
import { Es1600DocFbCdcprComponent } from '../es-1600-doc-fb-cdcpr/es-1600-doc-fb-cdcpr.component';
import { Es1700DocFbPgsComponent } from '../es-1700-doc-fb-pgs/es-1700-doc-fb-pgs.component';
import { Es200DocFbCrsComponent } from '../es-200-doc-fb-crs/es-200-doc-fb-crs.component';
import { Es300DocFbBtecComponent } from '../es-300-doc-fb-btec/es-300-doc-fb-btec.component';
import { Es400DocFbRamComponent } from '../es-400-doc-fb-ram/es-400-doc-fb-ram.component';
import { Es500DocFbGsrComponent } from '../es-500-doc-fb-gsr/es-500-doc-fb-gsr.component';
import { Es600DocFbPreComponent } from '../es-600-doc-fb-pre/es-600-doc-fb-pre.component';
import { Es700DocFbReComponent } from '../es-700-doc-fb-re/es-700-doc-fb-re.component';
import { Es800DocFbRepComponent } from '../es-800-doc-fb-rep/es-800-doc-fb-rep.component';
import { Es900DocFbIsComponent } from '../es-900-doc-fb-is/es-900-doc-fb-is.component';
@Component({
  selector: 'app-es-courses-doc-filosofia-biblica',
  imports: [MatButtonModule],
  templateUrl: './es-courses-doc-filosofia-biblica.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCoursesDocFilosofiaBiblicaComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-doc-fb-ibps':
        this._dialog.open(Es100DocFbIbpsComponent, stylesDialog);
        break;
      case '200-doc-fb-crs':
        this._dialog.open(Es200DocFbCrsComponent, stylesDialog);
        break;
      case '300-doc-fb-btec':
        this._dialog.open(Es300DocFbBtecComponent, stylesDialog);
        break;
      case '400-doc-fb-ram':
        this._dialog.open(Es400DocFbRamComponent, stylesDialog);
        break;
      case '500-doc-fb-gsr':
        this._dialog.open(Es500DocFbGsrComponent, stylesDialog);
        break;
      case '600-doc-fb-pre':
        this._dialog.open(Es600DocFbPreComponent, stylesDialog);
        break;
      case '700-doc-fb-re':
        this._dialog.open(Es700DocFbReComponent, stylesDialog);
        break;
      case '800-doc-fb-rep':
        this._dialog.open(Es800DocFbRepComponent, stylesDialog);
        break;
      case '900-doc-fb-is':
        this._dialog.open(Es900DocFbIsComponent, stylesDialog);
        break;
      case '1000-doc-fb-phst':
        this._dialog.open(Es1000DocFbPhstComponent, stylesDialog);
        break;
      case '1100-doc-fb-par':
        this._dialog.open(Es1100DocFbParComponent, stylesDialog);
        break;
      case '1200-doc-fb-ebcs':
        this._dialog.open(Es1200DocFbEbcsComponent, stylesDialog);
        break;
      case '1300-doc-fb-phr':
        this._dialog.open(Es1300DocFbPhrComponent, stylesDialog);
        break;
      case '1400-doc-fb-ppbt':
        this._dialog.open(Es1400DocFbPpbtComponent, stylesDialog);
        break;
      case '1500-doc-fb-ctr':
        this._dialog.open(Es1500DocFbCtrComponent, stylesDialog);
        break;
      case '1600-doc-fb-cdcpr':
        this._dialog.open(Es1600DocFbCdcprComponent, stylesDialog);
        break;
      case '1700-doc-fb-pgs':
        this._dialog.open(Es1700DocFbPgsComponent, stylesDialog);
        break;
    }
  }
}
