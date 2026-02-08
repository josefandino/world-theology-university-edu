import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { AngularModule, MaterialModule } from '@shared/modules';
import { MatDialog } from '@angular/material/dialog';
import { TextService } from '@shared/helpers';

import { BannerComponent } from '@shared/components/banner/banner.component';
import { CoursesEnBacomnComponent } from './courses-en-bacomn/courses-en-bacomn.component';

@Component({
  selector: 'app-en-bachelor-of-communication',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    CoursesEnBacomnComponent,
  ],
  templateUrl: './en-bachelor-of-communication.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnBachelorOfCommunicationComponent {
  public flyer = './assets/webp/lic-comunicacion/communication.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}
}
