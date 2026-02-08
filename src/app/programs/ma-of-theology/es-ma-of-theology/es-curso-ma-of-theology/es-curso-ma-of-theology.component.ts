import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { stylesDialog } from '@shared/const/styles-dialog';

import { Es100MathItotComponent } from '../es-100-math-itot/es-100-math-itot.component';
import { Es101MathItntComponent } from '../es-101-math-itnt/es-101-math-itnt.component';
import { Es102MathBh1Component } from '../es-102-math-bh1/es-102-math-bh1.component';
import { Es103MathBh1Component } from '../es-103-math-bh1/es-103-math-bh1.component';
import { Es104MathBg1Component } from '../es-104-math-bg1/es-104-math-bg1.component';
import { Es105MathBg1Component } from '../es-105-math-bg1/es-105-math-bg1.component';
import { Es106MathBt1Component } from '../es-106-math-bt1/es-106-math-bt1.component';
import { Es107MathNteComponent } from '../es-107-math-nte/es-107-math-nte.component';
import { Es108MathBtotComponent } from '../es-108-math-btot/es-108-math-btot.component';
import { Es109MathBtntComponent } from '../es-109-math-btnt/es-109-math-btnt.component';
import { Es110MathAlbpComponent } from '../es-110-math-albp/es-110-math-albp.component';
import { Es111MathWplComponent } from '../es-111-math-wpl/es-111-math-wpl.component';
import { Es112MathGjljComponent } from '../es-112-math-gjlj/es-112-math-gjlj.component';
import { Es113MathPgeComponent } from '../es-113-math-pge/es-113-math-pge.component';
import { Es114MathPostComponent } from '../es-114-math-post/es-114-math-post.component';
import { Es203MathEcddComponent } from '../es-203-math-ecdd/es-203-math-ecdd.component';
import { Es205MathLatgComponent } from '../es-205-math-latg/es-205-math-latg.component';
import { Es206MathWthcComponent } from '../es-206-math-wthc/es-206-math-wthc.component';
import { Es207MathGc21cComponent } from '../es-207-math-gc21c/es-207-math-gc21c.component';
import { Es303MathCtarComponent } from '../es-303-math-ctar/es-303-math-ctar.component';
import { Es304MathTkogComponent } from '../es-304-math-tkog/es-304-math-tkog.component';
import { Es305MathCtComponent } from '../es-305-math-ct/es-305-math-ct.component';
import { Es306MathPorComponent } from '../es-306-math-por/es-306-math-por.component';
import { Es307MathIocpComponent } from '../es-307-math-iocp/es-307-math-iocp.component';
import { Es308MathNtgrComponent } from '../es-308-math-ntgr/es-308-math-ntgr.component';
import { Es309MathTcsComponent } from '../es-309-math-tcs/es-309-math-tcs.component';
import { Es400MathAceComponent } from '../es-400-math-ace/es-400-math-ace.component';
import { Es401MathBcfComponent } from '../es-401-math-bcf/es-401-math-bcf.component';
import { Es402MathSjcdComponent } from '../es-402-math-sjcd/es-402-math-sjcd.component';
import { Es403MathPthrComponent } from '../es-403-math-pthr/es-403-math-pthr.component';
import { Es404MathTeccComponent } from '../es-404-math-tecc/es-404-math-tecc.component';
import { Es405MathSfeComponent } from '../es-405-math-sfe/es-405-math-sfe.component';
import { Es406MathTprComponent } from '../es-406-math-tpr/es-406-math-tpr.component';
import { Es407MathMpceComponent } from '../es-407-math-mpce/es-407-math-mpce.component';
import { Es501MathEbpComponent } from '../es-501-math-ebp/es-501-math-ebp.component';
import { Es502MathPcscComponent } from '../es-502-math-pcsc/es-502-math-pcsc.component';
import { Es503MathCprComponent } from '../es-503-math-cpr/es-503-math-cpr.component';
import { Es504MathTwlComponent } from '../es-504-math-twl/es-504-math-twl.component';
import { Es505MathUcmComponent } from '../es-505-math-ucm/es-505-math-ucm.component';
import { Es506MathTsaComponent } from '../es-506-math-tsa/es-506-math-tsa.component';
import { Es507MathCspfComponent } from '../es-507-math-cspf/es-507-math-cspf.component';
import { Es509MathTsphComponent } from '../es-509-math-tsph/es-509-math-tsph.component';
import { Es600MathWrciComponent } from '../es-600-math-wrci/es-600-math-wrci.component';
import { Es601MathMmiComponent } from '../es-601-math-mmi/es-601-math-mmi.component';
import { Es602MathJamComponent } from '../es-602-math-jam/es-602-math-jam.component';
import { Es603MathChComponent } from '../es-603-math-ch/es-603-math-ch.component';
import { Es604MathBctComponent } from '../es-604-math-bct/es-604-math-bct.component';
import { Es605MathIdcwComponent } from '../es-605-math-idcw/es-605-math-idcw.component';
import { Es606MathRgComponent } from '../es-606-math-rg/es-606-math-rg.component';
import { Es607MathRpceComponent } from '../es-607-math-rpce/es-607-math-rpce.component';
import { Es700MathTrmComponent } from '../es-700-math-trm/es-700-math-trm.component';
import { Es701MathCrawComponent } from '../es-701-math-craw/es-701-math-craw.component';
import { Es702MathRspdComponent } from '../es-702-math-rspd/es-702-math-rspd.component';
import { Es703MathRstpComponent } from '../es-703-math-rstp/es-703-math-rstp.component';
import { Es704MathEtrComponent } from '../es-704-math-etr/es-704-math-etr.component';
import { Es705MathPtapComponent } from '../es-705-math-ptap/es-705-math-ptap.component';
import { Es800MathLtComponent } from '../es-800-math-lt/es-800-math-lt.component';
import { Es801MathFtComponent } from '../es-801-math-ft/es-801-math-ft.component';
import { Es802MathIctComponent } from '../es-802-math-ict/es-802-math-ict.component';
import { Es803MathAaatComponent } from '../es-803-math-aaat/es-803-math-aaat.component';
import { Es805MathSaeComponent } from '../es-805-math-sae/es-805-math-sae.component';
import { Es806MathTdmComponent } from '../es-806-math-tdm/es-806-math-tdm.component';
import { Es807MathClemComponent } from '../es-807-math-clem/es-807-math-clem.component';
import { Es900MathMttComponent } from '../es-900-math-mtt/es-900-math-mtt.component';
import { Es200MathHc1ecapComponent } from '../es-200-math-hc1ecap/es-200-math-hc1ecap.component';
import { Es201MathHc2marComponent } from '../es-201-math-hc2mar/es-201-math-hc2mar.component';
import { Es202MathHc3mceComponent } from '../es-202-math-hc3mce/es-202-math-hc3mce.component';
import { Es204MathPrccComponent } from '../es-204-math-prcc/es-204-math-prcc.component';
import { Es300MathStgcComponent } from '../es-300-math-stgc/es-300-math-stgc.component';
import { Es301MathStcpComponent } from '../es-301-math-stcp/es-301-math-stcp.component';
import { Es302MathSteeComponent } from '../es-302-math-stee/es-302-math-stee.component';
import { Es500MathPldfComponent } from '../es-500-math-pldf/es-500-math-pldf.component';
import { Es508MathCmscComponent } from '../es-508-math-cmsc/es-508-math-cmsc.component';
import { Es804MathGpcmComponent } from '../es-804-math-gpcm/es-804-math-gpcm.component';
import { Es808MathTtcpwComponent } from '../es-808-math-ttcpw/es-808-math-ttcpw.component';

