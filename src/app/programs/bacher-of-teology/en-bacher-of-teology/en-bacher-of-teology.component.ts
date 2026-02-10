import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';

import { EnCourseBacherOfTheologyComponent } from './en-course-bacher-of-theology/en-course-bacher-of-theology.component';
import { WTU_INFO } from '@shared/const/info-acc';

@Component({
  selector: 'app-en-bacher-of-teology',
  imports: [AngularModule, MaterialModule, EnCourseBacherOfTheologyComponent],
  templateUrl: './en-bacher-of-teology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnBacherOfTeologyComponent {
  public flyer = './assets/webp/bacher-teologia/en/bacher-theology.webp';
  public alt = 'Flyer World Theology Academy';

  title = signal<string>('');

  readonly academyInfo = WTU_INFO;

  ngOnInit() {
    this.title.set(this.academyInfo.title);
  }
}
