import Router, { routes } from './router.js?v=4';
import Navbar from './components/Navbar.js?v=4';

class App {
  constructor() {
    this.router = null;
  }

  async init() {
    // Render navbar
    this.renderNavbar();
    
    // Initialize router with routes
    this.router = new Router(routes);
    await this.router.init();
  }

  renderNavbar() {
    const navbarContainer = document.querySelector('#navbar');
    if (navbarContainer) {
      const navbar = new Navbar();
      navbarContainer.innerHTML = navbar.render();
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});

export default App;
