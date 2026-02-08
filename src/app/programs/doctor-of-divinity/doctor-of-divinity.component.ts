import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
} from '@angular/core';

import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';

import { EnDoctorOfDivinityComponent } from './en-doctor-of-divinity/en-doctor-of-divinity.component';
import { EsDoctorOfDivinityComponent } from './es-doctor-of-divinity/es-doctor-of-divinity.component';
@Component({
  selector: 'app-doctor-of-divinity',
  imports: [EnDoctorOfDivinityComponent, EsDoctorOfDivinityComponent],
  templateUrl: './doctor-of-divinity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DoctorOfDivinityComponent {
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
