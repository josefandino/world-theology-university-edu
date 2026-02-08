import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';
import { EnBacherOfTeologyComponent } from './en-bacher-of-teology/en-bacher-of-teology.component';
import { EsBacherOfTeologyComponent } from './es-bacher-of-teology/es-bacher-of-teology.component';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-bacher-teology',
  imports: [
    AngularModule,
    MaterialModule,
    EnBacherOfTeologyComponent,
    EsBacherOfTeologyComponent,
  ],
  templateUrl: './bacher-teology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BacherTeologyComponent implements OnInit {
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
