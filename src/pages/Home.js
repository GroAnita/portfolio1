class Home {
  constructor() {
    this.title = 'Welcome Home';
  }

  async render() {
    // Attach click listeners after render
    setTimeout(() => this.attachBallClickListeners(), 0);
    
    return `
      <div class="home-page">
        <div class="balls-container">
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
      </div>
    `;
  }

  attachBallClickListeners() {
    const balls = document.querySelectorAll('.projects-ball');
    
    balls.forEach(ball => {
      ball.addEventListener('click', (e) => {
        e.preventDefault();
        const route = ball.getAttribute('data-route');
        
        // Morph animation for projects, about, and contact balls
        if (route === '/projects' || route === '/about' || route === '/contact') {
          // Add morph animation class
          ball.classList.add('morph-to-page');
          
          // Navigate after morph animation completes
          setTimeout(() => {
            // Add base path if on GitHub Pages
            const basePath = window.location.pathname.includes('/portfolio1') ? '/portfolio1' : '';
            const fullPath = basePath + route;
            window.history.pushState(null, null, fullPath);
            window.dispatchEvent(new Event('popstate'));
          }, 600);
        }
      });
    });
  }
}

export default Home;
