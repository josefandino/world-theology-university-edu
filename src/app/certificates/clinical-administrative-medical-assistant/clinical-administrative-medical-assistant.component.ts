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
import { EsClinicalAdministrativeMedicalAssistantComponent } from './es-clinical-administrative-medical-assistant/es-clinical-administrative-medical-assistant.component';
import { EnClinicalAdministrativeMedicalAssistantComponent } from './en-clinical-administrative-medical-assistant/en-clinical-administrative-medical-assistant.component';

@Component({
  selector: 'app-clinical-administrative-medical-assistant',
  imports: [
    AngularModule,
    MaterialModule,
    EsClinicalAdministrativeMedicalAssistantComponent,
    EnClinicalAdministrativeMedicalAssistantComponent,
  ],
  templateUrl: './clinical-administrative-medical-assistant.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClinicalAdministrativeMedicalAssistantComponent
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
