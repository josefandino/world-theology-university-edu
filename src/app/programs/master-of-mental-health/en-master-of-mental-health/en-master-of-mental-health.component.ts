import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';
import { stylesDialog } from '@shared/const/styles-dialog';

import { EnMamhAp700Component } from './en-mamh-ap-700/en-mamh-ap-700.component';
import { EnMamhAsp2100Component } from './en-mamh-asp-2100/en-mamh-asp-2100.component';
import { EnMamhCap1800Component } from './en-mamh-cap-1800/en-mamh-cap-1800.component';
import { EnMamhCbtt1300Component } from './en-mamh-cbtt-1300/en-mamh-cbtt-1300.component';
import { EnMamhEd2200Component } from './en-mamh-ed-2200/en-mamh-ed-2200.component';
import { EnMamhFct1900Component } from './en-mamh-fct-1900/en-mamh-fct-1900.component';
import { EnMamhFmhcp100Component } from './en-mamh-fmhcp-100/en-mamh-fmhcp-100.component';
import { EnMamhFp2600Component } from './en-mamh-fp-2600/en-mamh-fp-2600.component';
import { EnMamhGdtp900Component } from './en-mamh-gdtp-900/en-mamh-gdtp-900.component';
import { EnMamhHgd400Component } from './en-mamh-hgd-400/en-mamh-hgd-400.component';
import { EnMamhIc1100Component } from './en-mamh-ic-1100/en-mamh-ic-1100.component';
import { EnMamhIcsl200Component } from './en-mamh-icsl-200/en-mamh-icsl-200.component';
import { EnMamhIctp300Component } from './en-mamh-ictp-300/en-mamh-ictp-300.component';
import { EnMamhIpc1600Component } from './en-mamh-ipc-1600/en-mamh-ipc-1600.component';
import { EnMamhNr1500Component } from './en-mamh-nr-1500/en-mamh-nr-1500.component';
import { EnMamhPagd2000Component } from './en-mamh-pagd-2000/en-mamh-pagd-2000.component';
import { EnMamhPcei500Component } from './en-mamh-pcei-500/en-mamh-pcei-500.component';
import { EnMamhPmhcp600Component } from './en-mamh-pmhcp-600/en-mamh-pmhcp-600.component';
import { EnMamhPov1200Component } from './en-mamh-pov-1200/en-mamh-pov-1200.component';
import { EnMamhPsyp1400Component } from './en-mamh-psyp-1400/en-mamh-psyp-1400.component';
import { EnMamhRebs800Component } from './en-mamh-rebs-800/en-mamh-rebs-800.component';
import { EnMamhVdd1000Component } from './en-mamh-vdd-1000/en-mamh-vdd-1000.component';
import { CoursesEnMasterOfMentalHealthcComponent } from './courses-en-master-of-mental-healthc/courses-en-master-of-mental-healthc.component';

@Component({
  selector: 'app-en-master-of-mental-health',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    CoursesEnMasterOfMentalHealthcComponent,
  ],
  templateUrl: './en-master-of-mental-health.component.html',
  styleUrl: './en-master-of-mental-health.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnMasterOfMentalHealthComponent {
  public flyer =
    './assets/webp/ma-salud-mental/master-of-mental-health-en.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  ngOnInit() {}
}
