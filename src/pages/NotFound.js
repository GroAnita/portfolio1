class NotFound {
  constructor() {
    this.title = '404 - Page Not Found';
  }

  async render() {
    return `
      <div class="page notfound-page">
        <div class="notfound-content">
          <h1>404</h1>
          <h2>${this.title}</h2>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <a href="/" data-link class="btn btn-primary">Go Home</a>
        </div>
      </div>
    `;
  }
}

export default NotFound;
