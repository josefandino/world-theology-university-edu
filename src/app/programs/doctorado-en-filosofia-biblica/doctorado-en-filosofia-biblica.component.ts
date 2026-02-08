import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { EnDoctoradoEnFilosofiaBiblicaComponent } from './en-doctorado-en-filosofia-biblica/en-doctorado-en-filosofia-biblica.component';
import { EsDoctoradoEnFilosofiaBiblicaComponent } from './es-doctorado-en-filosofia-biblica/es-doctorado-en-filosofia-biblica.component';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-doctorado-en-filosofia-biblica',
  imports: [
    EnDoctoradoEnFilosofiaBiblicaComponent,
    EsDoctoradoEnFilosofiaBiblicaComponent,
  ],
  templateUrl: './doctorado-en-filosofia-biblica.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DoctoradoEnFilosofiaBiblicaComponent {
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
