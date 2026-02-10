import { Component } from '@angular/core';

import { BannerComponent } from '@shared/components/banner/banner.component';
import { WTU_INFO } from '@shared/const/info-acc';

@Component({
  selector: 'app-es-about',
  imports: [BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: '../about.component.scss',
})
export default class EsAboutComponent {
  public banner = './assets/webp/about/about.webp';

  readonly wtuInfo = WTU_INFO;
}
