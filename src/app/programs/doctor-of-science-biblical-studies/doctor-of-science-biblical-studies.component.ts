import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';
import { EsDoctorOfScienceBiblicalStudiesComponent } from './es-doctor-of-science-biblical-studies/es-doctor-of-science-biblical-studies.component';
import { EnDoctorOfScienceBiblicalStudiesComponent } from './en-doctor-of-science-biblical-studies/en-doctor-of-science-biblical-studies.component';

@Component({
  selector: 'app-doctor-of-science-biblical-studies',
  imports: [
    EsDoctorOfScienceBiblicalStudiesComponent,
    EnDoctorOfScienceBiblicalStudiesComponent,
  ],
  templateUrl: './doctor-of-science-biblical-studies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DoctorOfScienceBiblicalStudiesComponent {
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
