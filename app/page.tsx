import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

const sectionLinks = [
  "1. Introducción a la IA",
  "2. Qué es un prompt",
  "3. Cómo escribir buenos prompts",
  "4. Refinar prompts con el mismo LLM",
  "5. Qué es Gemini",
  "6. Features de Gemini",
  "7. Gems en Gemini",
  "8. Casos de uso de Gemini",
  "9. Prompts para Gemini",
  "10. Comparación de prompts",
  "11. Qué es NotebookLM",
  "12. Features de NotebookLM",
  "13. Casos de uso de NotebookLM",
  "14. Prompts para NotebookLM",
  "15. Gemini vs NotebookLM",
  "16. Actividades prácticas",
  "17. Buenas prácticas de prompting",
  "18. Errores comunes al usar IA",
  "19. Novedades recientes",
  "20. Set de prompts",
  "21. Prompt engineering avanzado",
  "22. Plantillas de prompts",
]

const workshopHighlights = [
  { value: "22", label: "módulos estructurados" },
  { value: "7", label: "bloques de prompts aplicables" },
  { value: "5", label: "actividades listas para facilitar" },
]

const presentationChecklist = [
  "Arranca con una demostración breve para captar atención desde el minuto uno.",
  "Mantén una dinámica de práctica en cada bloque para consolidar el aprendizaje.",
  "Alterna momentos de explicación, trabajo colaborativo y retroalimentación guiada.",
  "Cierra cada tema con una evidencia concreta: resumen, tabla, quiz o mini presentación.",
]

const gemExamples = [
  {
    title: "Gem tutor de matemáticas",
    objective: "Explicar temas paso a paso con lenguaje de preparatoria y mini ejercicios.",
    files: "Guía de álgebra de la escuela + lista de errores frecuentes.",
    goodFor: "Repasar antes de exámenes y resolver dudas rápidas.",
  },
  {
    title: "Gem generador de exámenes",
    objective: "Crear bancos de preguntas por dificultad y formato (opción múltiple, abiertas).",
    files: "Temario oficial + ejemplos de reactivos previos.",
    goodFor: "Practicar evaluaciones con retroalimentación.",
  },
  {
    title: "Gem asistente de estudio",
    objective: "Convertir apuntes en planes de estudio diarios, flashcards y checklists.",
    files: "Apuntes de clase + calendario académico.",
    goodFor: "Organización semanal de materias.",
  },
  {
    title: "Gem creador de presentaciones",
    objective: "Generar guiones de exposición, diapositivas sugeridas y notas del presentador.",
    files: "Rúbrica de exposición + lecturas del proyecto.",
    goodFor: "Preparar exposiciones con estructura profesional.",
  },
]

const geminiPromptExamples = [
  {
    category: "Estudio",
    prompt:
      "Actúa como tutor de biología para preparatoria. Explícame la fotosíntesis en tres niveles: básico, intermedio y examen. Incluye una analogía cotidiana y 5 preguntas de repaso.",
  },
  {
    category: "Resúmenes",
    prompt:
      "Resume este capítulo en 12 viñetas. Después crea una tabla con: concepto, definición simple y ejemplo real para un estudiante de 16 años.",
  },
  {
    category: "Explicaciones",
    prompt:
      "Explícame la Revolución Industrial como si fuera una historia corta de 5 minutos, pero sin perder precisión histórica. Cierra con causa-efecto en formato de lista.",
  },
  {
    category: "Presentaciones",
    prompt:
      "Ayúdame a construir una presentación de 8 diapositivas sobre cambio climático para preparatoria: objetivo por diapositiva, idea visual y guion oral de 30 segundos.",
  },
  {
    category: "Investigación",
    prompt:
      "Usa Deep Research para investigar energías renovables en México. Entrega: resumen ejecutivo, datos clave, fuentes y recomendaciones para proyecto escolar.",
  },
  {
    category: "Creatividad",
    prompt:
      "Escribe 3 ideas de campaña escolar para reducir basura. Cada idea debe incluir slogan, plan de acción de 1 semana y forma de medir impacto.",
  },
]

