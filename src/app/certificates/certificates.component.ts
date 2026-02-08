import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import { CdkAccordionItem } from '@angular/cdk/accordion';

import { UnsubscribeSubject } from '@shared/models/global.interface';
import { TableWeksComponent } from '@shared/components/table-weks/table-weks.component';
import { AngularModule } from '@shared/modules/angular.module';
import { MaterialModule } from '@shared/modules/material.module';
import { WUT_INFO } from '@shared/const/info-acc';
import { LanguageService } from '@shared/services/language.service';

import { CertificatesService } from './certificates.service';
import { CertificatesI } from './certificates.interfaces';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  imports: [AngularModule, MaterialModule, TableWeksComponent],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CertificatesComponent implements OnInit {
  public listCertificatesEs = signal<CertificatesI[]>([]);
  public listCertificatesEn = signal<CertificatesI[]>([]);

  listLetters: unknown[] = [];

  panelOpenState = false;
  expanded: number | null = null;
  index = 0;

  numberCard = signal<number>(1);
  @ViewChild('accordionItemA') accordionItemA: CdkAccordionItem | undefined;

  private readonly _certificatesSvc = inject(CertificatesService);

  toggleAccordion(index: number): void {
    this.expanded = this.expanded === index ? null : index;
  }

  changeCard(index: number): void {
    this.numberCard.set(index);
  }

  // public flyerEn = './assets/webp/wat_programs.webp';
  // public flyerEs = './assets/webp/wat_programs.webp';
  alt = 'Flyer World Theology Academy';

  title: string = '';

  public language = signal<string>('en');

  readonly academyInfo = WUT_INFO;

  private readonly _languageSvc = inject(LanguageService);

  protected readonly unsubscribeAll: UnsubscribeSubject = new Subject<void>();

  constructor() {
    this.language.set(this._languageSvc.getLanguage());
  }

  ngOnInit() {
    this.title = this.academyInfo.title;
    this.listenerLanguage();
  }

  private listenerLanguage(): void {
    this._languageSvc.language$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((langue: string) => {
        this.language.set(langue);
        this.getCertificates();
      });
  }

  private getCertificates(): void {
    this._certificatesSvc.esLanguage().subscribe((resp: CertificatesI[]) => {
      console.log(resp);
      this.listCertificatesEs.set(resp);
    });
    this._certificatesSvc.enLanguage().subscribe((resp: CertificatesI[]) => {
      console.log(resp);
      this.listCertificatesEn.set(resp);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
