import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularModule, MaterialModule } from '@shared/modules';
import { EsCourseBachelorOfNursingComponent } from './es-course-bachelor-of-nursing/es-course-bachelor-of-nursing.component';

@Component({
  selector: 'app-es-bachelor-of-nursing',
  imports: [AngularModule, MaterialModule, EsCourseBachelorOfNursingComponent],
  templateUrl: './es-bachelor-of-nursing.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsBachelorOfNursingComponent {}
