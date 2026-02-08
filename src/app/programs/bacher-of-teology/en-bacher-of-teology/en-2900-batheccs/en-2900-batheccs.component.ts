import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-2900-batheccs',
  imports: [dialogImports],
  templateUrl: './en-2900-batheccs.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En2900BatheccsComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/bacher-teologia/en/contemporary-christians-studies-en.webp';
  public alt = 'Flyer World Academy Theology';

  constructor(
    private dialogRef: MatDialogRef<En2900BatheccsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
