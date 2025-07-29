# Scribify Landing Page Testing Guide

## 🚀 Local Testing

### Start Development Server
```bash
npm run dev
```
Visit: `http://localhost:3000`

### Test Production Build
```bash
npm run build
npx serve out
```
Visit: `http://localhost:3000` (or the port shown)

## ✅ Testing Checklist

### 🎨 Visual & Design Testing

**Desktop (1440px+)**
- [ ] Hero section displays properly with gradient background
- [ ] Typography looks elegant (Playfair Display + Inter fonts)
- [ ] Benefits section shows 6 cards in 3x2 grid
- [ ] Pricing section displays correctly in dark theme
- [ ] All sections have proper spacing and premium feel

**Mobile (375px - 768px)**
- [ ] Hero stacks vertically on mobile
- [ ] Benefits section becomes single column
- [ ] Pricing card adjusts to mobile width
- [ ] All text remains readable
- [ ] Buttons are touch-friendly

**Tablet (768px - 1024px)**
- [ ] Layout adapts properly between mobile/desktop
- [ ] Benefits show 2 columns
- [ ] Navigation and interactions work smoothly

### 🔗 Functionality Testing

**Purchase Flow**
- [ ] "Buy Now - $25" button in Hero → Opens Gumroad in new tab
- [ ] "Buy on Gumroad" button in Pricing → Opens Gumroad in new tab  
- [ ] "Buy Now - $25" button in Final CTA → Opens Gumroad in new tab
- [ ] All Gumroad links use correct URL: `https://tejpics.gumroad.com/l/lwchdo?wanted=true`

**Interactive Elements**
- [ ] FAQ items expand/collapse correctly
- [ ] Hover effects work on benefit cards
- [ ] Button hover animations function properly
- [ ] All hover states provide visual feedback

**Content Verification**
- [ ] All transcription-focused features are listed correctly:
  - [ ] Very Accurate
  - [ ] Ease of Use  
  - [ ] Transcribe Any Audio
  - [ ] Export Anywhere
  - [ ] Pre-Defined Templates
  - [ ] Custom Templates
- [ ] Price shows $25 (not $29) everywhere
- [ ] Hero describes "Audio Transcription" not just "Note-Taking"

### 📱 Browser Testing

**Chrome**
- [ ] All features work correctly
- [ ] Fonts load properly
- [ ] Animations are smooth

**Safari** 
- [ ] Layout renders correctly
- [ ] All interactions function
- [ ] Premium design elements display

**Firefox**
- [ ] Cross-browser compatibility
- [ ] All links open correctly

**Mobile Safari (iPhone)**
- [ ] Touch interactions work
- [ ] Layout is responsive
- [ ] Purchase buttons work

### ⚡ Performance Testing

**Page Speed**
- [ ] Page loads under 2 seconds
- [ ] Images load properly
- [ ] No layout shift during load
- [ ] Smooth scrolling and interactions

**Test Tools:**
- Google PageSpeed Insights
- GTmetrix
- Browser DevTools Network tab

### 🔒 Security & SEO Testing

**Security Headers** (check in DevTools Network tab)
- [ ] Content Security Policy present
- [ ] HTTPS redirect working (when deployed)
- [ ] X-Frame-Options set

**SEO Elements**
- [ ] Page title: "Scribify - Effortless Audio Transcription for Mac"
- [ ] Meta description mentions transcription
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Alt text on important elements

### 📊 Analytics Testing

**Tracking Setup** (check DevTools Console)
- [ ] Google Analytics script loads
- [ ] Gumroad tracking script loads
- [ ] No JavaScript errors in console
- [ ] Click tracking fires on Gumroad links

## 🧪 Advanced Testing

### Screen Readers (Accessibility)
```bash
# macOS built-in screen reader
# Press Cmd + F5 to toggle VoiceOver
```
- [ ] All content is readable by screen reader
- [ ] Buttons have proper labels
- [ ] Navigation is logical

### Load Testing
```bash
# Test with slow network
# Chrome DevTools → Network tab → Throttling → Slow 3G
```
- [ ] Page remains usable on slow connections
- [ ] Critical content loads first
- [ ] Progressive enhancement works

## 🐛 Common Issues to Check

**Font Loading**
- [ ] No flash of unstyled text (FOUT)
- [ ] Fallback fonts look acceptable
- [ ] Google Fonts load correctly

**Image Issues**
- [ ] Hero mockup displays properly
- [ ] No broken image icons
- [ ] Proper loading states

**JavaScript Errors**
- [ ] No console errors
- [ ] FAQ interactions work
- [ ] Analytics fire correctly

## 📋 Pre-Launch Checklist

**Content Review**
- [ ] All copy is transcription-focused
- [ ] No spelling/grammar errors
- [ ] Pricing is consistently $25
- [ ] Gumroad links are correct

**Technical Review**
- [ ] Build completes without errors
- [ ] All routes work correctly
- [ ] Sitemap includes scribifyforall.com
- [ ] Robots.txt is properly configured

**Business Review**
- [ ] Value proposition is clear
- [ ] Call-to-actions are compelling
- [ ] Trust signals are present
- [ ] Purchase flow is seamless

## 🚀 Testing Commands

```bash
# Start development server
npm run dev

# Build and test production
npm run build
npx serve out

# Check for build errors
npm run build 2>&1 | grep -i error

# Test mobile layout (Chrome DevTools)
# F12 → Device toolbar → Choose device
```

Your Scribify landing page should pass all these tests before going live! 🎉