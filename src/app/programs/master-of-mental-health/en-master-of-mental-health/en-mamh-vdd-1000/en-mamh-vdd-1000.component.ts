import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-mamh-vdd-1000',
  imports: [dialogImports],
  templateUrl: './en-mamh-vdd-1000.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnMamhVdd1000Component extends GlobalsInjects {
  public flyer =
    '/assets/webp/ma-salud-mental/vocational-development-dynamics-en.webp';

  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<EnMamhVdd1000Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
