import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-en-405-math-sfe',
  imports: [dialogImports],
  templateUrl: './en-405-math-sfe.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En405MathSfeComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-of-theology/sexual-and-family-ethics-en.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En405MathSfeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
