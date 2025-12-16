class Projects {
  constructor() {
    this.title = 'My Projects';
    this.projects = [
      {
        name: 'Rainydays',
        description: 'A web application originally built with only HTML and CSS, but later enhanced with vanilla JavaScript. This was our first school project, and it also included designing the layout in Figma beforehand.',
        tech: ['JavaScript', 'HTML', 'CSS', 'Figma'],
        image: '/src/images/rainyday.png',
        liveUrl: 'https://groanita.github.io/JavaScript-1-Project/',
        githubUrl: 'https://github.com/groanita/JavaScript-1-Project'
      },
      {
        name: 'Community Museum',
        description: 'A dynamic web app displaying museum exhibits, this project was our Semester Project at Noroff School of Technology for the first semester. Originally built with only HTML and CSS, later enhanced with JavaScript to create the ticket booking.',
        tech: ['JavaScript', 'HTML', 'CSS', 'Figma'],
        image: '/src/images/museum.png',
        liveUrl: 'https://groanita.github.io/semester-project-1/',
        githubUrl: 'https://github.com/groanita/semester-project-1'
      },
      {
        name: 'Rainydays, JavaScript 1 Project',
        description: 'Our first JavaScript project, uses and API to fetch the jackets and has a shopping cart functionality. This was our first school project working with an API, and it was a fun challenge.',
        tech: ['API', 'JavaScript', 'HTML', 'CSS', 'Figma'],
        image: '/src/images/rainyday.png',
        liveUrl: 'https://groanita.github.io/JavaScript-1-Project/',
        githubUrl: 'https://github.com/groanita/JavaScript-1-Project'
      }
    ];
  }

  async render() {
    const basePath = window.location.hostname.includes('github.io') ? '/portfolio1' : '';
    return `
      <div class="page projects-page">
        <h1>${this.title}</h1>
        <div class="projects-grid">
          ${this.projects.map(project => `
            <div class="project-card">
            <div class="project-image"><img src="${basePath}${project.image}" alt="${project.name}"></div>
              <h3>${project.name}</h3>
              <p>${project.description}</p>
              <div class="tech-stack">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
              <div class="project-buttons">
                <a href="${project.liveUrl}" class="btn btn-primary" target="_blank"><i class="fa-solid fa-link"></i>View Demo</a>
                <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank"><i class="fa-brands fa-github"></i>GitHub</a>
                </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

export default Projects;
