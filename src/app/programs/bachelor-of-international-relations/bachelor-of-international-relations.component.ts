import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  inject,
} from '@angular/core';
import { EsBachelorOfInternationalRelationsComponent } from './es-bachelor-of-international-relations/es-bachelor-of-international-relations.component';
import { EnBachelorOfInternationalRelationsComponent } from './en-bachelor-of-international-relations/en-bachelor-of-international-relations.component';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-bachelor-of-international-relations',
  imports: [
    EsBachelorOfInternationalRelationsComponent,
    EnBachelorOfInternationalRelationsComponent,
  ],
  templateUrl: './bachelor-of-international-relations.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BachelorOfInternationalRelationsComponent
  implements OnInit
{
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
