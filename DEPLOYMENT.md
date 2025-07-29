# Deployment Instructions

This Next.js landing page is configured for static export and can be deployed to various hosting platforms.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment Options

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js configuration
3. Deploy with default settings

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. The `netlify.toml` file is already configured

### GitHub Pages

1. Enable GitHub Actions in your repository
2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Manual Deployment

1. Run `npm run build`
2. Upload the `out` directory to your hosting provider
3. Configure your server to serve static files

## Environment Variables

Before deploying, make sure to update:

1. Google Analytics tracking ID in `src/components/Analytics.tsx`
2. Domain URLs in `src/app/sitemap.ts` and `src/app/robots.ts`
3. Any other app-specific configurations

## Performance Optimizations

The site is already optimized with:
- Static export for fast loading
- Tailwind CSS for minimal bundle size
- Optimized images and fonts
- SEO meta tags and structured data
- Mobile-responsive design

## Support

For deployment issues, check the respective platform documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/en/pages)