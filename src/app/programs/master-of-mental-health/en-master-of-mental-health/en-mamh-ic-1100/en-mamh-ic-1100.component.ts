import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-mamh-ic-1100',
  imports: [dialogImports],
  templateUrl: './en-mamh-ic-1100.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnMamhIc1100Component extends GlobalsInjects {
  public flyer =
    '/assets/webp/ma-salud-mental/intercultural-counseling-en.webp';

  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<EnMamhIc1100Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
