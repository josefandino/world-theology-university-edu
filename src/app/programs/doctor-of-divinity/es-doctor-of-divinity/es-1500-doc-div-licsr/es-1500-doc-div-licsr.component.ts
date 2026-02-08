import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-1500-doc-div-licsr',
  imports: [dialogImports],
  templateUrl: './es-1500-doc-div-licsr.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es1500DocDivLicsrComponent extends GlobalsInjects {
  public flyer = './assets/webp/doctorado_divinidades.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<Es1500DocDivLicsrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
