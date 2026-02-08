import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-mamh-gdtp-900',
  imports: [dialogImports],
  templateUrl: './en-mamh-gdtp-900.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnMamhGdtp900Component extends GlobalsInjects {
  public flyer =
    '/assets/webp/ma-salud-mental/group-dynamics-theory-and-practice-en.webp';

  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<EnMamhGdtp900Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
