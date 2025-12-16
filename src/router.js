import Home from './pages/Home.js?v=4';
import About from './pages/About.js?v=4';
import Contact from './pages/Contact.js?v=4';
import Projects from './pages/Projects.js?v=4';

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
    // Extract just the pathname from the URL to avoid issues
    const urlObj = new URL(url, window.location.origin);
    history.pushState(null, null, urlObj.pathname);
    await this.handleRoute();
  }

  async handleRoute() {
    let path = window.location.pathname;
    
    // Handle GitHub Pages base path
    const basePath = '/portfolio1';
    if (path.startsWith(basePath)) {
      path = path.slice(basePath.length) || '/';
    }
    
    // Find matching route
    let route = this.routes.find(r => r.path === path);
    
    // Default to home page if no match found
    if (!route) {
      route = this.routes[0];
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
  { path: '/projects', view: Projects }
];

export default Router;
export { routes };
