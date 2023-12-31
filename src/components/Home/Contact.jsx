import { useState, useRef } from 'react'
import SocialMedia from '../SocialMedia'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const form = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    const SERVICE_ID = 'service_yd0qzls'
    const TEMPLATE_ID = 'template_dj0cvqa'
    const PUBLIC_KEY = 'V4HFgaymYsPlonSJy'

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      result => {
        setFormData({ name: '', email: '', message: '' })
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      },
    )
  }

  return (
    <section id="contact" className="section section--contact">
      <h2 className="section__h2">Contact</h2>
      <form ref={form} onSubmit={handleSubmit} className="section__form">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
          placeholder="Name"
          className="section__input"
        />

        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
          placeholder="Email"
          className="section__input"
        />

        <textarea
          name="message"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formData.message}
          required
          className="section__input"></textarea>

        <button
          type="submit"
          className="section__button section__button--contact">
          Contact me
        </button>
      </form>
      <SocialMedia />
    </section>
  )
}
