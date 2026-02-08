import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-en-607-math-rpce',
  imports: [dialogImports],
  templateUrl: './en-607-math-rpce.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En607MathRpceComponent extends GlobalsInjects {
  public flyer = './assets/webp/ma-of-theology/';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En607MathRpceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
