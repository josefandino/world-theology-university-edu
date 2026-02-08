import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { TextService } from '@shared/helpers';
import { AngularModule, MaterialModule } from '@shared/modules';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { AccordionItem } from '@shared/components/accordion/accordion.interface';
import { AccordionComponent } from '@shared/components/accordion/accordion.component';

@Component({
  selector: 'app-es-concejeria-clinica-pastoral',
  imports: [AngularModule, MaterialModule, BannerComponent, AccordionComponent],
  templateUrl: './es-concejeria-clinica-pastoral.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsConcejeriaClinicaPastoralComponent {
  public flyer = './assets/webp/concejeria_clinica_pastoral.webp';
  public alt = 'Flyer World Theology University';

  title = signal<string>('');

  ngOnInit() {}

  public dataOverview: AccordionItem[] = [
    {
      title: 'Descripción del Programa',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `La Maestría en Consejería Clínica Pastoral está diseñada para preparar a pastores y líderes cristianos en el área de consejería espiritual y emocional, combinando principios bíblicos con técnicas clínicas. Este programa 100% en línea ofrece una formación profunda que integra el cuidado pastoral con la psicología clínica, brindando herramientas para acompañar a personas en situaciones de crisis emocional o espiritual.`,
        },
      ],
    },
    {
      title: 'Admisiones',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Los solicitantes de la Maestría en Consejería Clínica Pastoral deben cumplir con los siguientes requisitos:`,
        },
        {
          type: 'list',
          items: [
            'Transcripciones Académicas',
            'Currículum Vitae o Hoja de Vida',
            'Declaración del Postulante',
            'Cartas de Recomendación',
            'Tarifa de Solicitud (no reembolsable)',
          ],
        },
        {
          type: 'paragraph',
          text: `Para más detalles sobre los requisitos y el proceso de admisión, consulta la sección de admisiones del programa.`,
        },
      ],
    },
  ];

  public dataCurriculum: AccordionItem[] = [
    {
      title: 'Requisitos del Programa',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `El programa requiere la finalización de 62 créditos, que incluyen cursos clave, optativos y electivos. Los estudiantes deben completar cursos en consejería pastoral, psicología clínica y estudios bíblicos, además de optar por una tesis o examen comprensivo. Deben mantener un promedio general de B o superior.`,
        },
      ],
    },
    {
      title: 'Asignaturas Clave',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: `Consejería Pastoral Aplicada (3 créditos)`,
          text: `Este curso se centra en la aplicación de principios bíblicos para ofrecer consejería efectiva a personas en situaciones de crisis emocional y espiritual.`,
        },
        {
          type: 'paragraph',
          titleBody: `Psicología Clínica para Pastores (3 créditos)`,
          text: `Explora los fundamentos de la psicología clínica desde una perspectiva pastoral, proporcionando herramientas para acompañar a personas con problemas emocionales y mentales dentro de un marco cristiano.`,
        },
        {
          type: 'paragraph',
          titleBody: `Terapia Familiar Cristiana (3 créditos)`,
          text: `Se enfoca en la estructura familiar y cómo la consejería pastoral puede ayudar a restaurar relaciones basadas en principios bíblicos y emocionales.`,
        },
      ],
    },
  ];

  public semester1: AccordionItem[] = [
    {
      title: 'Primer Semestre',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Fundamentos de Consejería Pastoral (3 créditos)',
          text: `Un curso que introduce los principios básicos de la consejería dentro del contexto cristiano, incluyendo ética, empatía, y acompañamiento espiritual.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Psicología Clínica para Líderes (3 créditos)',
          text: `Se exploran los fundamentos de la psicología clínica para que los pastores y líderes puedan entender mejor los problemas emocionales de sus congregantes.`,
        },
      ],
    },
  ];

  public semester2: AccordionItem[] = [
    {
      title: 'Segundo Semestre',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Terapia Familiar Cristiana (3 créditos)',
          text: `Este curso enseña a los estudiantes cómo aplicar principios bíblicos y clínicos para restaurar relaciones familiares y proporcionar apoyo en situaciones de crisis.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Intervención en Crisis Espirituales (3 créditos)',
          text: `Se centra en cómo manejar y ofrecer apoyo a personas que enfrentan crisis espirituales y emocionales, utilizando una combinación de enfoques bíblicos y psicológicos.`,
        },
      ],
    },
  ];

  public semester3: AccordionItem[] = [
    {
      title: 'Tercer Semestre',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Consejería en Situaciones de Trauma (3 créditos)',
          text: `Este curso enseña a los estudiantes cómo ofrecer consejería pastoral a personas que han experimentado situaciones traumáticas, abordando el proceso de sanación desde una perspectiva bíblica y clínica.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Ética en la Consejería Pastoral (3 créditos)',
          text: `Se exploran los dilemas éticos que pueden surgir en la práctica de la consejería pastoral, brindando a los estudiantes herramientas para tomar decisiones informadas y éticamente sólidas.`,
        },
      ],
    },
  ];

  public semester4: AccordionItem[] = [
    {
      title: 'Cuarto Semestre',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Tesis o Examen Comprensivo (6 créditos)',
          text: `Los estudiantes deben elegir entre desarrollar una tesis de investigación enfocada en la consejería pastoral o completar un examen que evalúe su dominio de los conceptos aprendidos durante el programa.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Optativa Electiva I (3 créditos)',
          text: `El estudiante seleccionará una asignatura electiva de su elección que complemente los principios de consejería pastoral.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Optativa Electiva II (3 créditos)',
          text: `Otra asignatura electiva que permita profundizar en un área de interés específico dentro del campo de la consejería pastoral.`,
        },
      ],
    },
  ];

  public semester5: AccordionItem[] = [
    {
      title: 'Quinto Semestre',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Optativa Electiva III (3 créditos)',
          text: `Asignatura electiva que permite al estudiante personalizar su formación según sus necesidades ministeriales.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Optativa Electiva IV (3 créditos)',
          text: `Otra asignatura electiva que complementa el conocimiento del estudiante en consejería pastoral.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Optativa Electiva V (3 créditos)',
          text: `El estudiante seleccionará una última asignatura electiva para completar su formación académica.`,
        },
      ],
    },
  ];
}
