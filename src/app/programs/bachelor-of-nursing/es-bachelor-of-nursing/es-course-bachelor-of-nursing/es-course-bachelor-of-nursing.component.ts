import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100BadnFnpccComponent } from './es-100-badn-fnpcc/es-100-badn-fnpcc.component';
import { Es200BadnAnpComponent } from './es-200-badn-anp/es-200-badn-anp.component';
import { Es300BadnMibComponent } from './es-300-badn-mib/es-300-badn-mib.component';
import { Es400BadnTchrComponent } from './es-400-badn-tchr/es-400-badn-tchr.component';
import { Es500BadnEbsdcComponent } from './es-500-badn-ebsdc/es-500-badn-ebsdc.component';
import { Es600BadnPhnComponent } from './es-600-badn-phn/es-600-badn-phn.component';
import { Es700BadnHpComponent } from './es-700-badn-hp/es-700-badn-hp.component';
import { Es800BadnPheComponent } from './es-800-badn-phe/es-800-badn-phe.component';
import { Es900BadnApComponent } from './es-900-badn-ap/es-900-badn-ap.component';

import { Es1000BadnPhnComponent } from './es-1000-badn-phn/es-1000-badn-phn.component';
import { Es1100BadnCshaComponent } from './es-1100-badn-csha/es-1100-badn-csha.component';
import { Es1200BadnGpnComponent } from './es-1200-badn-gpn/es-1200-badn-gpn.component';
import { Es1300BadnNdtComponent } from './es-1300-badn-ndt/es-1300-badn-ndt.component';
import { Es1400BadnRmbComponent } from './es-1400-badn-rmb/es-1400-badn-rmb.component';
import { Es1500BadnIpcComponent } from './es-1500-badn-ipc/es-1500-badn-ipc.component';
import { Es1600BadnPheComponent } from './es-1600-badn-phe/es-1600-badn-phe.component';
import { Es1700BadnMsnComponent } from './es-1700-badn-msn/es-1700-badn-msn.component';
import { Es1800BadnMsnComponent } from './es-1800-badn-msn/es-1800-badn-msn.component';
import { Es1900BadnMcnoComponent } from './es-1900-badn-mcno/es-1900-badn-mcno.component';
import { Es2000BadnPnComponent } from './es-2000-badn-pn/es-2000-badn-pn.component';
import { Es2100BadnGngComponent } from './es-2100-badn-gng/es-2100-badn-gng.component';
import { Es2200BadnMhnComponent } from './es-2200-badn-mhn/es-2200-badn-mhn.component';
import { Es2300BadnCmqhComponent } from './es-2300-badn-cmqh/es-2300-badn-cmqh.component';
import { Es2400BadnHiteComponent } from './es-2400-badn-hite/es-2400-badn-hite.component';
import { Es2500BadnCcitComponent } from './es-2500-badn-ccit/es-2500-badn-ccit.component';
import { Es2600BadnEucnComponent } from './es-2600-badn-eucn/es-2600-badn-eucn.component';
import { Es2700BadnCfnComponent } from './es-2700-badn-cfn/es-2700-badn-cfn.component';
import { Es2800BadnAehsComponent } from './es-2800-badn-aehs/es-2800-badn-aehs.component';
import { Es2900BadnTdhComponent } from './es-2900-badn-tdh/es-2900-badn-tdh.component';
import { Es3000BadnPeprComponent } from './es-3000-badn-pepr/es-3000-badn-pepr.component';
import { Es3100BadnLippsComponent } from './es-3100-badn-lipps/es-3100-badn-lipps.component';
import { Es3200BadnGhicsdComponent } from './es-3200-badn-ghicsd/es-3200-badn-ghicsd.component';
import { Es3300BadnNsmaComponent } from './es-3300-badn-nsma/es-3300-badn-nsma.component';
import { Es3400BadnHfcsComponent } from './es-3400-badn-hfcs/es-3400-badn-hfcs.component';
import { Es3500BadnSmcpComponent } from './es-3500-badn-smcp/es-3500-badn-smcp.component';
import { Es3600BadnPppcComponent } from './es-3600-badn-pppc/es-3600-badn-pppc.component';
import { Es3700BadnSccdComponent } from './es-3700-badn-sccd/es-3700-badn-sccd.component';
import { Es3800BadnAcbecComponent } from './es-3800-badn-acbec/es-3800-badn-acbec.component';
import { Es3900BadnIcicmComponent } from './es-3900-badn-icicm/es-3900-badn-icicm.component';
import { Es4000BadnUtceComponent } from './es-4000-badn-utce/es-4000-badn-utce.component';

