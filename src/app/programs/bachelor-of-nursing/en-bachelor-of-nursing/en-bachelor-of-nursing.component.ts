import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularModule, MaterialModule } from '@shared/modules';
import { EnCourseBachelorOfNursingComponent } from './en-course-bachelor-of-nursing/en-course-bachelor-of-nursing.component';

@Component({
  selector: 'app-en-bachelor-of-nursing',
  imports: [AngularModule, MaterialModule, EnCourseBachelorOfNursingComponent],
  templateUrl: './en-bachelor-of-nursing.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnBachelorOfNursingComponent {}
