import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { stylesDialog } from '@shared/const/styles-dialog';
import { TextService } from '@shared/helpers';

import { AngularModule, MaterialModule } from '@shared/modules';
import { EnBachcii10Component } from './en-bach-cii-100/en-bachcii10.component';
import { EnBachIpt300Component } from './en-bach-ipt-300/en-bach-ipt-300.component';
import { EnBachHc500Component } from './en-bach-hc-500/en-bach-hc-500.component';
import { EnBachIap600Component } from './en-bach-iap-600/en-bach-iap-600.component';
import { EnBachIbc700Component } from './en-bach-ibc-700/en-bach-ibc-700.component';
import { EnBachPe800Component } from './en-bach-pe-800/en-bach-pe-800.component';
import { EnBachIch900Component } from './en-bach-ich-900/en-bach-ich-900.component';
import { EnBachFlc1000Component } from './en-bach-flc-1000/en-bach-flc-1000.component';
import { EnBachEth1100Component } from './en-bach-eth-1100/en-bach-eth-1100.component';
import { EnBachMss1200Component } from './en-bach-mss-1200/en-bach-mss-1200.component';
import { EnBachChi1300Component } from './en-bach-chi-1300/en-bach-chi-1300.component';
import { EnBachApc1400Component } from './en-bach-apc-1400/en-bach-apc-1400.component';
import { EnBachCces1500Component } from './en-bach-cces-1500/en-bach-cces-1500.component';
import { EnBachLhs1600Component } from './en-bach-lhs-1600/en-bach-lhs-1600.component';
import { EnBachCpe400Component } from './en-bach-cpe-400/en-bach-cpe-400.component';
import { BACHPD200EnComponent } from './en-bach-pd-200/bach-pd-200-en.component';

@Component({
  selector: 'app-en-capellania',
  imports: [AngularModule, MaterialModule, BannerComponent],
  templateUrl: './en-capellania.component.html',
  styleUrl: './en-capellania.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnCapellaniaComponent {
  public flyer = './assets/webp/capellania/chaplaincy-en.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}

  public openDialog(dialog: string): void {
    switch (dialog) {
      case 'bachcii100':
        this._dialog.open(EnBachcii10Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachpd200':
        this._dialog.open(BACHPD200EnComponent, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachipt300':
        this._dialog.open(EnBachIpt300Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachcpe400':
        this._dialog.open(EnBachCpe400Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachhc500':
        this._dialog.open(EnBachHc500Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachiap600':
        this._dialog.open(EnBachIap600Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachibc700':
        this._dialog.open(EnBachIbc700Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachpe800':
        this._dialog.open(EnBachPe800Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachich900':
        this._dialog.open(EnBachIch900Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachflc1000':
        this._dialog.open(EnBachFlc1000Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bacheth1100':
        this._dialog.open(EnBachEth1100Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bchbibl1200':
        this._dialog.open(EnBachMss1200Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachchi1300':
        this._dialog.open(EnBachChi1300Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachapc1400':
        this._dialog.open(EnBachApc1400Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachcces1500':
        this._dialog.open(EnBachCces1500Component, stylesDialog);
        break;
    }
    switch (dialog) {
      case 'bachlhs1600':
        this._dialog.open(EnBachLhs1600Component, stylesDialog);
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
