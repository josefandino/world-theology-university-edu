import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';
import { En100BadnFnpccComponent } from './en-100-badn-fnpcc/en-100-badn-fnpcc.component';
import { En1000BadnPhnComponent } from './en-1000-badn-phn/en-1000-badn-phn.component';
import { En1100BadnCshaComponent } from './en-1100-badn-csha/en-1100-badn-csha.component';
import { En1200BadnGpnComponent } from './en-1200-badn-gpn/en-1200-badn-gpn.component';
import { En1300BadnNdtComponent } from './en-1300-badn-ndt/en-1300-badn-ndt.component';
import { En1400BadnRmbComponent } from './en-1400-badn-rmb/en-1400-badn-rmb.component';
import { En1500BadnIpcComponent } from './en-1500-badn-ipc/en-1500-badn-ipc.component';
import { En1600BadnPheComponent } from './en-1600-badn-phe/en-1600-badn-phe.component';
import { En1700BadnMsnComponent } from './en-1700-badn-msn/en-1700-badn-msn.component';
import { En1800BadnMsnComponent } from './en-1800-badn-msn/en-1800-badn-msn.component';
import { En1900BadnMcnoComponent } from './en-1900-badn-mcno/en-1900-badn-mcno.component';
import { En200BadnAnpComponent } from './en-200-badn-anp/en-200-badn-anp.component';
import { En2000BadnPnComponent } from './en-2000-badn-pn/en-2000-badn-pn.component';
import { En2100BadnGngComponent } from './en-2100-badn-gng/en-2100-badn-gng.component';
import { En2200BadnMhnComponent } from './en-2200-badn-mhn/en-2200-badn-mhn.component';
import { En2300BadnCmqhComponent } from './en-2300-badn-cmqh/en-2300-badn-cmqh.component';
import { En2400BadnHiteComponent } from './en-2400-badn-hite/en-2400-badn-hite.component';
import { En2500BadnCcitComponent } from './en-2500-badn-ccit/en-2500-badn-ccit.component';
import { En2600BadnEucnComponent } from './en-2600-badn-eucn/en-2600-badn-eucn.component';
import { En2700BadnCfnComponent } from './en-2700-badn-cfn/en-2700-badn-cfn.component';
import { En2800BadnAehsComponent } from './en-2800-badn-aehs/en-2800-badn-aehs.component';
import { En2900BadnTdhComponent } from './en-2900-badn-tdh/en-2900-badn-tdh.component';
import { En300BadnMibComponent } from './en-300-badn-mib/en-300-badn-mib.component';
import { En3000BadnPeprComponent } from './en-3000-badn-pepr/en-3000-badn-pepr.component';
import { En3100BadnLippsComponent } from './en-3100-badn-lipps/en-3100-badn-lipps.component';
import { En3200BadnGhicsdComponent } from './en-3200-badn-ghicsd/en-3200-badn-ghicsd.component';
import { En3300BadnNsmaComponent } from './en-3300-badn-nsma/en-3300-badn-nsma.component';
import { En3400BadnHfcsComponent } from './en-3400-badn-hfcs/en-3400-badn-hfcs.component';
import { En3500BadnSmcpComponent } from './en-3500-badn-smcp/en-3500-badn-smcp.component';
import { En3600BadnPppcComponent } from './en-3600-badn-pppc/en-3600-badn-pppc.component';
import { En3700BadnSccdComponent } from './en-3700-badn-sccd/en-3700-badn-sccd.component';
import { En3800BadnAcbecComponent } from './en-3800-badn-acbec/en-3800-badn-acbec.component';
import { En3900BadnIcicmComponent } from './en-3900-badn-icicm/en-3900-badn-icicm.component';
import { En400BadnTchrComponent } from './en-400-badn-tchr/en-400-badn-tchr.component';
import { En4000BadnUtceComponent } from './en-4000-badn-utce/en-4000-badn-utce.component';
import { En500BadnEbsdcComponent } from './en-500-badn-ebsdc/en-500-badn-ebsdc.component';
import { En600BadnPhnComponent } from './en-600-badn-phn/en-600-badn-phn.component';
import { En700BadnHpComponent } from './en-700-badn-hp/en-700-badn-hp.component';
import { En800BadnPheComponent } from './en-800-badn-phe/en-800-badn-phe.component';
import { En900BadnApComponent } from './en-900-badn-ap/en-900-badn-ap.component';

