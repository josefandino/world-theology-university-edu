import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-es-607-math-rpce',
  imports: [dialogImports],
  templateUrl: './es-607-math-rpce.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es607MathRpceComponent extends GlobalsInjects {
  public flyer = './assets/webp/ma-of-theology/griego-koine-ii-e';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<Es607MathRpceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
