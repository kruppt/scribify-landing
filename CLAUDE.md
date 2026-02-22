# Scribify Landing Page - Claude Context

## Project Overview
This is the marketing/landing page for **Scribify** (`scribify-landing`), a macOS Electron app for audio transcription and summarization. Built with Next.js 15, React 18, Tailwind CSS. Deployed to Netlify.

## Scribify App Build Artifacts

The signed and notarized macOS builds are located in the sibling project:

```
/Users/tejas/projects/claude_transcript/dist/
```

### Available Builds (v2.6.0)

| File | Architecture | Format | Size |
|------|-------------|--------|------|
| `Scribify-2.6.0-arm64.dmg` | Apple Silicon (M1/M2/M3) | DMG | ~95 MB |
| `Scribify-2.6.0.dmg` | Intel (x64) | DMG | ~102 MB |

### Code Signing Details
- **Signed by:** Developer ID Application: Tejas Shah (M9F8AM98LS)
- **Team ID:** M9F8AM98LS
- **App ID:** com.tejasshah.scribify
- **Notarized:** Yes (Apple notarization stapled)
- **Hardened Runtime:** Enabled
- **Certificate expires:** February 12, 2031

## Hosting Downloads

Downloads are hosted via **GitHub Releases** on the public releases repo (`kruppt/scribify-releases`). DMG files are ~100MB each (too large for Netlify's deploy limit). Source code stays private in `kruppt/scribify`.

Download URLs (update version as needed):
```
https://github.com/kruppt/scribify-releases/releases/download/v2.6.0/Scribify-2.5.0-arm64.dmg   (Apple Silicon)
https://github.com/kruppt/scribify-releases/releases/download/v2.6.0/Scribify-2.5.0.dmg          (Intel)
```

These are referenced in `src/app/download/page.tsx`.

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
    Pricing.tsx        # Pricing section (Stripe integration)
    FAQ.tsx            # Frequently asked questions
    FinalCTA.tsx       # Bottom call-to-action
    FloatingCTA.tsx    # Floating buy button
    Footer.tsx         # Site footer
    Testimonials.tsx   # User testimonials
    TargetAudience.tsx # Target audience section
```

## Sales Flow (Stripe + GitHub Releases)
1. User visits landing page
2. Clicks "Buy Now" button -> redirects to Stripe Payment Link (hosted checkout)
3. Stripe processes $25 payment
4. Stripe redirects to `/download` page on scribifyforall.com
5. Download page shows DMG links (hosted on GitHub Releases)
6. Auto-detects Apple Silicon vs Intel and highlights the correct download

### Setup Requirements
- **Stripe Payment Link:** Create in Stripe Dashboard, set success URL to `https://scribifyforall.com/download`
- **GitHub Release:** Upload DMGs to a release on the app repo
- **Update placeholder URLs:** Search for `YOUR_PAYMENT_LINK` in components and replace with actual Stripe URL

## Key Files
- `netlify.toml` - Netlify deployment config
- `next.config.js` - Next.js config
- `deploy.sh` - Deployment script
- `src/components/Pricing.tsx` - Where download/buy buttons live
- `src/components/Hero.tsx` - Main CTA button
