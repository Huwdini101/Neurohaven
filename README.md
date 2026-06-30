# The Neuro Haven — Static Website

A modern, responsive React + Tailwind CSS website for The Neuro Haven, providing education and support for neurodivergent minds. This is a **fully static site** with no backend server required — perfect for deployment on Cloudflare Pages, Netlify, Vercel, or any static hosting provider.

## 🎯 Quick Start

### Prerequisites

- **Node.js** 22.22.2 (pinned in `.node-version`)
- **pnpm** 10.11.1 (pinned in `package.json`)

### Local Development

```bash
# Install dependencies
pnpm install

# Start the dev server (runs on http://localhost:3000)
pnpm run dev

# Build for production
pnpm run build

# Preview the production build locally
pnpm run preview
```

## 📁 Project Structure

```
neurohaven/
├── client/
│   ├── src/
│   │   ├── pages/          # Page components (Home, Blog, Article, Privacy)
│   │   ├── components/     # Reusable UI components
│   │   ├── data/           # Static data (articles.ts)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── index.css       # Global styles + Tailwind
│   │   ├── App.tsx         # Main router
│   │   └── main.tsx        # React entry point
│   ├── public/
│   │   ├── assets/          # Local images, social preview, and favicon
│   │   ├── robots.txt      # SEO: tells search engines which pages to crawl
│   │   └── sitemap.xml     # SEO: lists all pages for indexing
│   └── index.html          # HTML template
├── vite.config.ts          # Vite build configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── dist/                   # Production build output (generated)
```

## 🚀 Deployment

### Option 1: Cloudflare Pages (Recommended)

Cloudflare Pages is free, fast, and integrates seamlessly with GitHub.

#### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: NeuroHaven website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/neurohaven.git
git push -u origin main
```

#### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **Pages** from the left sidebar
3. Click **Create a project** → **Connect to Git**
4. Authorize GitHub and select the `neurohaven` repository
5. Configure the build settings:
   - **Framework preset**: None (or Vite if available)
   - **Build command**: `pnpm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave blank)
6. Click **Save and Deploy**

Cloudflare will automatically deploy on every push to `main`. Your site will be live at `https://neurohaven.pages.dev`.

#### Step 3: Connect Custom Domain (Optional)

1. In Cloudflare Pages project settings, go to **Custom domains**
2. Add `theneurohaven.com` and `www.theneurohaven.com`
3. Follow the DNS setup instructions

### Option 2: Netlify

1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Set build command: `pnpm run build`
3. Set publish directory: `dist`
4. Deploy!

### Option 3: Vercel

1. Import your GitHub repository at [vercel.com](https://vercel.com)
2. Vercel auto-detects Vite — confirm build settings
3. Deploy!

## 📧 Email Capture (MailerLite Integration)

The website includes an email signup form powered by **MailerLite**. The form is fully client-side and works on all static hosting platforms.

**How it works:**
- Users enter their name and email in the form
- The form submits directly to MailerLite's API
- No backend server needed
- Fully GDPR/CCPA compliant

**To customize:**
1. Open `client/src/components/EmailCapture.tsx`
2. Replace the `MAILERLITE_FORM_URL` with your own MailerLite form URL
3. You can find your form URL in MailerLite dashboard → Forms → Your Form → Embed

## 📝 Adding Blog Articles

Blog articles are stored in `client/src/data/articles.ts` as a static array. To add a new article:

```typescript
// In client/src/data/articles.ts
export const articles: Article[] = [
  {
    slug: "your-article-slug",
    title: "Your Article Title",
    excerpt: "Short preview text...",
    metaDescription: "SEO description...",
    category: "ADHD", // or "Autism", "Executive Function", etc.
    publishedAt: "2026-05-25",
    readTimeMinutes: 7,
    coverImage: "https://your-image-url.jpg",
    coverAlt: "Alt text for image",
    body: `Your article content here...

## Subheading

More content...`,
  },
  // ... more articles
];
```

**Important:** Update `client/public/sitemap.xml` when adding articles so Google can index them.

## 🔍 SEO Checklist

- ✅ **Sitemap**: `client/public/sitemap.xml` — lists all pages
- ✅ **Robots.txt**: `client/public/robots.txt` — tells search engines to crawl everything
- ✅ **Meta tags**: Defined in `client/index.html` (title, description, Open Graph, Twitter Card)
- ✅ **Individual article meta**: Each article has its own `metaDescription` for SEO
- ✅ **Semantic HTML**: Pages use proper heading hierarchy and semantic elements

**Next steps for SEO:**
1. Submit sitemap to [Google Search Console](https://search.google.com/search-console)
2. Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. Monitor rankings and traffic in Google Search Console

## 🛠️ Available Scripts

```bash
pnpm run dev        # Start dev server with hot reload
pnpm run build      # Build for production (outputs to dist/)
pnpm run preview    # Preview production build locally
pnpm run check      # Run TypeScript type checking
pnpm run format     # Format code with Prettier
```

## 🎨 Customization

### Colors & Branding

Global colors and theme variables are defined in `client/src/index.css`. Update the CSS custom properties to change the brand colors:

```css
:root {
  --primary: var(--color-blue-700);
  --accent: oklch(0.967 0.001 286.375);
  /* ... more colors */
}
```

### Typography

Fonts are loaded from Google Fonts in `client/index.html`:
- **Space Grotesk** (headings, bold text)
- **Source Sans 3** (body text)

To change fonts, update the Google Fonts link and adjust `client/src/index.css`.

### Layout & Components

- **Local UI components**: Small reusable helpers in `client/src/components/ui/`
- **Tailwind CSS**: Utility-first CSS framework for styling

## 🚨 Important Notes

### Deployment Model

This repository is intentionally frontend-only. The production build contains
HTML, CSS, JavaScript, fonts, and images; it does not compile or deploy a backend.

### External Dependencies

This site relies on external services that work on any static host:

- **MailerLite**: Email signup forms (JSONP API, no backend needed)
- **Google Fonts**: Typography
- **Local static assets**: Images, social preview, and favicon are copied into `dist/assets/`

### No Backend Required

This is a **100% static site**. There is:
- ❌ No database
- ❌ No server-side code
- ❌ No authentication
- ✅ Only HTML, CSS, and JavaScript

## 📦 Dependencies

### Production
- **React 19**: UI framework
- **Wouter**: Lightweight client-side router
- **Tailwind CSS 4**: Styling
- **Local UI helpers**: Buttons, cards, inputs, and toast presentation
- **Sonner**: Toast notifications
- **Lucide React**: Icon library

### Development
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **Prettier**: Code formatting

## 🐛 Troubleshooting

### Build fails with "Module not found"

```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Images not loading

All images are hosted on an external CDN. If images don't load:
1. Check your internet connection
2. Verify the CDN URL is correct in the image sources
3. Check browser console for CORS errors

### Form submissions not working

The email form submits directly to MailerLite. If it's not working:
1. Verify the `MAILERLITE_FORM_URL` in `EmailCapture.tsx` is correct
2. Check browser console for errors
3. Ensure MailerLite account is active

## 📞 Support

For questions about this website:
- Email: support@theneurohaven.com
- Facebook: [The Neuro Haven Community](https://www.facebook.com/share/g/1BYQ6gxsyg/)

## 📄 License

MIT License — feel free to use this as a template for your own projects.

---

**Last updated**: June 25, 2026
**Built with**: React, Vite, Tailwind CSS, Cloudflare Pages
