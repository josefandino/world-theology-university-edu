import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { AngularModule, MaterialModule } from '@shared/modules';
import { MatDialog } from '@angular/material/dialog';
import { stylesDialog } from '@shared/const/styles-dialog';
import { TextService } from '@shared/helpers';

import { BannerComponent } from '@shared/components/banner/banner.component';

@Component({
  selector: 'app-es-master-of-clinical-psychology',
  imports: [AngularModule, MaterialModule, BannerComponent],
  templateUrl: './es-master-of-clinical-psychology.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMasterOfClinicalPsychologyComponent {
  public flyer = './assets/webp/capellania/chaplaincy-en.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'es100baccac':
        // this._dialog.open(Es1000BaccEiComponent, stylesDialog);
        break;
    }
  }
}
