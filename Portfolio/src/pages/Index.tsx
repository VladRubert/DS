import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectCard } from '@/components/ProjectCard'
import { SkillItem } from '@/components/SkillItem'
import { projects } from '@/lib/projects'

/** Tarjeta simple para incrustar un reporte de Power BI (responsive, con etiquetas) */
function PowerBICard({
  title,
  description,
  src,
  tags = [],
}: {
  title: string
  description?: string
  src: string
  tags?: string[]
}) {
  return (
    <div className="rounded-xl bg-slate-700/50 backdrop-blur-sm overflow-hidden shadow-lg border border-slate-700">
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-slate-300">{description}</p>
        )}
        {tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-slate-600 px-2.5 py-0.5 text-xs text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Contenedor responsive 16:9 sin depender de plugins */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          title={title}
          src={src}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="p-4 text-xs text-slate-400">
        *El reporte es interactivo. Si no carga, revisa que esté publicado en Power BI
        como “Publicar en la web”.
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>('home')

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <header className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <Button
                      variant="link"
                      className={cn(
                        'text-sm font-medium transition-colors',
                        activeSection === item
                          ? 'text-blue-400'
                          : 'text-slate-200 hover:text-blue-300'
                      )}
                      onClick={() => scrollToSection(item)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            <Button variant="outline" size="sm" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6 py-12">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block">Análisis y</span>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Ciencia de Datos
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-lg">
                Transformando datos en soluciones significativas para problemas económicos y empresariales complejos.
              </p>
              <div className="pt-4 flex space-x-4">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Ver proyectos
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                >
                  Contacto
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 blur-2xl opacity-20"></div>
                <div className="absolute inset-4 bg-slate-800 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60%"
                    height="60%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
            <div className="bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-slate-300 mb-4">
                Soy un especialista apasionado por el análisis de datos y la economía. Con experiencia en transformar datos
                complejos en insights accionables y soluciones efectivas.
              </p>
              <p className="text-slate-300 mb-4">
                Mi formación en economía me permite entender los contextos de negocio, mientras que mis habilidades
                en ciencia de datos me dan las herramientas para extraer conocimiento valioso y construir modelos predictivos.
              </p>
              <p className="text-slate-300">
                Me especializo en proyectos que combinan análisis econométricos, visualización de datos
                y modelos de machine learning para resolver problemas del mundo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-700/50 backdrop-blur-sm">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="data-science">Ciencia de Datos</TabsTrigger>
                <TabsTrigger value="data-analysis">Análisis de Datos</TabsTrigger>
                <TabsTrigger value="economics">Economía</TabsTrigger>
              </TabsList>
            </div>

            {/* Todos */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            {/* Ciencia de Datos */}
            <TabsContent value="data-science">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === 'data-science')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            {/* Análisis de Datos (incluye BI) */}
            <TabsContent value="data-analysis">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Tarjetas “normales” que tengas configuradas */}
                {projects
                  .filter((p) => p.category === 'data-analysis')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}

                {/* === Power BI embed === */}
                <PowerBICard
                  title="Ecommerce — Order & Supply Chain (Power BI)"
                  description="Panel interactivo con flujo de pedidos, inventarios y cadena de suministro."
                  src="https://app.powerbi.com/reportEmbed?reportId=9327d647-be24-4e79-af83-37df7ecf036c&autoAuth=true&ctid=f0661e9b-ec4f-455a-ae94-38981c278caf"
                  tags={['BI', 'Power BI', 'Supply Chain', 'Data Analysis']}
                />
              </div>
            </TabsContent>

            {/* Economía */}
            <TabsContent value="economics">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => p.category === 'economics')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Data Science Skills */}
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Ciencia de Datos</h3>
              <ul className="space-y-2">
                <SkillItem name="Machine Learning" level={90} />
                <SkillItem name="Python" level={85} />
                <SkillItem name="Deep Learning" level={75} />
                <SkillItem name="NLP" level={70} />
                <SkillItem name="Big Data" level={80} />
              </ul>
            </div>

            {/* Data Analysis Skills */}
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-teal-400">Análisis de Datos</h3>
              <ul className="space-y-2">
                <SkillItem name="SQL" level={95} />
                <SkillItem name="Tableau" level={85} />
                <SkillItem name="Power BI" level={80} />
                <SkillItem name="R" level={75} />
                <SkillItem name="Excel Avanzado" level={90} />
              </ul>
            </div>

            {/* Economics Skills */}
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Economía</h3>
              <ul className="space-y-2">
                <SkillItem name="Econometría" level={90} />
                <SkillItem name="Análisis Financiero" level={85} />
                <SkillItem name="Modelado Económico" level={80} />
                <SkillItem name="STATA" level={75} />
                <SkillItem name="Series Temporales" level={85} />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>

          <div className="max-w-lg mx-auto bg-slate-700/50 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-slate-300 mb-6 text-center">
              ¿Interesado en colaborar o tienes alguna pregunta? ¡Contáctame!
            </p>

            <div className="space-y-4">
              <div className="flex items-center p-3 bg-slate-600/50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center p-3 bg-slate-600/50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>contacto@ejemplo.com</span>
              </div>
              <div className="flex items-center p-3 bg-slate-600/50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mr-3">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Ciudad, País</span>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
              {/* Links sociales */}
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                {/* …icon… */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
                {/* …icon… */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                {/* …icon… */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-center text-slate-400">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Portfolio - Análisis de Datos & Economía</p>
          <p className="text-sm mt-2">Desarrollado con React, TypeScript y Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