const notebookPromptExamples = [
  "Con base en mis fuentes, crea una guía de estudio de química con secciones cortas, ejemplos y 10 preguntas de autoevaluación.",
  "Genera un quiz de 15 preguntas mixtas (fácil, medio, difícil) usando únicamente las fuentes cargadas. Incluye explicación de cada respuesta.",
  "Haz un mapa mental de la Revolución Mexicana a partir de mis documentos y señala relaciones entre personajes, eventos y consecuencias.",
  "Crea flashcards para memorizar fórmulas de física. Formato: pregunta al frente, respuesta y ejemplo atrás.",
  "Genera un audio tipo podcast de 8 minutos para repasar el tema y luego dame 5 preguntas de discusión.",
  "Construye una tabla comparativa entre dos teorías vistas en clase solo con evidencia de las fuentes.",
]

const promptSet = [
  {
    category: "Estudio",
    prompts: [
      "Diseña un plan de estudio de 7 días para [materia], sesiones de 40 minutos, con objetivo diario y mini prueba final.",
      "Explícame [tema] con palabras sencillas, luego con nivel examen, y finalmente dame un truco de memorización.",
      "Convierte estos apuntes en una guía de repaso de 1 página con lo esencial.",
    ],
  },
  {
    category: "Investigación",
    prompts: [
      "Investiga [tema] con enfoque escolar: definición, contexto, datos, controversias y conclusión propia.",
      "Dame 5 fuentes confiables para [tema] y explica por qué son confiables.",
      "Resume tendencias recientes de [tema] en formato de tabla (tendencia, evidencia, posible impacto).",
    ],
  },
  {
    category: "Resúmenes",
    prompts: [
      "Resume este texto en 150 palabras y añade 5 conceptos clave.",
      "Haz un resumen por secciones y termina con un glosario de 10 términos.",
      "Convierte este capítulo largo en una lista de ideas memorables para examen.",
    ],
  },
  {
    category: "Presentaciones",
    prompts: [
      "Crea un guion de exposición de 5 minutos sobre [tema], con apertura, desarrollo y cierre.",
      "Genera estructura de 10 diapositivas con mensaje principal y visual sugerido por diapositiva.",
      "Convierte este texto en notas para presentador con tono claro y juvenil.",
    ],
  },
  {
    category: "Videos",
    prompts: [
      "Escribe storyboard de video educativo de 60 segundos sobre [tema], con narración y escenas.",
      "Dame 3 ideas de video para explicar [tema] a estudiantes de 15 años.",
      "Transforma este resumen en guion de video corto para redes escolares.",
    ],
  },
  {
    category: "Audios",
    prompts: [
      "Convierte este contenido en un episodio de audio de 6 minutos con introducción, desarrollo y cierre.",
      "Genera una versión tipo debate de audio con dos posturas sobre [tema].",
      "Crea un audio-resumen rápido para repasar antes del examen en 3 minutos.",
    ],
  },
  {
    category: "Exámenes",
    prompts: [
      "Crea un examen diagnóstico de [materia] con 20 preguntas y rúbrica.",
      "Genera 10 reactivos de opción múltiple con distractores plausibles y explicación.",
      "Diseña un examen mixto (5 opción múltiple, 5 abiertas, 1 caso práctico).",
    ],
  },
]

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <Card className="border-border/70 bg-card/95 shadow-sm transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl tracking-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base leading-relaxed">
          {children}
        </CardContent>
      </Card>
    </section>
  )
}

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        <header className="relative mb-8 overflow-hidden rounded-2xl border border-border/70 bg-card/95 p-6 shadow-lg md:mb-12 md:p-10">
          <div className="pointer-events-none absolute -top-20 right-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />

          <Badge variant="secondary" className="mb-4">
            Programa integral listo para presentación
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Taller profesional de IA educativa con Gemini y NotebookLM
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Material didáctico completo para impartir una experiencia formativa clara, dinámica y
            moderna. Incluye fundamentos, prompting, prácticas guiadas, Gems en Gemini, NotebookLM,
            novedades recientes y plantillas reutilizables en formato listo para ejecución.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Versión final</Badge>
            <Badge variant="outline">Formato práctico y aplicado</Badge>
            <Badge variant="outline">Diseño orientado a presentación</Badge>
            <Badge variant="outline">Contenido actualizado</Badge>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#seccion-1">Iniciar recorrido del taller</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#seccion-22">Ir a plantillas reutilizables</a>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {workshopHighlights.map((item) => (
              <Card key={item.label} className="border-border/60 bg-background/70">
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold tracking-tight">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </header>

        <nav className="mb-10 rounded-2xl border border-border/70 bg-card/90 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/80">
          <h2 className="text-xl font-semibold mb-2">Mapa del taller (22 secciones)</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Navegación rápida para conducir la sesión con ritmo y estructura.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sectionLinks.map((link, index) => (
              <a
                key={link}
                href={`#seccion-${index + 1}`}
                className="rounded-lg bg-muted/60 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>

        <div className="space-y-8">
          <Section id="seccion-1" title="SECCIÓN 1 — Introducción a la Inteligencia Artificial">
            <p>
              <strong>¿Qué es IA?</strong> La Inteligencia Artificial (IA) es un conjunto de tecnologías que
              permiten que una computadora realice tareas que antes requerían inteligencia humana, como
              comprender texto, reconocer imágenes, resumir información o proponer ideas.
            </p>
            <p>
              <strong>¿Qué es Machine Learning?</strong> Es una rama de la IA donde los sistemas aprenden
              patrones a partir de datos. En lugar de programar cada regla manualmente, entrenamos modelos
              para que detecten relaciones y puedan predecir o generar resultados.
            </p>
            <p>
              <strong>¿Qué es un LLM?</strong> Un Large Language Model (modelo grande de lenguaje) es un
              tipo de IA entrenado con gran cantidad de texto para entender y generar lenguaje natural.
              Gemini y NotebookLM utilizan modelos de este tipo para ayudarte a estudiar, investigar y crear.
            </p>
            <p>
              <strong>¿Cómo funciona un LLM (versión preparatoria)?</strong> Imagina un estudiante que leyó
              millones de libros y artículos. Cuando le haces una pregunta, no recuerda una sola página,
              sino que combina patrones para construir una respuesta probable y útil. Por eso hay que
              verificar información y dar instrucciones claras.
            </p>
          </Section>

          <Section id="seccion-2" title="SECCIÓN 2 — Qué es un prompt">
            <p>
              Un <strong>prompt</strong> es la instrucción que le das a una IA para obtener un resultado.
              Es como dar una consigna en clase: mientras más clara sea, mejor será la respuesta.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sirve para pedir explicaciones, resúmenes, ejercicios, ideas o productos completos.</li>
              <li>Importa porque guía la calidad, el nivel y el formato de la respuesta.</li>
              <li>Un prompt débil produce respuestas vagas; uno bien diseñado produce resultados útiles.</li>
            </ul>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ejemplo débil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm">"Explícame historia."</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ejemplo mejorado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm">
                    "Explícame la Revolución Mexicana para preparatoria en 5 párrafos, con causas,
                    etapas y consecuencias, e incluye 3 preguntas para estudiar."
                  </p>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="seccion-3" title="SECCIÓN 3 — Cómo escribir buenos prompts">
            <p>
              Regla práctica: un buen prompt tiene <strong>contexto + objetivo + formato + audiencia + restricciones</strong>.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estructura recomendada</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Rol: "Actúa como tutor..."</li>
                    <li>Objetivo: "Quiero entender..."</li>
                    <li>Audiencia: "Para estudiantes de 16 años"</li>
                    <li>Formato: "Entrega en tabla, lista o pasos"</li>
                    <li>Límites: "Máximo 300 palabras / incluye 3 ejemplos"</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Errores comunes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ser demasiado general.</li>
                    <li>No indicar nivel académico.</li>
                    <li>No pedir formato de salida.</li>
                    <li>No solicitar fuentes cuando se investiga.</li>
                    <li>No iterar ni mejorar el prompt.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p>
              <strong>Ejemplo:</strong> "Explícame el teorema de Pitágoras para secundaria con dibujo ASCII,
              2 ejercicios resueltos y 3 para practicar."
            </p>
          </Section>

          <Section
            id="seccion-4"
            title="SECCIÓN 4 — Cómo usar el mismo LLM para mejorar tus prompts (obligatoria)"
          >
            <p>
              Esta es una habilidad central del taller: <strong>usar el modelo para mejorar tus propios prompts</strong>.
              No necesitas escribir el prompt perfecto desde el inicio.
            </p>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Concepto: Prompt Iteration Loop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-sm whitespace-pre-wrap">
                  Usuario escribe prompt{"\n"}↓{"\n"}
                  LLM responde{"\n"}↓{"\n"}
                  Usuario pide mejora{"\n"}↓{"\n"}
                  LLM refina el prompt{"\n"}↓{"\n"}
                  Usuario ejecuta el nuevo prompt
                </p>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Prompt original</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  Explícame la fotosíntesis.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Prompt de refinamiento</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  Mejora este prompt para que genere una explicación clara para estudiantes de
                  preparatoria e incluya ejemplos y analogías.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Resultado optimizado</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  Explica la fotosíntesis para estudiantes de preparatoria en 4 secciones:
                  definición, proceso paso a paso, analogía cotidiana y 3 preguntas de repaso.
                </CardContent>
              </Card>
            </div>
            <p className="font-semibold">
              Regla pedagógica del taller: No escribas el prompt perfecto. Haz que el LLM lo mejore.
            </p>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Plantillas de refinamiento rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 font-mono text-sm">
                <p>
                  Mejora este prompt para que sea claro, específico, con ejemplos y adecuado para
                  estudiantes de preparatoria: [pega aquí tu prompt].
                </p>
                <p>
                  Convierte este prompt en una versión con pasos, formato de salida y criterios de calidad:
                  [prompt actual].
                </p>
                <p>
                  Optimiza este prompt para reducir ambigüedad y pedir evidencias/fuentes:
                  [prompt actual].
                </p>
              </CardContent>
            </Card>
          </Section>

          <Section id="seccion-5" title="SECCIÓN 5 — Gemini: qué es, cómo funciona y para qué sirve">
            <p>
              Gemini es un asistente de IA multimodal que puede trabajar con texto, imágenes, archivos
              y tareas de investigación. Se utiliza para aprender, planear proyectos, resumir contenido,
              crear ideas y producir materiales educativos.
            </p>
            <p>
              En contexto escolar, Gemini es útil como <strong>co-tutor</strong>, <strong>co-editor</strong> y
              <strong> asistente de productividad</strong>. No reemplaza al estudiante: lo ayuda a trabajar mejor,
              más rápido y con mayor claridad.
            </p>
            <p>
              Cuando se usa bien, Gemini permite iterar: borrador inicial → mejora guiada → versión final.
              Ese flujo desarrolla pensamiento crítico y habilidades de comunicación.
            </p>
          </Section>

          <Section id="seccion-6" title="SECCIÓN 6 — Features de Gemini">
            <p>Funciones clave a dominar en taller:</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Chat", "Conversación para dudas, ideas y explicaciones paso a paso."],
                ["Deep Research", "Investigación profunda que sintetiza múltiples fuentes web."],
                ["File analysis", "Análisis de PDFs, documentos e imágenes para extraer ideas clave."],
                ["Image generation", "Creación de imágenes para materiales visuales escolares."],
                ["Video generation", "Generación de contenido audiovisual según disponibilidad de plan/región."],
                ["Long context", "Capacidad de trabajar con grandes volúmenes de texto en una sola conversación."],
                ["Memory", "Recordar preferencias o contexto para respuestas más personalizadas."],
                ["Notebooks", "Uso de cuadernos/espacios para organizar trabajo temático."],
                ["Canvas", "Entorno para construir y editar contenido de forma iterativa."],
                ["Integrations", "Conexión con apps/servicios para flujo de trabajo más completo."],
                ["Gems", "Asistentes personalizados con instrucciones reutilizables."],
              ].map(([feature, desc]) => (
                <Card key={feature}>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature}</CardTitle>
                  </CardHeader>
                  <CardContent>{desc}</CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="seccion-7" title="SECCIÓN 7 — Gems en Gemini (obligatoria)">
            <p>
              <strong>Qué son los Gems:</strong> asistentes personalizados dentro de Gemini que guardan
              instrucciones detalladas para tareas repetitivas, con respuestas consistentes sin reescribir
              el prompt desde cero.
            </p>
            <p>
              En otras palabras, un Gem es: <strong>especializado, configurable, reutilizable, entrenado por
              instrucciones y personalizable con archivos</strong>.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {gemExamples.map((gem) => (
                <Card key={gem.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{gem.title}</CardTitle>
                    <CardDescription>{gem.objective}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>
                      <strong>Archivos recomendados:</strong> {gem.files}
                    </p>
                    <p>
                      <strong>Úsalo para:</strong> {gem.goodFor}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cómo crear un Gem (paso a paso)</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Definir el objetivo exacto del Gem (por ejemplo: "tutor de física").</li>
                  <li>Escribir instrucciones estables (tono, nivel, formato, límites).</li>
                  <li>Subir archivos de referencia (temario, rúbrica, ejemplos).</li>
                  <li>Probar con 3 preguntas reales y ajustar instrucciones.</li>
                  <li>Guardar, nombrar claramente y reutilizar en nuevas sesiones.</li>
                </ol>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cuándo usar un Gem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Tareas repetitivas (resúmenes semanales, quizzes, guiones).</li>
                    <li>Cuando quieres consistencia en estilo y formato.</li>
                    <li>Cuando necesitas rapidez sin perder calidad.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cuándo NO usar un Gem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cuando la tarea es única y muy experimental.</li>
                    <li>Cuando necesitas respuestas abiertas sin marco previo.</li>
                    <li>Cuando aún no tienes claro el objetivo de la tarea.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p>
              Los Gems también se pueden <strong>compartir, reutilizar, modificar e integrar en Workspace</strong>,
              funcionando como chatbots especializados para coaching, redacción y análisis documental.
            </p>
          </Section>

          <Section id="seccion-8" title="SECCIÓN 8 — Casos de uso de Gemini en entornos educativos">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Estudiar temas complejos con explicaciones por niveles.",
                "Investigar temas de proyecto y sintetizar fuentes.",
                "Resumir textos largos en formatos cortos y accionables.",
                "Explicar conceptos con ejemplos y analogías cotidianas.",
                "Crear contenido: ensayos, guiones, mapas de ideas.",
                "Hacer tareas con acompañamiento (sin copiar sin entender).",
                "Preparar exposiciones con estructura y argumentación.",
                "Simular preguntas de examen y practicar respuestas.",
              ].map((item) => (
                <Card key={item}>
                  <CardContent className="pt-6">{item}</CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="seccion-9" title="SECCIÓN 9 — Ejemplos de prompts para Gemini">
            <p>Prompts reales organizados por categoría:</p>
            <div className="space-y-4">
              {geminiPromptExamples.map((example) => (
                <Card key={example.prompt}>
                  <CardHeader>
                    <CardTitle className="text-lg">{example.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="font-mono text-sm">{example.prompt}</CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="seccion-10" title="SECCIÓN 10 — Comparación de prompts (formato obligatorio)">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mal prompt</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  Háblame de la célula.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Buen prompt</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  Explícame la célula para preparatoria en 4 apartados: estructura, funciones,
                  diferencias entre célula animal y vegetal, y errores frecuentes. Incluye tabla
                  comparativa y 5 preguntas de repaso.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resultado esperado</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Respuesta ordenada, precisa y lista para estudiar, con formato claro y evaluación.
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mal prompt</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  Haz una presentación.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Buen prompt</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  Crea una presentación de 7 diapositivas sobre reciclaje para estudiantes de
                  bachillerato. Incluye objetivo, idea visual y nota oral por diapositiva.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resultado esperado</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Presentación con narrativa coherente, visual y lista para exponer.
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="seccion-11" title="SECCIÓN 11 — NotebookLM: qué es, cómo funciona y para qué sirve">
            <p>
              NotebookLM es una herramienta enfocada en trabajar con <strong>fuentes concretas</strong>
              (documentos, PDFs, enlaces y materiales de estudio). Su fortaleza principal es que responde
              con base en lo que tú cargaste, útil para estudiar con evidencia y trazabilidad.
            </p>
            <p>
              A diferencia de un chat general, NotebookLM está pensado para organizar conocimiento por
              cuadernos y producir artefactos: guías, flashcards, quizzes, audios, infografías, mapas y más.
            </p>
          </Section>

          <Section id="seccion-12" title="SECCIÓN 12 — Features de NotebookLM">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Document analysis",
                "Source-based answers",
                "Audio generation",
                "Podcast generation",
                "Video generation",
                "Slides generation",
                "Flashcards",
                "Quizzes",
                "Study guides",
                "Mind maps",
                "Infographics",
                "Tables",
              ].map((feature) => (
                <Card key={feature}>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Uso sugerido en taller: crear materiales de aprendizaje accionables para estudiar,
                    practicar y explicar mejor un tema.
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="seccion-13" title="SECCIÓN 13 — Casos de uso de NotebookLM">
            <ul className="list-disc pl-5 space-y-2">
              <li>Estudiar por fuentes (apuntes, lecturas, PDFs de clase).</li>
              <li>Investigar sin perder trazabilidad de información.</li>
              <li>Resumir libros y capítulos con enfoque para examen.</li>
              <li>Preparar exámenes con quizzes y flashcards automáticas.</li>
              <li>Organizar información compleja en mapas, tablas e infografías.</li>
            </ul>
          </Section>

          <Section id="seccion-14" title="SECCIÓN 14 — Ejemplos de prompts para NotebookLM">
            <div className="space-y-4">
              {notebookPromptExamples.map((prompt) => (
                <Card key={prompt}>
                  <CardContent className="pt-6 font-mono text-sm">{prompt}</CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="seccion-15" title="SECCIÓN 15 — Comparación: Gemini vs NotebookLM">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Criterio</th>
                    <th className="border p-3 text-left">Gemini</th>
                    <th className="border p-3 text-left">NotebookLM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Fortaleza principal</td>
                    <td className="border p-3">Versatilidad multimodal y creatividad.</td>
                    <td className="border p-3">Trabajo profundo con fuentes específicas.</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Mejor para</td>
                    <td className="border p-3">Idear, explicar, redactar, prototipar.</td>
                    <td className="border p-3">Estudiar, resumir y evaluar con base documental.</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Flujo típico</td>
                    <td className="border p-3">Prompt abierto, iteración y refinamiento.</td>
                    <td className="border p-3">Subir fuentes, preguntar y crear artefactos.</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Cuándo usar</td>
                    <td className="border p-3">Cuando necesitas amplitud, ideas o producción rápida.</td>
                    <td className="border p-3">Cuando necesitas precisión basada en tus materiales.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Regla simple:</strong> Usa Gemini para explorar y construir; usa NotebookLM para
              estudiar y validar desde fuentes.
            </p>
          </Section>

          <Section id="seccion-16" title="SECCIÓN 16 — Actividades prácticas">
            <div className="space-y-4">
              {[
                {
                  title: "Actividad 1: Resumen inteligente",
                  steps:
                    "Sube un capítulo a NotebookLM, genera resumen y luego pide a Gemini que convierta ese resumen en una infografía narrada.",
                },
                {
                  title: "Actividad 2: Crear examen",
                  steps:
                    "Con el temario de clase, genera 20 reactivos con NotebookLM y usa Gemini para convertirlos en una práctica gamificada.",
                },
                {
                  title: "Actividad 3: Crear presentación",
                  steps:
                    "Investiga con Gemini (Deep Research), valida con NotebookLM y arma diapositivas con guion oral.",
                },
                {
                  title: "Actividad 4: Crear video",
                  steps:
                    "Genera script corto con Gemini, estructura visual en NotebookLM y prepara versión final de exposición audiovisual.",
                },
                {
                  title: "Actividad 5: Crear audio",
                  steps:
                    "Transforma apuntes en Audio Overview/podcast para repasar antes del examen.",
                },
              ].map((activity) => (
                <Card key={activity.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>{activity.steps}</CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="seccion-17" title="SECCIÓN 17 — Buenas prácticas de prompting">
            <ul className="list-disc pl-5 space-y-2">
              <li>Sé específico: evita pedidos vagos.</li>
              <li>Da contexto: materia, nivel, propósito.</li>
              <li>Define formato: tabla, lista, pasos, rúbrica.</li>
              <li>Define audiencia: edad y nivel académico.</li>
              <li>Define objetivo: aprender, practicar, presentar, evaluar.</li>
              <li>Pide ejemplos y contraejemplos para comprender mejor.</li>
              <li>Solicita verificación o fuentes cuando aplique.</li>
              <li>Usa iteración: mejora el prompt en cada ronda.</li>
            </ul>
          </Section>

          <Section id="seccion-18" title="SECCIÓN 18 — Errores comunes al usar IA">
            <ul className="list-disc pl-5 space-y-2">
              <li>Prompts vagos sin contexto ni objetivo.</li>
              <li>Falta de validación de información importante.</li>
              <li>Copiar y pegar sin comprender el contenido.</li>
              <li>No ajustar el nivel de dificultad al público.</li>
              <li>No pedir estructura de salida.</li>
              <li>Depender de una sola respuesta sin iterar.</li>
              <li>Ignorar límites de plan, idioma o región en ciertas funciones.</li>
            </ul>
          </Section>

          <Section id="seccion-19" title="SECCIÓN 19 — Novedades recientes">
            <p>
              Resumen de funcionalidades y cambios recientes en Gemini y NotebookLM para mantener el
              contenido vigente y alineado con las mejoras más relevantes.
            </p>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gemini (actualizaciones destacadas)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Deep Research con mejoras de calidad y mayor disponibilidad para más usuarios.
                    </li>
                    <li>
                      Gems disponibles de forma más amplia para personalizar asistentes con instrucciones
                      y archivos.
                    </li>
                    <li>
                      Mejoras en contexto largo, integraciones con apps y experiencias más personalizadas.
                    </li>
                    <li>
                      Evolución de Canvas para creación iterativa de contenidos y prototipos.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">NotebookLM (actualizaciones destacadas)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Expansión de mapas mentales y mejoras para estudiar con fuentes complejas.</li>
                    <li>Mejor comprensión de PDFs con imágenes y gráficas.</li>
                    <li>
                      Mejoras en flashcards y quizzes (progreso guardado y flujo de repaso más robusto).
                    </li>
                    <li>
                      Nuevos artefactos visuales y de estudio, incluyendo mejoras de video, infografías
                      y edición de slides según disponibilidad.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fuentes consultadas (Exa)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  1) https://blog.google/products-and-platforms/products/gemini/new-gemini-app-features-march-2025/
                </p>
                <p>
                  2) https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-studying-help/
                </p>
                <p>
                  3) https://workspaceupdates.googleblog.com/2026/03/new-ways-to-customize-and-interact-with-your-content-in-NotebookLM.html
                </p>
              </CardContent>
            </Card>
          </Section>

          <Section id="seccion-20" title="SECCIÓN 20 — Set de prompts (extenso por categorías)">
            <div className="space-y-4">
              {promptSet.map((group) => (
                <Card key={group.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 font-mono text-sm">
                      {group.prompts.map((prompt) => (
                        <li key={prompt}>{prompt}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="seccion-21" title="SECCIÓN 21 — Prompt engineering avanzado (nivel básico)">
            <p>
              Marco práctico recomendado: <strong>C-O-F-R</strong>
              (Contexto, Objetivo, Formato, Restricciones).
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Plantilla C-O-F-R</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Contexto:</strong> Soy estudiante de preparatoria en [materia].</p>
                  <p><strong>Objetivo:</strong> Quiero entender/preparar [tema].</p>
                  <p><strong>Formato:</strong> Responde en [tabla/lista/pasos].</p>
                  <p><strong>Restricciones:</strong> Máximo [N] palabras, incluye [N] ejemplos.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ejemplo aplicado</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-sm">
                  Contexto: Soy estudiante de preparatoria y estoy viendo genética.{"\n"}
                  Objetivo: Entender diferencia entre genotipo y fenotipo.{"\n"}
                  Formato: Tabla + 3 ejemplos.{"\n"}
                  Restricciones: Lenguaje simple, 200 palabras máximo.
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="seccion-22" title="SECCIÓN 22 — Plantillas de prompts reutilizables">
            <div className="space-y-4">
              {[
                {
                  name: "Plantilla de explicación",
                  template:
                    "Explícame [tema] para estudiantes de [edad] en [N] pasos. Incluye ejemplo, analogía y 3 preguntas de repaso.",
                },
                {
                  name: "Plantilla de resumen",
                  template:
                    "Resume [texto/fuente] en formato [lista/tabla], destacando ideas clave, conceptos y posibles preguntas de examen.",
                },
                {
                  name: "Plantilla de examen",
                  template:
                    "Crea un examen de [materia] con [N] preguntas (fácil/intermedio/difícil), agrega respuestas y explicación breve.",
                },
                {
                  name: "Plantilla de presentación",
                  template:
                    "Diseña una presentación sobre [tema] para [audiencia], con [N] diapositivas, objetivo por diapositiva y guion de exposición.",
                },
                {
                  name: "Plantilla de refinamiento",
                  template:
                    "Mejora este prompt para que sea claro, específico, con ejemplos, formato de salida y adecuado para estudiantes: [pega prompt].",
                },
              ].map((tpl) => (
                <Card key={tpl.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{tpl.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="font-mono text-sm">{tpl.template}</CardContent>
                </Card>
              ))}
            </div>
          </Section>
        </div>

        <section id="anexo-presentacion" className="mt-10 scroll-mt-24">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">ANEXO — Checklist de facilitación para presentación</CardTitle>
              <CardDescription>Guía breve para asegurar una ejecución fluida y profesional.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {presentationChecklist.map((item) => (
                <Card key={item} className="border-border/60 bg-background/60">
                  <CardContent className="pt-6 text-sm md:text-base leading-relaxed">
                    {item}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </section>

        <footer className="mt-10 rounded-2xl border border-border/70 bg-card/95 p-6">
          <p className="text-sm text-muted-foreground">
            Recomendación de uso: impartir este material en dos bloques (fundamentos + práctica), con
            actividades colaborativas, revisión de prompts por pares y una entrega final de cierre.
          </p>
          <div className="mt-4">
            <Button asChild>
              <a href="#seccion-1">Volver al inicio del taller</a>
            </Button>
          </div>
        </footer>
      </div>
    </main>
  )
}

