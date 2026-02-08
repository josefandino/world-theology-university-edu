import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-3300-badn-nsma',
  imports: [dialogImports],
  templateUrl: './es-3300-badn-nsma.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es3300BadnNsmaComponent extends GlobalsInjects {
  constructor(
    private dialogRef: MatDialogRef<Es3300BadnNsmaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
