import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';
import { AngularModule, MaterialModule } from '@shared/modules';
import { EsMasterOfMentalHealthComponent } from './es-master-of-mental-health/es-master-of-mental-health.component';
import { EnMasterOfMentalHealthComponent } from './en-master-of-mental-health/en-master-of-mental-health.component';
@Component({
  selector: 'app-master-of-mental-health',
  imports: [
    AngularModule,
    MaterialModule,
    EsMasterOfMentalHealthComponent,
    EnMasterOfMentalHealthComponent,
  ],
  templateUrl: './master-of-mental-health.component.html',
  styleUrl: './master-of-mental-health.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasterOfMentalHealthComponent {
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
