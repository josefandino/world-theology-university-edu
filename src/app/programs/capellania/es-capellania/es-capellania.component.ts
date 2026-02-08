import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { GlobalsInjects } from '@shared/modules/globals-injects';
import { AngularModule, MaterialModule } from '@shared/modules';
import { stylesDialog } from '@shared/const/styles-dialog';
import { TextService } from '@shared/helpers';

import { BannerComponent } from '@shared/components/banner/banner.component';

// ================= COURSES =================
import { EsBachCii100Component } from './es-bach-cii-100/es-bach-cii-100.component';
import { EsBachPd200Component } from './es-bach-pd-200/es-bach-pd-200.component';
import { EsBachIpt300Component } from './es-bach-ipt-300/es-bach-ipt-300.component';
import { EsBachCpe400Component } from './es-bach-cpe-400/es-bach-cpe-400.component';
import { EsBachHc500Component } from './es-bach-hc-500/es-bach-hc-500.component';
import { EsBachIap600Component } from './es-bach-iap-600/es-bach-iap-600.component';
import { EsBachIbc700Component } from './es-bach-ibc-700/es-bach-ibc-700.component';
import { EsBachPe800Component } from './es-bach-pe-800/es-bach-pe-800.component';
import { EsBachIch900Component } from './es-bach-ich-900/es-bach-ich-900.component';
import { EsBachFlc1000Component } from './es-bach-flc-1000/es-bach-flc-1000.component';
import { EsBachEth1100Component } from './es-bach-eth-1100/es-bach-eth-1100.component';
import { EsBachMss1200Component } from './es-bach-mss-1200/es-bach-mss-1200.component';
import { EsBachChi1300Component } from './es-bach-chi-1300/es-bach-chi-1300.component';
import { EsBachApc1400Component } from './es-bach-apc-1400/es-bach-apc-1400.component';
import { EsBachCces1500Component } from './es-bach-cces-1500/es-bach-cces-1500.component';
import { EsBachLhs1600Component } from './es-bach-lhs-1600/es-bach-lhs-1600.component';

@Component({
  selector: 'app-es-capellania',
  imports: [AngularModule, MaterialModule, BannerComponent],
  templateUrl: './es-capellania.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCapellaniaComponent extends GlobalsInjects {
  public flyer = './assets/webp/capellania/capellania-es.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');
  readonly _dialog = inject(MatDialog);

  ngOnInit() {}

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'bachcii100':
        this._dialog.open(EsBachCii100Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachpd200':
        this._dialog.open(EsBachPd200Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachipt300':
        this._dialog.open(EsBachIpt300Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachcpe400':
        this._dialog.open(EsBachCpe400Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachhc500':
        this._dialog.open(EsBachHc500Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachiap600':
        this._dialog.open(EsBachIap600Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachibc700':
        this._dialog.open(EsBachIbc700Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachpe800':
        this._dialog.open(EsBachPe800Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachich900':
        this._dialog.open(EsBachIch900Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachflc1000':
        this._dialog.open(EsBachFlc1000Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bacheth1100':
        this._dialog.open(EsBachEth1100Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachmss1200':
        this._dialog.open(EsBachMss1200Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachchi1300':
        this._dialog.open(EsBachChi1300Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachapc1400':
        this._dialog.open(EsBachApc1400Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachcces1500':
        this._dialog.open(EsBachCces1500Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachlhs1600':
        this._dialog.open(EsBachLhs1600Component, stylesDialog);
        break;
    }
    // switch (dialog) {
    //   case 'bachchpl480':
    //     this._dialog.open(BACHCHPL480EnComponent, stylesDialog);
    //     break;
    // }
    // switch (dialog) {
    //   case 'bachchpl480':
    //     this._dialog.open(BACHCHPL480EnComponent, stylesDialog);
    //     break;
    // }
  }
}
