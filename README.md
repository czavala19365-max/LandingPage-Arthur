# Arthur AI — Landing Page

Landing editorial para [Arthur — Asistente Legal IA](https://arthur-siguelo.vercel.app).

**Tagline:** Seguimiento inteligente de trámites registrales y procesos judiciales.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Assets del producto

Los videos, posters, screenshots y logos **aún no están incluidos**. La landing muestra placeholders hasta que los subas.

Ver lista completa en [ASSETS.md](./ASSETS.md).

### Carpetas

```
public/brand/
public/landing/posters/
public/landing/videos/
public/landing/screenshots/
```

### Componentes

| Componente | Uso |
|------------|-----|
| `PlatformVideo` | Video con fallback placeholder y screenshot en `prefers-reduced-motion` |
| `BrowserFrame` | Marco navegador para demos desktop |
| `PhoneFrame` | Marco iPhone para WhatsApp |
| `BrandMark` | Logo SVG o fallback serif `arthur` |

## Build

```bash
npm run build
npm start
```
