import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-1800-batheecs',
  imports: [dialogImports],
  templateUrl: './en-1800-batheecs.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En1800BatheecsComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/bacher-teologia/en/studies-of-early-christianity-en.webp';
  public alt = 'Flyer World Theology Academy';

  constructor(
    private dialogRef: MatDialogRef<En1800BatheecsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
