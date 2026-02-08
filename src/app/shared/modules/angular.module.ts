import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WhatsappComponent } from '@shared/components/whatsapp/whatsapp.component';

export const AngularModule = [
  CommonModule,
  RouterModule,
  RouterOutlet,
  ReactiveFormsModule,
  FormsModule,

  /// Import componetes
  WhatsappComponent,
];
