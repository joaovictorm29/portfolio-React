import { useState } from 'react'
import './Contact.css'

const whatsappNumber = '5585991937529'

const contactCopy = {
  eyebrow: 'CONTATO',
  heading: 'Deseja ter uma Landing Page ou um site para o seu negócio?',
  description: 'Conte o que você gostaria de criar e vamos conversar sobre os próximos passos.',
  nameLabel: 'Seu nome',
  namePlaceholder: 'Digite seu nome',
  fieldLabel: 'O que você deseja criar?',
  placeholder: 'Descreva sua ideia...',
  button: 'Entrar em contato',
}

function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const cleanNumber = whatsappNumber.replace(/\D/g, '')
  const whatsappMessage = `Olá, meu nome é ${name.trim()}.\n\n${message.trim()}`
  const whatsappLink = cleanNumber && name.trim() && message.trim()
    ? `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : undefined

  return (
    <section className="contact-section" id="contato">
      <div className="contact-section__layout">
        <div className="contact-section__intro">
          <span className="contact-section__eyebrow">{contactCopy.eyebrow}</span>
          <h2>{contactCopy.heading}</h2>
          <p>{contactCopy.description}</p>
        </div>

        <div className="contact-form">
          <label htmlFor="contact-name">{contactCopy.nameLabel}</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength="80"
            placeholder={contactCopy.namePlaceholder}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="contact-message">{contactCopy.fieldLabel}</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            maxLength="1200"
            placeholder={contactCopy.placeholder}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <a
            className="contact-form__submit"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!whatsappLink}
            tabIndex={whatsappLink ? 0 : -1}
          >
            {contactCopy.button}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact