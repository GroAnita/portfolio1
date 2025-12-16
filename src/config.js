// Configuration for different environments
const isGitHubPages = window.location.hostname === 'groanita.github.io';
const basePath = isGitHubPages ? '/portfolio1' : '';

export { basePath };
