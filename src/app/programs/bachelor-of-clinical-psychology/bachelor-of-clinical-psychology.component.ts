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
import { EsBachelorOfClinicalPsychologyComponent } from './es-bachelor-of-clinical-psychology/es-bachelor-of-clinical-psychology.component';
import { EnBachelorOfClinicalPsychologyComponent } from './en-bachelor-of-clinical-psychology/en-bachelor-of-clinical-psychology.component';

@Component({
  selector: 'app-bachelor-of-clinical-psychology',
  imports: [
    AngularModule,
    MaterialModule,
    EsBachelorOfClinicalPsychologyComponent,
    EnBachelorOfClinicalPsychologyComponent,
  ],
  templateUrl: './bachelor-of-clinical-psychology.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BachelorOfClinicalPsychologyComponent implements OnInit {
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
