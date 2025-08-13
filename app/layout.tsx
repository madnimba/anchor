import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Anchorio - Steady in Every Storm | Premium Marine Anchors",
  description:
    "Premium marine anchors engineered for maximum holding power. Built to hold in all conditions for commercial maritime and recreational marine vessels.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} dark`}>
      <body className="font-inter antialiased bg-slate-900 text-slate-100">{children}</body>
    </html>
  )
}
