import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-mamh-nr-1500',
  imports: [dialogImports],
  templateUrl: './es-mamh-nr-1500.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMamhNr1500Component extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-salud-mental/neuropsicologia-rehabilitativa-es.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<EsMamhNr1500Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
