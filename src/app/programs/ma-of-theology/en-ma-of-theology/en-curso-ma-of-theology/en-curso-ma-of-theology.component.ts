import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { En100MathItotComponent } from '../en-100-math-itot/en-100-math-itot.component';
import { En101MathItntComponent } from '../en-101-math-itnt/en-101-math-itnt.component';
import { En102MathBh1Component } from '../en-102-math-bh1/en-102-math-bh1.component';
import { En103MathBh1Component } from '../en-103-math-bh1/en-103-math-bh1.component';
import { En104MathBg1Component } from '../en-104-math-bg1/en-104-math-bg1.component';
import { En105MathBg1Component } from '../en-105-math-bg1/en-105-math-bg1.component';
import { En106MathBt1Component } from '../en-106-math-bt1/en-106-math-bt1.component';
import { En107MathNteComponent } from '../en-107-math-nte/en-107-math-nte.component';
import { En108MathBtotComponent } from '../en-108-math-btot/en-108-math-btot.component';
import { En109MathBtntComponent } from '../en-109-math-btnt/en-109-math-btnt.component';
import { En110MathAlbpComponent } from '../en-110-math-albp/en-110-math-albp.component';
import { En111MathWplComponent } from '../en-111-math-wpl/en-111-math-wpl.component';
import { En112MathGjljComponent } from '../en-112-math-gjlj/en-112-math-gjlj.component';
import { En113MathPgeComponent } from '../en-113-math-pge/en-113-math-pge.component';

import { En203MathEcddComponent } from '../en-203-math-ecdd/en-203-math-ecdd.component';
import { En205MathLatgComponent } from '../en-205-math-latg/en-205-math-latg.component';
import { En206MathWthcComponent } from '../en-206-math-wthc/en-206-math-wthc.component';
import { En207MathGc21cComponent } from '../en-207-math-gc21c/en-207-math-gc21c.component';

import { En303MathCtarComponent } from '../en-303-math-ctar/en-303-math-ctar.component';
import { En304MathTkogComponent } from '../en-304-math-tkog/en-304-math-tkog.component';
import { En305MathCtComponent } from '../en-305-math-ct/en-305-math-ct.component';
import { En306MathPorComponent } from '../en-306-math-por/en-306-math-por.component';
import { En307MathIocpComponent } from '../en-307-math-iocp/en-307-math-iocp.component';
import { En308MathNtgrComponent } from '../en-308-math-ntgr/en-308-math-ntgr.component';
import { En309MathTcsComponent } from '../en-309-math-tcs/en-309-math-tcs.component';

import { En400MathAceComponent } from '../en-400-math-ace/en-400-math-ace.component';
import { En401MathBcfComponent } from '../en-401-math-bcf/en-401-math-bcf.component';
import { En402MathSjcdComponent } from '../en-402-math-sjcd/en-402-math-sjcd.component';
import { En403MathPthrComponent } from '../en-403-math-pthr/en-403-math-pthr.component';
import { En404MathTeccComponent } from '../en-404-math-tecc/en-404-math-tecc.component';
import { En405MathSfeComponent } from '../en-405-math-sfe/en-405-math-sfe.component';
import { En406MathTprComponent } from '../en-406-math-tpr/en-406-math-tpr.component';
import { En407MathMpceComponent } from '../en-407-math-mpce/en-407-math-mpce.component';

import { En501MathEbpComponent } from '../en-501-math-ebp/en-501-math-ebp.component';
import { En502MathPcscComponent } from '../en-502-math-pcsc/en-502-math-pcsc.component';
import { En503MathCprComponent } from '../en-503-math-cpr/en-503-math-cpr.component';
import { En504MathTwlComponent } from '../en-504-math-twl/en-504-math-twl.component';
import { En505MathUcmComponent } from '../en-505-math-ucm/en-505-math-ucm.component';
import { En506MathTsaComponent } from '../en-506-math-tsa/en-506-math-tsa.component';
import { En507MathCspfComponent } from '../en-507-math-cspf/en-507-math-cspf.component';
import { En509MathTsphComponent } from '../en-509-math-tsph/en-509-math-tsph.component';

