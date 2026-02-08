import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-en-105-math-bg1',
  imports: [dialogImports],
  templateUrl: './en-105-math-bg1.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En105MathBg1Component extends GlobalsInjects {
  public flyer = './assets/webp/ma-of-theology/koine-greek-ii-en.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En105MathBg1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
