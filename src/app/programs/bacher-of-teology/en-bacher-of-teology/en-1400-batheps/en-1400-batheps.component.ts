import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-1400-batheps',
  imports: [dialogImports],
  templateUrl: './en-1400-batheps.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En1400BathepsComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/bacher-teologia/en/practical-spirituality-en.webp';
  public alt = 'Flyer World Theology Academy';

  constructor(
    private dialogRef: MatDialogRef<En1400BathepsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