import { En600MathWrciComponent } from '../en-600-math-wrci/en-600-math-wrci.component';
import { En601MathMmiComponent } from '../en-601-math-mmi/en-601-math-mmi.component';
import { En602MathJamComponent } from '../en-602-math-jam/en-602-math-jam.component';
import { En603MathChComponent } from '../en-603-math-ch/en-603-math-ch.component';
import { En604MathBctComponent } from '../en-604-math-bct/en-604-math-bct.component';
import { En605MathIdcwComponent } from '../en-605-math-idcw/en-605-math-idcw.component';
import { En606MathRgComponent } from '../en-606-math-rg/en-606-math-rg.component';
import { En607MathRpceComponent } from '../en-607-math-rpce/en-607-math-rpce.component';

import { En700MathTrmComponent } from '../en-700-math-trm/en-700-math-trm.component';
import { En701MathCrawComponent } from '../en-701-math-craw/en-701-math-craw.component';
import { En702MathRspdComponent } from '../en-702-math-rspd/en-702-math-rspd.component';
import { En703MathRstpComponent } from '../en-703-math-rstp/en-703-math-rstp.component';
import { En704MathEtrComponent } from '../en-704-math-etr/en-704-math-etr.component';
import { En705MathPtapComponent } from '../en-705-math-ptap/en-705-math-ptap.component';

import { En800MathLtComponent } from '../en-800-math-lt/en-800-math-lt.component';
import { En801MathFtComponent } from '../en-801-math-ft/en-801-math-ft.component';
import { En802MathIctComponent } from '../en-802-math-ict/en-802-math-ict.component';
import { En803MathAaatComponent } from '../en-803-math-aaat/en-803-math-aaat.component';
import { En805MathSaeComponent } from '../en-805-math-sae/en-805-math-sae.component';
import { En806MathTdmComponent } from '../en-806-math-tdm/en-806-math-tdm.component';
import { En807MathClemComponent } from '../en-807-math-clem/en-807-math-clem.component';
import { En808MatthTtcpwComponent } from '../en-808-matth-ttcpw/en-808-matth-ttcpw.component';
import { En900MathMttComponent } from '../en-900-math-mtt/en-900-math-mtt.component';
import { En114MathPostComponent } from '../en-114-math-post/en-114-math-post.component';
import { En200MathHc1ecapComponent } from '../en-200-math-hc1ecap/en-200-math-hc1ecap.component';
import { En201MathHc2marComponent } from '../en-201-math-hc2mar/en-201-math-hc2mar.component';
import { En202MathHc3mceComponent } from '../en-202-math-hc3mce/en-202-math-hc3mce.component';
import { En204MathPrccComponent } from '../en-204-math-prcc/en-204-math-prcc.component';
import { En300MathStgcComponent } from '../en-300-math-stgc/en-300-math-stgc.component';
import { En301MathStcpComponent } from '../en-301-math-stcp/en-301-math-stcp.component';
import { En302MathSteeComponent } from '../en-302-math-stee/en-302-math-stee.component';
import { En508MathCmscComponent } from '../en-508-math-cmsc/en-508-math-cmsc.component';
import { En804MathGpcmComponent } from '../en-804-math-gpcm/en-804-math-gpcm.component';
import { En500MathPldfComponent } from '../en-500-math-pldf/en-500-math-pldf.component';

