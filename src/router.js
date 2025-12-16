import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';
import NotFound from './pages/NotFound.js';

// Router class for handling SPA navigation
class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentRoute = null;
    
    // Listen for browser back/forward buttons
    window.addEventListener('popstate', () => this.handleRoute());
    
    // Intercept all link clicks
    this.setupLinkInterception();
  }

  setupLinkInterception() {
    document.addEventListener('click', (e) => {
      // Check if clicked element is a link with data-link attribute
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        this.navigateTo(e.target.href);
      }
    });
  }

  async navigateTo(url) {
    // Update browser history
    history.pushState(null, null, url);
    await this.handleRoute();
  }

  async handleRoute() {
    const path = window.location.pathname;
    
    // Find matching route
    let route = this.routes.find(r => r.path === path);
    
    // Use 404 route if no match found
    if (!route) {
      route = this.routes.find(r => r.path === '*') || this.routes[0];
    }

    this.currentRoute = route;
    
    // Load and render the view
    if (route.view) {
      const view = new route.view();
      document.querySelector('#app').innerHTML = await view.render();
    }
  }

  async init() {
    await this.handleRoute();
  }
}

// Define routes
const routes = [
  { path: '/', view: Home },
  { path: '/about', view: About },
  { path: '/contact', view: Contact },
  { path: '/projects', view: Projects },
  { path: '*', view: NotFound }
];

export default Router;
export { routes };
