import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';
import { En100BatheitheComponent } from '../en-100-batheithe/en-100-batheithe.component';
import { En1000BathectComponent } from '../en-1000-bathect/en-1000-bathect.component';
import { En1100BatheescComponent } from '../en-1100-batheesc/en-1100-batheesc.component';
import { En1200BatheapoComponent } from '../en-1200-batheapo/en-1200-batheapo.component';
import { En1300BatheceComponent } from '../en-1300-bathece/en-1300-bathece.component';
import { En1400BathepsComponent } from '../en-1400-batheps/en-1400-batheps.component';
import { En1500BathetherComponent } from '../en-1500-bathether/en-1500-bathether.component';
import { En1600BatheceComponent } from '../en-1600-bathece/en-1600-bathece.component';
import { En1700BathetheComponent } from '../en-1700-bathethe/en-1700-bathethe.component';
import { En1800BatheecsComponent } from '../en-1800-batheecs/en-1800-batheecs.component';
import { En1900BathethecComponent } from '../en-1900-bathethec/en-1900-bathethec.component';
import { En200BatheontComponent } from '../en-200-batheont/en-200-batheont.component';
import { En2000BathetheaComponent } from '../en-2000-bathethea/en-2000-bathethea.component';
import { En2100BathetgehsComponent } from '../en-2100-bathetgehs/en-2100-bathetgehs.component';
import { En2200BathefmComponent } from '../en-2200-bathefm/en-2200-bathefm.component';
import { En2300BatheptheComponent } from '../en-2300-bathepthe/en-2300-bathepthe.component';
import { En2400BathewmComponent } from '../en-2400-bathewm/en-2400-bathewm.component';
import { En2500BathethemComponent } from '../en-2500-bathethem/en-2500-bathethem.component';
import { En2600BathehrsComponent } from '../en-2600-bathehrs/en-2600-bathehrs.component';
import { En2700BathespwComponent } from '../en-2700-bathespw/en-2700-bathespw.component';
import { En2800BathesorComponent } from '../en-2800-bathesor/en-2800-bathesor.component';
import { En2900BatheccsComponent } from '../en-2900-batheccs/en-2900-batheccs.component';
import { En300BathehcComponent } from '../en-300-bathehc/en-300-bathehc.component';
import { En3000BathetgmComponent } from '../en-3000-bathetgm/en-3000-bathetgm.component';
import { En3100BathecpComponent } from '../en-3100-bathecp/en-3100-bathecp.component';
import { En3200BatheccComponent } from '../en-3200-bathecc/en-3200-bathecc.component';
import { En3300BatheirsComponent } from '../en-3300-batheirs/en-3300-batheirs.component';
import { En400BathestComponent } from '../en-400-bathest/en-400-bathest.component';
import { En500BathebhComponent } from '../en-500-bathebh/en-500-bathebh.component';
import { En600BatheceComponent } from '../en-600-bathece/en-600-bathece.component';
import { En700BatheplComponent } from '../en-700-bathepl/en-700-bathepl.component';
import { En800BathemmComponent } from '../en-800-bathemm/en-800-bathemm.component';
import { En900BathepcComponent } from '../en-900-bathepc/en-900-bathepc.component';

@Component({
  selector: 'app-en-course-bacher-of-theology',
  imports: [MatButtonModule],
  templateUrl: './en-course-bacher-of-theology.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnCourseBacherOfTheologyComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-batheithe':
        this._dialog.open(En100BatheitheComponent, stylesDialog);
        break;
      case '200-batheont':
        this._dialog.open(En200BatheontComponent, stylesDialog);
        break;
      case '300-bathehc':
        this._dialog.open(En300BathehcComponent, stylesDialog);
        break;
      case '400-bathest':
        this._dialog.open(En400BathestComponent, stylesDialog);
        break;
      case '500-bathebh':
        this._dialog.open(En500BathebhComponent, stylesDialog);
        break;
      case '600-bathece':
        this._dialog.open(En600BatheceComponent, stylesDialog);
        break;
      case '700-bathepl':
        this._dialog.open(En700BatheplComponent, stylesDialog);
        break;
      case '800-bathemm':
        this._dialog.open(En800BathemmComponent, stylesDialog);
        break;
      case '900-bathepc':
        this._dialog.open(En900BathepcComponent, stylesDialog);
        break;
      case '1000-bathect':
        this._dialog.open(En1000BathectComponent, stylesDialog);
        break;
      case '1100-batheesc':
        this._dialog.open(En1100BatheescComponent, stylesDialog);
        break;
      case '1200-batheapo':
        this._dialog.open(En1200BatheapoComponent, stylesDialog);
        break;
      case '1300-bathece':
        this._dialog.open(En1300BatheceComponent, stylesDialog);
        break;
      case '1400-batheps':
        this._dialog.open(En1400BathepsComponent, stylesDialog);
        break;
      case '1500-bathether':
        this._dialog.open(En1500BathetherComponent, stylesDialog);
        break;
      case '1600-bathece':
        this._dialog.open(En1600BatheceComponent, stylesDialog);
        break;
      case '1700-bathethe':
        this._dialog.open(En1700BathetheComponent, stylesDialog);
        break;
      case '1800-batheecs':
        this._dialog.open(En1800BatheecsComponent, stylesDialog);
        break;
      case '1900-bathethec':
        this._dialog.open(En1900BathethecComponent, stylesDialog);
        break;
      case '2000-bathethea':
        this._dialog.open(En2000BathetheaComponent, stylesDialog);
        break;
      case '2100-bathetgehs':
        this._dialog.open(En2100BathetgehsComponent, stylesDialog);
        break;
      case '2200-bathefm':
        this._dialog.open(En2200BathefmComponent, stylesDialog);
        break;
      case '2300-bathepthe':
        this._dialog.open(En2300BatheptheComponent, stylesDialog);
        break;
      case '2400-bathewm':
        this._dialog.open(En2400BathewmComponent, stylesDialog);
        break;
      case '2500-bathethem':
        this._dialog.open(En2500BathethemComponent, stylesDialog);
        break;
      case '2600-bathehrs':
        this._dialog.open(En2600BathehrsComponent, stylesDialog);
        break;
      case '2700-bathespw':
        this._dialog.open(En2700BathespwComponent, stylesDialog);
        break;
      case '2800-bathesor':
        this._dialog.open(En2800BathesorComponent, stylesDialog);
        break;
      case '2900-batheccs':
        this._dialog.open(En2900BatheccsComponent, stylesDialog);
        break;
      case '3000-bathetgm':
        this._dialog.open(En3000BathetgmComponent, stylesDialog);
        break;
      case '3100-bathecp':
        this._dialog.open(En3100BathecpComponent, stylesDialog);
        break;
      case '3200-bathecc':
        this._dialog.open(En3200BatheccComponent, stylesDialog);
        break;
      case '3300-batheirs':
        this._dialog.open(En3300BatheirsComponent, stylesDialog);
        break;
    }
  }
}
