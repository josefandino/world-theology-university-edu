import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { WTU_INFO } from '@shared/const/info-acc';
import { LanguageService } from '@shared/services/language.service';

@Component({
  selector: 'app-whatsapp',
  imports: [MatDialogModule, MatIconModule, MatButtonModule],

  template: `
    <div class="whatsapp">
      <a [href]="whatsappUrl()" target="_blank" rel="noopener">
        {{ buttonText() }}
      </a>
    </div>
  `,
  styleUrl: './whatsapp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappComponent {
  /// Nombre del curso, programa. certificado etc
  module = input.required<string>();

  private readonly _languageSvc = inject(LanguageService);
  private readonly _destroyRef = inject(DestroyRef);

  /// ej: 'en' | 'es' (lo que uses tú)
  public language = signal<string>('en');

  private readonly phoneOrBase = WTU_INFO.whatsapp;

  constructor() {
    /// valor inicial
    this.language.set(this._languageSvc.getLanguage());

    /// listener reactivo (sin Subject)
    this._languageSvc.language$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((lang: string) => this.language.set(lang));
  }

  // Texto del botón según idioma
  public buttonText = computed(() => {
    return this.language() === 'es'
      ? 'Solicita información'
      : 'Request information';
    // return this.language() === 'es' ? 'Escríbenos por WhatsApp' : 'Message us on WhatsApp';
  });

  // Mensaje automático según idioma
  private message = computed(() => {
    const language = this.language();
    const prefix =
      language === 'es'
        ? 'Deseo información de: '
        : 'I would like information about: ';
    return `${prefix}${this.module()}`;
  });

  // URL final
  public whatsappUrl = computed(() => {
    const text = encodeURIComponent(this.message());

    // Caso A: Si es solo números
    if (/^\d+$/.test(this.phoneOrBase)) {
      return `https://wa.me/${this.phoneOrBase}?text=${text}`;
    }

    // Caso B: Si es una URL completa (ej: https://wa.me/123?text=hola)
    // Se quita cualquier query param existente para evitar duplicados (ej: ?text=...&text=...)
    const baseUrl = this.phoneOrBase.split('?')[0];
    return `${baseUrl}?text=${text}`;
  });
}
