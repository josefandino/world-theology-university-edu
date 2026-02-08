import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-1300-bathece',
  imports: [dialogImports],
  templateUrl: './en-1300-bathece.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En1300BatheceComponent extends GlobalsInjects {
  public flyer = './assets/webp/bacher-teologia/en/christian-education-en.webp';
  public alt = 'Flyer World Theology Academy';

  constructor(
    private dialogRef: MatDialogRef<En1300BatheceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
