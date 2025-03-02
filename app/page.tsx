"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Handle mouse position for custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Scroll animations
  const { scrollYProgress } = useScroll()
  const { scrollY } = useScroll({ target: heroRef })
  const parallaxY = useTransform(scrollY, [0, 500], [0, 100])

  // Project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Frontend", "Backend", "React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "An AI-powered application that generates custom content based on user preferences and inputs.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI/ML", "Frontend", "Python", "React", "TensorFlow"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description:
        "Mobile application for tracking fitness goals, nutrition, and health metrics with data visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Mobile", "React Native", "Firebase", "Data Visualization"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling smart home devices with real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["IoT", "Frontend", "Backend", "React", "Node.js"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Financial Analytics Platform",
      description:
        "Data-driven platform for financial analysis with predictive modeling and interactive visualizations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Data Science", "Frontend", "Python", "React", "D3.js"],
      github: "#",
      demo: "#",
    },
  ]

  // Skills data
  const skills = {
    Frontend: [
      { name: "🍎 Swift", proficiency: 70 },
      { name: "📱 SwiftUI", proficiency: 70 },
      { name: "🟨 JavaScript", proficiency: 90 },
      { name: "⚛️ React", proficiency: 85 },
      { name: "▲ Next.js", proficiency: 85 },
      { name: "🎨 CSS/Tailwind", proficiency: 80 },
    ],
    Backend: [
      { name: "🟢 Node.js", proficiency: 85 },
      { name: "🚂 Express", proficiency: 80 },
      { name: "⚡ FastAPI", proficiency: 90 },
      { name: "🐘 Flask", proficiency: 90 },
      { name: "📦 Serverless", proficiency: 90 },
      { name: "🐍 Python", proficiency: 95 },
      { name: "🌐 RESTful APIs", proficiency: 90 },
    ],
    Data: [
      { name: "🍃 MongoDB", proficiency: 80 },
      { name: "🐘 PostgreSQL", proficiency: 75 },
      { name: "📊 Data Visualization", proficiency: 70 },
      { name: "🧠 Machine Learning", proficiency: 65 },
      { name: "📈 Big Data Processing", proficiency: 60 },
    ],
    DevOps: [
      { name: "🐳 Docker", proficiency: 80 },
      { name: "🔄 CI/CD", proficiency: 80 },
      { name: "☁️ AWS", proficiency: 85 },
      { name: "☸️ Kubernetes", proficiency: 60 },
      { name: "📟 Monitoring", proficiency: 70 },
    ],
  }

  // Education & Experience data
  const timeline = [
    {
      id: 1,
      type: "experience",
      title: "Full Stack Engineer",
      organization: "Freelance",
      period: "April 2022 - Present",
      description: "Built scalable, high-performance bots with interactive dashboards using AWS, Azure, and GCP. Developed full-stack solutions with real-time monitoring, data visualization, and intuitive UI/UX. Created a responsive frontend for a multi-location laundry management system, enhancing inventory tracking and customer insights.",
    },
    {
      id: 2,
      type: "education",
      title: "B.S. Actuarial Science",
      organization: "National Autonomous University of Mexico",
      period: "September 2022 - Present",
      description: "Developed strong logical thinking and formal mathematical knowledge through rigorous coursework in calculus, statistics, probability theory, and financial mathematics. Applied computational methods to solve complex problems, strengthening my analytical capabilities and systematic approach to problem-solving.",
    },
    {
      id: 3,
      type: "experience",
      title: "Software Engineer",
      organization: "Starlearn",
      period: "October 2022 - November 2023",
      description:
        "Built full-stack solutions for an educational platform, integrating intuitive UI with data-driven backend enhancements. Developed responsive dashboards for insights and interactive features to improve the student learning experience. Collaborated with cross-functional teams to ensure seamless user experience and technical excellence.",
    },
    {
      id: 4,
      type: "education",
      title: "B.S. Data Science",
      organization: "National Autonomous University of Mexico",
      period: "August 2024 - Present",
      description: "Studying advanced data science concepts, including machine learning, deep learning, and big data processing. Developed predictive models for real-world applications. Applied data visualization techniques to communicate insights effectively and drive data-driven decisions.",
    },
    {
      id: 5,
      type: "education",
      title: "iOS Development Lab Certification",
      organization: "iOS Development Lab - FES Acatlán",
      period: "2024",
      description: "Intensive program focused on iOS app development using Swift and SwiftUI.",
    },
    {
      id: 6,
      type: "experience",
      title: "Data Engineer Intern",
      organization: "Entropia.AI",
      period: "January 2025 - Present",
      description: "Developed a data extraction system for housing statistics reports for the Inter-American Development Bank, covering nearly all countries in the Americas. Used API reverse engineering to extract and transform unstructured data. Designed automated data collection strategies with serverless architectures and cloud services.",
    },
  ].reverse()

  // Filter projects by category
  const [activeFilter, setActiveFilter] = useState("All")
  const filterCategories = ["All", "Frontend", "Backend", "Mobile", "Data Science", "AI/ML", "IoT"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Custom cursor effect */}
      <div
        className="fixed w-8 h-8 rounded-full bg-primary/20 pointer-events-none z-50 hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold"
          >
            @guzmandam
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#about" className="hover:text-primary transition-colors">
              👤 About
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              🚀 Projects
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              💻 Skills
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              📚 Experience
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              📬 Contact
            </a>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-16">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🤖 <br />
              Software Engineer<br />
              <span className="text-primary">iOS & AI Enthusiast</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Crafting elegant solutions to complex problems with clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
                  <Image
                    src="/assets/profile.png"
                    height={300}
                    width={300}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>

              <div>
              <h3 className="text-2xl font-bold mb-4">Software Engineer | AI & Backend Specialist</h3>
              <h3 className="text-xl font-bold mb-4">Building Scalable & Intelligent Systems for the Apple Ecosystem</h3>
                <p className="text-muted-foreground mb-6">
                I specialize in backend development with Python, designing scalable and intelligent systems. Now, I&apos;m expanding my expertise by integrating AI, 
                backend engineering, and UI design to create impactful applications within the Apple ecosystem—transforming complex challenges into elegant, 
                user-centric solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                I believe in writing clean, maintainable code that scales effortlessly. My approach is driven by thoughtful design systems and component-based 
                architecture, ensuring consistency, accessibility, and long-term reliability in every application I build.
                </p>
                <p className="text-primary mb-8">
                I&apos;m applying for the Apple Developer Program scholarship to deepen my Swift expertise and refine my ability to craft elegant, user-focused applications
                tailored for the Apple ecosystem.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                  { name: "Swift", emoji: "🍎" },
                  { name: "Python", emoji: "🐍" },
                  { name: "React", emoji: "⚛️" },
                  { name: "UI/UX", emoji: "🎨" },
                  { name: "JavaScript", emoji: "🟡" },
                  { name: "NextJS", emoji: "▲" },
                  ].map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-sm py-1 px-3">
                    {skill.emoji} {skill.name}
                  </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A selection of my recent work spanning various domains and technologies.
            </p>

            <div className="mb-8 flex justify-center">
              <div className="flex flex-wrap gap-2 justify-center">
                {filterCategories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <Card className="h-full overflow-hidden group hover:border-primary/50 transition-all duration-300">
                      <div className="overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          width={600}
                          height={400}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">{project.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical Skills</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              My expertise spans across various technologies and domains. Currently, I&apos;m expanding my expertise into Swift and iOS development.
            </p>

            <Tabs defaultValue="Frontend" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {Object.keys(skills).map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm md:text-base">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(skills).map(([category, skillList]) => (
                <TabsContent key={category} value={category} className="space-y-8">
                  <div className="grid gap-6">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Education & Experience</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              My academic and professional journey.
            </p>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn("relative flex flex-col md:flex-row", index % 2 === 0 ? "md:flex-row-reverse" : "")}
                  >
                    <div className="flex-1 md:w-1/2" />

                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full border-4 border-background bg-primary transform -translate-x-1/2" />

                    <div className={cn("flex-1 md:w-1/2 pl-8 md:pl-0", index % 2 === 0 ? "md:pr-12" : "md:pl-12")}>
                      <div className="bg-card p-6 rounded-lg border shadow-sm">
                        <Badge variant={item.type === "education" ? "default" : "secondary"} className="mb-2">
                          {item.type === "education" ? "Education" : "Experience"}
                        </Badge>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.organization}</p>
                        <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📩 <br/> Get In Touch
              </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Interested in working together or have a question? Feel free to reach out.
            </p>

            <div className="flex justify-center space-x-6 mb-12">
              <motion.a
                href="mailto:andres.m.gd@outlook.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card hover:bg-muted p-4 rounded-full border shadow-sm transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </motion.a>
              <motion.a
                href="https://github.com/guzmandam"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card hover:bg-muted p-4 rounded-full border shadow-sm transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/guzmandam"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card hover:bg-muted p-4 rounded-full border shadow-sm transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>

            <Button asChild size="lg" className="rounded-full">
              <a href="mailto:andres.m.gd@outlook.com">
                Let&apos;s Connect
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} @guzmandam. No rights reserved, code freely (bugs included at no extra charge).
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Designed & Built with 🍎 for the Apple Developer Program
            </p>
          </div>
        </div>
      </footer>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}

