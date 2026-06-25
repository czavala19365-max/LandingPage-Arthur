import type { Metadata } from "next";
import { SiteBackground } from "@/components/SiteBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur — Asistente Legal IA",
  description:
    "Seguimiento inteligente de trámites registrales y procesos judiciales. Arthur automatiza el CEJ del Poder Judicial, SUNARP y la generación documental para equipos legales en Perú y LATAM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteBackground />
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
