import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-900-bathepc',
  imports: [dialogImports],
  templateUrl: './es-900-bathepc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es900BathepcComponent extends GlobalsInjects {
  public flyer = './assets/webp/bacher-teologia/es/consejeria-pastoral-es.webp';
  public alt = 'Flyer World Theology Academy';

  constructor(
    private dialogRef: MatDialogRef<Es900BathepcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
