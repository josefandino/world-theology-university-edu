import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';
import { EsCursoBacherOfTheologyComponent } from './es-curso-bacher-of-theology/es-curso-bacher-of-theology.component';
import { WUT_INFO } from '@shared/const/info-acc';

@Component({
  selector: 'app-es-bacher-of-teology',
  imports: [AngularModule, MaterialModule, EsCursoBacherOfTheologyComponent],
  templateUrl: './es-bacher-of-teology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsBacherOfTeologyComponent {
  public flyer =
    './assets/webp/bacher-teologia/es/licenciatura-en-teologia.webp';
  public alt = 'Flyer World Academy Theology';

  title = signal<string>('');

  readonly academyInfo = WUT_INFO;

  ngOnInit() {
    this.title.set(this.academyInfo.title);
  }
}
