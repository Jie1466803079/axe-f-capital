const EMAIL = 'fengwenye00@gmail.com'
const MAILTO = `mailto:${EMAIL}`

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const body = form.body.value
    const subject = 'Website enquiry'
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${body}`)}`
    window.location.href = mailto
  }

  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-content">
        <p className="contact-email">
          Email us at <a href={MAILTO}>{EMAIL}</a>. We’ll get back to you as soon as we can.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div className="form-row">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" required placeholder="your@email.com" />
          </div>
          <div className="form-row">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="body" required rows={4} placeholder="Your message" />
          </div>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      </div>
      <style>{`
        .contact { background: var(--color-surface); }
        .contact-content { max-width: 32rem; }
        .contact-email { margin-bottom: var(--space-xl); color: var(--color-text-muted); }
        .contact-form { display: flex; flex-direction: column; gap: var(--space-md); }
        .form-row { display: flex; flex-direction: column; gap: var(--space-xs); }
        .form-row label { font-weight: 600; font-size: 0.9rem; }
        .form-row input,
        .form-row textarea {
          padding: var(--space-md);
          border: 1px solid var(--color-border);
          border-radius: var(--radius);
          font-family: inherit;
          font-size: 1rem;
        }
        .form-row input:focus,
        .form-row textarea:focus {
          outline: 2px solid var(--color-accent);
          outline-offset: 2px;
        }
      `}</style>
    </section>
  )
}
