# Documentación del Módulo: Licenciatura en Teología (Versión Español)

## 1. Descripción General del Módulo

- Vista dedicada a la Licenciatura en Teología (Bachelor of Theology) en español, accesible en la ruta Angular `#/programs/bacher-teology`.
- Presenta de forma institucional el programa académico: propósito, requisitos, beneficios, plan de estudios y listado detallado de cursos.
- Implementada como página 100% estática dentro del proyecto Angular, optimizada para carga rápida y coherencia con la identidad de World Academy Theology.

## 2. Estructura de Componentes Angular

- **es-bacher-of-teology.component.ts**
  - Componente principal standalone. Importa `AngularModule`, `MaterialModule`, `BannerComponent` y el componente de cursos.
  - Carga el banner principal (`flyer` y `alt`) y muestra el contenido en pestañas (`mat-tab-group`).
  - Usa `TextService` para propagar el título de página mediante un `signal`.
- **es-bacher-of-teology.component.html**
  - Hero con `<app-banner>` y un `mat-tab-group` con las secciones: Presentación, Información, Objetivos, Cursos (contiene el listado y modales), Resumen, Requisitos y Beneficios.
  - Todo el contenido académico y descriptivo está embebido en HTML.
- **es-curso-bacher-of-theology.component.ts / .html**
  - Componente standalone para el listado de cursos dentro de la pestaña “Cursos”.
  - Usa `MatDialog` + `stylesDialog` para abrir cada ficha de curso en modal.
  - `openDialog` enruta cada código a su componente de detalle.
- **Componentes de curso (33 modales)**
  - Un componente por curso (por ejemplo, `es-100-batheithe.component.ts/html`).
  - Extienden `GlobalsInjects`, usan `dialogImports`, y definen `flyer`/`alt` para su propio banner (en algunos templates el banner está comentado pero se mantiene el contenido principal).
  - Estructura de contenido homogénea: título con código y nombre, línea divisoria, descripción inicial, secciones de Objetivos, Temas Principales, Metodología, Evaluación e Importancia.
  - Todos los componentes usan `ChangeDetectionStrategy.OnPush`.

**Relación padre-hijo**

- `EsBacherOfTeologyComponent` es el contenedor de la vista.
- `EsCursoBacherOfTheologyComponent` se renderiza dentro de la pestaña “Cursos”.
- Cada modal de curso es instanciado desde `EsCursoBacherOfTheologyComponent` vía `MatDialog`.

## 3. Flujo de Usuario e Interfaz (UI)

- Al ingresar a `#/programs/bacher-teology`:
  - Se muestra el banner de la Licenciatura en Teología en español.
  - Se despliega un `mat-tab-group` que permite navegar sin recargar la página.
- **Pestañas y contenido**
  - **Presentación**: descripción institucional del programa, modalidad 100% en línea, oportunidades profesionales y habilidades clave.
  - **Información**: público objetivo, requisitos de admisión (transcripciones, CV, declaración, cartas, tarifa) y criterios de selección.
  - **Objetivos**: lista detallada de objetivos formativos (interpretación bíblica, integración teología-práctica, liderazgo, justicia, ética, investigación, crecimiento espiritual).
  - **Cursos**: listado resumido de 33 asignaturas con botón “Ver más...” que abre la ficha completa en un modal.
  - **Resumen**: síntesis del programa (120 créditos totales, asignaturas clave, opción de tesis o examen comprensivo, flexibilidad online).
  - **Requisitos**: detalla requisitos de ingreso y permanencia (120 créditos, promedio mínimo, tesis o examen, plazo máximo de cinco años).
  - **Beneficios**: 10 apartados sobre flexibilidad online, personalización vocacional, equilibrio teoría-práctica, acompañamiento espiritual, liderazgo en contextos diversos, preparación multicultural, requisitos de ordenación, mentoría, desarrollo interdisciplinario y aprendizaje continuo.
