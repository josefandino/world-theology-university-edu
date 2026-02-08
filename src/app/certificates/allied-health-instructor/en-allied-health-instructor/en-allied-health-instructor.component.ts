import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-en-allied-health-instructor',
  imports: [],
  templateUrl: './en-allied-health-instructor.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnAlliedHealthInstructorComponent {
  public banner = 'public/assets/certificates/allied-health-instructor-en.webp';
}
