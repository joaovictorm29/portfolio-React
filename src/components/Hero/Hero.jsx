import "./Hero.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 hero-content">
            <span className="hero-tag">&lt;/&gt; DESENVOLVEDOR WEB</span>

            <h1>
              Olá, eu sou o <span className="hero-name">João Victor!</span>
            </h1>

            <p>
              Estudante de Ciência da Computação e desenvolvedor em formação,
              com foco em desenvolvimento web.
            </p>

            <div className="hero-buttons">
              <a href="#contato" className="btn btn-primary">
                Contato
              </a>

              <a
                href="/documents/Curriculo-Joao-Victor-2026.pdf"
                className="btn btn-outline-light"
                download
              >
                Baixar CV
              </a>
            </div>

            <div className="hero-socials">
              <a
                className="hero-socials__link"
                href="https://github.com/joaovictorm29"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub aria-hidden="true" />
              </a>

              <a
                className="hero-socials__link"
                href="https://www.linkedin.com/in/joaovictorm29/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="hero-image-container">
              <div className="hero-glow"></div>

              <img
                src="/images/profile/image_portfas.png"
                alt="João Victor"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