- **Cursos y modales**
  - Cada curso se presenta con un párrafo breve y un botón.
  - Al hacer clic se abre un `MatDialog` configurado con `stylesDialog`, mostrando la ficha completa (incluye objetivos, temario, metodología y evaluación).
  - Varias fichas incluyen banner propio; otras omiten el banner pero conservan la misma estructura textual.

## 4. Estructura de Datos del Programa

- La información es **estática y declarativa** en las plantillas HTML; no hay servicios ni modelos específicos en esta carpeta.
- Campos recurrentes en cada modal: código y título (en `<h2>`), descripción inicial, listas de objetivos y temas, secciones de metodología y evaluación, cierre con la importancia del curso.
- `flyer`/`alt` se definen en cada componente de curso para los banners (rutas en `./assets/webp/bacher-teologia/es/...`).
- `stylesDialog` (desde `@shared/const/styles-dialog`) centraliza la configuración visual de los modales.
- `dialogImports` agrupa los módulos requeridos por los diálogos (Material y utilidades compartidas).
- `TextService` establece el título principal de la página; `AngularModule` y `MaterialModule` proveen directivas comunes y Angular Material en el componente raíz.

## 5. Listado Completo de Cursos y Créditos

> No se definen créditos ni horas por curso en el código; solo se menciona el total del programa (120 créditos) en la pestaña “Resumen”. Se indican N/D cuando no está declarado.

