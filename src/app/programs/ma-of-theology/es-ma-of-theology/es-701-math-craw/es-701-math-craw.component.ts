import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-es-701-math-craw',
  imports: [dialogImports],
  templateUrl: './es-701-math-craw.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es701MathCrawComponent extends GlobalsInjects {
  public flyer = './assets/webp/ma-of-theology/griego-koine-ii-e';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<Es701MathCrawComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
