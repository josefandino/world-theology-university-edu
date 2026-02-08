import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-bachpd10',
  standalone: true,
  imports: [dialogImports],
  templateUrl: './bach-pd-200.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BACHPD200Component extends GlobalsInjects {
  public flyer = './assets/webp/capellania/psicologia-del-desarrollo-es.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<BACHPD200Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