@Component({
  selector: 'app-en-curso-ma-of-theology',
  imports: [MatButtonModule],
  templateUrl: './en-curso-ma-of-theology.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnCursoMaOfTheologyComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100mathitot':
        this._dialog.open(En100MathItotComponent, stylesDialog);
        break;
      case '101mathitnt':
        this._dialog.open(En101MathItntComponent, stylesDialog);
        break;
      case '102mathbh1':
        this._dialog.open(En102MathBh1Component, stylesDialog);
        break;
      case '103mathbh1':
        this._dialog.open(En103MathBh1Component, stylesDialog);
        break;
      case '104mathbg1':
        this._dialog.open(En104MathBg1Component, stylesDialog);
        break;
      case '105mathbg1':
        this._dialog.open(En105MathBg1Component, stylesDialog);
        break;
      case '106mathbt1':
        this._dialog.open(En106MathBt1Component, stylesDialog);
        break;
      case '107mathnte':
        this._dialog.open(En107MathNteComponent, stylesDialog);
        break;
      case '108mathbtot':
        this._dialog.open(En108MathBtotComponent, stylesDialog);
        break;
      case '109mathbtnt':
        this._dialog.open(En109MathBtntComponent, stylesDialog);
        break;
      case '110mathalbp':
        this._dialog.open(En110MathAlbpComponent, stylesDialog);
        break;
      case '111mathwpl':
        this._dialog.open(En111MathWplComponent, stylesDialog);
        break;
      case '112mathgjlj':
        this._dialog.open(En112MathGjljComponent, stylesDialog);
        break;
      case '113mathpge':
        this._dialog.open(En113MathPgeComponent, stylesDialog);
        break;
      case '114mathpost':
        this._dialog.open(En114MathPostComponent, stylesDialog);
        break;
      case '200mathhc1ecap':
        this._dialog.open(En200MathHc1ecapComponent, stylesDialog);
        break;
      case '201mathhc2mar':
        this._dialog.open(En201MathHc2marComponent, stylesDialog);
        break;
      case '202mathhc3mce':
        this._dialog.open(En202MathHc3mceComponent, stylesDialog);
        break;
      case '203mathecdd':
        this._dialog.open(En203MathEcddComponent, stylesDialog);
        break;
      case '204mathprcc':
        this._dialog.open(En204MathPrccComponent, stylesDialog);
        break;
      case '205mathlatg':
        this._dialog.open(En205MathLatgComponent, stylesDialog);
        break;
      case '206mathwthc':
        this._dialog.open(En206MathWthcComponent, stylesDialog);
        break;
      case '207mathgc21c':
        this._dialog.open(En207MathGc21cComponent, stylesDialog);
        break;
      case '300mathstgc':
        this._dialog.open(En300MathStgcComponent, stylesDialog);
        break;
      case '301mathstcp':
        this._dialog.open(En301MathStcpComponent, stylesDialog);
        break;
      case '302mathstee':
        this._dialog.open(En302MathSteeComponent, stylesDialog);
        break;
      case '303mathctar':
        this._dialog.open(En303MathCtarComponent, stylesDialog);
        break;
      case '304mathtkog':
        this._dialog.open(En304MathTkogComponent, stylesDialog);
        break;
      case '305mathct':
        this._dialog.open(En305MathCtComponent, stylesDialog);
        break;
      case '306mathpor':
        this._dialog.open(En306MathPorComponent, stylesDialog);
        break;
      case '307mathiocp':
        this._dialog.open(En307MathIocpComponent, stylesDialog);
        break;
      case '308mathntgr':
        this._dialog.open(En308MathNtgrComponent, stylesDialog);
        break;
      case '309mathtcs':
        this._dialog.open(En309MathTcsComponent, stylesDialog);
        break;
      case '400mathace':
        this._dialog.open(En400MathAceComponent, stylesDialog);
        break;
      case '401mathbcf':
        this._dialog.open(En401MathBcfComponent, stylesDialog);
        break;
      case '402mathsjcd':
        this._dialog.open(En402MathSjcdComponent, stylesDialog);
        break;
      case '403mathpthr':
        this._dialog.open(En403MathPthrComponent, stylesDialog);
        break;
      case '404mathtecc':
        this._dialog.open(En404MathTeccComponent, stylesDialog);
        break;
      case '405mathsfe':
        this._dialog.open(En405MathSfeComponent, stylesDialog);
        break;
      case '406mathtpr':
        this._dialog.open(En406MathTprComponent, stylesDialog);
        break;
      case '407mathmpce':
        this._dialog.open(En407MathMpceComponent, stylesDialog);
        break;
      case '500mathpldf':
        this._dialog.open(En500MathPldfComponent, stylesDialog);
        break;
      case '501mathebp':
        this._dialog.open(En501MathEbpComponent, stylesDialog);
        break;
      case '502mathpcsc':
        this._dialog.open(En502MathPcscComponent, stylesDialog);
        break;
      case '503mathcpr':
        this._dialog.open(En503MathCprComponent, stylesDialog);
        break;
      case '504mathtwl':
        this._dialog.open(En504MathTwlComponent, stylesDialog);
        break;
      case '505mathucm':
        this._dialog.open(En505MathUcmComponent, stylesDialog);
        break;
      case '506mathtsa':
        this._dialog.open(En506MathTsaComponent, stylesDialog);
        break;
      case '507mathcspf':
        this._dialog.open(En507MathCspfComponent, stylesDialog);
        break;
      case '508mathcmsc':
        this._dialog.open(En508MathCmscComponent, stylesDialog);
        break;
      case '509mathtsph':
        this._dialog.open(En509MathTsphComponent, stylesDialog);
        break;
      case '600mathwrci':
        this._dialog.open(En600MathWrciComponent, stylesDialog);
        break;
      case '601mathmmi':
        this._dialog.open(En601MathMmiComponent, stylesDialog);
        break;
      case '602mathjam':
        this._dialog.open(En602MathJamComponent, stylesDialog);
        break;
      case '603mathch':
        this._dialog.open(En603MathChComponent, stylesDialog);
        break;
      case '604mathbct':
        this._dialog.open(En604MathBctComponent, stylesDialog);
        break;
      case '605mathidcw':
        this._dialog.open(En605MathIdcwComponent, stylesDialog);
        break;
      case '606mathrg':
        this._dialog.open(En606MathRgComponent, stylesDialog);
        break;
      case '607mathrpce':
        this._dialog.open(En607MathRpceComponent, stylesDialog);
        break;
      case '700mathtrm':
        this._dialog.open(En700MathTrmComponent, stylesDialog);
        break;
      case '701mathcraw':
        this._dialog.open(En701MathCrawComponent, stylesDialog);
        break;
      case '702mathrspd':
        this._dialog.open(En702MathRspdComponent, stylesDialog);
        break;
      case '703mathrstp':
        this._dialog.open(En703MathRstpComponent, stylesDialog);
        break;
      case '704mathetr':
        this._dialog.open(En704MathEtrComponent, stylesDialog);
        break;
      case '705mathptap':
        this._dialog.open(En705MathPtapComponent, stylesDialog);
        break;
      case '800mathlt':
        this._dialog.open(En800MathLtComponent, stylesDialog);
        break;
      case '801mathft':
        this._dialog.open(En801MathFtComponent, stylesDialog);
        break;
      case '802mathict':
        this._dialog.open(En802MathIctComponent, stylesDialog);
        break;
      case '803mathaaat':
        this._dialog.open(En803MathAaatComponent, stylesDialog);
        break;
      case '804mathgpcm':
        this._dialog.open(En804MathGpcmComponent, stylesDialog);
        break;
      case '805mathsae':
        this._dialog.open(En805MathSaeComponent, stylesDialog);
        break;
      case '806mathtdm':
        this._dialog.open(En806MathTdmComponent, stylesDialog);
        break;
      case '807mathclem':
        this._dialog.open(En807MathClemComponent, stylesDialog);
        break;
      case '808mathttcpw':
        this._dialog.open(En808MatthTtcpwComponent, stylesDialog);
        break;
      case '900mathmtt':
        this._dialog.open(En900MathMttComponent, stylesDialog);
        break;
    }
  }
}
