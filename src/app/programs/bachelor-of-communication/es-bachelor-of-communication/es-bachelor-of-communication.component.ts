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
import { CoursesEsBacomnComponent } from './courses-es-bacomn/courses-es-bacomn.component';

@Component({
  selector: 'app-es-bachelor-of-communication',
  imports: [
    AngularModule,
    MaterialModule,
    BannerComponent,
    CoursesEsBacomnComponent,
  ],
  templateUrl: './es-bachelor-of-communication.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsBachelorOfCommunicationComponent {
  public flyer = './assets/webp/lic-comunicacion/communication.webp';
  public alt = 'Flyer World Theology University';

  public title = signal<string>('');

  readonly _dialog = inject(MatDialog);

  ngOnInit() {}
}
