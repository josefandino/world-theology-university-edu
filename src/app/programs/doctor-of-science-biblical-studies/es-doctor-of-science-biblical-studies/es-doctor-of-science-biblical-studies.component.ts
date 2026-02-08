import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { AccordionComponent } from '@shared/components/accordion/accordion.component';
import { AccordionItem } from '@shared/components/accordion/accordion.interface';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';

@Component({
  selector: 'app-es-doctor-of-science-biblical-studies',
  imports: [AngularModule, MaterialModule, AccordionComponent, BannerComponent],
  templateUrl: './es-doctor-of-science-biblical-studies.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsDoctorOfScienceBiblicalStudiesComponent {
  public flyer = './assets/webp/doctorado_ciencias_estudio.webp';
  public alt = 'Flyer World Theology University';
  title = signal<string>('');

  ngOnInit() {}

  /* DESPLEGABLE 01 */
  coursesData: AccordionItem[] = [
    {
      title: 'DPHBIWU 4100 Cuestiones y Métodos en Estudios Bíblicos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Explorarás temas contemporáneos significativos en los estudios del Antiguo o Nuevo Testamento, revisarás los avances recientes en el estudio del hebreo o griego, y analizarás los métodos clave utilizados en la interpretación bíblica. Luego, identificarás un tema y un método relacionados con tu propuesta de disertación y los investigarás en profundidad. (3)',
        },
        {
          type: 'paragraph',
          text: '3.00 horas crédito',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4200 Principios de Enseñanza, Aprendizaje y Diseño de Cursos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Revisarás perspectivas bíblicas sobre la enseñanza y el aprendizaje, estudiarás principios de la educación para adultos, y explorarás las mejores prácticas para el diseño y desarrollo de cursos. Aprenderás a diseñar lecciones y cursos que van más allá de la simple transmisión de contenido, enfocándose en facilitar el aprendizaje. Aplicarás estas habilidades en la creación de un curso relacionado con tu tema propuesto para la disertación. (3)',
        },
        {
          type: 'paragraph',
          text: '3.00 horas crédito',
        },
      ],
    },
    {
      title: 'DPHBIWU 4400 Propuesta de Disertación en Estudios Bíblicos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Participarás en una práctica guiada de investigación bibliográfica que te preparará para redactar una disertación doctoral. Aprenderás a formular un problema de investigación, identificar métodos adecuados, localizar, evaluar y documentar fuentes académicas, estructurar argumentaciones y escribir a nivel doctoral. Con base en estas habilidades, redactarás una propuesta de disertación que deberá ser aprobada por el Comité de Propuestas antes de comenzar los cursos de investigación para la disertación.',
        },
        {
          type: 'paragraph',
          text: '3.00 horas crédito',
        },
      ],
    },
    {
      title: 'BLG 4340 Competencia en Lenguas Bíblicas',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Demostrarás una competencia aceptable en griego o hebreo, evaluada por los miembros de la facultad de estudios bíblicos, quienes determinarán el nivel adecuado de dominio.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Corequisito: DPHBIWU 4100',
        },
        {
          type: 'paragraph',
          text: '0.00 horas crédito',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4401 Investigación y Redacción de Disertación I en Estudios Bíblicos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Después de completar con éxito el curso de propuesta de disertación, tu profesor supervisor te guiará mientras realizas la investigación para una disertación de entre 40,000 y 110,000 palabras en un área seleccionada de estudios bíblicos. (3 - 6) Repetible.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisito: DPHBIWU 4402',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4402 Investigación y Redacción de Disertación II en Estudios Bíblicos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Tras la finalización exitosa del curso de propuesta de disertación, continuarás bajo la supervisión de tu profesor, realizando la investigación para tu disertación de entre 40,000 y 110,000 palabras en un área seleccionada de estudios bíblicos. (3 - 6) Repetible.',
        },
        {
          type: 'paragraph',
          bodyNote: '6.00 horas crédito',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4403 Investigación y Redacción de Disertación III en Estudios Bíblicos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Con la supervisión de tu profesor, continuarás la investigación y la redacción de tu disertación de entre 40,000 y 110,000 palabras en un área seleccionada de estudios bíblicos. (3 - 6) Repetible.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisito: DPHBIWU 4402',
        },
        {
          type: 'paragraph',
          text: '6.00 horas crédito',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4404 Investigación y Redacción de Disertación IV en Estudios Bíblicos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Una vez completada la investigación de la disertación, continuarás trabajando bajo la dirección de tu profesor supervisor para redactar tu disertación de entre 40,000 y 110,000 palabras. (3-6) Repetible.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisito: DPHBIWU 4403',
        },
        {
          type: 'paragraph',
          text: '6.00 horas crédito',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4405 Investigación y Redacción de Disertación V en Estudios Bíblicos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Tras finalizar la investigación, continuarás trabajando con tu profesor supervisor para completar la redacción de tu disertación. (3-6) Repetible.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisito: DPHBIWU 4404',
        },
        {
          type: 'paragraph',
          text: '6.00 horas crédito',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4406 Revisión y Defensa de Disertación en Estudios Bíblicos',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Tras completar los cursos de investigación y redacción de la disertación y con la recomendación de tu profesor supervisor, presentarás el borrador final de tu disertación de entre 40,000 y 110,000 palabras al Comité de Defensa de la Disertación, compuesto por tu profesor supervisor y dos miembros adicionales de la facultad. Una vez que el comité haya revisado la disertación, te presentarás ante ellos para defenderla oralmente. (6) Repetible.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisito: DPHBIWU 4405',
        },
        {
          type: 'paragraph',
          text: '3.00 horas crédito',
        },
      ],
    },
    {
      title: 'RES 4340 Competencia en Lengua de Investigación I',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Demostrarás competencia aceptable en una lengua de investigación relacionada con tu disertación.',
        },
        {
          type: 'paragraph',
          text: '0.00 horas crédito',
        },
      ],
    },
    {
      title: 'RES 1321 Competencia en Lengua de Investigación II',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Demostrarás competencia aceptable en una segunda lengua de investigación relacionada con tu disertación.',
        },
        {
          type: 'paragraph',
          text: '0.00 horas crédito',
        },
      ],
    },
  ];

  /* DESPLEGABLE 02 */
  public faqsData: AccordionItem[] = [
    {
      title: '¿Qué especializaciones están disponibles en este programa?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Como estudiante de Estudios Bíblicos, puedes elegir especializarte en áreas como el Antiguo Testamento, Nuevo Testamento, Teología Bíblica, Hermenéutica, Hebreo o Griego.',
        },
      ],
    },
    {
      title: '¿Está el programa acreditado por la ATS?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'El programa de doctorado está acreditado profesionalmente por la Asociación de Escuelas Teológicas (ATS), y también cuenta con acreditación regional de SACSCOC y acreditación nacional de ABHE.',
        },
      ],
    },
    {
      title: '¿Es el programa completamente en línea?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'El programa de doctorado se realiza completamente en modalidad en línea, por lo que no es necesario que asistas físicamente a World Theology University.',
        },
      ],
    },
    {
      title: '¿El programa es sincrónico o asincrónico?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Los tres seminarios fundamentales son en su mayoría asincrónicos, pero incluyen un componente sincrónico. Los instructores facilitan sesiones de discusión en grupos de seis a ocho estudiantes, que se reúnen entre cinco y ocho veces a lo largo del semestre durante dos horas cada sesión.',
        },
      ],
    },
    {
      title: '¿Qué significa un modelo Europeo-Modificado?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'El modelo Europeo-Modificado combina lo mejor de los modelos de América del Norte y Europa. Ingresas al programa con una idea preliminar del tema de tu disertación, y el trabajo en los tres seminarios fundamentales te ayudará a refinar tu tema para que sea sustantivo, coherente y enfocado. Después de estos seminarios, te dedicarás a la investigación, redacción y defensa de tu disertación, lo cual representa el 80% de tus estudios.',
        },
      ],
    },
    {
      title:
        '¿Es competitivo este programa en cuanto a costos con otros programas doctorales acreditados por la ATS?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'El costo total de la matrícula es entre un 25% y un 50% más bajo que el de otros programas doctorales en seminarios, e incluye el costo de los libros de texto.',
        },
      ],
    },
    {
      title: '¿Recibo un paquete de software bíblico como estudiante?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Como estudiante de doctorado, recibirás una copia gratuita del software Accordance Bible, que podrás usar mientras continúes con tus estudios doctorales. Al graduarte, serás propietario del software.',
        },
      ],
    },
    {
      title: '¿Necesito conocer lenguas bíblicas para este programa?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Si te especializas en el Antiguo Testamento, debes demostrar que has completado cuatro semestres de hebreo y dos semestres de griego para ser admitido en el programa. Si te especializas en el Nuevo Testamento, debes haber completado cuatro semestres de griego y dos semestres de hebreo. Además, durante tu primer semestre, tomarás un examen de calificación en tu lengua principal.',
        },
      ],
    },
    {
      title: '¿Debo completar lenguas de investigación para este programa?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Para acceder a la mayor cantidad posible de literatura académica relacionada con tu disertación, los estudiantes de Estudios Bíblicos deben demostrar competencia en dos lenguas de investigación teológica como parte de sus estudios doctorales. El proceso de recopilación de una bibliografía para tu disertación usualmente te ayudará a identificar las lenguas específicas que necesitarás aprender.',
        },
      ],
    },
    {
      title: '¿Cuánto debe medir la disertación?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Tu disertación debe tener entre 90,000 y 110,000 palabras, incluyendo la introducción, el cuerpo del texto, las notas al pie, la conclusión y la bibliografía, pero no las páginas preliminares.',
        },
      ],
    },
    {
      title:
        '¿Quién será mi mentor de disertación? ¿Puedo participar en la selección?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Trabajaremos contigo para reclutar a un mentor cuya área de interés y experiencia se alinee lo más posible con tu tema de investigación. Como la mayoría de nuestros mentores provienen de fuera del seminario, el rango de temas que puedes abordar es amplio, y tendrás la oportunidad de trabajar de cerca con un experto en tu campo de investigación.',
        },
      ],
    },
  ];
}
