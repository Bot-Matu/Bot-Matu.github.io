import { useState } from 'react'
import './App.css'

function App() {
  const [oscuro, setOscuro] = useState(false)
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
        <a className="menu-logo" href="#inicio">MC</a>
        <nav>
          <a href="#cv">CV</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
          <button type="button" className="btn-tema" onClick={() => setOscuro(!oscuro)}>
            {oscuro ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-texto">
            <p className="hero-etiqueta">Estudiante de Ingeniería en Informática</p>
            <h1>Matías Cabezas</h1>
            <p className="hero-desc">
              Tengo 20 años y me apasiona el desarrollo web. Siempre estoy
              aprendiendo nuevas tecnologías y mejorando mis habilidades.
            </p>
            <div className="hero-botones">
              <a className="btn btn-principal" href="#contacto">Contáctame</a>
              <a className="btn btn-borde" href="#cv">Ver mi CV</a>
            </div>
          </div>
          <div className="hero-monograma" aria-hidden="true">MC</div>
        </section>

        <section id="cv" className="seccion">
          <h2>CV</h2>
          <div className="tarjetas">
            <article className="tarjeta">
              <h3>Educación</h3>
              <p>Estudiante de Ingeniería en Informática en Duoc UC.</p>
            </article>
            <article className="tarjeta">
              <h3>Experiencia</h3>
              <p>Práctica profesional en Gastronomía Pak Caleta SpA.</p>
            </article>
          </div>
        </section>

        <section id="habilidades" className="seccion">
          <h2>Habilidades</h2>
          <ul className="chips">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MySQL</li>
            <li>API REST</li>
            <li>Kotlin</li>
            <li>Jetpack Compose</li>
            <li>Room</li>
            <li>Git y GitHub</li>
          </ul>
        </section>

      <section id="proyectos" className="seccion">
        <h2>Proyectos</h2>
        <div className="tarjetas">
          <article className="tarjeta">
            <h3>DeepWallet</h3>
            <p>
              API para organizar ingresos y gastos personales por categorías
              (comida, transporte, suscripciones, etc.). Incluye inicio de sesión
              con JWT, consulta del valor del dólar en pesos chilenos y
              documentación con Swagger. Proyecto en equipo, desarrollado en Duoc UC.
            </p>
            <ul className="etiquetas">
              <li>Java 21</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>JWT</li>
              <li>Docker</li>
            </ul>
            <a href="https://github.com/BastianHuenchullan/DeepWallet" target="_blank" rel="noreferrer">Ver en GitHub</a>
          </article>

          <article className="tarjeta">
            <h3>Agricolab</h3>
            <p>
              App Android que conecta a trabajadores agrícolas con productores que
              necesitan mano de obra de temporada (poda, riego, cosecha). Tiene
              registro, publicaciones con filtros y búsqueda, y chat interno entre
              usuarios.
            </p>
            <ul className="etiquetas">
              <li>Kotlin</li>
              <li>Jetpack Compose</li>
              <li>Room</li>
              <li>Navigation</li>
            </ul>
            <a href="https://github.com/Bot-Matu/proyectoappmovil" target="_blank" rel="noreferrer">Ver en GitHub</a>
          </article>
        </div>
      </section>

        <section id="contacto" className="seccion">
          <h2>Contacto</h2>
          <p className="contacto-texto">¡Escríbeme para más información!</p>
          <ul className="contacto-lista">
            <li>
              <span>Correo</span>
              <a href="mailto:mat.cabezasc@duocuc.cl">mat.cabezasc@duocuc.cl</a>
            </li>
            <li>
              <span>Teléfono</span>
              <a href="tel:+56912345678">+56 9 1234 5678</a>
            </li>
          </ul>

          <form className="formulario" onSubmit={enviar} noValidate>
            <label>
              Nombre completo
              <input type="text" required minLength="3" />
            </label>
            <label>
              Correo
              <input type="email" required />
            </label>
            <button type="submit" className="btn btn-principal">Enviar mensaje</button>
            {mensaje && <p className="form-mensaje" role="status">{mensaje}</p>}
          </form>
        </section>
      </main>

      <footer className="pie">Sitio creado por Matías Cabezas</footer>
    </div>
  )
}

export default App