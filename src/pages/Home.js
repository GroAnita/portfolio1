class Home {
  constructor() {
    this.title = 'Welcome Home';
  }

  async render() {
    // Attach click listeners after render
    setTimeout(() => this.attachBallClickListeners(), 0);
    
    return `
      <div class="home-page">
        <!-- Balls for desktop -->
        <div class="balls-container desktop-nav">
          <div class="projects-ball one" data-link data-route="/projects">
            Projects
          </div>
          <div class="projects-ball two" data-link data-route="/about">
            About me
          </div>
          <div class="projects-ball three" data-link data-route="/contact">
            Contact me
          </div>
        </div>
        
        <!-- Full-screen tiles for mobile version -->
        <div class="mobile-tiles">
          <div class="nav-tile tile-1" data-link data-route="/projects">
            <div class="tile-icon">📁</div>
            <h2>Projects</h2>
            <p>View my work</p>
          </div>
          <div class="nav-tile tile-2" data-link data-route="/about">
            <div class="tile-icon">👤</div>
            <h2>About Me</h2>
            <p>Get to know me</p>
          </div>
          <div class="nav-tile tile-3" data-link data-route="/contact">
            <div class="tile-icon">✉️</div>
            <h2>Contact</h2>
            <p>Let's connect</p>
          </div>
        </div>
      </div>
    `;
  }

  attachBallClickListeners() {
    const navElements = document.querySelectorAll('.projects-ball, .nav-tile');
    
    navElements.forEach(element => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        const route = element.getAttribute('data-route');
        
        // Add appropriate animation class
        if (element.classList.contains('projects-ball')) {
          element.classList.add('morph-to-page');
        } else {
          element.classList.add('tile-fade-out');
        }
        
        // Navigate after animation completes
        setTimeout(() => {
          // Add base path if on GitHub Pages
          const basePath = window.location.pathname.includes('/portfolio1') ? '/portfolio1' : '';
          const fullPath = basePath + route;
          window.history.pushState(null, null, fullPath);
          window.dispatchEvent(new Event('popstate'));
        }, 600);
      });
    });
  }
}

export default Home;
