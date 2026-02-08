import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  OnInit,
} from '@angular/core';

import { AccordionComponent } from '@shared/components/accordion/accordion.component';
import { AccordionItem } from '@shared/components/accordion/accordion.interface';
import { BreadcamsComponent } from '@shared/components/breadcams/breadcams.component';
import { TableWeksComponent } from '@shared/components/table-weks/table-weks.component';
import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { EnMasterDegreeReligionPublicLeadershipComponent } from './en-master-degree-religion-public-leadership/en-master-degree-religion-public-leadership.component';
import { EsMasterDegreeReligionPublicLeadershipComponent } from './es-master-degree-religion-public-leadership/es-master-degree-religion-public-leadership.component';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { LanguageService } from '@shared/services/language.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-master-degree-religion-public-leadership',
  imports: [
    EnMasterDegreeReligionPublicLeadershipComponent,
    EsMasterDegreeReligionPublicLeadershipComponent,
  ],
  templateUrl: './master-degree-religion-public-leadership.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MasterDegreeReligionPublicLeadershipComponent {
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
