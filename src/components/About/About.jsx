import './About.css'
import { FaJava } from 'react-icons/fa'
import {
    SiCss,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiSpringboot,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const technologyColumns = [
    [
        { name: 'HTML', Icon: SiHtml5, color: '#e34f26' },
        { name: 'CSS', Icon: SiCss, color: '#1572b6' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
    ],
    [
        { name: 'React', Icon: SiReact, color: '#61dafb' },
        { name: 'Java', Icon: FaJava, color: '#ed8b00' },
        { name: 'Spring Boot', Icon: SiSpringboot, color: '#6db33f' },
    ],
    [
        { name: 'Git', Icon: SiGit, color: '#f05032' },
        { name: 'GitHub', Icon: SiGithub, color: '#fff' },
        { name: 'VS Code', Icon: VscVscode, color: '#007acc' },
    ],
]

function About() {
    return (
        <section className="about-section" id="sobre">
            <div className="container">
                <div className="about-copy">
                    <h2>Sobre</h2>
                    <p>
                        Sou um estudante de Ciência da Computação com muito interesse por tecnologia
                        e desenvolvimento web. Tenho experiência em HTML, CSS, JavaScript, Java, Python.
                        Estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
                        Meu objetivo é poder contribuir desenvolvendo soluções inovadoras. Hoje atuo como
                        Estagiário de Dados, trabalho principalmente com Excel e utilizo Python para automatizar
                        processos e gerar relatórios. Sou uma pessoa dedicada, proativa e sempre em busca de novos desafios.
                        Além disso, estou aberto a oportunidades como freelancer na área de desenvolvimento frontend,
                        especialmente para criação de landing pages, sites institucionais e outros projetos web.
                    </p>
                </div>

                <div className="technology-card row g-0 align-items-stretch">
                    <div className="col-lg-3 technology-card__intro">
                        <span className="technology-card__eyebrow">
                            &lt;/&gt; MINHAS PRINCIPAIS TECNOLOGIAS
                        </span>
                        <h3>Tecnologias que utilizo e estou aprendendo</h3>
                    </div>

                    <div className="col-lg-6 technology-card__list">
                        <div className="row g-0">
                            {technologyColumns.map((column, columnIndex) => (
                                <div className="col-4" key={columnIndex}>
                                    <ul className="technology-list">
                                        {column.map(({ name, Icon, color }) => (
                                            <li className="technology-list__item" key={name}>
                                                <Icon aria-hidden="true" style={{ color }} />
                                                <span>{name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <blockquote className="col-lg-3 technology-card__quote">
                        <span aria-hidden="true">★</span>
                        <p>
                            “Sempre em busca de aprender algo novo, porque acredito que é assim que se
                            constroem grandes resultados.”
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default About