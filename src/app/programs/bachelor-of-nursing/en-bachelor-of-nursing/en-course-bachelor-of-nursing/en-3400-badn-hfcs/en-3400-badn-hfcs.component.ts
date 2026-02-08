import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-3400-badn-hfcs',
  imports: [dialogImports],
  templateUrl: './en-3400-badn-hfcs.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En3400BadnHfcsComponent extends GlobalsInjects {
  constructor(
    private dialogRef: MatDialogRef<En3400BadnHfcsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
