import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-500-ba-dcc-mt',
  imports: [dialogImports],
  templateUrl: './es-500-ba-dcc-mt.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es500BaDccMtComponent extends GlobalsInjects {
  public flyer = './assets/webp/lic-comunicacion/communication.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<Es500BaDccMtComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
