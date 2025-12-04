# Portfolio Website with Anti-Gravity Animations

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, featuring advanced anti-gravity style animations for a smooth, dynamic, and futuristic user experience.

![Portfolio Preview](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Portfolio+Website)

## ✨ Features

- 🎨 **Modern Design**: Clean, minimal aesthetic with pastel gradients and glass morphism effects
- 🎭 **Anti-Gravity Animations**: Floating elements, scroll-triggered reveals, and mouse parallax
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized**: Fast loading with Vite and optimized animations
- 🧩 **Component-Based**: Reusable React components for easy customization
- 🎯 **SEO Ready**: Semantic HTML and proper meta tags

## 📄 Pages

- **Home**: Hero section with floating animations and quick highlights
- **About**: Skills, education, and interests with animated icons
- **Projects**: Filterable project grid with hover effects
- **Goa Cafe**: Detailed case study with gallery and testimonials
- **Resume**: Interactive timeline with downloadable PDF
- **Contact**: Animated form with floating input fields

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx   # Top navigation bar
│   ├── Footer.jsx       # Footer with social links
│   ├── FloatingElement.jsx
│   ├── ScrollReveal.jsx
│   └── MouseParallax.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── GoaCafe.jsx
│   ├── Resume.jsx
│   └── Contact.jsx
├── utils/              # Utility functions
│   └── animations.js   # Framer Motion variants
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Update Personal Information

1. **Name & Bio**: Edit `src/pages/Home.jsx` and `src/pages/About.jsx`
2. **Projects**: Modify the projects array in `src/pages/Projects.jsx`
3. **Resume**: Update experience and education in `src/pages/Resume.jsx`
4. **Contact**: Change contact details in `src/pages/Contact.jsx`
5. **Social Links**: Update URLs in `src/components/Footer.jsx`

### Styling

- **Colors**: Edit `tailwind.config.js` to change the color palette
- **Fonts**: Update Google Fonts import in `src/index.css`
- **Animations**: Adjust timing and easing in `src/utils/animations.js`

### Adding Images

1. Place images in `src/assets/`
2. Import: `import myImage from '../assets/myImage.jpg'`
3. Use: `<img src={myImage} alt="Description" />`

## 🎭 Animation Components

### FloatingElement
```jsx
<FloatingElement duration={6} yOffset={20} delay={0}>
  <div>Your content</div>
</FloatingElement>
```

### ScrollReveal
```jsx
<ScrollReveal variant={fadeInUp} delay={0.2}>
  <div>Reveals on scroll</div>
</ScrollReveal>
```

### MouseParallax
```jsx
<MouseParallax strength={15}>
  <div>Follows mouse movement</div>
</MouseParallax>
```

## 📦 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

Made with ❤️ and React
