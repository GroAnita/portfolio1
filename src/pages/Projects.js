class Projects {
  constructor() {
    this.title = 'My Projects';
    this.projects = [
      {
        name: 'Rainydays',
        description: 'A cool web application originally built with only HTML and CSS, but later enhanced with vanilla JavaScript',
        tech: ['JavaScript', 'HTML', 'CSS'],
        image: 'src/images/rainyday.png'
      },
      {
        name: 'Community Museum',
        description: 'A dynamic web app displaying museum exhibits, this project was our Semester Project at Noroff School of Technology for the first semester. Originally built with only HTML and CSS, later enhanced with JavaScript to create the ticket booking system.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        image: 'src/images/museum.png'
      },
      {
        name: 'Rainydays, JavaScript 1 Project',
        description: 'Our first JavaScript project, uses and API to fetch the jackets and has a shopping cart functionality.',
        tech: ['API', 'JavaScript', 'HTML', 'CSS'],
        image: 'src/images/rainyday.png'
      }
    ];
  }

  async render() {
    return `
      <div class="page projects-page">
        <h1>${this.title}</h1>
        <div class="projects-grid">
          ${this.projects.map(project => `
            <div class="project-card">
            <div class="project-image"><img src="${project.image}" alt="${project.name}"></div>
              <h3>${project.name}</h3>
              <p>${project.description}</p>
              <div class="tech-stack">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

export default Projects;
