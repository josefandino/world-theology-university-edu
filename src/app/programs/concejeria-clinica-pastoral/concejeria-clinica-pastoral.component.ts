import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { EnConcejeriaClinicaPastoralComponent } from './en-concejeria-clinica-pastoral/en-concejeria-clinica-pastoral.component';
import { EsConcejeriaClinicaPastoralComponent } from './es-concejeria-clinica-pastoral/es-concejeria-clinica-pastoral.component';

@Component({
  selector: 'app-concejeria-clinica-pastoral',
  imports: [
    EnConcejeriaClinicaPastoralComponent,
    EsConcejeriaClinicaPastoralComponent,
  ],
  templateUrl: './concejeria-clinica-pastoral.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcejeriaClinicaPastoralComponent {
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
