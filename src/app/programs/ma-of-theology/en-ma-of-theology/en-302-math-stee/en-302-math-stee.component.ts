import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterModalComponent } from "../../../../shared/components/footer-modal/footer-modal.component";
import { dialogImports } from '@shared/modules/dialog-imports';

@Component({
  selector: 'app-en-302-math-stee',
  imports: [FooterModalComponent, dialogImports],
  templateUrl: './en-302-math-stee.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class En302MathSteeComponent {

}
