import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-1900-bathethec',
  imports: [dialogImports],
  templateUrl: './en-1900-bathethec.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En1900BathethecComponent extends GlobalsInjects {
  public flyer = './assets/webp/bacher-teologia/en/theology-of-culture-en.webp';
  public alt = 'Flyer World Theology Academy';

  constructor(
    private dialogRef: MatDialogRef<En1900BathethecComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
