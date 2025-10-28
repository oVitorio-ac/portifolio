# Vitorio A. Cavalheiro - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features internationalization (Portuguese/English), dark theme, and dynamic GitHub repository integration.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Internationalization**: Support for Portuguese (PT-BR) and English (EN-US)
- **Dark Theme**: Modern dark color scheme with consistent branding
- **Dynamic Content**: Real-time GitHub repository fetching and display
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized with Next.js features and lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Icons**: Custom SVG icons
- **Deployment**: Vercel
- **API Integration**: GitHub REST API

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (locale)/          # Internationalized routes
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── navigation.tsx     # Main navigation component
│   │   └── sections/          # Page sections
│   │       ├── HeroSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── ContactSection.tsx
│   │       └── FooterSection.tsx
│   ├── i18n/                  # Internationalization config
│   ├── lib/                   # Utility functions
│   └── messages/              # Translation files
├── public/                    # Static assets
│   ├── certificados/          # Certificate images
│   └── *.svg                 # Icons and images
├── vercel.json               # Vercel deployment config
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- GitHub Personal Access Token (for repository data)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

Add your GitHub token:
```env
GITHUB_TOKEN=your_github_token_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Internationalization

The project supports two languages:
- Portuguese (PT-BR) - `/pt`
- English (EN-US) - `/en`

Language switching is available in the navigation and footer.

## 🎨 Color Scheme

- Primary: `#263138` (Dark charcoal)
- Secondary: `#445964` (Medium gray)fo
- Accent: Primary theme colors
- Background: Dark gradient (`#0a0a0a` to `#1a1a1a`)

## 📱 Sections

1. **Hero**: Welcome message with call-to-action
2. **Experience**: Professional background and roles
3. **About**: Personal information, skills, and certifications
4. **Projects**: GitHub repositories showcase
5. **Contact**: Contact form and information
6. **Footer**: Social links and language switcher

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `GITHUB_TOKEN`
3. Deploy automatically on push

### Manual Deployment

```bash
npm run build
npm start
```

## 🔧 Configuration

### GitHub API

The project fetches repository data from GitHub. To enable this:

1. Create a GitHub Personal Access Token
2. Add it to your environment variables as `GITHUB_TOKEN`
3. The API route will fetch public repositories sorted by update date

### Customizing Content

- **Personal Info**: Update `src/messages/` files
- **Images**: Replace files in `public/` directory
- **Styling**: Modify Tailwind classes in components
- **Colors**: Update CSS custom properties in `globals.css`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for real user experience
- **Bundle Size**: Optimized with Next.js features
- **Image Optimization**: Automatic with Next.js Image component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vitorio A. Cavalheiro**
- Full Stack Developer
- Data Engineer
- Open Source Contributor

---

Built with ❤️ using Next.js and TypeScript
