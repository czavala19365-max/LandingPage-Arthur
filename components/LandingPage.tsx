import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { BrowserFrame } from "@/components/BrowserFrame";
import { NavClient } from "@/components/NavClient";
import { PhoneFrame } from "@/components/PhoneFrame";
import { PlatformVideo } from "@/components/PlatformVideo";

const TAGLINE = "Seguimiento inteligente de trámites registrales y procesos judiciales";

export default function LandingPage() {
  return (
    <>
      <NavClient />

      <header className="nav" id="nav">
        <div className="nav__inner container">
          <Link href="/" className="nav__logo-link">
            <BrandMark />
          </Link>
          <nav className="nav__links" aria-label="Principal">
            <Link href="#plataforma">Plataforma</Link>
            <Link href="#monitoreo-judicial">Soluciones</Link>
            <Link href="#seguridad">Seguridad</Link>
            <Link href="#clientes">Clientes</Link>
            <Link href="#recursos">Recursos</Link>
          </nav>
          <div className="nav__actions">
            <a href="https://arthur-siguelo.vercel.app" className="nav__login" target="_blank" rel="noopener noreferrer">
              Iniciar sesión
            </a>
            <Link href="#demo" className="btn btn--primary">Solicitar demo</Link>
          </div>
          <button className="nav__toggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span>
          </button>
        </div>
        <div className="nav__mobile" hidden>
          <Link href="#plataforma">Plataforma</Link>
          <Link href="#monitoreo-judicial">Soluciones</Link>
          <Link href="#seguridad">Seguridad</Link>
          <Link href="#clientes">Clientes</Link>
          <Link href="#recursos">Recursos</Link>
          <a href="https://arthur-siguelo.vercel.app" className="nav__login" target="_blank" rel="noopener noreferrer">
            Iniciar sesión
          </a>
          <Link href="#demo" className="btn btn--primary">Solicitar demo</Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="hero__eyebrow">OPERACIONES LEGALES · AUTOMATIZADAS</p>
              <h1 className="hero__title">La infraestructura para el trabajo legal moderno.</h1>
              <p className="hero__sub">
                Arthur automatiza el seguimiento judicial, monitoreo registral y generación de documentos. Recibe alertas y realiza consultas legales especializadas.
              </p>
              <div className="hero__ctas">
                <Link href="#demo" className="btn btn--primary">Solicitar demo</Link>
                <Link href="#plataforma" className="hero__link">Ver la plataforma →</Link>
              </div>
            </div>
            <div className="hero__visual">
              <BrowserFrame>
                <PlatformVideo scene="dashboard" eager />
              </BrowserFrame>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="trust section section--offwhite" id="clientes">
          <div className="container">
            <p className="trust__label">Equipos legales que confían en Arthur.</p>
          </div>
          <div className="marquee" aria-hidden="true">
            <div className="marquee__track">
              {["Estudio Vargas & Asociados", "Grupo Pacífico", "Trujillo & Amorós Abogados", "Grupo Acres Finance", "Ganoza & Servigón", "Corporación Minera del Sur",
                "Estudio Vargas & Asociados", "Grupo Pacífico", "Trujillo & Amorós Abogados", "Grupo Acres Finance", "Ganoza & Servigón", "Corporación Minera del Sur"].map((name, i) => (
                <span key={i} className="marquee__logo">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="problem">
          <div className="problem__inner">
            <p className="problem__eyebrow">EL ESTADO ACTUAL</p>
            <h2 className="problem__title">El trabajo legal sigue dependiendo de procesos manuales y repetitivos.</h2>
            <div className="problem__rule" aria-hidden="true"></div>
            <div className="problem__stats">
              <div className="problem__stat">
                <span className="problem__number">+3h</span>
                <p>diarias revisando CEJ y SUNARP manualmente.</p>
              </div>
              <div className="problem__stat">
                <span className="problem__number">1 de 4</span>
                <p>abogados ha perdido un plazo procesal.</p>
              </div>
              <div className="problem__stat">
                <span className="problem__number">55%</span>
                <p>del tiempo se va en tareas administrativas.</p>
              </div>
              <div className="problem__stat">
                <span className="problem__number">~S/ 150K</span>
                <p>anuales en ingresos no captados por no dedicar tiempo a buscar clientes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform */}
        <section className="platform" id="plataforma">
          <div className="container">
            <header className="platform__header">
              <p className="platform__eyebrow">LA PLATAFORMA</p>
              <h2 className="platform__title">Una plataforma. Cuatro capacidades.</h2>
            </header>
            <div className="platform__grid">
              <Link href="#monitoreo-judicial" className="platform__cell">
                <span className="platform__num">01</span>
                <div className="platform__copy">
                  <h3 className="platform__heading">Monitoreo Judicial</h3>
                  <p className="platform__desc">Seguimiento automático de expedientes en el CEJ, con la frecuencia que tú definas, alertas programadas mediante correo y WhatsApp.</p>
                </div>
                <div className="platform__thumb" aria-hidden="true">
                  <div className="platform__thumb-inner platform__thumb-inner--judicial">
                    <div className="pt-row pt-row--head"><span>Expediente</span><span>Estado</span></div>
                    <div className="pt-row pt-row--active"><span>00847-2023</span><span className="pt-tag">Nueva</span></div>
                    <div className="pt-row"><span>01234-2022</span><span>Sin cambios</span></div>
                  </div>
                </div>
              </Link>
              <Link href="#publicidad-registral" className="platform__cell">
                <span className="platform__num">02</span>
                <div className="platform__copy">
                  <h3 className="platform__heading">Publicidad Registral</h3>
                  <p className="platform__desc">Vigencias de poder, partidas, seguimiento de títulos y documentos SUNARP solicitados de forma programada y automática.</p>
                </div>
                <div className="platform__thumb" aria-hidden="true">
                  <div className="platform__thumb-inner platform__thumb-inner--sunarp">
                    <div className="pt-bar">SUNARP · Vigencias</div>
                    <div className="pt-row"><span>Inversiones Norte SAC</span><span className="pt-tag">Vigente</span></div>
                    <div className="pt-row"><span>Minera Andina SA</span><span>12/2026</span></div>
                  </div>
                </div>
              </Link>
              <Link href="#automatizacion-documental" className="platform__cell">
                <span className="platform__num">03</span>
                <div className="platform__copy">
                  <h3 className="platform__heading">Automatización Documental</h3>
                  <p className="platform__desc">Genera actas societarias, contratos y certificados con IA en minutos, no en horas.</p>
                </div>
                <div className="platform__thumb" aria-hidden="true">
                  <div className="platform__thumb-inner platform__thumb-inner--docs">
                    <div className="pt-doc-title">Acta de Junta General</div>
                    <div className="pt-line"></div>
                    <div className="pt-line"></div>
                    <div className="pt-line pt-line--short"></div>
                  </div>
                </div>
              </Link>
              <Link href="#inteligencia-conversacional" className="platform__cell">
                <span className="platform__num">04</span>
                <div className="platform__copy">
                  <h3 className="platform__heading">Inteligencia Conversacional</h3>
                  <p className="platform__desc">Consulta, solicita y recibe — todo desde WhatsApp, integrado a tu operación legal.</p>
                </div>
                <div className="platform__thumb" aria-hidden="true">
                  <div className="platform__thumb-inner platform__thumb-inner--chat">
                    <div className="pt-bubble pt-bubble--out">¿Estado del 00847-2023?</div>
                    <div className="pt-bubble pt-bubble--in">Traslado 5 días. Plazo: 28 mar.</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Monitoreo Judicial */}
        <section className="deep-dive section section--offwhite" id="monitoreo-judicial">
          <div className="container deep-dive__grid">
            <div className="deep-dive__visual">
              <BrowserFrame>
                <PlatformVideo scene="alerta-judicial" />
              </BrowserFrame>
            </div>
            <div className="deep-dive__content">
              <p className="eyebrow">Monitoreo judicial</p>
              <h2 className="display">Nunca vuelvas a perder una notificación judicial.</h2>
              <p className="body">
                Arthur ejecuta barridos programados del CEJ del Poder Judicial según tu calendario — cada hora, cada día o en intervalos personalizados. Cada nueva actuación se clasifica por urgencia y se integra automáticamente a tu agenda de plazos.
              </p>
              <ul className="bullet-list">
                <li>Programación de barridos personalizada</li>
                <li>Clasificación de urgencia con IA</li>
                <li>Alertas multicanal: WhatsApp + email + dashboard</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Publicidad Registral */}
        <section className="deep-dive section section--white deep-dive--reversed" id="publicidad-registral">
          <div className="container deep-dive__grid">
            <div className="deep-dive__content">
              <p className="eyebrow">Publicidad registral</p>
              <h2 className="display">Vigencias y partidas SUNARP, sin abrir un navegador.</h2>
              <p className="body">
                Programa solicitudes de vigencia de poder ante SUNARP, monitorea partidas registrales, seguimiento de títulos y detecta cambios en registros societarios. Arthur gestiona el ciclo completo y archiva cada documento vinculado al expediente correspondiente.
              </p>
              <ul className="bullet-list">
                <li>Solicitud automática y programada de vigencias</li>
                <li>Seguimiento de títulos y cambios societarios</li>
                <li>Historial completo y consultable por expediente</li>
              </ul>
            </div>
            <div className="deep-dive__visual">
              <BrowserFrame>
                <PlatformVideo scene="vigencia-sprl" />
              </BrowserFrame>
            </div>
          </div>
        </section>

        {/* WhatsApp */}
        <section className="wa-section" id="inteligencia-conversacional">
          <div className="wa-section__inner">
            <div className="wa-section__copy">
              <h2 className="wa-section__title">Tu equipo legal, en el bolsillo.</h2>
              <p className="wa-section__sub">Arthur vive donde tú ya trabajas. Pregunta, solicita y recibe — todo por WhatsApp.</p>
              <div className="wa-section__cards">
                <div className="wa-section__card">
                  <span className="wa-section__card-num">01</span>
                  <p>Consulta el estado de un caso en segundos.</p>
                </div>
                <div className="wa-section__card">
                  <span className="wa-section__card-num">02</span>
                  <p>Solicita una vigencia de poder SUNARP por chat.</p>
                </div>
                <div className="wa-section__card">
                  <span className="wa-section__card-num">03</span>
                  <p>Recibe alertas críticas al instante.</p>
                </div>
                <div className="wa-section__card">
                  <span className="wa-section__card-num">04</span>
                  <p>Redacta documentos legales mediante mensajes por WhatsApp.</p>
                </div>
              </div>
            </div>
            <div className="wa-section__phone">
              <PhoneFrame>
                <PlatformVideo scene="whatsapp-chat" />
              </PhoneFrame>
            </div>
          </div>
        </section>

        {/* Document Automation */}
        <section className="deep-dive section section--white" id="automatizacion-documental">
          <div className="container deep-dive__grid">
            <div className="deep-dive__content">
              <p className="eyebrow">Automatización documental</p>
              <h2 className="display">De horas de redacción a minutos.</h2>
              <p className="body">
                Genera actas de junta general, contratos, certificados y poderes a partir de plantillas inteligentes. Arthur completa cada documento con los datos de tu expediente y lo entrega listo para firma.
              </p>
              <ul className="bullet-list">
                <li>Actas societarias y certificados en un clic</li>
                <li>Contratos y poderes con datos precargados</li>
                <li>Plantillas adaptables a tu estilo corporativo</li>
              </ul>
            </div>
            <div className="deep-dive__visual">
              <BrowserFrame>
                <PlatformVideo scene="generador-actas" />
              </BrowserFrame>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="how-it-works section section--offwhite" id="recursos">
          <div className="container">
            <p className="eyebrow">Proceso</p>
            <h2 className="display">Cómo funciona Arthur.</h2>
            <div className="timeline">
              <div className="timeline__step">
                <span className="timeline__number">01</span>
                <h3 className="display display--sm">Configuras tus expedientes y entidades.</h3>
                <p className="body-sm">Importa casos del CEJ del Poder Judicial, registra sociedades en SUNARP y define tu equipo.</p>
              </div>
              <div className="timeline__connector" aria-hidden="true"></div>
              <div className="timeline__step">
                <span className="timeline__number">02</span>
                <h3 className="display display--sm">Arthur monitorea, analiza y organiza automáticamente.</h3>
                <p className="body-sm">Barridos programados, clasificación de urgencia y archivo documental continuo.</p>
              </div>
              <div className="timeline__connector" aria-hidden="true"></div>
              <div className="timeline__step">
                <span className="timeline__number">03</span>
                <h3 className="display display--sm">Tú decides cómo y cuándo recibir alertas y documentos.</h3>
                <p className="body-sm">WhatsApp, email o dashboard — según la criticidad de cada evento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="testimonial section section--offwhite">
          <div className="container testimonial__inner">
            <blockquote className="testimonial__quote">
              <p>&ldquo;Antes dedicábamos las primeras 3 horas del día a revisar el CEJ. Hoy, Arthur nos lo manda al WhatsApp antes de que lleguemos a la oficina.&rdquo;</p>
            </blockquote>
            <cite className="testimonial__attribution">
              <span className="testimonial__name">María Elena Ríos</span>
              <span className="testimonial__role">Socia directora, Estudio Vargas &amp; Asociados</span>
            </cite>
          </div>
        </section>

        {/* Security */}
        <section className="security section section--offwhite" id="seguridad">
          <div className="container security__inner">
            <div className="security__content">
              <p className="eyebrow">Seguridad</p>
              <h2 className="display">Seguridad y control de nivel empresarial.</h2>
              <p className="body">Cifrado en reposo y en tránsito, control de acceso basado en roles, registros de auditoría completos. Cumplimiento alineado con GDPR y la Ley N° 29733 de protección de datos personales del Perú.</p>
            </div>
            <div className="security__badges">
              <div className="security__badge">SOC 2<br /><span>en proceso</span></div>
              <div className="security__badge">Ley 29733<br /><span>Perú</span></div>
              <div className="security__badge">ISO 27001<br /><span>en proceso</span></div>
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="pricing-teaser section section--white">
          <div className="container pricing-teaser__inner">
            <p className="eyebrow">Escala</p>
            <h2 className="display">Diseñado para escalar contigo.</h2>
            <p className="body">Desde estudios independientes hasta equipos legales de 200+ personas. Estructuramos cada despliegue según tu volumen y operación.</p>
            <Link href="#demo" className="link-arrow">Hablar con ventas →</Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta" id="demo">
          <div className="final-cta__inner">
            <p className="final-cta__eyebrow">EMPIEZA HOY</p>
            <h2 className="final-cta__title">Transforma cómo <em className="final-cta__accent">opera</em><br />tu equipo legal.</h2>
            <p className="final-cta__body">Céntrate en lo que verdaderamente importa. Hablamos contigo en 24 horas para entender tu operación y mostrarte una demo personalizada.</p>
            <div className="final-cta__actions">
              <Link href="#demo" className="btn btn--primary">Solicitar demo</Link>
              <Link href="#demo" className="btn btn--ghost">Hablar con un especialista</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Link href="/" className="footer__logo-link">
              <BrandMark />
            </Link>
            <p className="footer__tagline">{TAGLINE}</p>
          </div>
          <div className="footer__columns">
            <div className="footer__col">
              <h4>Plataforma</h4>
              <Link href="#plataforma">Monitoreo judicial</Link>
              <Link href="#plataforma">Publicidad registral</Link>
              <Link href="#plataforma">Automatización documental</Link>
              <Link href="#plataforma">WhatsApp</Link>
            </div>
            <div className="footer__col">
              <h4>Empresa</h4>
              <Link href="#">Nosotros</Link>
              <Link href="#">Carreras</Link>
              <Link href="#">Prensa</Link>
            </div>
            <div className="footer__col">
              <h4>Legal</h4>
              <Link href="#">Privacidad</Link>
              <Link href="#">Términos</Link>
              <Link href="#">Cookies</Link>
            </div>
            <div className="footer__col">
              <h4>Contacto</h4>
              <a href="mailto:contacto@arthur.ai">contacto@arthur.ai</a>
              <a href="https://arthur-siguelo.vercel.app" target="_blank" rel="noopener noreferrer">arthur-siguelo.vercel.app</a>
            </div>
          </div>
        </div>
        <div className="container footer__bottom">
          <p className="footer__copy">&copy; 2026 Arthur. Todos los derechos reservados.</p>
          <div className="footer__meta">
            <div className="footer__lang">
              <span className="footer__lang-active">ES</span>
              <span className="footer__lang-divider">/</span>
              <span className="footer__lang-soon">EN próximamente</span>
            </div>
            <a href="#" className="footer__social" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
