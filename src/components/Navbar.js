class Navbar {
  constructor() {
    this.links = [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/projects', label: 'Projects' },
      { path: '/contact', label: 'Contact' }
    ];
  }

  render() {
    const basePath = window.location.pathname.includes('/portfolio1') ? '/portfolio1' : '';
    return `
      <nav class="navbar">
        <div class="nav-brand">
          <a href="/" data-link>Portfolio</a>
          
        </div>
        <div class="logo-icon"><img src="${basePath}/src/images/horseheadlogowhite.png" alt="Logo"></div>
        <ul class="nav-links">
          ${this.links.map(link => `
            <li>
              <a href="${link.path}" data-link>${link.label}</a>
            </li>
          `).join('')}
        </ul>
      </nav>
    `;
  }
}

export default Navbar;
