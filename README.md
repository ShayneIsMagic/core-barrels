# Weldco Blades - PDC Core Barrels Website

A modern, SEO-optimized website for Weldco Blades' PDC core barrel products, built with Astro for maximum performance and search engine visibility.

## 🚀 Features

### SEO & Performance
- **Comprehensive SEO Optimization**: Meta tags, structured data, and technical SEO
- **Schema.org Markup**: Organization, Product, Review, and ContactPage schemas
- **Technical SEO Files**: robots.txt, sitemap.xml, web manifest
- **PWA Capabilities**: Service worker, offline functionality, app-like experience
- **Performance Optimized**: Preloading, lazy loading, and intersection observers
- **Mobile-First Design**: Responsive across all devices

### Content & User Experience
- **Regional Focus**: Rocky Mountain region targeting (UT, CO, WY, ID, MT)
- **Customer Testimonials**: Real case studies from EasTseW and SCI
- **Product Showcase**: Detailed specifications for 8" and 10" core bits
- **Performance Data**: 4X more cores proof with real statistics
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### Security & Forms
- **Spam Protection**: Honeypot fields, rate limiting, CAPTCHA
- **Form Validation**: Client-side and server-side validation
- **Security Headers**: XSS protection, content type options
- **Data Protection**: GDPR-ready privacy considerations

## 📁 Project Structure

```
core-barrels/
├── public/
│   ├── images/           # Optimized product and company images
│   ├── robots.txt        # Search engine crawling instructions
│   ├── sitemap.xml       # XML sitemap for SEO
│   ├── site.webmanifest  # PWA manifest file
│   └── sw.js            # Service worker for offline functionality
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Header.astro  # Navigation with mobile menu
│   │   └── Footer.astro  # Contact info and social links
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro  # Main layout with SEO enhancements
│   ├── pages/            # Main website pages
│   │   ├── index.astro   # Homepage with hero and features
│   │   ├── products.astro # Product showcase and pricing
│   │   ├── performance.astro # Case studies and testimonials
│   │   └── contact.astro # Contact form and business info
│   └── styles/           # Global CSS styles
└── seo_strategy.md       # Comprehensive SEO documentation
```

## 🎯 SEO Strategy

### Target Keywords
- **Primary**: PDC core barrels, utility locating equipment, core barrel rebuild
- **Regional**: Utah drilling contractor, Colorado utility locating, Wyoming oil field
- **Long-tail**: Dry cutting core barrels, winter drilling equipment, 4X performance

### Technical SEO Implementation
- ✅ Meta tags optimization for all pages
- ✅ Open Graph and Twitter Card tags
- ✅ Structured data (Schema.org) markup
- ✅ XML sitemap and robots.txt
- ✅ Canonical URLs and breadcrumbs
- ✅ Mobile-first responsive design
- ✅ Core Web Vitals optimization

### Local SEO Focus
- **Service Area**: Utah, Colorado, Wyoming, Idaho, Montana
- **Primary Location**: Vernal, UT (1130 East Highway 40)
- **Contact Information**: (435) 828-6330, sales@weldcoblades.com
- **Business Hours**: Monday-Friday 8am-5pm

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd core-barrels

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup
The project uses Astro's built-in development server. No additional environment variables are required for basic functionality.

## 📱 PWA Features

### Service Worker
- Caches critical resources for offline access
- Automatic cache cleanup for updates
- Network-first strategy for dynamic content

### Web App Manifest
- App-like installation experience
- Custom theme colors and icons
- Standalone display mode

## 🔒 Security Features

### Form Protection
- Honeypot fields to catch bots
- Rate limiting (30-second intervals)
- Simple CAPTCHA validation
- Input sanitization and validation

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Strict referrer policy

## 📊 Analytics & Monitoring

### Recommended Tools
- **Google Analytics 4**: Traffic and conversion tracking
- **Google Search Console**: SEO performance monitoring
- **Core Web Vitals**: Performance metrics
- **Mobile-Friendly Test**: Mobile optimization

### Key Metrics
- Organic traffic growth by region
- Contact form conversion rates
- Page load speed and Core Web Vitals
- Mobile usability scores

## 🚀 Deployment

### Netlify (Recommended)
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms
The static build in the `dist/` folder can be deployed to any static hosting service.

## 📈 Performance Optimization

### Loading Speed
- Critical CSS inlined
- Images optimized and lazy-loaded
- Fonts preloaded with display=swap
- JavaScript deferred and optimized

### Core Web Vitals
- **LCP**: Optimized hero images and critical resources
- **FID**: Minimal JavaScript with efficient event handling
- **CLS**: Stable layout with proper image dimensions

## 🔄 Content Management

### Regular Updates
- Performance data and testimonials
- Product specifications and pricing
- Regional case studies
- Industry news and insights

### SEO Maintenance
- Monthly sitemap updates
- Schema markup validation
- Page speed monitoring
- Keyword ranking tracking

## 📞 Support & Contact

For technical support or questions about the website:
- **Email**: sales@weldcoblades.com
- **Phone**: (435) 828-6330
- **Address**: 1130 East Highway 40, Vernal, UT 84078

## 📄 License

This project is proprietary to Weldco Blades. All rights reserved.

---

**Built with ❤️ using Astro for maximum performance and SEO** 