@Component({
  selector: 'app-en-course-bachelor-of-nursing',
  imports: [MatButtonModule],
  templateUrl: './en-course-bachelor-of-nursing.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnCourseBachelorOfNursingComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100-badn-fnpcc':
        this._dialog.open(En100BadnFnpccComponent, stylesDialog);
        break;
      case '200-badn-anp':
        this._dialog.open(En200BadnAnpComponent, stylesDialog);
        break;
      case '300-badn-mib':
        this._dialog.open(En300BadnMibComponent, stylesDialog);
        break;
      case '400-badn-tchr':
        this._dialog.open(En400BadnTchrComponent, stylesDialog);
        break;
      case '500-badn-ebsdc':
        this._dialog.open(En500BadnEbsdcComponent, stylesDialog);
        break;
      case '600-badn-phn':
        this._dialog.open(En600BadnPhnComponent, stylesDialog);
        break;
      case '700-badn-hp':
        this._dialog.open(En700BadnHpComponent, stylesDialog);
        break;
      case '800-badn-phe':
        this._dialog.open(En800BadnPheComponent, stylesDialog);
        break;
      case '900-badn-ap':
        this._dialog.open(En900BadnApComponent, stylesDialog);
        break;
      case '1000-badn-phn':
        this._dialog.open(En1000BadnPhnComponent, stylesDialog);
        break;
      case '1100-badn-csha':
        this._dialog.open(En1100BadnCshaComponent, stylesDialog);
        break;
      case '1200-badn-gpn':
        this._dialog.open(En1200BadnGpnComponent, stylesDialog);
        break;
      case '1300-badn-ndt':
        this._dialog.open(En1300BadnNdtComponent, stylesDialog);
        break;
      case '1400-badn-rmb':
        this._dialog.open(En1400BadnRmbComponent, stylesDialog);
        break;
      case '1500-badn-ipc':
        this._dialog.open(En1500BadnIpcComponent, stylesDialog);
        break;
      case '1600-badn-phe':
        this._dialog.open(En1600BadnPheComponent, stylesDialog);
        break;
      case '1700-badn-msn':
        this._dialog.open(En1700BadnMsnComponent, stylesDialog);
        break;
      case '1800-badn-msn':
        this._dialog.open(En1800BadnMsnComponent, stylesDialog);
        break;
      case '1900-badn-mcno':
        this._dialog.open(En1900BadnMcnoComponent, stylesDialog);
        break;
      case '2000-badn-pn':
        this._dialog.open(En2000BadnPnComponent, stylesDialog);
        break;
      case '2100-badn-gng':
        this._dialog.open(En2100BadnGngComponent, stylesDialog);
        break;
      case '2200-badn-mhn':
        this._dialog.open(En2200BadnMhnComponent, stylesDialog);
        break;
      case '2300-badn-cmqh':
        this._dialog.open(En2300BadnCmqhComponent, stylesDialog);
        break;
      case '2400-badn-hite':
        this._dialog.open(En2400BadnHiteComponent, stylesDialog);
        break;
      case '2500-badn-ccit':
        this._dialog.open(En2500BadnCcitComponent, stylesDialog);
        break;
      case '2600-badn-eucn':
        this._dialog.open(En2600BadnEucnComponent, stylesDialog);
        break;
      case '2700-badn-cfn':
        this._dialog.open(En2700BadnCfnComponent, stylesDialog);
        break;
      case '2800-badn-aehs':
        this._dialog.open(En2800BadnAehsComponent, stylesDialog);
        break;
      case '2900-badn-tdh':
        this._dialog.open(En2900BadnTdhComponent, stylesDialog);
        break;
      case '3000-badn-pepr':
        this._dialog.open(En3000BadnPeprComponent, stylesDialog);
        break;
      case '3100-badn-lipps':
        this._dialog.open(En3100BadnLippsComponent, stylesDialog);
        break;
      case '3200-badn-ghicsd':
        this._dialog.open(En3200BadnGhicsdComponent, stylesDialog);
        break;
      case '3300-badn-nsma':
        this._dialog.open(En3300BadnNsmaComponent, stylesDialog);
        break;
      case '3400-badn-hfcs':
        this._dialog.open(En3400BadnHfcsComponent, stylesDialog);
        break;
      case '3500-badn-smcp':
        this._dialog.open(En3500BadnSmcpComponent, stylesDialog);
        break;
      case '3600-badn-pppc':
        this._dialog.open(En3600BadnPppcComponent, stylesDialog);
        break;
      case '3700-badn-sccd':
        this._dialog.open(En3700BadnSccdComponent, stylesDialog);
        break;
      case '3800-badn-acbec':
        this._dialog.open(En3800BadnAcbecComponent, stylesDialog);
        break;
      case '3900-badn-icicm':
        this._dialog.open(En3900BadnIcicmComponent, stylesDialog);
        break;
      case '4000-badn-utce':
        this._dialog.open(En4000BadnUtceComponent, stylesDialog);
        break;
    }
  }
}
