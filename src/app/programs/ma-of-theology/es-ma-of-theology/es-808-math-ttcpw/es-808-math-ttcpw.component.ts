import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { dialogImports } from '@shared/modules/dialog-imports';
import { GlobalsInjects } from '@shared/modules/globals-injects';

@Component({
  selector: 'app-es-808-math-ttcpw',
  imports: [dialogImports],
  templateUrl: './es-808-math-ttcpw.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Es808MathTtcpwComponent extends GlobalsInjects{


  public flyer =
    './assets/webp/ma-of-theology/liturgia-creativa-y-ministerios-emergentes-es.webp';
  public alt = 'Flyer World Theology University';

  constructor(
    private dialogRef: MatDialogRef<Es808MathTtcpwComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super();
  }
}

