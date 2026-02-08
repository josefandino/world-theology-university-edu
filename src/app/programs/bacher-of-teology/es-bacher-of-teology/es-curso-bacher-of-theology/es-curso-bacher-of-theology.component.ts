import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100BatheitheComponent } from '../es-100-batheithe/es-100-batheithe.component';
import { Es1000BathectComponent } from '../es-1000-bathect/es-1000-bathect.component';
import { Es1100BatheescComponent } from '../es-1100-batheesc/es-1100-batheesc.component';
import { Es1200BatheapoComponent } from '../es-1200-batheapo/es-1200-batheapo.component';
import { Es1300BatheceComponent } from '../es-1300-bathece/es-1300-bathece.component';
import { Es1400BathepsComponent } from '../es-1400-batheps/es-1400-batheps.component';
import { Es1500BathetherComponent } from '../es-1500-bathether/es-1500-bathether.component';
import { Es1600BatheceComponent } from '../es-1600-bathece/es-1600-bathece.component';
import { Es1700BathetheComponent } from '../es-1700-bathethe/es-1700-bathethe.component';
import { Es1800BatheecsComponent } from '../es-1800-batheecs/es-1800-batheecs.component';
import { Es1900BathethecComponent } from '../es-1900-bathethec/es-1900-bathethec.component';
import { Es200BatheontComponent } from '../es-200-batheont/es-200-batheont.component';
import { Es2000BathetheaComponent } from '../es-2000-bathethea/es-2000-bathethea.component';
import { Es2100BathetgehsComponent } from '../es-2100-bathetgehs/es-2100-bathetgehs.component';
import { Es2200BathefmComponent } from '../es-2200-bathefm/es-2200-bathefm.component';
import { Es2300BatheptheComponent } from '../es-2300-bathepthe/es-2300-bathepthe.component';
import { Es2400BathewmComponent } from '../es-2400-bathewm/es-2400-bathewm.component';
import { Es2500BathethemComponent } from '../es-2500-bathethem/es-2500-bathethem.component';
import { Es2600BathehrsComponent } from '../es-2600-bathehrs/es-2600-bathehrs.component';
import { Es2700BathespwComponent } from '../es-2700-bathespw/es-2700-bathespw.component';
import { Es2800BathesorComponent } from '../es-2800-bathesor/es-2800-bathesor.component';
import { Es2900BatheccsComponent } from '../es-2900-batheccs/es-2900-batheccs.component';
import { Es300BathehcComponent } from '../es-300-bathehc/es-300-bathehc.component';
import { Es3000BathetgmComponent } from '../es-3000-bathetgm/es-3000-bathetgm.component';
import { Es3100BathecpComponent } from '../es-3100-bathecp/es-3100-bathecp.component';
import { Es3200BatheccComponent } from '../es-3200-bathecc/es-3200-bathecc.component';
import { Es3300BatheirsComponent } from '../es-3300-batheirs/es-3300-batheirs.component';
import { Es400BathestComponent } from '../es-400-bathest/es-400-bathest.component';
import { Es500BathebhComponent } from '../es-500-bathebh/es-500-bathebh.component';
import { Es600BatheceComponent } from '../es-600-bathece/es-600-bathece.component';
import { Es700BatheplComponent } from '../es-700-bathepl/es-700-bathepl.component';
import { Es800BathemmComponent } from '../es-800-bathemm/es-800-bathemm.component';
import { Es900BathepcComponent } from '../es-900-bathepc/es-900-bathepc.component';

@Component({
  selector: 'app-es-curso-bacher-of-theology',
  imports: [MatButtonModule],
  templateUrl: './es-curso-bacher-of-theology.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCursoBacherOfTheologyComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-batheithe':
        this._dialog.open(Es100BatheitheComponent, stylesDialog);
        break;
      case '200-batheont':
        this._dialog.open(Es200BatheontComponent, stylesDialog);
        break;
      case '300-bathehc':
        this._dialog.open(Es300BathehcComponent, stylesDialog);
        break;
      case '400-bathest':
        this._dialog.open(Es400BathestComponent, stylesDialog);
        break;
      case '500-bathebh':
        this._dialog.open(Es500BathebhComponent, stylesDialog);
        break;
      case '600-bathece':
        this._dialog.open(Es600BatheceComponent, stylesDialog);
        break;
      case '700-bathepl':
        this._dialog.open(Es700BatheplComponent, stylesDialog);
        break;
      case '800-bathemm':
        this._dialog.open(Es800BathemmComponent, stylesDialog);
        break;
      case '900-bathepc':
        this._dialog.open(Es900BathepcComponent, stylesDialog);
        break;
      case '1000-bathect':
        this._dialog.open(Es1000BathectComponent, stylesDialog);
        break;
      case '1100-batheesc':
        this._dialog.open(Es1100BatheescComponent, stylesDialog);
        break;
      case '1200-batheapo':
        this._dialog.open(Es1200BatheapoComponent, stylesDialog);
        break;
      case '1300-bathece':
        this._dialog.open(Es1300BatheceComponent, stylesDialog);
        break;
      case '1400-batheps':
        this._dialog.open(Es1400BathepsComponent, stylesDialog);
        break;
      case '1500-bathether':
        this._dialog.open(Es1500BathetherComponent, stylesDialog);
        break;
      case '1600-bathece':
        this._dialog.open(Es1600BatheceComponent, stylesDialog);
        break;
      case '1700-bathethe':
        this._dialog.open(Es1700BathetheComponent, stylesDialog);
        break;
      case '1800-batheecs':
        this._dialog.open(Es1800BatheecsComponent, stylesDialog);
        break;
      case '1900-bathethec':
        this._dialog.open(Es1900BathethecComponent, stylesDialog);
        break;
      case '2000-bathethea':
        this._dialog.open(Es2000BathetheaComponent, stylesDialog);
        break;
      case '2100-bathetgehs':
        this._dialog.open(Es2100BathetgehsComponent, stylesDialog);
        break;
      case '2200-bathefm':
        this._dialog.open(Es2200BathefmComponent, stylesDialog);
        break;
      case '2300-bathepthe':
        this._dialog.open(Es2300BatheptheComponent, stylesDialog);
        break;
      case '2400-bathewm':
        this._dialog.open(Es2400BathewmComponent, stylesDialog);
        break;
      case '2500-bathethem':
        this._dialog.open(Es2500BathethemComponent, stylesDialog);
        break;
      case '2600-bathehrs':
        this._dialog.open(Es2600BathehrsComponent, stylesDialog);
        break;
      case '2700-bathespw':
        this._dialog.open(Es2700BathespwComponent, stylesDialog);
        break;
      case '2800-bathesor':
        this._dialog.open(Es2800BathesorComponent, stylesDialog);
        break;
      case '2900-batheccs':
        this._dialog.open(Es2900BatheccsComponent, stylesDialog);
        break;
      case '3000-bathetgm':
        this._dialog.open(Es3000BathetgmComponent, stylesDialog);
        break;
      case '3100-bathecp':
        this._dialog.open(Es3100BathecpComponent, stylesDialog);
        break;
      case '3200-bathecc':
        this._dialog.open(Es3200BatheccComponent, stylesDialog);
        break;
      case '3300-batheirs':
        this._dialog.open(Es3300BatheirsComponent, stylesDialog);
        break;
    }
  }
}
