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
  selector: 'app-en-doctor-of-science-biblical-studies',
  imports: [AngularModule, MaterialModule, AccordionComponent, BannerComponent],
  templateUrl: './en-doctor-of-science-biblical-studies.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnDoctorOfScienceBiblicalStudiesComponent {
  public flyer = './assets/webp/doctorado_ciencias_estudio.webp';
  public alt = 'Flyer World Theology University';
  title = signal<string>('');

  ngOnInit() {}

  /* DESPLEGABLE 01 */
  coursesData: AccordionItem[] = [
    {
      title: 'DPHBIWU 4100 Issues and Methods in Biblical Studies',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'You will explore significant contemporary topics in Old or New Testament studies, review recent advancements in Hebrew or Greek studies, and analyze key methods used in biblical interpretation. You will then identify a topic and a method related to your dissertation proposal and research them in depth. (3)',
        },
        {
          type: 'paragraph',
          text: '3.00 credit hours',
        },
      ],
    },
    {
      title: 'DPHBIWU 4200 Principles of Teaching, Learning, and Course Design',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'You will review biblical perspectives on teaching and learning, study principles of adult education, and explore best practices for course design and development. You will learn to design lessons and courses that go beyond mere content delivery, focusing on facilitating learning. These skills will be applied to create a course related to your proposed dissertation topic. (3)',
        },
        {
          type: 'paragraph',
          text: '3.00 credit hours',
        },
      ],
    },
    {
      title: 'DPHBIWU 4400 Dissertation Proposal in Biblical Studies',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'You will engage in guided practice in bibliographic research to prepare for writing a doctoral dissertation. You will learn how to formulate a research problem, identify appropriate methods, locate, evaluate, and document academic sources, structure arguments, and write at a doctoral level. Based on these skills, you will draft a dissertation proposal that must be approved by the Proposal Committee before beginning dissertation research courses.',
        },
        {
          type: 'paragraph',
          text: '3.00 credit hours',
        },
      ],
    },
    {
      title: 'BLG 4340 Competence in Biblical Languages',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'You will demonstrate acceptable competence in Greek or Hebrew, assessed by biblical studies faculty members who will determine the appropriate level of proficiency.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Corequisite: DPHBIWU 4100',
        },
        {
          type: 'paragraph',
          text: '0.00 credit hours',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4401 Dissertation Research and Writing I in Biblical Studies',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'After successfully completing the dissertation proposal course, your supervising professor will guide you as you conduct research for a dissertation of 40,000 to 110,000 words in a selected area of biblical studies. (3 - 6) Repeatable.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisite: DPHBIWU 4402',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4402 Dissertation Research and Writing II in Biblical Studies',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Following successful completion of the dissertation proposal course, you will continue under your professor’s supervision, conducting research for your dissertation of 40,000 to 110,000 words in a selected area of biblical studies. (3 - 6) Repeatable.',
        },
        {
          type: 'paragraph',
          bodyNote: '6.00 credit hours',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4403 Dissertation Research and Writing III in Biblical Studies',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Under your professor’s supervision, you will continue researching and writing your dissertation of 40,000 to 110,000 words in a selected area of biblical studies. (3 - 6) Repeatable.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisite: DPHBIWU 4402',
        },
        {
          type: 'paragraph',
          text: '6.00 credit hours',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4404 Dissertation Research and Writing IV in Biblical Studies',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Upon completing dissertation research, you will continue working under the guidance of your supervising professor to write your dissertation of 40,000 to 110,000 words. (3-6) Repeatable.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisite: DPHBIWU 4403',
        },
        {
          type: 'paragraph',
          text: '6.00 credit hours',
        },
      ],
    },
    {
      title:
        'DPHBIWU 4405 Dissertation Research and Writing V in Biblical Studies',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'After completing the research phase, you will continue working with your supervising professor to complete the writing of your dissertation. (3-6) Repeatable.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisite: DPHBIWU 4404',
        },
        {
          type: 'paragraph',
          text: '6.00 credit hours',
        },
      ],
    },
    {
      title: 'DPHBIWU 4406 Dissertation Review and Defense in Biblical Studies',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'After completing the dissertation research and writing courses and with the recommendation of your supervising professor, you will present the final draft of your 40,000 to 110,000-word dissertation to the Dissertation Defense Committee, consisting of your supervising professor and two additional faculty members. Once the committee reviews the dissertation, you will defend it orally before them. (6) Repeatable.',
        },
        {
          type: 'paragraph',
          bodyNote: 'Prerequisite: DPHBIWU 4405',
        },
        {
          type: 'paragraph',
          text: '3.00 credit hours',
        },
      ],
    },
    {
      title: 'RES 4340 Research Language Competency I',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'You will demonstrate acceptable competence in a research language related to your dissertation.',
        },
        {
          type: 'paragraph',
          text: '0.00 credit hours',
        },
      ],
    },
    {
      title: 'RES 1321 Research Language Competency II',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'You will demonstrate acceptable competence in a second research language related to your dissertation.',
        },
        {
          type: 'paragraph',
          text: '0.00 credit hours',
        },
      ],
    },
  ];

  /* DROPDOWN 02 */
  public faqsData: AccordionItem[] = [
    {
      title: 'What specializations are available in this program?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'As a student of Biblical Studies, you can choose to specialize in areas such as the Old Testament, New Testament, Biblical Theology, Hermeneutics, Hebrew, or Greek.',
        },
      ],
    },
    {
      title: 'Is the program accredited by the ATS?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'The doctoral program is professionally accredited by the Association of Theological Schools (ATS) and also holds regional accreditation from SACSCOC and national accreditation from ABHE.',
        },
      ],
    },
    {
      title: 'Is the program fully online?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'The doctoral program is conducted entirely online, so there is no requirement for you to attend World Theology University in person.',
        },
      ],
    },
    {
      title: 'Is the program synchronous or asynchronous?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'The three foundational seminars are primarily asynchronous but include a synchronous component. Instructors facilitate discussion sessions with groups of six to eight students, meeting five to eight times throughout the semester for two hours per session.',
        },
      ],
    },
    {
      title: 'What does a Modified European Model mean?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'The Modified European Model combines the best of North American and European models. You enter the program with a preliminary idea of your dissertation topic, and the work in the three foundational seminars will help you refine your topic to ensure it is substantive, coherent, and focused. After these seminars, you will dedicate yourself to researching, writing, and defending your dissertation, which represents 80% of your studies.',
        },
      ],
    },
    {
      title:
        'Is this program cost-competitive compared to other ATS-accredited doctoral programs?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'The total tuition cost is 25% to 50% lower than other doctoral programs at seminaries, and it includes the cost of textbooks.',
        },
      ],
    },
    {
      title: 'Do I receive a Bible software package as a student?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'As a doctoral student, you will receive a free copy of Accordance Bible software, which you can use throughout your doctoral studies. Upon graduation, you will own the software.',
        },
      ],
    },
    {
      title: 'Do I need to know biblical languages for this program?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'If you specialize in the Old Testament, you must demonstrate that you have completed four semesters of Hebrew and two semesters of Greek to be admitted to the program. If you specialize in the New Testament, you must have completed four semesters of Greek and two semesters of Hebrew. Additionally, during your first semester, you will take a qualifying exam in your primary language.',
        },
      ],
    },
    {
      title: 'Do I need to complete research languages for this program?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'To access as much academic literature as possible related to your dissertation, students of Biblical Studies must demonstrate competence in two theological research languages as part of their doctoral studies. The process of gathering a bibliography for your dissertation will usually help you identify the specific languages you need to learn.',
        },
      ],
    },
    {
      title: 'How long should the dissertation be?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Your dissertation should be between 90,000 and 110,000 words, including the introduction, main text, footnotes, conclusion, and bibliography, but excluding preliminary pages.',
        },
      ],
    },
    {
      title:
        'Who will be my dissertation mentor? Can I participate in the selection process?',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'We will work with you to recruit a mentor whose area of interest and expertise aligns as closely as possible with your research topic. Since most of our mentors come from outside the seminary, the range of topics you can pursue is broad, and you will have the opportunity to work closely with an expert in your research field.',
        },
      ],
    },
  ];
}
