# Scribify Landing Page - Claude Context

## Project Overview
This is the marketing/landing page for **Scribify** (`scribify-landing`), a macOS Electron app for audio transcription and summarization. Built with Next.js 15, React 18, Tailwind CSS. Deployed to Netlify.

## Scribify App Build Artifacts

The signed and notarized macOS builds are located in the sibling project:

```
/Users/tejas/projects/claude_transcript/dist/
```

### Available Builds (v2.5.0)

| File | Architecture | Format | Size |
|------|-------------|--------|------|
| `Scribify-2.5.0-arm64.dmg` | Apple Silicon (M1/M2/M3) | DMG | ~94 MB |
| `Scribify-2.5.0.dmg` | Intel (x64) | DMG | ~101 MB |
| `Scribify-2.5.0-arm64-mac.zip` | Apple Silicon | ZIP | ~90 MB |
| `Scribify-2.5.0-mac.zip` | Intel (x64) | ZIP | ~96 MB |

### Code Signing Details
- **Signed by:** Developer ID Application: Tejas Shah (M9F8AM98LS)
- **Team ID:** M9F8AM98LS
- **App ID:** com.tejasshah.scribify
- **Notarized:** Yes (Apple notarization stapled)
- **Hardened Runtime:** Enabled
- **Certificate expires:** February 12, 2031

## Hosting Downloads

To serve downloads from this website, copy the DMG files to the `public/downloads/` directory:

```bash
mkdir -p /Users/tejas/projects/scribify_landingpage/public/downloads
cp /Users/tejas/projects/claude_transcript/dist/Scribify-2.5.0-arm64.dmg /Users/tejas/projects/scribify_landingpage/public/downloads/
cp /Users/tejas/projects/claude_transcript/dist/Scribify-2.5.0.dmg /Users/tejas/projects/scribify_landingpage/public/downloads/
```

Then link to them in the site:
```
/downloads/Scribify-2.5.0-arm64.dmg   (Apple Silicon)
/downloads/Scribify-2.5.0.dmg          (Intel)
```

**Important:** DMG files are ~100MB each. If hosting on Netlify (free tier has 100MB deploy limit), use an external file host (e.g., GitHub Releases, S3, Cloudflare R2) and link externally instead.

### Alternative: External Download Hosting
If files are too large for Netlify, upload to:
- **GitHub Releases:** Create a release at the app repo and attach DMGs
- **Cloudflare R2 / AWS S3:** Upload and use direct URLs
- **Gumroad:** Current product page at https://tejpics.gumroad.com/l/lwchdo

## Landing Page Structure

```
src/
  app/
    page.tsx          # Main landing page
    layout.tsx        # Root layout
  components/
    Hero.tsx           # Hero section with main CTA
    Features.tsx       # Feature highlights
    Benefits.tsx       # User benefits
    EasySetup.tsx      # Setup instructions
    Pricing.tsx        # Pricing section (Gumroad integration)
    FAQ.tsx            # Frequently asked questions
    FinalCTA.tsx       # Bottom call-to-action
    FloatingCTA.tsx    # Floating buy button
    Footer.tsx         # Site footer
    Testimonials.tsx   # User testimonials
    TargetAudience.tsx # Target audience section
    GumroadTracking.tsx # Gumroad analytics
```

## Current Sales Flow
1. User visits landing page
2. Clicks buy/download button -> redirects to Gumroad
3. Gumroad handles payment and delivers license key
4. User downloads app from Gumroad

## Desired Sales Flow (Direct Downloads)
1. User visits landing page
2. Clicks buy button -> payment handled (Gumroad or direct)
3. After purchase, user gets download links for the signed DMGs
4. Auto-detect Apple Silicon vs Intel and offer correct DMG

## Key Files
- `netlify.toml` - Netlify deployment config
- `next.config.js` - Next.js config
- `deploy.sh` - Deployment script
- `src/components/Pricing.tsx` - Where download/buy buttons live
- `src/components/Hero.tsx` - Main CTA button
