Actúa como un redactor técnico institucional con experiencia en documentación académica universitaria (estilo “catálogo académico / handbook”), y como analista funcional de interfaces Angular.

Alcance estricto (MUY IMPORTANTE)

Debes analizar ÚNICAMENTE la carpeta:

src/app/programs/bachelor-of-nursing/es-bachelor-of-nursing

No revises, no cites y no uses información de ninguna otra carpeta del proyecto.

Archivo destino

Debes crear o reescribir completamente el archivo:

src/app/programs/bachelor-of-nursing/es-bachelor-of-nursing/documentation.md

El resultado debe ser entendible para autoridades académicas (decano, comité curricular) que NO son programadores.
Evita jerga técnica (por ejemplo: “standalone component”, “MatDialog”, “OnPush”, “signal”, “imports”, “router”, etc.).
Si necesitas mencionarlo, hazlo en un Anexo Técnico al final y con lenguaje simple.

OBJETIVO

Generar documentación institucional completa del programa:

Bachelor of Clinical Mentoring (Versión en Español)

Basándote exclusivamente en recall real del contenido existente en los archivos de esta carpeta, documenta:

Qué comunica la página del programa (secciones, textos, objetivos, requisitos, beneficios, etc.).

Plan de estudios / cursos: listado total, códigos, nombres, créditos (si existen), descripciones y cualquier dato curricular disponible.

Cómo se presentan los cursos (si hay “Ver más…”, ficha detallada, ventanas/modales, etc.).

Cualquier información relevante para revisión universitaria (modalidad online, requisitos de admisión, requisitos de graduación, total de créditos del programa, etc.), solo si aparece en esta carpeta.

PASOS OBLIGATORIOS
1) Inventario de archivos

En la documentación, incluye un apartado “Inventario de Archivos” donde listes todos los archivos encontrados en la carpeta y su propósito en lenguaje no técnico. Ejemplo:

es-bachelor-of-clinical-mentoring.component.html: Contiene el texto institucional y secciones visibles al usuario.

es-courses-...: Muestra el listado de cursos.

Componentes por curso: contienen la ficha detallada del curso.

Este inventario debe cubrir TODOS los archivos de la carpeta.

2) Extraer estructura académica (SIN inventar)

A partir del contenido real de los HTML/TS/datos internos:

Identifica las secciones de la página (por pestañas o bloques).

Extrae:

Descripción del programa

Perfil del estudiante

Objetivos formativos

Competencias / resultados de aprendizaje (si existieran)

Requisitos de admisión (si existieran)

Requisitos de graduación (si existieran)

Modalidad (online/presencial/híbrida) solo si está indicado

Total de créditos del programa (si aparece)

Duración, ciclo, etc. (si aparece)

No inventes información. Si falta un dato, escríbelo como:

“No se especifica en esta versión web.”

3) Cursos y plan de estudios: tabla completa

Debes localizar la fuente real del listado de cursos (puede estar en HTML, en constantes, en arrays o en componentes de curso).

Crear una sección Plan de estudios con:

3.1 Tabla resumen de cursos (obligatoria)

En Markdown, con columnas (usa N/D si no existe):

Código del curso

Nombre del curso

Créditos

Horas (si existe)

Descripción breve (1–2 líneas, basada en el texto real)

Enlace/Referencia interna (por ejemplo: “Ficha detallada disponible” si existe el detalle)

3.2 Fichas académicas por curso (si existen)

Si la carpeta tiene componentes/archivos por curso (ej. un modal o vista detallada):

Para cada curso incluye una ficha estructurada con:

Código y nombre

Descripción

Objetivos del curso

Temas principales (si está)

Metodología (si está)

Evaluación (si está)

Importancia / aplicación (si está)

Repite esto para TODOS los cursos que existan en la carpeta.

4) Experiencia de lectura en la página (cómo se presenta)

Describe, con lenguaje institucional:

Qué ve el usuario al entrar a la página.

Cómo navega por secciones (pestañas/bloques).

Cómo consulta el detalle de cursos (por ejemplo “Ver más…” abre una ficha).

5) Recomendaciones para mejora institucional (no técnicas)

Incluye una sección:

“Recomendaciones para fortalecimiento del material institucional”

Con sugerencias como:

Incluir créditos por curso si no aparecen.

Incluir carga horaria si falta.

Incluir resultados de aprendizaje medibles.

Incluir mapa curricular por áreas.

Incluir criterios de evaluación global del programa.

Incluir descripción de prácticas/pasantías (si aplica) solo como recomendación, no como hecho.

FORMATO OBLIGATORIO DE documentation.md

El documento debe quedar con estas secciones mínimas:

Resumen institucional del programa

Modalidad y perfil del estudiante

Objetivos formativos del programa

Estructura de la página web del programa (secciones)

Plan de estudios (listado total de cursos + tabla)

Fichas de cursos (si existen)

Requisitos de admisión y graduación (si aparecen)

Beneficios del programa (si aparecen)

Observaciones y vacíos de información (si los hay)

Recomendaciones de mejora institucional

Anexo técnico (opcional y breve)

Solo al final, y solo si es necesario para mantenimiento interno.

REGLAS DE REDACCIÓN (CRÍTICAS)

Español formal, claro, académico.

Enfocado en lectores NO técnicos (decano / comité).

Sin jerga de programación.

No inventar datos.

Si un dato no existe: marcarlo como “No se especifica en esta versión web.”

Si hay contradicciones en el contenido: señalarlas con neutralidad.

RESULTADO FINAL

Debes entregar el archivo:

src/app/programs/bachelor-of-nursing/es-bachelor-of-nursing/documentation.md

Completamente redactado y basado solo en lo encontrado dentro de esta carpeta.