# DevSecOps Portfolio - Prasad Shekhar Naik

A modern, responsive portfolio website built with Angular 17 and TailwindCSS, showcasing DevSecOps expertise, projects, and professional experience.

## 🚀 Features

- **Fully Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Dark Mode Support** - Toggle between light and dark themes with system preference detection
- **Modern Animations** - Smooth transitions and engaging micro-interactions
- **SEO Optimized** - Meta tags and structured data for better search engine visibility
- **Performance Focused** - Optimized images, lazy loading, and efficient code splitting

## 🛠️ Tech Stack

- **Frontend**: Angular 17, TypeScript
- **Styling**: TailwindCSS, Custom CSS animations
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prasaa18/devsecops-portfolio.git
   cd devsecops-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install TailwindCSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

## 🏗️ Build for Production

```bash
npm run build
# or
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Sections

1. **Home** - Hero section with profile image and introduction
2. **About** - Professional summary and key highlights
3. **Skills** - Technical skills organized by categories with proficiency levels
4. **Experience** - Professional work history with detailed responsibilities
5. **Projects** - Featured projects with technologies and GitHub links
6. **Education** - Academic background and achievements
7. **Certifications** - Professional certifications and credentials
8. **YouTube** - DevSecOps tutorial videos and channel information
9. **GitHub** - Repository showcase with live GitHub API integration
10. **Blog** - Technical articles and Medium blog integration
11. **Contact** - Contact form with validation and social links
12. **Footer** - Quick links and additional information

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
- Update personal information in component TypeScript files
- Replace profile image in `src/assets/1000249455.jpg`
- Update resume file in `src/assets/resume.pdf`
- Modify social media links and contact information

### Animations
Custom animations are defined in `tailwind.config.js` and can be extended or modified as needed.

## 🔧 Configuration

### Environment Variables
Create environment files for different deployment stages:
- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

### API Integration
- GitHub API integration in `github.component.ts`
- Contact form can be integrated with EmailJS or backend service
- Blog section ready for Medium API integration

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Mobile-first responsive design
- Optimized images and lazy loading
- Efficient bundle size with tree shaking

## 🚀 Deployment

### GitHub Pages
```bash
ng build --prod --base-href="/your-repo-name/"
npx angular-cli-ghpages --dir=dist/devsecops-portfolio
```

### Netlify
1. Connect your GitHub repository
2. Set build command: `ng build --prod`
3. Set publish directory: `dist/devsecops-portfolio`

### Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Prasad Shekhar Naik**
- 📧 Email: prasad.naik@example.com
- 📱 Phone: +91 9148831446 / +91 8310483089
- 🔗 LinkedIn: [Your LinkedIn Profile]
- 🐙 GitHub: [https://github.com/prasaa18](https://github.com/prasaa18)
- 📝 Medium: [Your Medium Profile]
- 🎥 YouTube: [Your YouTube Channel]

---

⭐ If you found this project helpful, please give it a star!