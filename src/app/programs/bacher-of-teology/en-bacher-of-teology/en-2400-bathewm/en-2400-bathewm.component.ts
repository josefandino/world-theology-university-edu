import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-2400-bathewm',
  imports: [dialogImports],
  templateUrl: './en-2400-bathewm.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En2400BathewmComponent extends GlobalsInjects {
  public flyer = './assets/webp/bacher-teologia/en/.webp';
  public alt = 'Flyer World Academy Theology';

  constructor(
    private dialogRef: MatDialogRef<En2400BathewmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
