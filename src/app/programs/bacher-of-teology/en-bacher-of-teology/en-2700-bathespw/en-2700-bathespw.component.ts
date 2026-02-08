import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { GlobalsInjects } from '@shared/modules/globals-injects';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-2700-bathespw',
  imports: [dialogImports],
  templateUrl: './en-2700-bathespw.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En2700BathespwComponent extends GlobalsInjects {
  public flyer =
    './assets/webp/bacher-teologia/en/social-and-pastoral-work-en.webp';
  public alt = 'Flyer World Academy Theology';

  constructor(
    private dialogRef: MatDialogRef<En2700BathespwComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
