import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-1400-macc-mc',
  imports: [dialogImports],
  templateUrl: './es-1400-macc-mc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es1400MaccMcComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-consejeria-clinica/es/consejeria-matrimonial-es.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<Es1400MaccMcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
