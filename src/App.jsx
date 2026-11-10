import { useState } from 'react'
import './App.css'


const GITHUB = 'https://github.com/Bot-Matu'

function App() {
  const [oscuro, setOscuro] = useState(true)
  const [mensaje, setMensaje] = useState('')

  const enviar = (e) => {
    e.preventDefault()
    if (e.target.checkValidity()) {
      setMensaje('¡Listo! Tus datos están correctos.')
      e.target.reset()
    } else {
      setMensaje('Faltan datos o hay un error. Revisa los campos.')
    }
  }

  return (
    <div className="pagina" data-tema={oscuro ? 'oscuro' : 'claro'}>
      <header className="menu">
        <a className="menu-logo" href="#inicio">Matías Cabezas</a>
        <nav>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          <button type="button" className="btn-tema" onClick={() => setOscuro(!oscuro)}>
            {oscuro ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </nav>
      </header>

      <main>
        {/* ---------- Portada ---------- */}
        <section id="inicio" className="hero">
          <p className="etiqueta">Ingeniería en Informática · Duoc UC</p>
          <h1>Matías Cabezas</h1>
          <p className="hero-desc">
            Tengo 20 años y me apasiona el desarrollo web. Construyo proyectos
            con Java, Kotlin y bases de datos, y siempre estoy aprendiendo
            nuevas tecnologías.
          </p>
          <div className="botones">
            <a className="btn btn-principal" href="#habilidades">Ver habilidades</a>
            <a className="btn btn-borde" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>

        {/* ---------- Sobre mí ---------- */}
        <section id="sobre-mi" className="seccion">
          <p className="etiqueta">Sobre mí</p>
          <div className="sobre-mi">
            <div className="avatar" aria-hidden="true">MC</div>
            <div>
              <h2>Formación y enfoque</h2>
              <p className="texto-suave">
                Estudiante de Ingeniería en Informática en Duoc UC. Me interesa
                el desarrollo web y móvil, y he trabajado en proyectos en
                equipo con API REST, bases de datos y apps Android.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Habilidades y experiencia ---------- */}
        <section id="habilidades" className="seccion">
          <p className="etiqueta">Habilidades</p>
          <h2>Habilidades y experiencia</h2>

          <h3 className="subtitulo">Lenguajes y tecnologías</h3>
          <div className="tarjetas">
            <article className="tarjeta">
              <h4>Java</h4>
              <p>Usado en DeepWallet con Spring Boot para crear una API REST con inicio de sesión JWT.</p>
            </article>
            <article className="tarjeta">
              <h4>Kotlin</h4>
              <p>Usado en Agricolab con Jetpack Compose y Room para crear una app Android.</p>
            </article>
            <article className="tarjeta">
              <h4>MySQL</h4>
              <p>Base de datos de DeepWallet, con las tablas generadas automáticamente desde Spring.</p>
            </article>
          </div>

          <h3 className="subtitulo">Aptitudes</h3>
          <div className="grupos">
            <div>
              <h4 className="grupo-titulo">Backend</h4>
              <ul className="chips">
                <li>API REST</li>
                <li>Autenticación con JWT</li>
                <li>Documentación con Swagger</li>
                <li>Docker</li>
              </ul>
            </div>
            <div>
              <h4 className="grupo-titulo">Móvil</h4>
              <ul className="chips">
                <li>Jetpack Compose</li>
                <li>Base de datos local con Room</li>
                <li>Navegación entre pantallas</li>
              </ul>
            </div>
            <div>
              <h4 className="grupo-titulo">Herramientas</h4>
              <ul className="chips">
                <li>Git y GitHub</li>
                <li>Postman</li>
                <li>Maven</li>
              </ul>
            </div>
          </div>

          <h3 className="subtitulo">Experiencia</h3>
          <article className="tarjeta">
            <h4>Práctica profesional</h4>
            <p className="texto-verde">Gastronomía Pak Caleta SpA</p>
          </article>
        </section>

        {/* ---------- Proyectos ---------- */}
        <section id="proyectos" className="seccion">
          <p className="etiqueta">Proyectos</p>
          <h2>Código y proyectos</h2>
          <div className="tarjetas tarjetas-dos">
            <article className="tarjeta">
              <h4>DeepWallet</h4>
              <p>
                API para organizar ingresos y gastos personales por categorías.
                Incluye inicio de sesión con JWT, consulta del valor del dólar
                y documentación con Swagger. Proyecto en equipo, desarrollado
                en Duoc UC.
              </p>
              <ul className="chips chips-chicos">
                <li>Java 21</li>
                <li>Spring Boot</li>
                <li>MySQL</li>
                <li>JWT</li>
                <li>Docker</li>
              </ul>
              <a className="link" href="https://github.com/BastianHuenchullan/DeepWallet" target="_blank" rel="noreferrer">Ver en GitHub</a>
            </article>

            <article className="tarjeta">
              <h4>Agricolab</h4>
              <p>
                App Android que conecta a trabajadores agrícolas con
                productores que necesitan mano de obra de temporada. Tiene
                registro, publicaciones con filtros y búsqueda, y chat interno.
              </p>
              <ul className="chips chips-chicos">
                <li>Kotlin</li>
                <li>Jetpack Compose</li>
                <li>Room</li>
                <li>Navigation</li>
              </ul>
              <a className="link" href="https://github.com/TU-USUARIO/TU-REPO" target="_blank" rel="noreferrer">Ver en GitHub</a>
            </article>
          </div>
          <div className="botones">
            <a className="btn btn-borde" href={GITHUB} target="_blank" rel="noreferrer">Ver todo mi GitHub</a>
          </div>
        </section>

        {/* ---------- Contacto ---------- */}
        <section id="contacto" className="seccion">
          <p className="etiqueta">Contacto</p>
          <h2>Hablemos</h2>
          <p className="texto-suave">
            ¿Tienes un proyecto en mente o quieres ponerte en contacto?
            Escríbeme a{' '}
            <a href="mailto:mat.cabezasc@duocuc.cl">mat.cabezasc@duocuc.cl</a>
          </p>

          <form className="formulario" onSubmit={enviar} noValidate>
            <label>
              Correo electrónico
              <input type="email" placeholder="tu@correo.com" required />
            </label>
            <label>
              Mensaje
              <textarea rows="4" placeholder="Escribe tu mensaje..." required minLength="3"></textarea>
            </label>
            <button type="submit" className="btn btn-principal">Enviar mensaje</button>
            {mensaje && <p className="form-mensaje" role="status">{mensaje}</p>}
          </form>
        </section>
      </main>

      <footer className="pie">
        <span>© 2026 Matías Cabezas</span>
        <span>Hecho con React y Vite</span>
      </footer>
    </div>
  )
}

export default App