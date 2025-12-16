class About {
  constructor() {
    this.title = 'About Me';
  }

  async render() {
    // Attach event listeners after render
    setTimeout(() => this.attachModalListeners(), 0);
    const basePath = window.location.pathname.includes('/portfolio1') ? '/portfolio1' : '';

    return `
      <div class="page about-page">
        <div class="about-image"><img src="./src/images/megibunadlite.jpg" alt="About Me"></div>
       
        <div class="content">
         <h1>${this.title}</h1>
          <p>Hello! I'm a web developer passionate about creating modern, responsive web applications.</p>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript / ES6+</li>
            <li>HTML5 & CSS3</li>
            <li>Single Page Applications</li>
            <li>Responsive Design</li>
            <li>Version Control (Git)</li>
          </ul>
          <h2>Experience</h2>
          <p>Building web applications with focus on user experience and performance.</p>
          <button class="btn btn-primary" data-pdf="cv">My CV</button>
          <button class="btn btn-secondary" data-pdf="coverletter">Cover Letter</button>
        </div>
        
        <!-- PDF Modal -->
        <div id="pdf-modal" class="pdf-modal">
          <div class="pdf-modal-content">
            <div class="pdf-modal-header">
              <h3 id="pdf-title"></h3>
              <button class="close-modal">&times;</button>
            </div>
            <iframe id="pdf-viewer" class="pdf-viewer"></iframe>
            <div class="pdf-modal-footer">
              <a id="pdf-download" class="btn btn-primary" download>Download PDF</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  attachModalListeners() {
    const modal = document.getElementById('pdf-modal');
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfTitle = document.getElementById('pdf-title');
    const pdfDownload = document.getElementById('pdf-download');
    const closeBtn = document.querySelector('.close-modal');
    const pdfButtons = document.querySelectorAll('[data-pdf]');

    // Open modal when clicking CV or Cover Letter buttons
    pdfButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const pdfType = button.getAttribute('data-pdf');
        const basePath = window.location.pathname.includes('/portfolio1') ? '/portfolio1' : '';
        
        if (pdfType === 'cv') {
          pdfViewer.src = `${basePath}/src/documents/cv.pdf`;
          pdfTitle.textContent = 'My CV';
          pdfDownload.href = `${basePath}/src/documents/cv.pdf`;
          pdfDownload.download = 'CV.pdf';
        } else if (pdfType === 'coverletter') {
          pdfViewer.src = `${basePath}/src/documents/coverletter.pdf`;
          pdfTitle.textContent = 'Cover Letter';
          pdfDownload.href = `${basePath}/src/documents/coverletter.pdf`;
          pdfDownload.download = 'CoverLetter.pdf';
        }
        
        modal.classList.add('show');
      });
    });

    // Close modal
    const closeModal = () => {
      modal.classList.remove('show');
      pdfViewer.src = '';
    };

    closeBtn.addEventListener('click', closeModal);
    
    // Close when clicking outside the modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
}

export default About;
