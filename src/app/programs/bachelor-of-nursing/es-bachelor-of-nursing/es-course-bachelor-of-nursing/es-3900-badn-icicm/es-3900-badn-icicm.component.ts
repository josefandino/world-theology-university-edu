import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-3900-badn-icicm',
  imports: [dialogImports],
  templateUrl: './es-3900-badn-icicm.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es3900BadnIcicmComponent extends GlobalsInjects {
  constructor(
    private dialogRef: MatDialogRef<Es3900BadnIcicmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
