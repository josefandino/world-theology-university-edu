import { Component } from '@angular/core';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { WTU_INFO } from '@shared/const/info-acc';

@Component({
  selector: 'app-en-about',
  imports: [BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: '../about.component.scss',
})
export default class EnAboutComponent {
  public banner = './assets/webp/about/about.webp';

  readonly academyInfo = WTU_INFO;
}
