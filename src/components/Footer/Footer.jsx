import './Footer.css'

function Footer() {
	return (
		<footer className="site-footer">
			<p>© {new Date().getFullYear()} João Victor · Dev Jotave</p>
			<a href="#inicio">Voltar ao início</a>
		</footer>
	)
}

export default Footer
