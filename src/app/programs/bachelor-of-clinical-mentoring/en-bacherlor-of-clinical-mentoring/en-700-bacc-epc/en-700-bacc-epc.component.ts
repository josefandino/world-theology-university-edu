import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-700-bacc-epc',
  imports: [dialogImports],
  templateUrl: './en-700-bacc-epc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En700BaccEpcComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/ba-degree-in-clinical-counseling/ethics-in-psychology-and-counseling-en.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En700BaccEpcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
