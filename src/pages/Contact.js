class Contact {
  constructor() {
    this.title = 'Contact Me';
  }

  async render() {
    return `
      <div class="page contact-page">
        <h1>${this.title}</h1>
        <div class="contact-content">
          <p>Feel free to reach out to me through any of the following channels:</p>
          <div class="contact-info">
            <div class="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:gro.anita.brathen@gmail.com">gro.anita.brathen@gmail.com</a></p>
            </div>
            <div class="contact-item">
              <h3>GitHub</h3>
              <p><a href="https://github.com/GroAnita" target="_blank">github.com/GroAnita</a></p>
            </div>
            <div class="contact-item">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/gro-anita-brathen-2a0513154/" target="_blank">linkedin.com/in/gro-anita-brathen-2a0513154/</a></p>
            </div>
          </div>
          <div class="contact-form">
            <h2>Send a Message</h2>
            <form id="contactForm"
             action="https://formspree.io/f/xjgbkeaj"
  method="POST">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

export default Contact;
