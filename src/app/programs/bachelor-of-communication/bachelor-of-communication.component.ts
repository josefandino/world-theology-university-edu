import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  inject,
} from '@angular/core';
import { EnBachelorOfCommunicationComponent } from './en-bachelor-of-communication/en-bachelor-of-communication.component';
import { EsBachelorOfCommunicationComponent } from './es-bachelor-of-communication/es-bachelor-of-communication.component';
import { LanguageService } from '@shared/services/language.service';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-bachelor-of-communication',
  imports: [
    EnBachelorOfCommunicationComponent,
    EsBachelorOfCommunicationComponent,
  ],
  templateUrl: './bachelor-of-communication.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BachelorOfCommunicationComponent implements OnInit {
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
