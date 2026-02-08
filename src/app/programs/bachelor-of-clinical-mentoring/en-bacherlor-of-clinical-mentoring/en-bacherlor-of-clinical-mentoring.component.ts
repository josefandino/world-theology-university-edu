import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';

import { BannerComponent } from '@shared/components/banner/banner.component';
import { MatDialog } from '@angular/material/dialog';
import { TextService } from '@shared/helpers';
import { stylesDialog } from '@shared/const/styles-dialog';

import { CoursesEnBaccAcComponent } from './courses-en-bacc-ac/courses-en-bacc-ac.component';

@Component({
  selector: 'app-en-bacherlor-of-clinical-mentoring',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    CoursesEnBaccAcComponent,
  ],
  templateUrl: './en-bacherlor-of-clinical-mentoring.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnBacherlorOfClinicalMentoringComponent {
  public flyer =
    './assets/webp/ba-degree-in-clinical-counseling/bachelors-degree-in-clinical-counseling-en.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}

  public openDialog(dialog: string): void {
    switch (dialog) {
    }
  }
}
