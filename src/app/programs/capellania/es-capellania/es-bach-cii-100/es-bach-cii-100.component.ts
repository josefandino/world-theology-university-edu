import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BACHCII10Component } from '@programs/capellania/es-capellania/es-bach-cii-10/es-bach-cii-10.component';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';
@Component({
  selector: 'app-es-bach-cii-100',
  imports: [dialogImports],
  templateUrl: './es-bach-cii-100.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsBachCii100Component extends GlobalsInjects {
  public flyer =
    './assets/webp/capellania/comunicacion-e-interaccion-intercultural-es.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<BACHCII10Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
