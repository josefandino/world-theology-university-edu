import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-en-704-math-etr',
  imports: [dialogImports],
  templateUrl: './en-704-math-etr.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En704MathEtrComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-of-theology/ethics-in-theological-research-en.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En704MathEtrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
