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
import { EsBachelorOfInternationalRelationsComponent } from '../bachelor-of-international-relations/es-bachelor-of-international-relations/es-bachelor-of-international-relations.component';
import { EnBachelorOfInternationalRelationsComponent } from '../bachelor-of-international-relations/en-bachelor-of-international-relations/en-bachelor-of-international-relations.component';

@Component({
  selector: 'app-master-of-international-relations',
  imports: [
    AngularModule,
    MaterialModule,
    EsBachelorOfInternationalRelationsComponent,
    EnBachelorOfInternationalRelationsComponent,
  ],
  templateUrl: './master-of-international-relations.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasterOfInternationalRelationsComponent implements OnInit {
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
