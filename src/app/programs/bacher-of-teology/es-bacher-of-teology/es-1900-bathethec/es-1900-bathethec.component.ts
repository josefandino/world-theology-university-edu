import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-1900-bathethec',
  imports: [dialogImports],
  templateUrl: './es-1900-bathethec.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es1900BathethecComponent extends GlobalsInjects {
  public flyer = './assets/webp/bacher-teologia/es/teologia-pastoral-es.webp';
  public alt = 'Flyer World Academy Theology';

  constructor(
    private dialogRef: MatDialogRef<Es1900BathethecComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
