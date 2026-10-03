import './Header.css'

const navigation = [
    ['Sobre', '#sobre'],
    ['Projetos', '#projetos'],
    ['Contato', '#contato'],
]

function Header() {
    return (
        <header className="site-header">
            <a className="site-header__brand" href="#inicio">
                <span>DEV</span> JOTAVE
            </a>
            <p className="site-header__welcome">Bem-vindo ao meu portfolio!</p>
            <div className="site-header__actions">
                <nav className="site-header__desktop-navigation" aria-label="Navegação principal">
                    <ul className="site-header__navigation">
                        {navigation.map(([label, href]) => (
                            <li key={href}><a href={href}>{label}</a></li>
                        ))}
                    </ul>
                </nav>
                <details className="site-header__mobile-menu">
                    <summary aria-label="Abrir ou fechar navegação">
                        <span />
                        <span />
                        <span />
                    </summary>
                    <nav aria-label="Navegação mobile">
                        <ul className="site-header__navigation">
                            {navigation.map(([label, href]) => (
                                <li key={href}><a href={href}>{label}</a></li>
                            ))}
                        </ul>
                    </nav>
                </details>
                <a
                    className="site-header__download"
                    href="/documents/Curriculo-Joao-Victor-2026.pdf"
                    download="Curriculo-Joao-Victor-2026.pdf"
                >
                    Baixar CV
                </a>
            </div>
        </header>
    )
}

export default Header