# JayDevArt - Sculptor's Portfolio

A fully responsive, modern portfolio website for a professional sculptor, built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Clean, elegant UI that showcases artwork beautifully
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎯 **Interactive Gallery** - Filterable gallery with modal viewing
- 🧭 **Smooth Navigation** - React Router for seamless page transitions
- 🌟 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 🔍 **SEO Ready** - Semantic HTML structure

## Pages

- **Home** - Hero section, featured works, creative process, and call-to-action
- **About** - Artist biography, skills, timeline, awards, and philosophy
- **Gallery** - Filterable sculpture collection with detailed modal views
- **Contact** - Contact form, studio information, map, and FAQ
- **404** - Custom not-found page

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite 7** - Next-generation frontend tooling
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd jaydevart
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
jaydevart/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx (Gallery)
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # App entry point
│   ├── index.css       # Global styles with Tailwind
│   └── App.css         # Additional app styles
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: '#2c2c2c',    // Dark gray
  secondary: '#f5f5f5',  // Light gray
  accent: '#d4af37',     // Gold
}
```

### Content

- Replace placeholder images with actual artwork images
- Update text content in each page component
- Modify contact information in Footer and Contact components
- Add real social media links

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or inquiries, please visit the contact page.
