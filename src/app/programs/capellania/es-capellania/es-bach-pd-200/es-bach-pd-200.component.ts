import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';
@Component({
  selector: 'app-es-bach-pd-200',
  imports: [dialogImports],
  templateUrl: './es-bach-pd-200.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsBachPd200Component extends GlobalsInjects {
  public flyer = './assets/webp/capellania/psicologia-del-desarrollo-es.webp';

  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<EsBachPd200Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
