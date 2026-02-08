import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { stylesDialog } from '@shared/const/styles-dialog';

import { En100DocFbIbpsComponent } from '../en-100-doc-fb-ibps/en-100-doc-fb-ibps.component';
import { En1000DocFbPhstComponent } from '../en-1000-doc-fb-phst/en-1000-doc-fb-phst.component';
import { En1100DocFbParComponent } from '../en-1100-doc-fb-par/en-1100-doc-fb-par.component';
import { En1300DocFbPhrComponent } from '../en-1300-doc-fb-phr/en-1300-doc-fb-phr.component';
import { En1400DocFbPpbtComponent } from '../en-1400-doc-fb-ppbt/en-1400-doc-fb-ppbt.component';
import { En1500DocFbCtrComponent } from '../en-1500-doc-fb-ctr/en-1500-doc-fb-ctr.component';
import { En1600DocFbCdcprComponent } from '../en-1600-doc-fb-cdcpr/en-1600-doc-fb-cdcpr.component';
import { En1700DocFbPgsComponent } from '../en-1700-doc-fb-pgs/en-1700-doc-fb-pgs.component';
import { En200DocFbCrsComponent } from '../en-200-doc-fb-crs/en-200-doc-fb-crs.component';
import { En300DocFbBtecComponent } from '../en-300-doc-fb-btec/en-300-doc-fb-btec.component';
import { En400DocFbRamComponent } from '../en-400-doc-fb-ram/en-400-doc-fb-ram.component';
import { En500DocFbGsrComponent } from '../en-500-doc-fb-gsr/en-500-doc-fb-gsr.component';
import { En600DocFbPreComponent } from '../en-600-doc-fb-pre/en-600-doc-fb-pre.component';
import { En700DocFbReComponent } from '../en-700-doc-fb-re/en-700-doc-fb-re.component';
import { En800DocFbRepComponent } from '../en-800-doc-fb-rep/en-800-doc-fb-rep.component';
import { En900DocFbIsComponent } from '../en-900-doc-fb-is/en-900-doc-fb-is.component';
import { Es1200DocFbEbcsComponent } from '@programs/doctorado-en-filosofia-biblica/es-doctorado-en-filosofia-biblica/es-1200-doc-fb-ebcs/es-1200-doc-fb-ebcs.component';
import { En1200DocFbEbcsComponent } from '../en-1200-doc-fb-ebcs/en-1200-doc-fb-ebcs.component';

@Component({
  selector: 'app-en-courses-doc-filosofia-biblica',
  imports: [MatButtonModule],
  templateUrl: './en-courses-doc-filosofia-biblica.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnCoursesDocFilosofiaBiblicaComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-doc-fb-ibps':
        this._dialog.open(En100DocFbIbpsComponent, stylesDialog);
        break;
      case '200-doc-fb-crs':
        this._dialog.open(En200DocFbCrsComponent, stylesDialog);
        break;
      case '300-doc-fb-btec':
        this._dialog.open(En300DocFbBtecComponent, stylesDialog);
        break;
      case '400-doc-fb-ram':
        this._dialog.open(En400DocFbRamComponent, stylesDialog);
        break;
      case '500-doc-fb-gsr':
        this._dialog.open(En500DocFbGsrComponent, stylesDialog);
        break;
      case '600-doc-fb-pre':
        this._dialog.open(En600DocFbPreComponent, stylesDialog);
        break;
      case '700-doc-fb-re':
        this._dialog.open(En700DocFbReComponent, stylesDialog);
        break;
      case '800-doc-fb-rep':
        this._dialog.open(En800DocFbRepComponent, stylesDialog);
        break;
      case '900-doc-fb-is':
        this._dialog.open(En900DocFbIsComponent, stylesDialog);
        break;
      case '1000-doc-fb-phst':
        this._dialog.open(En1000DocFbPhstComponent, stylesDialog);
        break;
      case '1100-doc-fb-par':
        this._dialog.open(En1100DocFbParComponent, stylesDialog);
        break;
      case '1200-doc-fb-ebcs':
        this._dialog.open(En1200DocFbEbcsComponent, stylesDialog);
        break;
      case '1300-doc-fb-phr':
        this._dialog.open(En1300DocFbPhrComponent, stylesDialog);
        break;
      case '1400-doc-fb-ppbt':
        this._dialog.open(En1400DocFbPpbtComponent, stylesDialog);
        break;
      case '1500-doc-fb-ctr':
        this._dialog.open(En1500DocFbCtrComponent, stylesDialog);
        break;
      case '1600-doc-fb-cdcpr':
        this._dialog.open(En1600DocFbCdcprComponent, stylesDialog);
        break;
      case '1700-doc-fb-pgs':
        this._dialog.open(En1700DocFbPgsComponent, stylesDialog);
        break;
    }
  }
}
/*
ng g c es-100-doc-fb-ibps -s
ng g c es-200-doc-fb-crs -s
ng g c es-300-doc-fb-btec -s
ng g c es-400-doc-fb-ram -s
ng g c es-500-doc-fb-gsr -s
ng g c es-600-doc-fb-pre -s
ng g c es-700-doc-fb-re -s
ng g c es-800-doc-fb-rep -s
ng g c es-900-doc-fb-is -s
ng g c es-1000-doc-fb-phst -s
ng g c es-1100-doc-fb-par -s
ng g c es-1200-doc-fb-ebcs -s
ng g c es-1300-doc-fb-phr -s
ng g c es-1400-doc-fb-ppbt -s
ng g c es-1500-doc-fb-ctr -s
ng g c es-1600-doc-fb-cdcpr -s
ng g c es-1700-doc-fb-pgs -s

*/
