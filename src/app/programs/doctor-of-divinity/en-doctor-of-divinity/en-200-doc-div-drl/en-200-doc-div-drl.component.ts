import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-200-doc-div-drl',
  imports: [dialogImports],
  templateUrl: './en-200-doc-div-drl.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En200DocDivDrlComponent extends GlobalsInjects {
  public flyer = './assets/webp/doctorado_divinidades.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En200DocDivDrlComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