| Código           | Curso                              | Créditos | Horas | Descripción breve                                                                | Objetivo principal                                                                  |
| ---------------- | ---------------------------------- | -------- | ----- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| BATHE-ITHE-100   | Introducción a la Teología         | N/D      | N/D   | Panorama de disciplinas, métodos y fundamentos del quehacer teológico.           | Entender bases, relación fe-razón y aplicar teología de forma crítica y contextual. |
| BATHE-ONT-200    | Antiguo y Nuevo Testamento         | N/D      | N/D   | Visión general de ambos Testamentos, contextos, géneros y mensajes.              | Leer e interpretar la Biblia con comprensión histórica y aplicación actual.         |
| BATHE-HC-300     | Historia del Cristianismo          | N/D      | N/D   | Recorrido histórico del cristianismo, concilios, figuras y reformas.             | Analizar la evolución de la iglesia y su impacto en la sociedad.                    |
| BATHE-ST-400     | Teología Sistemática               | N/D      | N/D   | Doctrinas principales (Dios, Cristo, Espíritu, salvación, iglesia, escatología). | Integrar doctrinas en un marco teológico coherente y aplicable.                     |
| BATHE-BH-500     | Hermenéutica Bíblica               | N/D      | N/D   | Principios y métodos de interpretación bíblica.                                  | Interpretar textos considerando contexto histórico-literario con rigor.             |
| BATHE-CE-600     | Ética Cristiana                    | N/D      | N/D   | Principios morales bíblicos sobre justicia, dignidad y decisiones éticas.        | Formar criterio ético cristiano para responder a dilemas contemporáneos.            |
| BATHE-PL-700     | Liderazgo Pastoral                 | N/D      | N/D   | Fundamentos bíblicos y prácticos del liderazgo en la iglesia.                    | Desarrollar líderes íntegros con visión, servicio y gestión comunitaria.            |
| BATHE-MM-800     | Ministerio y Misión                | N/D      | N/D   | Naturaleza y práctica del ministerio cristiano y la misión integral.             | Definir identidad y estrategias ministeriales contextualizadas.                     |
| BATHE-PC-900     | Consejería Pastoral                | N/D      | N/D   | Fundamentos y métodos de acompañamiento espiritual y emocional.                  | Capacitar en escucha, empatía y apoyo en crisis desde la fe.                        |
| BATHE-CT-1000    | Teología Contextual                | N/D      | N/D   | Integración de la teología con realidades culturales y sociopolíticas.           | Formular teología pertinente y transformadora en contextos específicos.             |
| BATHE-ESC-1100   | Escatología                        | N/D      | N/D   | Doctrina de los tiempos finales, retorno de Cristo y esperanza eterna.           | Comprender y enseñar la esperanza escatológica con perspectiva pastoral.            |
| BATHE-APO-1200   | Apologética                        | N/D      | N/D   | Defensa racional de la fe ante objeciones filosóficas, científicas y culturales. | Argumentar la fe de manera respetuosa, razonada y contextual.                       |
| BATHE-CE-1300    | Educación Cristiana                | N/D      | N/D   | Principios pedagógicos para la enseñanza bíblica en distintos contextos.         | Diseñar procesos educativos cristianos efectivos y formativos.                      |
| BATHE-PS-1400    | Espiritualidad Práctica            | N/D      | N/D   | Disciplinas espirituales (oración, ayuno, devoción) para la vida diaria.         | Integrar hábitos espirituales sostenibles en la vida personal y comunitaria.        |
| BATHE-THER-1500  | Investigación Teológica            | N/D      | N/D   | Metodologías para investigación con rigor académico y fidelidad bíblica.         | Desarrollar proyectos de investigación teológica sólida y estructurada.             |
| BATHE-CE-1600    | Examen Comprensivo                 | N/D      | N/D   | Evaluación integradora de conocimientos teológicos del programa.                 | Demostrar síntesis y aplicación crítica de todo el plan de estudios.                |
| BATHE-THE-1700   | Tesis de Licenciatura              | N/D      | N/D   | Proyecto final de investigación teológica.                                       | Elaborar una tesis rigurosa que aporte al campo teológico.                          |
| BATHE-ECS-1800   | Cristianismo Primitivo             | N/D      | N/D   | Orígenes de la Iglesia, comunidades iniciales y expansión.                       | Comprender raíces históricas y doctrinales del cristianismo temprano.               |
| BATHE-THEC-1900  | Teología de la Cultura             | N/D      | N/D   | Relación entre fe y cultura contemporánea.                                       | Discernir y dialogar críticamente con expresiones culturales desde la fe.           |
| BATHE-THEA-2000  | Antropología Teológica             | N/D      | N/D   | Naturaleza humana: creación, imagen de Dios, pecado y redención.                 | Articular una visión cristiana integral de la persona y su destino.                 |
| BATHE-THEHS-2100 | Teología del Espíritu Santo        | N/D      | N/D   | Persona y obra del Espíritu en Biblia, Iglesia y vida del creyente.              | Comprender el ministerio del Espíritu y su impacto en misión y santificación.       |
| BATHE-FM-2200    | Ministerio Familiar                | N/D      | N/D   | Teología y práctica para acompañar y fortalecer familias.                        | Diseñar programas pastorales que promuevan crecimiento espiritual y relacional.     |
| BATHE-PTHE-2300  | Teología Pastoral                  | N/D      | N/D   | Aplicación de la teología al cuidado y liderazgo comunitario.                    | Guiar pastoralmente con fundamento bíblico y sensibilidad ética.                    |
| BATHE-WM-2400    | Ministerios de Adoración           | N/D      | N/D   | Teología y práctica de la adoración (música, liturgia, devoción).                | Liderar adoración bíblica, culturalmente relevante y edificante.                    |
| BATHE-THEOM-2500 | Teología del Ministerio            | N/D      | N/D   | Naturaleza, propósito y funciones del ministerio cristiano.                      | Enmarcar el ejercicio ministerial en fundamentos bíblicos y estratégicos.           |
| BATHE-HRSJ-2600  | Derechos Humanos y Justicia Social | N/D      | N/D   | Dignidad humana y justicia desde perspectiva bíblica.                            | Impulsar defensa de derechos y acción profética en la sociedad.                     |
| BATHE-SPW-2700   | Trabajo Social y Pastoral          | N/D      | N/D   | Integración de trabajo social con cuidado pastoral.                              | Servir a poblaciones vulnerables con ética, compasión y enfoque integral.           |
| BATHE-SOR-2800   | Sociología de la Religión          | N/D      | N/D   | Análisis sociológico de la religión y su rol en la sociedad.                     | Evaluar fenómenos religiosos en contextos globales y plurales.                      |
| BATHE-CCS-2900   | Estudios Cristianos Contemporáneos | N/D      | N/D   | Tendencias y desafíos actuales del cristianismo.                                 | Desarrollar respuesta crítica e informada al cristianismo del siglo XXI.            |
| BATHE-TGM-3000   | Teología de la Misión Global       | N/D      | N/D   | Fundamentos y práctica de la misión global e intercultural.                      | Preparar para participación estratégica en misión y desarrollo comunitario.         |
| BATHE-CP-3100    | Psicología Cristiana               | N/D      | N/D   | Integración de psicología y fe para apoyo integral.                              | Aplicar principios psicológicos y bíblicos al acompañamiento pastoral.              |
| BATHE-CC-3200    | Consejería Cristiana en Crisis     | N/D      | N/D   | Herramientas para acompañar crisis emocionales y espirituales.                   | Brindar apoyo efectivo en trauma, duelo y conflicto desde la fe.                    |
| BATHE-IRS-3300   | Estudios Interreligiosos           | N/D      | N/D   | Estudio comparado de religiones y diálogo interreligioso.                        | Fomentar comprensión y testimonio respetuoso en contextos plurales.                 |

