# Deployment & Setup Guide

## Local Development

### Prerequisites
- Node.js 18+ and npm/yarn
- Git (optional)

### Quick Start

1. **Navigate to project folder**
   ```bash
   cd maitreyee-portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Visit the site**
   - Open http://localhost:3000 in your browser
   - Changes auto-reload

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and offers seamless deployment.

1. **Push code to GitHub/GitLab/Bitbucket**
2. **Visit https://vercel.com**
3. **Click "New Project"**
4. **Select your repository**
5. **Click Deploy**
6. **Your site is live!**

Benefits:
- Free hosting
- Automatic deployments
- Fast CDN
- Built-in analytics

### Option 2: Netlify

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Create `netlify.toml` in root**
   ```toml
   [build]
   command = "npm run build"
   publish = ".next"

   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

3. **Push to Git repository**
4. **Connect on Netlify.com**
5. **Auto-deploys on push**

### Option 3: Self-Hosted (VPS/Server)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install on server**
   ```bash
   scp -r maitreyee-portfolio-nextjs user@server:/var/www/
   ssh user@server
   cd /var/www/maitreyee-portfolio-nextjs
   npm install --production
   ```

3. **Run with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   ```

4. **Setup Nginx reverse proxy**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

5. **Enable HTTPS with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

### Option 4: Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**
   ```bash
   docker build -t maitreyee-portfolio .
   docker run -p 3000:3000 maitreyee-portfolio
   ```

## Environment Variables

Create `.env.local` for sensitive data (not committed to git):

```
# Example (not needed for basic setup)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Admin Panel Security

**Default Password:** `maitreyee2024`

⚠️ **Change this immediately in production!**

1. **Edit `AdminPanel.tsx`**
   ```typescript
   const ADMIN_PW = 'your-new-strong-password';
   ```

2. **Rebuild and deploy**

## Performance Optimization

### Image Optimization
Replace emoji placeholders with actual images using Next.js Image:

```typescript
import Image from 'next/image';

<Image 
  src="/images/photo.jpg" 
  alt="Description"
  width={500}
  height={500}
/>
```

### Analytics
Add Google Analytics:

```typescript
// In app/layout.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build fails
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Admin panel not working
- Check browser console for errors (F12)
- Ensure admin password is correct
- Clear browser cache (Ctrl+Shift+Delete)

## Maintenance

### Regular Updates
```bash
npm update
npm audit fix
```

### Backups
- Version control with Git
- Export admin content periodically
- Regular full site backups if self-hosted

## Monitoring

### Check Site Health
- https://web.dev/measure (Performance)
- Google Search Console
- Google Analytics
- Uptime monitoring services

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Deployment:** https://vercel.com/docs
- **React Docs:** https://react.dev
- **CSS Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS

---

**Last Updated:** 2024
**Version:** 1.0.0
