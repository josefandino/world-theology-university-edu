import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-3200-bathecc',
  imports: [dialogImports],
  templateUrl: './en-3200-bathecc.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En3200BatheccComponent extends GlobalsInjects {
  public flyer = './assets/webp/bacher-teologia/en/.webp';
  public alt = 'Flyer World Academy Theology';

  constructor(
    private dialogRef: MatDialogRef<En3200BatheccComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
