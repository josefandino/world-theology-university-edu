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
import { EnMasterOfClinicalPsychologyComponent } from './en-master-of-clinical-psychology/en-master-of-clinical-psychology.component';
import { EsMasterOfClinicalPsychologyComponent } from './es-master-of-clinical-psychology/es-master-of-clinical-psychology.component';

@Component({
  selector: 'app-master-of-clinical-psychology',
  imports: [
    AngularModule,
    MaterialModule,
    EnMasterOfClinicalPsychologyComponent,
    EsMasterOfClinicalPsychologyComponent,
  ],
  templateUrl: './master-of-clinical-psychology.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasterOfClinicalPsychologyComponent implements OnInit {
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
