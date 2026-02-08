import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { AngularModule } from '@shared/modules';
import { MaterialModule } from '@shared/modules/material.module';
import { LanguageService } from '@shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';
import { EsPharmacyTechnicianComponent } from './es-pharmacy-technician/es-pharmacy-technician.component';
import { EnPharmacyTechnicianComponent } from './en-pharmacy-technician/en-pharmacy-technician.component';

@Component({
  selector: 'app-pharmacy-technician',
  imports: [
    AngularModule,
    MaterialModule,
    EsPharmacyTechnicianComponent,
    EnPharmacyTechnicianComponent,
  ],
  templateUrl: './pharmacy-technician.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PharmacyTechnicianComponent implements OnInit {
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
