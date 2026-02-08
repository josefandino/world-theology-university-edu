import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-700-doc-fb-re',
  imports: [dialogImports],
  templateUrl: './es-700-doc-fb-re.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Es700DocFbReComponent extends GlobalsInjects {
  public flyer = './assets/webp/doctorado_filosofia.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<Es700DocFbReComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
