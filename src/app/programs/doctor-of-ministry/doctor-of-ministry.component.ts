import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { AngularModule, MaterialModule } from '@shared/modules';
import { AccordionComponent } from '@shared/components/accordion/accordion.component';
import { AccordionItem } from '@shared/components/accordion/accordion.interface';
import { BreadcamsComponent } from '../../shared/components/breadcams/breadcams.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';
import { TextService } from '@shared/helpers';

@Component({
  selector: 'app-doctor-of-ministry',
  imports: [
    AngularModule,
    MaterialModule,
    AccordionComponent,
    BreadcamsComponent,
    BannerComponent,
  ],
  templateUrl: './doctor-of-ministry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DoctorOfMinistryComponent {
  public flyer = './assets/webp/doctorado_divinidades.webp';
  public alt = 'Flyer World Theology University';
  title = signal<string>('');

  ngOnInit() {}

  /* DESPLEGABLE 01 */
  coursesData: AccordionItem[] = [
    {
      title: 'Cohort Support',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Through five- to eight-day intensive seminars each semester, the program builds a peer community of professionals who learn from each other, exchange experiences, and forge supportive relationships that are strengthened through discussion and study throughout the year. Through lectures and small group discussion, you will absorb and apply what you learn while forming a learning network.',
        },
      ],
    },
    {
      title: 'Online Learning',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Interactive tools, such as web conferences, audio discussions, and live chats, allow you to engage with fellow students and teachers in real time, in discussions as lively as those found in any classroom. As a Doctor of Ministry student, you will have full access to the World Theology University libraries to conduct research. Library staff offer online coaching sessions to help you gain the most from available research tools.',
        },
      ],
    },
    {
      title: 'Course of Study',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Seminars in Transformational Leadership, Contextual Analysis, and Research Methods form the core of the program, culminating in a Directed Study Project during your third year. Online cohort courses are taught by full-time World Theology University faculty. Past courses have included Global Development and Faith, Mission and Outreach, Radical Christian Spiritualities, Transformational and Situational Homiletics, Embodiment, Church Renewal, Worship in Times of Change, and Conflict Transformation.',
        },
        {
          type: 'list',
          items: ['DMin Plan of Study'],
        },
      ],
    },
    {
      title: 'Program Demographics',
      expanded: false,
      content: [
        {
          type: 'list',
          items: [
            `58 current students, with 62 graduates since 2018`,
            `Program participants represent a score of Christian denominations, Judaism, and Islam`,
            `About 2 in 3 participants are persons of color`,
            `Our program is open and affirming with regard to LGBTQ+ persons`,
          ],
        },
      ],
    },
  ];

  public faqsData: AccordionItem[] = [
    {
      title: 'Curriculum',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Coursework will be completed on a part-time basis. Part-time students can expect to complete the program in three years. All students must complete the program in no more than five years.',
        },
        {
          type: 'paragraph',
          text: 'To keep the variety of online courses fresh and provide Doctor of Ministry students with access to the widest possible variety of faculty members, the selection of courses will change from semester to semester. Course titles include:',
        },
        {
          type: 'list',
          items: [
            `Embodying the Kin(g)dom`,
            `Church Renewal`,
            `Global Development and Faith`,
            `Mission and Outreach: Foundations for Transformation`,
            `Situational Preaching and Transformation`,
            `Conflict Transformation for Ministry`,
            `Radical Christian Spiritualities`,
            `Worship in Times of Change`,
            `Sabbath: Theology and Practice`,
            `Liberated Community`,
          ],
        },
        {
          type: 'paragraph',
          text: 'The STH Bulletin contains the official description of the degree program along with admissions and financial information. The DMin Handbook contains the policies and procedures by which the degree program is governed.',
        },
      ],
    },
    {
      title: 'Application Requirements',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Applicants must possess an MDiv degree (or equivalent) with a minimum GPA of 3.3 from an institution of higher education accredited by a US agency recognized by the Council for Higher Education Accreditation or approved by a Canadian provincial quality assurance agency. Degrees from institutions outside of North America may also be accepted (subject to review by the Associate Dean for Academic Affairs). Applicants also must have completed a minimum of three years of full-time professional ministry or its equivalent. If you do not hold an MDiv degree, you may still be eligible to apply. Please review our MDiv Equivalency Application Procedures.',
        },
      ],
    },
    {
      title: 'In-Service DMin Cost',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'The DMin costs approximately $14,758 in tuition and fees over the course of three years (six semesters) of part-time study, plus travel to World Theology University for the intensive seminars. During the first year of the program, the intensive courses and cohort building last eight nights for each stay in August and January. During the second year, the intensive courses are a five-day commitment with the preceding evening optional.',
        },
        {
          type: 'paragraph',
          text: 'Students in the Doctor of Ministry in Transformational Leadership program are not eligible for financial aid from the School of Theology. However, there are resources to assist these students with academic costs:',
        },
        {
          type: 'list',
          items: [
            'Additional Scholarships: To aid students in their scholarship search, the School of Theology’s Financial Aid Office maintains a large list of outside awards and scholarships, arranged by eligibility, here.',
            'Federal Unsubsidized Loan: Students taking at least 6 credits per semester are eligible to apply for a federal unsubsidized loan. To apply, students need to submit the STH Financial Aid Application and FAFSA (with IRS data retrieval). Both applications can be found here.',
          ],
        },
      ],
    },
    {
      title: 'Technology Requirements',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Amazingly little! If your computer is a standard PC or Mac and was purchased in the last two to three years, it is probably fast enough to handle the task. If you want to be sure, read more about BU’s technical specifications for its Learning Management System from Blackboard. Blackboard works through most of the common internet browsers (Firefox, Safari, Chrome, and Internet Explorer) and doesn’t require you to download special software. For a general sense of Distance Education at BU before you decide to apply, BU has more information for prospective online students.',
        },
        {
          type: 'paragraph',
          text: 'For classes when everyone is online at the same time, we use an online meeting software that that takes only seconds to download and install. You will also need a headset and microphone combo, and Internet speed of at least five Mbps. A Student Services Coordinator is assigned to each course to help you with any technical difficulties that may arise.',
        },
      ],
    },
    {
      title: 'Online Classes',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Most of the School of Theology online courses also involve some synchronous learning, meaning everyone is online at the same time. This can involve text chatting with each other, talking and listening to each other, and/or seeing videos of each other. We think this builds community and honors our perspective on incarnational (embodied) learning.',
        },
        {
          type: 'paragraph',
          text: 'We believe that theological learning is best done in community and that philosophy carries over into online learning. While your learning will center on your own interests, you will consistently engage in dialogue with others about those interests. This is not the kind of online learning in which you are a lone ranger studying at your own pace. It is rigorous and collaborative.',
        },
      ],
    },
    {
      title: 'Online classes Intensive Courses',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'Students begin the program with one of the two annual intensives at World Theology University, in August or January. The schedule is designed to build community between cohort members before students begin the online portion of the program. During the August session, students may choose to stay on World Theology Universitys online classes and join their cohort for classes and community meals. During the January session when online classes is unavailable, we offer a group rate at a hotel within walking distance of the School of Theology.',
        },
        {
          type: 'paragraph',
          text: 'The exact dates of the intensives are discerned a few months ahead of when they will be offered. They are scheduled so active ministers only have to take one weekend away from their congregations.',
        },
        {
          type: 'paragraph',
          text: 'Next January Intensive Course Dates (for first year students)',
        },
        {
          type: 'paragraph',
          text: 'January 3-12, 2025',
        },
        {
          type: 'paragraph',
          text: 'Next August Course Dates (for second year students)',
        },
        {
          type: 'paragraph',
          text: 'First two weeks of August 2025',
        },
      ],
    },
    {
      title: 'DMin Handbook',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'DMin Handbook (updated November 2020) contains the policies and procedures by which the degree program is governed.',
        },
      ],
    },
    {
      title: 'DMin Learning Outcomes',
      expanded: false,
      content: [
        {
          type: 'paragraph',
          text: 'The DMin degree program is designed to assist religious professionals to deepen their understanding of and commitment to ministry by providing a context in which to update and refine their theological knowledge, sharpen existing skills, and learn new ones. The aim is to help students bring together their experience with additional academic studies to create a fresh synthesis of theory and practice.',
        },
        {
          type: 'paragraph',
          text: 'The primary learning outcomes of the DMin include:',
        },
        {
          type: 'list',
          items: [
            'an advanced understanding of the nature and purposes of transformational religious leadership',
            'enhanced capacity and competencies for practicing transformational religious leadership',
            'growth in one’s capacity for a robust embrace of and engagement with social and theological diversity and one’s capacity to relate across difference',
            'development of competency in contextual analysis and new knowledge about religious leadership in particular contexts',
            'the integration of knowledge, contextual analysis, and leadership skills into a theologically reflective vocational praxis',
            'continued growth in personal and spiritual maturity and in the cultivation of a personal and professional ethic',
          ],
        },
      ],
    },
  ];
}