@Component({
  selector: 'app-es-course-bachelor-of-nursing',
  imports: [MatButtonModule],
  templateUrl: './es-course-bachelor-of-nursing.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCourseBachelorOfNursingComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-badn-fnpcc':
        this._dialog.open(Es100BadnFnpccComponent, stylesDialog);
        break;
      case '200-badn-anp':
        this._dialog.open(Es200BadnAnpComponent, stylesDialog);
        break;
      case '300-badn-mib':
        this._dialog.open(Es300BadnMibComponent, stylesDialog);
        break;
      case '400-badn-tchr':
        this._dialog.open(Es400BadnTchrComponent, stylesDialog);
        break;
      case '500-badn-ebsdc':
        this._dialog.open(Es500BadnEbsdcComponent, stylesDialog);
        break;
      case '600-badn-phn':
        this._dialog.open(Es600BadnPhnComponent, stylesDialog);
        break;
      case '700-badn-hp':
        this._dialog.open(Es700BadnHpComponent, stylesDialog);
        break;
      case '800-badn-phe':
        this._dialog.open(Es800BadnPheComponent, stylesDialog);
        break;
      case '900-badn-ap':
        this._dialog.open(Es900BadnApComponent, stylesDialog);
        break;
      case '1000-badn-phn':
        this._dialog.open(Es1000BadnPhnComponent, stylesDialog);
        break;
      case '1100-badn-csha':
        this._dialog.open(Es1100BadnCshaComponent, stylesDialog);
        break;
      case '1200-badn-gpn':
        this._dialog.open(Es1200BadnGpnComponent, stylesDialog);
        break;
      case '1300-badn-ndt':
        this._dialog.open(Es1300BadnNdtComponent, stylesDialog);
        break;
      case '1400-badn-rmb':
        this._dialog.open(Es1400BadnRmbComponent, stylesDialog);
        break;
      case '1500-badn-ipc':
        this._dialog.open(Es1500BadnIpcComponent, stylesDialog);
        break;
      case '1600-badn-phe':
        this._dialog.open(Es1600BadnPheComponent, stylesDialog);
        break;
      case '1700-badn-msn':
        this._dialog.open(Es1700BadnMsnComponent, stylesDialog);
        break;
      case '1800-badn-msn':
        this._dialog.open(Es1800BadnMsnComponent, stylesDialog);
        break;
      case '1900-badn-mcno':
        this._dialog.open(Es1900BadnMcnoComponent, stylesDialog);
        break;
      case '2000-badn-pn':
        this._dialog.open(Es2000BadnPnComponent, stylesDialog);
        break;
      case '2100-badn-gng':
        this._dialog.open(Es2100BadnGngComponent, stylesDialog);
        break;
      case '2200-badn-mhn':
        this._dialog.open(Es2200BadnMhnComponent, stylesDialog);
        break;
      case '2300-badn-cmqh':
        this._dialog.open(Es2300BadnCmqhComponent, stylesDialog);
        break;
      case '2400-badn-hite':
        this._dialog.open(Es2400BadnHiteComponent, stylesDialog);
        break;
      case '2500-badn-ccit':
        this._dialog.open(Es2500BadnCcitComponent, stylesDialog);
        break;
      case '2600-badn-eucn':
        this._dialog.open(Es2600BadnEucnComponent, stylesDialog);
        break;
      case '2700-badn-cfn':
        this._dialog.open(Es2700BadnCfnComponent, stylesDialog);
        break;
      case '2800-badn-aehs':
        this._dialog.open(Es2800BadnAehsComponent, stylesDialog);
        break;
      case '2900-badn-tdh':
        this._dialog.open(Es2900BadnTdhComponent, stylesDialog);
        break;
      case '3000-badn-pepr':
        this._dialog.open(Es3000BadnPeprComponent, stylesDialog);
        break;
      case '3100-badn-lipps':
        this._dialog.open(Es3100BadnLippsComponent, stylesDialog);
        break;
      case '3200-badn-ghicsd':
        this._dialog.open(Es3200BadnGhicsdComponent, stylesDialog);
        break;
      case '3300-badn-nsma':
        this._dialog.open(Es3300BadnNsmaComponent, stylesDialog);
        break;
      case '3400-badn-hfcs':
        this._dialog.open(Es3400BadnHfcsComponent, stylesDialog);
        break;
      case '3500-badn-smcp':
        this._dialog.open(Es3500BadnSmcpComponent, stylesDialog);
        break;
      case '3600-badn-pppc':
        this._dialog.open(Es3600BadnPppcComponent, stylesDialog);
        break;
      case '3700-badn-sccd':
        this._dialog.open(Es3700BadnSccdComponent, stylesDialog);
        break;
      case '3800-badn-acbec':
        this._dialog.open(Es3800BadnAcbecComponent, stylesDialog);
        break;
      case '3900-badn-icicm':
        this._dialog.open(Es3900BadnIcicmComponent, stylesDialog);
        break;
      case '4000-badn-utce':
        this._dialog.open(Es4000BadnUtceComponent, stylesDialog);
        break;
    }
  }
}
