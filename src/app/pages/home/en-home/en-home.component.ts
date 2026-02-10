import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  ViewChild,
} from '@angular/core';

import { Subscription, interval } from 'rxjs';

import { AccordionItem } from '@shared/components/accordion/accordion.interface';
import { WTU_INFO } from '@shared/const/info-acc';
import { AngularModule, MaterialModule } from '@shared/modules';

@Component({
  selector: 'app-en-home',
  imports: [AngularModule, MaterialModule],
  templateUrl: './en-home.component.html',
  styleUrl: '../home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnHomeComponent implements AfterViewInit {
  public video = '/video/world_university_edu.mp4';
  public whyWtuImg = './assets/webp/home/why_wtu.webp';

  public isMenuOpen = false;
  public scrollPosition: number = 0;

  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  currentIndex = 0;

  readonly wtuInfo = WTU_INFO;

  intervalSub!: Subscription;

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
      title: 'What is World Academy Theology?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `World Academy Theology is an online educational institution dedicated to academic and spiritual formation, where excellence, faith, and intercultural dialogue come together to transform lives and communities.`,
        },
      ],
    },
    {
      title: 'What programs are offered?',
      expanded: false,
      content: [
        {
          type: 'list',
          items: [
            'Bachelor’s degrees in theological and counseling fields.',
            'Master’s degrees in spiritual leadership, theology, and pastoral counseling.',
            'Doctoral programs with a focus on research and ministerial practice.',
            'Short courses for continuing education and professional development.',
            'Online seminars and workshops with international faculty.',
          ],
        },
      ],
    },
    {
      title: 'Who can study at the Academy?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Anyone interested in deepening their understanding of theology, spirituality, leadership, and counseling. World Academy Theology welcomes students from all cultures, beliefs, and backgrounds.`,
        },
      ],
    },
    {
      title: 'How can I enroll?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Enrollment is completed online through our official platform. The process includes registration on the portal, selecting your academic program, and submitting the required documentation.`,
        },
      ],
    },
    {
      title: 'What are the benefits of studying here?',
      expanded: false,
      content: [
        {
          type: 'list',
          items: [
            '100% online education with flexible access from anywhere.',
            'Personalized academic and spiritual guidance.',
            'Updated programs adapted to contemporary challenges.',
            'Access to a global learning community.',
            'Academic certifications with international recognition.',
          ],
        },
      ],
    },
    {
      title: 'Does enrollment have a cost?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Yes, each program has a tuition fee according to its academic level. We offer accessible plans and flexible payment options to ensure more people can access quality education.`,
        },
      ],
    },
    {
      title: 'How does the Academy ensure academic quality?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Our programs are designed under international standards of higher education. We count on specialized faculty and a strong commitment to academic excellence, ethics, and holistic student support.`,
        },
      ],
    },
    {
      title: 'Does the Academy have international reach?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Yes, World Academy Theology is a global academic community. Our students come from different countries and backgrounds, enriching the learning experience and fostering intercultural dialogue.`,
        },
      ],
    },
    {
      title: 'How is student information protected?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `All personal and academic information is treated with strict confidentiality. We follow data protection protocols and privacy policies to safeguard student information at all times.`,
        },
      ],
    },
    {
      title: 'How can I contact World Academy Theology?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `You can reach us through our official website, via email at info@worldacademytheology.org, or through our official social media accounts on Facebook, LinkedIn, and Instagram.`,
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
