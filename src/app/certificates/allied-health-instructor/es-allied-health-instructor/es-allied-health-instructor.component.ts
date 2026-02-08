import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-es-allied-health-instructor',
  imports: [],
  templateUrl: './es-allied-health-instructor.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsAlliedHealthInstructorComponent {
  public banner = 'public/assets/certificates/allied-health-instructor-es.webp';
}
