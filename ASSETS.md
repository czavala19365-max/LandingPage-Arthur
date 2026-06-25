# Assets esperados por la landing

Sube estos archivos para activar los assets reales. Mientras no existan, la landing muestra placeholders visibles.

## Brand

```
public/brand/logo.svg              (wordmark italic sans, blanco + línea gold — fondos oscuros)
public/brand/logo-dark.svg         (wordmark navy ink — fondos claros; min. 108px ancho)
```

## Videos (5 escenas)

Para cada escena: `.mp4`, `.webm` y poster `.jpg`.

```
public/landing/videos/dashboard.mp4
public/landing/videos/dashboard.webm
public/landing/posters/dashboard-poster.jpg

public/landing/videos/alerta-judicial.mp4
public/landing/videos/alerta-judicial.webm
public/landing/posters/alerta-judicial-poster.jpg

public/landing/videos/vigencia-sprl.mp4
public/landing/videos/vigencia-sprl.webm
public/landing/posters/vigencia-sprl-poster.jpg

public/landing/videos/whatsapp-chat.mp4
public/landing/videos/whatsapp-chat.webm
public/landing/posters/whatsapp-chat-poster.jpg

public/landing/videos/generador-actas.mp4
public/landing/videos/generador-actas.webm
public/landing/posters/generador-actas-poster.jpg
```

## Screenshots (prefers-reduced-motion)

Un PNG por escena, mismo nombre que el video:

```
public/landing/screenshots/dashboard.png
public/landing/screenshots/alerta-judicial.png
public/landing/screenshots/vigencia-sprl.png
public/landing/screenshots/whatsapp-chat.png
public/landing/screenshots/generador-actas.png
```

## Ubicación en la landing

| Escena | Componente | Sección |
|--------|------------|---------|
| `dashboard` | BrowserFrame | Hero |
| `alerta-judicial` | BrowserFrame | Monitoreo Judicial |
| `vigencia-sprl` | BrowserFrame | Publicidad Registral |
| `whatsapp-chat` | PhoneFrame | WhatsApp |
| `generador-actas` | BrowserFrame | Automatización Documental |
