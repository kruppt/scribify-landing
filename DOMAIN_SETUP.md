# Domain Setup Guide for scribifyforall.com

## 🌐 Quick Setup Steps

### 1. Deploy to Netlify First
Follow the `NETLIFY_DEPLOYMENT.md` guide to get your site deployed and get your Netlify URL (e.g., `amazing-site-123.netlify.app`)

### 2. Configure scribifyforall.com

#### Option A: Netlify DNS (Easiest)
1. **In Netlify Dashboard**: Go to Domain settings → Add domain → `scribifyforall.com`
2. **Get Netlify nameservers** (something like):
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
3. **Update nameservers** at your domain registrar to use Netlify's
4. **Wait 24-48 hours** for DNS propagation
5. **Netlify handles everything** (SSL, www redirect, etc.)

#### Option B: Keep Current DNS Provider
If you want to keep your current DNS provider, add these records:

```
Record Type: A
Name: @
Value: 75.2.60.5
TTL: 3600

Record Type: CNAME  
Name: www
Value: your-netlify-site.netlify.app
TTL: 3600
```

### 3. Force HTTPS
1. **In Netlify**: Domain settings → HTTPS → Enable "Force HTTPS"
2. **SSL certificate** will be automatically issued

### 4. Test Your Setup
- Visit `http://scribifyforall.com` → should redirect to `https://scribifyforall.com`
- Visit `https://www.scribifyforall.com` → should redirect to `https://scribifyforall.com`
- Test all Gumroad purchase links work correctly

## 🔍 Verification Tools

**Check DNS propagation:**
- [dnschecker.org](https://dnschecker.org) → Enter `scribifyforall.com`
- [whatsmydns.net](https://whatsmydns.net) → Check A and CNAME records

**Check SSL certificate:**
- [ssllabs.com](https://www.ssllabs.com/ssltest/) → Test `scribifyforall.com`

## 🚨 Troubleshooting

**Domain not working after 48+ hours?**
- Verify DNS records are correct
- Check if domain is properly pointed to Netlify
- Contact your domain registrar for DNS issues

**SSL certificate issues?**
- Make sure domain is properly connected in Netlify
- Try disconnecting and reconnecting the domain
- Contact Netlify support if needed

**"Site not found" error?**
- Check that your Netlify site is properly deployed
- Verify domain is added in Netlify dashboard
- Ensure DNS records point to correct Netlify site

## 📞 Support

- **Netlify Support**: [netlify.com/support](https://netlify.com/support)
- **DNS Help**: [netlify.com/docs/dns](https://docs.netlify.com/domains-https/netlify-dns/)

Your Scribify landing page will be live at **https://scribifyforall.com** once DNS propagates! 🎉