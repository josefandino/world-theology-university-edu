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
import { EnMasterOfClinicalMentoringComponent } from './en-master-of-clinical-mentoring/en-master-of-clinical-mentoring.component';
import { EsMasterOfClinicalMentoringComponent } from './es-master-of-clinical-mentoring/es-master-of-clinical-mentoring.component';

@Component({
  selector: 'app-master-of-clinical-mentoring',
  imports: [
    AngularModule,
    MaterialModule,
    EnMasterOfClinicalMentoringComponent,
    EsMasterOfClinicalMentoringComponent,
  ],
  templateUrl: './master-of-clinical-mentoring.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasterOfClinicalMentoringComponent implements OnInit {
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
