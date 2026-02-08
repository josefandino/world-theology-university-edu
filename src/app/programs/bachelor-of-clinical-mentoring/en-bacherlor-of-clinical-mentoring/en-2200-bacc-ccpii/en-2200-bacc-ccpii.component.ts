import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-2200-bacc-ccpii',
  imports: [dialogImports],
  templateUrl: './en-2200-bacc-ccpii.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En2200BaccCcpiiComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/ba-degree-in-clinical-counseling/clinical-counseling-practices-ii-en.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En2200BaccCcpiiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
