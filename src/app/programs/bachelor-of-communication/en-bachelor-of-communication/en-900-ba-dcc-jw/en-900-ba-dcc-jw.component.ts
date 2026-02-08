import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
@Component({
  selector: 'app-en-900-ba-dcc-jw',
  imports: [dialogImports],
  templateUrl: './en-900-ba-dcc-jw.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En900BaDccJwComponent extends GlobalsInjects {
  public flyer = './assets/webp/lic-comunicacion/communication.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En900BaDccJwComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
