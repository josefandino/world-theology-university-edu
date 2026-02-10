import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { CatalogsI } from './catalogs.interface';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { CatalogsService } from './catalogs.service';
import { LanguageService } from '@shared/services/language.service';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { Subject, takeUntil } from 'rxjs';
import { WUT_INFO } from '@shared/const/info-acc';
import { EnCatalogsComponent } from './en-catalogs/en-catalogs.component';
import { EsCatalogsComponent } from './es-catalogs/es-catalogs.component';

@Component({
  selector: 'app-catalogs',
  imports: [EnCatalogsComponent, EsCatalogsComponent],
  template: ` @if (language() === 'en') {
      <app-en-catalogs />
    } @else {
      <app-es-catalogs />
    }`,
  styleUrl: './catalogs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogsComponent implements OnInit {
  public listCertificatesEs = signal<CatalogsI[]>([]);
  public listCertificatesEn = signal<CatalogsI[]>([]);

  listLetters: unknown[] = [];

  panelOpenState = false;
  expanded: number | null = null;
  index = 0;

  numberCard = signal<number>(1);
  @ViewChild('accordionItemA') accordionItemA: CdkAccordionItem | undefined;

  private readonly _certificatesSvc = inject(CatalogsService);

  toggleAccordion(index: number): void {
    this.expanded = this.expanded === index ? null : index;
  }

  changeCard(index: number): void {
    this.numberCard.set(index);
  }

  // public flyerEn = './assets/webp/wat_programs.webp';
  // public flyerEs = './assets/webp/wat_programs.webp';

  public language = signal<string>('en');

  readonly academyInfo = WUT_INFO;

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
