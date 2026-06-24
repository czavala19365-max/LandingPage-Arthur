import type { Metadata } from "next";
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
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
