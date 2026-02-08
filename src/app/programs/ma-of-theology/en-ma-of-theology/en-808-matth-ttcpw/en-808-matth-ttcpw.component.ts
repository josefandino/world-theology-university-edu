import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-en-808-matth-ttcpw',
  imports: [dialogImports],
  templateUrl: './en-808-matth-ttcpw.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class En808MatthTtcpwComponent extends GlobalsInjects {
  public flyer = '';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<En808MatthTtcpwComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}
