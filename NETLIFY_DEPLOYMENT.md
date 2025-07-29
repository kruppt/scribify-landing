# Netlify Deployment Guide with Custom Domain

## 🚀 Step 1: Prepare Your Repository

First, push your code to GitHub:

```bash
# Initialize git repo (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Add Scribify landing page with Starbucks Reserve design"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/scribify-landing.git

# Push to GitHub
git push -u origin main
```

## 🌐 Step 2: Deploy to Netlify

### Option A: GitHub Integration (Recommended)

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New site from Git"**
4. **Choose GitHub** and authorize Netlify
5. **Select your repository** (scribify-landing)
6. **Configure build settings:**
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build` (should auto-detect)
   - **Publish directory:** `out` (should auto-detect)
7. **Click "Deploy site"**

### Option B: Manual Upload

1. **Build locally:** `npm run build`
2. **Go to [netlify.com](https://netlify.com)**
3. **Drag and drop** the `out` folder to Netlify

## 🏷️ Step 3: Configure Your Custom Domain

### In Netlify Dashboard:

1. **Go to your site dashboard**
2. **Click "Domain settings"**
3. **Click "Add custom domain"**
4. **Enter your domain:** `scribifyforall.com`
5. **Netlify will provide DNS instructions**

### DNS Configuration for scribifyforall.com:

**If using Netlify DNS (Recommended):**
1. **Update nameservers** at your domain registrar to Netlify's nameservers
2. **Netlify handles everything** automatically

**If using external DNS:**
1. **Add A record:** `@` → `75.2.60.5`
2. **Add CNAME record:** `www` → `your-site-name.netlify.app`

### Specific DNS Records for scribifyforall.com:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     your-netlify-site.netlify.app
```

## 🔒 Step 4: Enable HTTPS

1. **In Domain settings**
2. **Click "HTTPS"**
3. **Enable "Force HTTPS"**
4. **SSL certificate** will be automatically provisioned

## ⚙️ Step 5: Configure Environment Variables (Optional)

If you want to add your actual tracking IDs:

1. **Go to Site settings → Environment variables**
2. **Add variables:**
   - `NEXT_PUBLIC_GA_ID` → Your Google Analytics ID
   - `NEXT_PUBLIC_FB_PIXEL_ID` → Your Facebook Pixel ID

## 📊 Step 6: Optimize Performance

The `netlify.toml` file is already configured with:
- ✅ **Security headers**
- ✅ **Caching optimization** 
- ✅ **SPA redirect handling**
- ✅ **Content Security Policy**

## 🎯 Step 7: Test Your Deployment

1. **Visit your Netlify URL** (provided after deployment)
2. **Test all Gumroad purchase links**
3. **Verify mobile responsiveness**
4. **Check page load speed**

## 📈 Step 8: Analytics Setup

1. **Update Google Analytics ID** in `src/components/Analytics.tsx`
2. **Add Facebook Pixel ID** if needed
3. **Set up Gumroad analytics** in your dashboard

## 🔄 Automatic Deployments

Once connected to GitHub:
- ✅ **Auto-deploy** on every push to main branch
- ✅ **Preview deployments** for pull requests
- ✅ **Build notifications** via email/Slack

## 🚨 Troubleshooting

**Build fails?**
- Check Node.js version (using Node 18)
- Verify all dependencies are in `package.json`

**Domain not working?**
- DNS propagation can take 24-48 hours
- Use [dnschecker.org](https://dnschecker.org) to verify

**Gumroad links not working?**
- Verify HTTPS is enabled
- Check Content Security Policy allows Gumroad

## 📝 Final Checklist

- [ ] Code pushed to GitHub
- [ ] Site deployed to Netlify
- [ ] Custom domain configured
- [ ] HTTPS enabled and forced
- [ ] All purchase links tested
- [ ] Analytics tracking IDs updated
- [ ] Performance optimized

Your Scribify landing page is now live! 🎉

**Next steps:**
1. Test the complete purchase flow
2. Monitor analytics and conversions
3. Consider A/B testing different headlines/CTAs