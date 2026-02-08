import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-1400-macc-mc',
  imports: [dialogImports],
  templateUrl: './en-1400-macc-mc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En1400MaccMcComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-consejeria-clinica/en/marriage-counseling-en.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En1400MaccMcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
