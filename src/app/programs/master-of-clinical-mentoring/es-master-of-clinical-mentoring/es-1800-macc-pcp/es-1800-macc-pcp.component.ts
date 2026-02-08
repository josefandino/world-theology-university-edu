import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-1800-macc-pcp',
  imports: [dialogImports],
  templateUrl: './es-1800-macc-pcp.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es1800MaccPcpComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-consejeria-clinica/es/psicopatologia-en-la-practica-clínica-es.webp';

  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<Es1800MaccPcpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
