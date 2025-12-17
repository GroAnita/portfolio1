# Portfolio SPA
My personal Portfolio page.
Checkout my previous project and get in thouch.
A Single Page Application built with vanilla JavaScript and a custom router.

## Project Structure

```text
portfolio1/
├── index.html          # Entry point
├── package.json        # Project configuration
├── src/
│   ├── app.js         # Main application with router integration
│   ├── router.js      # Custom SPA router with routes
│   ├── components/    # Reusable components
│   │   └── Navbar.js
│   ├── pages/         # Page components
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │  
│   └── styles/        # CSS files
│       └── main.css
└── public/            # Static assets

```

## Features

- ✅ Custom SPA Router with history API
- ✅ Clean URL navigation (no hash routing)
- ✅ Multiple pages (Home, About, Projects, Contact)
- ✅ Responsive design
- ✅ ES6 modules
- ✅ 404 page handling

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## How It Works

The application uses a custom router (`router.js`) that:

- Intercepts link clicks with `data-link` attribute
- Updates browser history without page reload
- Dynamically loads and renders page components
- Handles browser back/forward navigation

All routes are defined in `router.js` and initialized in `app.js`.

## Routes

- `/` - Home page
- `/about` - About page
- `/projects` - Projects page
- `/contact` - Contact page

## Technologies

- Vanilla JavaScript (ES6+)
- HTML5
- CSS3
- ES6 Modules
