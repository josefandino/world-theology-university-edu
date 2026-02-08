import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';
import { ProgramsI } from './programs.interface';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { ProgramsService } from './programs.service';
import { LanguageService } from '@shared/services/language.service';
import { UnsubscribeSubject } from '@shared/models/global.interface';
import { Subject, takeUntil } from 'rxjs';
import { TextService } from '@shared/helpers';
import { WUT_INFO } from '@shared/const/info-acc';
import { TableWeksComponent } from '@shared/components/table-weks/table-weks.component';
import { BannerComponent } from '@shared/components/banner/banner.component';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
  imports: [AngularModule, MaterialModule, TableWeksComponent, BannerComponent],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgramsComponent implements OnInit {
  public listProgramsEs = signal<ProgramsI[]>([]);
  public listProgramsEn = signal<ProgramsI[]>([]);

  listLetters: unknown[] = [];

  panelOpenState = false;
  expanded: number | null = null;
  index = 0;

  numberCard = signal<number>(1);
  @ViewChild('accordionItemA') accordionItemA: CdkAccordionItem | undefined;

  private readonly _programsSvc = inject(ProgramsService);

  toggleAccordion(index: number): void {
    this.expanded = this.expanded === index ? null : index;
  }

  changeCard(index: number): void {
    this.numberCard.set(index);
  }

  public flyerEn = './assets/webp/wat_programs.webp';
  public flyerEs = './assets/webp/wat_programs.webp';
  alt = 'Flyer World Theology Academy';

  title: string = '';

  public language = signal<string>('en');

  readonly academyInfo = WUT_INFO;

  private readonly _languageSvc = inject(LanguageService);

  protected readonly unsubscribeAll: UnsubscribeSubject = new Subject<void>();

  private readonly _text = inject(TextService);

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
        this.getPrograms();
      });
  }

  private getPrograms(): void {
    this._programsSvc.esLanguage().subscribe((resp: ProgramsI[]) => {
      console.log(resp);
      this.listProgramsEs.set(resp);
    });
    this._programsSvc.enLanguage().subscribe((resp: ProgramsI[]) => {
      console.log(resp);
      this.listProgramsEn.set(resp);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
