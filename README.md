# Sinh Ern Professional Portfolio

A modern, responsive portfolio website built with Nuxt 3, Tailwind CSS, and glassmorphism design.

## 🚀 Features

- **Glassmorphism Design**: Beautiful frosted glass effects with backdrop blur
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Modern Animations**: Smooth transitions and floating effects
- **Component-Based Architecture**: Modular and maintainable code
- **SEO Optimized**: Meta tags and proper structure
- **Fast Performance**: Built with Nuxt 3 for optimal speed

## 📁 Project Structure

```
├── components/           # Reusable Vue components
│   ├── TheNavigation.vue # Navigation component
│   ├── TheHero.vue       # Hero section
│   ├── TheAbout.vue      # About section
│   ├── TheSkills.vue     # Skills section
│   ├── TheProjects.vue   # Projects showcase
│   ├── TheExperience.vue # Experience timeline
│   ├── TheContact.vue    # Contact form
│   └── TheFooter.vue     # Footer component
├── layouts/              # Layout templates
│   └── default.vue       # Default layout with nav and footer
├── pages/                # File-based routing
│   └── index.vue         # Home page
├── assets/               # Static assets
│   └── css/
│       └── main.css      # Main CSS with glassmorphism utilities
├── app.vue               # Root application component
├── nuxt.config.ts        # Nuxt 3 configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Project dependencies
```

## 🎨 Design System

### Glassmorphism Utilities

The project includes custom CSS utilities for glassmorphism effects:

- `.glass` - Basic glass effect with backdrop blur
- `.glass-card` - Complete card with glass effect and hover animations
- `.glass-button` - Interactive button with glass styling
- `.glass-input` - Form input with glass styling
- `.gradient-bg` - Animated gradient background
- `.gradient-text` - Gradient text effect

### Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (xl+)

All components are designed mobile-first with progressive enhancement.

## 🛠️ Development

### Prerequisites

- Node.js 16+ or 18+
- npm or yarn

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 📱 Responsive Features

### Navigation
- **Desktop**: Horizontal navigation with smooth hover effects
- **Mobile**: Hamburger menu with slide-down animation
- **Tablet**: Optimized spacing and typography

### Layout Adaptations
- **Hero Section**: Responsive typography and spacing
- **Skills**: Grid layout adapts from 1 column (mobile) to 4 columns (desktop)
- **Projects**: Grid adapts from 1 column to 3 columns based on screen size
- **Contact**: Stacked layout on mobile, side-by-side on desktop

### Typography Scale
- **Mobile**: Smaller, readable text sizes
- **Tablet**: Medium text sizes with better spacing
- **Desktop**: Large, impactful typography

## 🎯 Customization

### Updating Content

Each component contains data that can be easily customized:

1. **Hero Section** (`components/TheHero.vue`):
   - Update name, title, and tagline
   - Modify button text and links

2. **About Section** (`components/TheAbout.vue`):
   - Edit personal description
   - Update highlights and achievements

3. **Skills Section** (`components/TheSkills.vue`):
   - Add/remove skill categories
   - Adjust skill levels and names

4. **Projects Section** (`components/TheProjects.vue`):
   - Add new projects to the projects array
   - Update GitHub and demo links

5. **Contact Section** (`components/TheContact.vue`):
   - Update contact information
   - Modify social media links

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `pages/index.vue`
3. Update navigation links in `components/TheNavigation.vue`

### Styling Changes

- **Colors**: Update gradient colors in `tailwind.config.js`
- **Animations**: Modify keyframes in `assets/css/main.css`
- **Glassmorphism**: Adjust opacity and blur values in CSS utilities

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run generate`
3. Set publish directory: `dist`

### Vercel
1. Import project from GitHub
2. Vercel will auto-detect Nuxt.js configuration
3. Deploy with default settings

### Other Static Hosts
1. Run `npm run generate`
2. Upload the `dist` folder to your hosting provider

## 📧 Contact

- **Email**: sinh.ern.pfdev@gmail.com
- **LinkedIn**: [linkedin.com/in/sinh-ern-8b22b0345](https://www.linkedin.com/in/sinh-ern-8b22b0345)
- **GitHub**: [github.com/sinh-dev](https://github.com/sinh-dev)

---

Built with ❤️ using Nuxt 3 & Tailwind CSS