@Component({
  selector: 'app-es-curso-ma-of-theology',
  imports: [MatButtonModule],
  templateUrl: './es-curso-ma-of-theology.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCursoMaOfTheologyComponent {
  readonly _dialog = inject(MatDialog);

  public openDialog(dialog: string): void {
    switch (dialog) {
      case '100mathitot':
        this._dialog.open(Es100MathItotComponent, stylesDialog);
        break;
      case '101mathitnt':
        this._dialog.open(Es101MathItntComponent, stylesDialog);
        break;
      case '102mathbh1':
        this._dialog.open(Es102MathBh1Component, stylesDialog);
        break;
      case '103mathbh1':
        this._dialog.open(Es103MathBh1Component, stylesDialog);
        break;
      case '104mathbg1':
        this._dialog.open(Es104MathBg1Component, stylesDialog);
        break;
      case '105mathbg1':
        this._dialog.open(Es105MathBg1Component, stylesDialog);
        break;
      case '106mathbt1':
        this._dialog.open(Es106MathBt1Component, stylesDialog);
        break;
      case '107mathnte':
        this._dialog.open(Es107MathNteComponent, stylesDialog);
        break;
      case '108mathbtot':
        this._dialog.open(Es108MathBtotComponent, stylesDialog);
        break;
      case '109mathbtnt':
        this._dialog.open(Es109MathBtntComponent, stylesDialog);
        break;
      case '110mathalbp':
        this._dialog.open(Es110MathAlbpComponent, stylesDialog);
        break;
      case '111mathwpl':
        this._dialog.open(Es111MathWplComponent, stylesDialog);
        break;
      case '112mathgjlj':
        this._dialog.open(Es112MathGjljComponent, stylesDialog);
        break;
      case '113mathpge':
        this._dialog.open(Es113MathPgeComponent, stylesDialog);
        break;
      case '114mathpost':
        this._dialog.open(Es114MathPostComponent, stylesDialog);
        break;
      case '200mathhc1ecap':
        this._dialog.open(Es200MathHc1ecapComponent, stylesDialog);
        break;
      case '201mathhc2mar':
        this._dialog.open(Es201MathHc2marComponent, stylesDialog);
        break;
      case '202mathhc3mce':
        this._dialog.open(Es202MathHc3mceComponent, stylesDialog);
        break;
      case '203mathecdd':
        this._dialog.open(Es203MathEcddComponent, stylesDialog);
        break;
      case '204mathprcc':
        this._dialog.open(Es204MathPrccComponent, stylesDialog);
        break;
      case '205mathlatg':
        this._dialog.open(Es205MathLatgComponent, stylesDialog);
        break;
      case '206mathwthc':
        this._dialog.open(Es206MathWthcComponent, stylesDialog);
        break;
      case '207mathgc21c':
        this._dialog.open(Es207MathGc21cComponent, stylesDialog);
        break;
      case '300mathstgc':
        this._dialog.open(Es300MathStgcComponent, stylesDialog);
        break;
      case '301mathstcp':
        this._dialog.open(Es301MathStcpComponent, stylesDialog);
        break;
      case '302mathstee':
        this._dialog.open(Es302MathSteeComponent, stylesDialog);
        break;
      case '303mathctar':
        this._dialog.open(Es303MathCtarComponent, stylesDialog);
        break;
      case '304mathtkog':
        this._dialog.open(Es304MathTkogComponent, stylesDialog);
        break;
      case '305mathct':
        this._dialog.open(Es305MathCtComponent, stylesDialog);
        break;
      case '306mathpor':
        this._dialog.open(Es306MathPorComponent, stylesDialog);
        break;
      case '307mathiocp':
        this._dialog.open(Es307MathIocpComponent, stylesDialog);
        break;
      case '308mathntgr':
        this._dialog.open(Es308MathNtgrComponent, stylesDialog);
        break;
      case '309mathtcs':
        this._dialog.open(Es309MathTcsComponent, stylesDialog);
        break;
      case '400mathace':
        this._dialog.open(Es400MathAceComponent, stylesDialog);
        break;
      case '401mathbcf':
        this._dialog.open(Es401MathBcfComponent, stylesDialog);
        break;
      case '402mathsjcd':
        this._dialog.open(Es402MathSjcdComponent, stylesDialog);
        break;
      case '403mathpthr':
        this._dialog.open(Es403MathPthrComponent, stylesDialog);
        break;
      case '404mathtecc':
        this._dialog.open(Es404MathTeccComponent, stylesDialog);
        break;
      case '405mathsfe':
        this._dialog.open(Es405MathSfeComponent, stylesDialog);
        break;
      case '406mathtpr':
        this._dialog.open(Es406MathTprComponent, stylesDialog);
        break;
      case '407mathmpce':
        this._dialog.open(Es407MathMpceComponent, stylesDialog);
        break;
      case '500mathpldf':
        this._dialog.open(Es500MathPldfComponent, stylesDialog);
        break;
      case '501mathebp':
        this._dialog.open(Es501MathEbpComponent, stylesDialog);
        break;
      case '502mathpcsc':
        this._dialog.open(Es502MathPcscComponent, stylesDialog);
        break;
      case '503mathcpr':
        this._dialog.open(Es503MathCprComponent, stylesDialog);
        break;
      case '504mathtwl':
        this._dialog.open(Es504MathTwlComponent, stylesDialog);
        break;
      case '505mathucm':
        this._dialog.open(Es505MathUcmComponent, stylesDialog);
        break;
      case '506mathtsa':
        this._dialog.open(Es506MathTsaComponent, stylesDialog);
        break;
      case '507mathcspf':
        this._dialog.open(Es507MathCspfComponent, stylesDialog);
        break;
      case '508mathcmsc':
        this._dialog.open(Es508MathCmscComponent, stylesDialog);
        break;
      case '509mathtsph':
        this._dialog.open(Es509MathTsphComponent, stylesDialog);
        break;
      case '600mathwrci':
        this._dialog.open(Es600MathWrciComponent, stylesDialog);
        break;
      case '601mathmmi':
        this._dialog.open(Es601MathMmiComponent, stylesDialog);
        break;
      case '602mathjam':
        this._dialog.open(Es602MathJamComponent, stylesDialog);
        break;
      case '603mathch':
        this._dialog.open(Es603MathChComponent, stylesDialog);
        break;
      case '604mathbct':
        this._dialog.open(Es604MathBctComponent, stylesDialog);
        break;
      case '605mathidcw':
        this._dialog.open(Es605MathIdcwComponent, stylesDialog);
        break;
      case '606mathrg':
        this._dialog.open(Es606MathRgComponent, stylesDialog);
        break;
      case '607mathrpce':
        this._dialog.open(Es607MathRpceComponent, stylesDialog);
        break;
      case '700mathtrm':
        this._dialog.open(Es700MathTrmComponent, stylesDialog);
        break;
      case '701mathcraw':
        this._dialog.open(Es701MathCrawComponent, stylesDialog);
        break;
      case '702mathrspd':
        this._dialog.open(Es702MathRspdComponent, stylesDialog);
        break;
      case '703mathrstp':
        this._dialog.open(Es703MathRstpComponent, stylesDialog);
        break;
      case '704mathetr':
        this._dialog.open(Es704MathEtrComponent, stylesDialog);
        break;
      case '705mathptap':
        this._dialog.open(Es705MathPtapComponent, stylesDialog);
        break;
      case '800mathlt':
        this._dialog.open(Es800MathLtComponent, stylesDialog);
        break;
      case '801mathft':
        this._dialog.open(Es801MathFtComponent, stylesDialog);
        break;
      case '802mathict':
        this._dialog.open(Es802MathIctComponent, stylesDialog);
        break;
      case '804mathgpcm':
        this._dialog.open(Es804MathGpcmComponent, stylesDialog);
        break;
      case '803mathaaat':
        this._dialog.open(Es803MathAaatComponent, stylesDialog);
        break;
      case '805mathsae':
        this._dialog.open(Es805MathSaeComponent, stylesDialog);
        break;
      case '806mathtdm':
        this._dialog.open(Es806MathTdmComponent, stylesDialog);
        break;
      case '807mathclem':
        this._dialog.open(Es807MathClemComponent, stylesDialog);
        break;
      case '808matttcpw':
        this._dialog.open(Es808MathTtcpwComponent, stylesDialog);
        break;
      case '900mathmtt':
        this._dialog.open(Es900MathMttComponent, stylesDialog);
        break;
    }
  }
}
