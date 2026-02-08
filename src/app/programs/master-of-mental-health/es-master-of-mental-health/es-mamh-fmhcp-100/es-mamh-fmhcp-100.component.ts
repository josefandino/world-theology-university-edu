import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-mamh-fmhcp-100',
  imports: [dialogImports],
  templateUrl: './es-mamh-fmhcp-100.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMamhFmhcp100Component extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-salud-mental/fundamentos-de-la-consejeria-para-la-salud-mental-y-la-perspectiva-es.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<EsMamhFmhcp100Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
