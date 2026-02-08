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
  selector: 'app-en-concejeria-clinica-pastoral',
  imports: [AngularModule, MaterialModule, BannerComponent, AccordionComponent],
  templateUrl: './en-concejeria-clinica-pastoral.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnConcejeriaClinicaPastoralComponent {
  public flyer = './assets/webp/concejeria_clinica_pastoral.webp';
  public alt = 'Flyer World Theology University';

  title = signal<string>('');

  ngOnInit() {}

  public dataOverview: AccordionItem[] = [
    {
      title: 'Program Description',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `The Master’s in Clinical Pastoral Counseling is designed to prepare pastors and Christian leaders in the field of spiritual and emotional counseling by combining biblical principles with clinical techniques. This 100% online program offers comprehensive training that integrates pastoral care with clinical psychology, providing tools to support individuals in situations of emotional or spiritual crisis.`,
        },
      ],
    },
    {
      title: 'Admissions',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `Applicants for the Master’s in Clinical Pastoral Counseling must meet the following requirements:`,
        },
        {
          type: 'list',
          items: [
            'Academic Transcripts',
            'Curriculum Vitae or Resume',
            'Statement of Purpose',
            'Letters of Recommendation',
            'Application Fee (non-refundable)',
          ],
        },
        {
          type: 'paragraph',
          text: `For more details about the requirements and the admission process, please refer to the program’s admissions section.`,
        },
      ],
    },
  ];

  public dataCurriculum: AccordionItem[] = [
    {
      title: 'Program Requirements',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: `The program requires the completion of 62 credits, which include core courses, electives, and optional courses. Students must complete coursework in pastoral counseling, clinical psychology, and biblical studies, as well as choose between a thesis or a comprehensive exam. A cumulative GPA of B or higher must be maintained.`,
        },
      ],
    },
    {
      title: 'Key Courses',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: `Applied Pastoral Counseling (3 credits)`,
          text: `This course focuses on the application of biblical principles to provide effective counseling for individuals in emotional and spiritual crisis.`,
        },
        {
          type: 'paragraph',
          titleBody: `Clinical Psychology for Pastors (3 credits)`,
          text: `This course explores the foundations of clinical psychology from a pastoral perspective, equipping students with tools to support individuals facing emotional and mental challenges within a Christian framework.`,
        },
        {
          type: 'paragraph',
          titleBody: `Christian Family Therapy (3 credits)`,
          text: `This course focuses on family structure and how pastoral counseling can help restore relationships based on biblical and emotional principles.`,
        },
      ],
    },
  ];

  // public semester1: AccordionItem[] = [
  //   {
  //     title: 'First Semester',
  //     expanded: false,
  //     content: [
  //       {
  //         type: 'paragraph',
  //         titleBody: 'Foundations of Pastoral Counseling (3 credits)',
  //         text: `This course introduces the basic principles of counseling within the Christian context, including ethics, empathy, and spiritual support.`,
  //       },
  //       {
  //         type: 'paragraph',
  //         titleBody: 'Clinical Psychology for Leaders (3 credits)',
  //         text: `This course explores the fundamentals of clinical psychology to help pastors and leaders better understand the emotional issues faced by their congregants.`,
  //       },
  //     ]
  //   },
  // ];

  public semester1: AccordionItem[] = [
    {
      title: 'First Semester',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Foundations of Pastoral Counseling (3 credits)',
          text: `This course introduces the basic principles of counseling within the Christian context, including ethics, empathy, and spiritual support.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Clinical Psychology for Leaders (3 credits)',
          text: `This course explores the fundamentals of clinical psychology to help pastors and leaders better understand the emotional issues faced by their congregants.`,
        },
      ],
    },
  ];
  public semester2: AccordionItem[] = [
    {
      title: 'Second Semester',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Christian Family Therapy (3 credits)',
          text: `This course teaches students how to apply biblical and clinical principles to restore family relationships and provide support in crisis situations.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Intervention in Spiritual Crises (3 credits)',
          text: `This course focuses on how to manage and provide support to individuals facing spiritual and emotional crises, utilizing a combination of biblical and psychological approaches.`,
        },
      ],
    },
  ];

  public semester3: AccordionItem[] = [
    {
      title: 'Third Semester',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Counseling in Trauma Situations (3 credits)',
          text: `This course teaches students how to provide pastoral counseling to individuals who have experienced traumatic situations, addressing the healing process from a biblical and clinical perspective.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Ethics in Pastoral Counseling (3 credits)',
          text: `This course explores the ethical dilemmas that may arise in the practice of pastoral counseling, equipping students with tools to make informed and ethically sound decisions.`,
        },
      ],
    },
  ];

  public semester4: AccordionItem[] = [
    {
      title: 'Fourth Semester',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Thesis or Comprehensive Exam (6 credits)',
          text: `Students must choose between developing a research thesis focused on pastoral counseling or completing an exam that evaluates their mastery of the concepts learned throughout the program.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Elective I (3 credits)',
          text: `The student will select an elective course of their choice that complements the principles of pastoral counseling.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Elective II (3 credits)',
          text: `Another elective course that allows the student to delve deeper into a specific area of interest within the field of pastoral counseling.`,
        },
      ],
    },
  ];

  public semester5: AccordionItem[] = [
    {
      title: 'Fifth Semester',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          titleBody: 'Elective III (3 credits)',
          text: `An elective course that allows the student to customize their education according to their ministerial needs.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Elective IV (3 credits)',
          text: `Another elective course that complements the student’s knowledge in pastoral counseling.`,
        },
        {
          type: 'paragraph',
          titleBody: 'Elective V (3 credits)',
          text: `The student will select a final elective course to complete their academic training.`,
        },
      ],
    },
  ];
}
