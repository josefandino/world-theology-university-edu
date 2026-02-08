import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-3200-badn-ghicsd',
  imports: [dialogImports],
  templateUrl: './es-3200-badn-ghicsd.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es3200BadnGhicsdComponent extends GlobalsInjects {
  constructor(
    private dialogRef: MatDialogRef<Es3200BadnGhicsdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