## 6. Arquitectura Interna del Módulo

- Todos los componentes son standalone y usan `ChangeDetectionStrategy.OnPush` para optimizar el rendimiento.
- La carpeta se organiza por curso (`es-XXXX-<código>/`) más el componente raíz y el listado de cursos.
- La vista se integra al router general (ruta `#/programs/bacher-teology`) a través del componente principal `EsBacherOfTeologyComponent`.
- Dependencias clave: `@angular/material` (tabs, botones, diálogos), `BannerComponent` (hero y banners de modales), `stylesDialog` (configuración consistente de diálogos) y `dialogImports` (módulos compartidos para los modales).
- No hay servicios locales ni modelos; la data se almacena en las plantillas HTML, lo que simplifica la carga pero limita la reutilización y la internacionalización.

## 7. Consideraciones para Mantenimiento y Extensión

- **Agregar un nuevo curso**
  1. Crear un nuevo componente modal (standalone) siguiendo la convención `es-<código>-<slug>` con título, secciones y, opcionalmente, banner.
  2. Registrar el componente en `es-curso-bacher-of-theology.component.ts` (import y caso en `openDialog`) y añadir su resumen + botón en la plantilla `.html` del listado.
  3. Incluir recursos gráficos en `./assets/webp/bacher-teologia/es/` si se requiere banner.
  4. Verificar coherencia de `stylesDialog` y `dialogImports`.
- **Actualizar textos**
  - Los textos están en las plantillas HTML; editar directamente respetando la estructura de secciones.
  - Mantener coherencia entre el resumen del listado y la ficha detallada del curso.
- **Posibles mejoras**
  - Centralizar datos de cursos en una constante o JSON y generar las fichas dinámicamente (reduce duplicación y errores en `openDialog`).
  - Añadir internacionalización (i18n) para reutilizar componentes en otros idiomas con el mismo dataset.
  - Incorporar modelos/interfaces para los cursos (código, título, descripción, créditos, objetivos) y cargar el contenido desde un servicio.
  - Añadir métricas (créditos/horas) para cada curso y reflejarlas en la UI y en el resumen del programa.
  - Reactivar banners en los modales que los tienen comentados para uniformar la experiencia visual.

## 8. Resumen Final

- La página presenta integralmente la Licenciatura en Teología en español, combinando descripción institucional, requisitos, beneficios y un catálogo completo de 33 cursos.
- La arquitectura es simple y declarativa (contenido estático en plantillas, modales por curso, tabs para navegación), priorizando claridad y rapidez de despliegue.
- El módulo contribuye a la comunicación institucional del programa, ofreciendo a los candidatos una visión clara de los objetivos formativos, la estructura académica (120 créditos totales) y el detalle temático de cada asignatura dentro de la ruta `#/programs/bacher-teology`.
