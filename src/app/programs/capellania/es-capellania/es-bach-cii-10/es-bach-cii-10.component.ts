import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-bachcii10',
  imports: [dialogImports],
  templateUrl: './es-bach-cii-10.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BACHCII10Component extends GlobalsInjects {
  public flyer =
    './assets/webp/capellania/comunicacion-e-interaccion-intercultural-es.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<BACHCII10Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
