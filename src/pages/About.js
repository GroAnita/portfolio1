class About {
  constructor() {
    this.title = 'About Me';
  }

  async render() {
    // Attach event listeners after render
    setTimeout(() => this.attachModalListeners(), 0);
    const basePath = window.location.hostname.includes('github.io') ? '/portfolio1' : '';

    return `
      <div class="page about-page">
        <div class="about-image"><img src="${basePath}/src/images/megibunadlite.jpg" alt="About Me"></div>
       
        <div class="content">
         <h1>${this.title}</h1>
          <p>Hi, I’m Gro Anita — a front-end development student with a passion for creating clean, intuitive, and user-friendly digital experiences. I enjoy combining structure with creativity, and I love the moment where design and logic meet.</p>
          <p>My background is quite diverse: I’ve worked independently in customer-facing roles, led a sports club for many years, and even organized large international equestrian competitions (FEI). These experiences taught me leadership, communication, problem-solving, and how to stay calm when things get complicated — skills that translate extremely well to project management and front-end development. </p>
          <p>I’m currently studying front-end development at Noroff, where I’m building projects with HTML, CSS, JavaScript, and modern workflows. I take pride in writing clean code, learning new techniques, and improving with every project. </p>
          <p>I’m detail-oriented, driven, and always curious. Whether I’m debugging a stubborn script, designing a layout, or planning a project, I genuinely enjoy the process of turning ideas into something real. </p>

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
        const basePath = window.location.hostname.includes('github.io') ? '/portfolio1' : '';
        
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
