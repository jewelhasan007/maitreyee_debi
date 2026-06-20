# 🚀 QUICK START GUIDE

## Get Started in 3 Minutes

### Step 1: Install Dependencies
```bash
npm install
```
⏱️ Takes ~2 minutes depending on your internet speed

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: View Your Site
Open your browser and go to:
```
http://localhost:3000
```

✅ You're done! The site is now running locally.

---

## 📝 Making Changes

1. **Edit files in `app/components/`**
2. **Save the file**
3. **Browser auto-refreshes** (hot reload)

## 🎯 Key Files to Customize

### Change Content
- `app/components/About.tsx` - About section
- `app/components/Books.tsx` - Books section
- `app/components/Timeline.tsx` - Timeline events
- `app/components/Footer.tsx` - Footer content

### Change Colors
- `app/globals.css` - Edit CSS variables at the top

### Change Fonts
- `app/globals.css` - Google Fonts imports

---

## 🔐 Admin Panel

**Access:** Click ⚙️ button (bottom-right)

**Password:** `maitreyee2024`

### Add Content via Admin:
- ✍️ Books
- 🎵 Music (YouTube)
- 📸 Photos (Gallery)
- 📅 Events

---

## 🚀 Deploy to the Internet

### Free Option - Vercel (2 minutes)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"
6. ✅ Live on the web!

**Your site URL:** `your-project.vercel.app`

---

## 📱 Test on Mobile

```bash
# Find your local IP
ipconfig getifaddr en0  # Mac
hostname -I             # Linux
ipconfig                # Windows

# Visit from mobile
http://YOUR_IP:3000
```

---

## 🛠️ Build for Production

```bash
npm run build
npm start
```

This creates an optimized version ready for deployment.

---

## 📚 Learn More

- **Next.js Docs:** https://nextjs.org/docs
- **React Basics:** https://react.dev/learn
- **Deployment:** See `DEPLOYMENT.md` file

---

## ❓ Common Issues

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### "Can't find module"
```bash
npm install
```

### "Changes not showing"
1. Hard refresh: `Ctrl+Shift+R` (Cmd+Shift+R on Mac)
2. Clear cache: Delete `.next` folder

---

## 📧 Need Help?

Check the detailed guides:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Hosting options
- This file - Quick reference

---

**Happy Building! 🎨**
