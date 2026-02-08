import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  inject,
  OnDestroy,
} from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { EnBachelorOfNursingComponent } from './en-bachelor-of-nursing/en-bachelor-of-nursing.component';
import { EsBachelorOfNursingComponent } from './es-bachelor-of-nursing/es-bachelor-of-nursing.component';

@Component({
  selector: 'app-bachelor-of-nursing',
  imports: [EnBachelorOfNursingComponent, EsBachelorOfNursingComponent],
  template: ` <!-- Default language -->
    @if (language() === 'en') {
      <app-en-bachelor-of-nursing />
    } @else {
      <app-es-bachelor-of-nursing />
    }`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BachelorOfNursingComponent implements OnInit, OnDestroy {
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
