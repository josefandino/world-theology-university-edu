import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-en-203-math-ecdd',
  imports: [dialogImports],
  templateUrl: './en-203-math-ecdd.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En203MathEcddComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-of-theology/ecumenical-councils-and-dogmatic-development-en.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En203MathEcddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
