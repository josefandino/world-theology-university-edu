import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-es-mamh-pmhcp-600',
  imports: [dialogImports],
  templateUrl: './es-mamh-pmhcp-600.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsMamhPmhcp600Component extends GlobalsInjects {
  public flyer =
    './assets/webp/ma-salud-mental/practica-en-consejeria-para-la-salud-mental-y-la-perspectiva-es.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<EsMamhPmhcp600Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
