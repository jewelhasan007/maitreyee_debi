# Maitreyee Debi Portfolio - Next.js

A beautiful, fully responsive portfolio website for Maitreyee Debi built with Next.js 15, showcasing her work as an author, artist, and cultural preservationist.

## Features

✨ **Modern Design**
- Elegant dark theme with saffron and teal accents
- Bilingual support (Bengali & English)
- Smooth animations and transitions
- Fully responsive layout

📚 **Sections**
- Hero section with animated intro
- About & Statistics
- Books/Publications showcase
- Music/Video gallery with YouTube integration
- Art Gallery with category filtering
- Social Media integration (Instagram, Facebook)
- Contact form
- Timeline of achievements
- Admin panel for content management

🎯 **Admin Features**
- Secure password-protected admin panel
- Add/manage books
- Upload music videos (YouTube)
- Upload gallery photos
- Add events
- Real-time content updates

## Tech Stack

- **Next.js 15** - React framework
- **React 18** - UI library
- **CSS3** - Styling with CSS custom properties
- **TypeScript** - Type safety
- **Responsive Design** - Mobile-first approach

## Installation

1. **Clone or download the project**
   ```bash
   cd maitreyee-portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Building for Production

```bash
npm run build
npm start
```

## Admin Panel Access

1. Click the **⚙️** button in the bottom-right corner
2. Enter password: `maitreyee2024`
3. Manage all content from the dashboard

## Project Structure

```
maitreyee-portfolio-nextjs/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Books.tsx
│   │   ├── Music.tsx
│   │   ├── Gallery.tsx
│   │   ├── Social.tsx
│   │   ├── Contact.tsx
│   │   ├── Timeline.tsx
│   │   ├── Footer.tsx
│   │   └── AdminPanel.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
├── next.config.js
└── .gitignore
```

## Customization

### Colors
Edit the CSS custom properties in `app/globals.css`:
```css
:root {
  --saffron: #C8820A;
  --indigo: #3B1F6E;
  --teal: #1A7A6E;
  /* ... more colors ... */
}
```

### Fonts
Google Fonts are imported in `globals.css`:
- Cormorant Garamond - Serif headings
- Hind Siliguri - Bengali text
- Inter - Body text

### Content
- Edit component files in `app/components/` to update content
- Modify initial data in state in each component
- Update social links in Footer component

## Performance Optimizations

- Lazy loading of components
- Optimized images with next/image
- CSS-in-JS for critical styles
- Smooth scroll behavior

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Maitreyee Debi. All rights reserved.

## Support

For issues or customization requests, please contact the development team.

---

**Built with passion for cultural preservation** 🎨📚🎵
