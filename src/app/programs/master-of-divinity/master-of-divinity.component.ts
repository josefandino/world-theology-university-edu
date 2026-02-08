import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { EnMasterOfDivinityComponent } from './en-master-of-divinity/en-master-of-divinity.component';
import { EsMasterOfDivinityComponent } from './es-master-of-divinity/es-master-of-divinity.component';

@Component({
  selector: 'app-master-of-divinity',
  imports: [EnMasterOfDivinityComponent, EsMasterOfDivinityComponent],
  templateUrl: './master-of-divinity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasterOfDivinityComponent {
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
