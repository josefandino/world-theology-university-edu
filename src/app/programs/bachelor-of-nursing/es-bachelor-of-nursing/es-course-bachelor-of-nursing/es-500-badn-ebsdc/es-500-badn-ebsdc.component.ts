import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-500-badn-ebsdc',
  imports: [dialogImports],
  templateUrl: './es-500-badn-ebsdc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es500BadnEbsdcComponent extends GlobalsInjects {
  constructor(
    private dialogRef: MatDialogRef<Es500BadnEbsdcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
