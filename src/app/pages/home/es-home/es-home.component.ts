import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';

import { interval, Subscription } from 'rxjs';

import { AccordionItem } from '@shared/components/accordion/accordion.interface';
import { WUT_INFO } from '@shared/const/info-acc';
import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';

@Component({
  selector: 'app-es-home',
  imports: [AngularModule, MaterialModule],
  templateUrl: './es-home.component.html',
  styleUrl: '../home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsHomeComponent implements OnInit, AfterViewInit {
  public video = '/video/world_university_edu.mp4';
  public whyWtuImg = './assets/webp/home/why_wtu.webp';

  public isMenuOpen = false;
  public scrollPosition: number = 0;

  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  currentIndex = 0;

  readonly wtuInfo = WUT_INFO;

  intervalSub!: Subscription;

  private readonly _text = inject(TextService);

  ngOnInit() {
    this.intervalSub = interval(3000).subscribe(() => this.nextSlide());
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY * 0.5;
  }

  ngAfterViewInit(): void {
    /// Protección para cuando el slider está comentado
    if (this.slider) {
      // escuchamos el fin de la transición
      this.slider.nativeElement.addEventListener('transitionend', () => {
        if (this.currentIndex === this.sliderList.length) {
          // si estamos en el slide duplicado (el 10), saltamos sin animación al original (0)
          this.slider.nativeElement.style.transition = 'none';
          this.currentIndex = 0;
          this.slider.nativeElement.style.transform = `translateX(0%)`;

          // forzamos reflujo para reactivar transición en el siguiente movimiento
          this.slider.nativeElement.offsetHeight;
          this.slider.nativeElement.style.transition =
            'transform 0.6s ease-in-out';
        }
      });
    }
  }

  nextSlide() {
    /// Protección para cuando el slider está comentado
    if (this.slider) {
      this.currentIndex++;
      this.slider.nativeElement.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  public handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.toggleMenu();
    }
  }

  /* DESPLEGABLE 01 */
  public preguntasFrecuentesData: AccordionItem[] = [
    {
      title: '¿Qué es World Academy Theology?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `World Academy Theology es una institución educativa online dedicada a la formación académica y espiritual, donde la excelencia, la fe y el diálogo intercultural se unen para transformar vidas y comunidades.`,
        },
      ],
    },
    {
      title: '¿Qué programas ofrece?',
      expanded: false,
      content: [
        {
          type: 'list',
          items: [
            'Licenciaturas en áreas teológicas y de consejería.',
            'Maestrías en liderazgo espiritual, teología y consejería pastoral.',
            'Doctorados con un enfoque en investigación y práctica ministerial.',
            'Cursos cortos de actualización y formación continua.',
            'Seminarios y talleres online con docentes internacionales.',
          ],
        },
      ],
    },
    {
      title: '¿Quiénes pueden estudiar en la Academia?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Toda persona interesada en profundizar en la teología, la espiritualidad, el liderazgo y la consejería. World Academy Theology abre sus puertas a estudiantes de todas las culturas, credos y contextos.`,
        },
      ],
    },
    {
      title: '¿Cómo puedo inscribirme?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `La inscripción se realiza en línea a través de nuestra plataforma oficial. El proceso incluye el registro en el portal, la selección del programa académico y la validación de la documentación solicitada.`,
        },
      ],
    },
    {
      title: '¿Qué beneficios tiene estudiar aquí?',
      expanded: false,
      content: [
        {
          type: 'list',
          items: [
            'Formación 100% online con acceso flexible desde cualquier lugar.',
            'Acompañamiento académico y espiritual personalizado.',
            'Programas actualizados y adaptados a los desafíos contemporáneos.',
            'Acceso a una comunidad global de aprendizaje.',
            'Certificaciones con validez académica y reconocimiento internacional.',
          ],
        },
      ],
    },
    {
      title: '¿La matrícula tiene costo?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Sí, cada programa tiene un costo adaptado a su nivel académico. Ofrecemos planes accesibles y facilidades de pago para garantizar que más personas puedan acceder a una formación de calidad.`,
        },
      ],
    },
    {
      title: '¿Cómo garantiza la Academia la calidad educativa?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Nuestros programas están diseñados bajo estándares internacionales de educación superior. Contamos con docentes especializados y un compromiso con la excelencia académica, la ética y el acompañamiento integral de cada estudiante.`,
        },
      ],
    },
    {
      title: '¿La Academia tiene alcance internacional?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Sí, World Academy Theology es una comunidad académica global. Nuestros estudiantes provienen de diferentes países y contextos, lo que enriquece el aprendizaje y fomenta el diálogo intercultural.`,
        },
      ],
    },
    {
      title: '¿Cómo protege la Academia la información de los estudiantes?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `La información personal y académica de cada estudiante es tratada con absoluta confidencialidad. Contamos con protocolos de seguridad y políticas de privacidad para proteger los datos en todo momento.`,
        },
      ],
    },
    {
      title: '¿Cómo puedo contactar a World Academy Theology?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Puedes escribirnos a través de nuestro portal oficial, al correo electrónico info@worldacademytheology.org o mediante nuestras redes sociales oficiales en Facebook, LinkedIn e Instagram.`,
        },
      ],
    },
  ];

  public sliderList = [
    {
      id: 1,
      img: './assets/webp/slider/academy-01.webp',
      alt: this.wtuInfo.title,
    },
    {
      id: 2,
      img: './assets/webp/slider/academy-02.webp',
      alt: this.wtuInfo.title,
    },
    {
      id: 3,
      img: './assets/webp/slider/academy-03.webp',
      alt: this.wtuInfo.title,
    },
    {
      id: 4,
      img: './assets/webp/slider/academy-04.webp',
      alt: this.wtuInfo.title,
    },
    {
      id: 5,
      img: './assets/webp/slider/academy-05.webp',
      alt: this.wtuInfo.title,
    },
    {
      id: 6,
      img: './assets/webp/slider/academy-06.webp',
      alt: this.wtuInfo.title,
    },
  ];

  public cardImages = [
    {
      id: 1,
      img: './assets/webp/home/wut_card_01.webp',
      alt: this.wtuInfo.title,
      path: '/programs',
      title: 'Students',
      description: 'Description',
    },
    {
      id: 2,
      img: './assets/webp/home/wut_card_02.webp',
      alt: this.wtuInfo.title,
      path: '/programs',
      title: 'Students',
      description: 'Description',
    },
    {
      id: 3,
      img: './assets/webp/home/students_card.webp',
      alt: this.wtuInfo.title,
      path: '/programs',
      title: 'Students',
      description: 'Description',
    },
  ];
}
