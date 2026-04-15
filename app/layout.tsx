import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Taller completo: Gemini y NotebookLM para preparatoria",
  description:
    "Página educativa extensa y profesional para enseñar Gemini y NotebookLM a estudiantes de 13 a 18 años.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

