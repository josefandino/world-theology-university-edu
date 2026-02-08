import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';
import { EsBacherlorOfClinicalMentoringComponent } from './es-bacherlor-of-clinical-mentoring/es-bacherlor-of-clinical-mentoring.component';
import { EnBacherlorOfClinicalMentoringComponent } from './en-bacherlor-of-clinical-mentoring/en-bacherlor-of-clinical-mentoring.component';

@Component({
  selector: 'app-bachelor-of-clinical-mentoring',
  imports: [
    AngularModule,
    MaterialModule,
    EsBacherlorOfClinicalMentoringComponent,
    EnBacherlorOfClinicalMentoringComponent,
  ],
  templateUrl: './bachelor-of-clinical-mentoring.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BachelorOfClinicalMentoringComponent implements OnInit {
  public language = signal<string>('en');

  private readonly _languageSvc = inject(LanguageService);

  protected readonly unsubscribeAll: UnsubscribeSubject = new Subject<void>();

  constructor() {
    this.language.set(this._languageSvc.getLanguage());
  }

  ngOnInit() {
    this.listenerLanguage();
  }

  private listenerLanguage(): void {
    this._languageSvc.language$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((langue: string) => {
        this.language.set(langue);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
