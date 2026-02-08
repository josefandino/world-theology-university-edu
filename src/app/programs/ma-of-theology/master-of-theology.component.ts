import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { EnMasterOfTheologyComponent } from './en-ma-of-theology/en-master-of-theology.component';
import { EsMasterOfTheologyComponent } from './es-ma-of-theology/es-master-of-theology.component';

@Component({
  selector: 'app-master-of-theology',
  imports: [EsMasterOfTheologyComponent, EnMasterOfTheologyComponent],
  templateUrl: './master-of-theology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasterOfTheologyComponent {
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
