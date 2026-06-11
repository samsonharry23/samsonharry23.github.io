# Personal Portfolio — React + Vite

A modern, fully responsive, dark-themed developer portfolio with glassmorphism
cards, neon gradient glow, smooth scrolling, and Framer Motion animations.
Built for a fresher / entry-level developer and ready to deploy on Vercel or Netlify.

## ✨ Features

- Combined **Home / About** hero with typing role animation, floating profile glow, stat cards, and education timeline
- **Projects** grid with technology filter, hover effects, and a detail modal
- **Skills** section with animated progress bars (data-driven)
- **Experience** section tailored for a fresher ("Coming Soon" cards)
- **Contact** form with validation, success/error messages, and optional EmailJS
- Sticky **glass navbar** with active-section highlighting and a mobile hamburger menu
- Page loader, scroll-to-top button, scroll reveal animations, lazy-loaded images
- Responsive down to mobile, keyboard focus styles, ARIA labels, reduced-motion support

## 🧱 Tech Stack

React · Vite · Framer Motion · React Router · React Icons · EmailJS (optional) · CSS3

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf                 ← replace with your real resume
│   └── images/
│       ├── profile.svg            ← replace with your photo
│       └── projects/              ← project cover images
├── src/
│   ├── components/                ← all UI components (+ their .css)
│   ├── data/
│   │   ├── info.js                ← YOUR name, bio, education, socials, stats
│   │   ├── projects.js            ← add / edit projects here
│   │   └── skills.js              ← add / edit skills here
│   ├── hooks/useActiveSection.js  ← navbar active-link logic
│   ├── utils/motion.js            ← shared animation variants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  ← design tokens & global styles
├── index.html                     ← SEO meta tags
├── .env.example                   ← EmailJS keys template
├── vercel.json · netlify.toml
└── package.json
```

## 🚀 Getting Started

You need **Node.js 18+** installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## ✏️ Make It Yours

Almost everything lives in `src/data/` — you rarely need to touch components.

1. **Your details** → edit `src/data/info.js` (name, roles, intro, about, objective, education, stats, socials, resume path).
2. **Projects** → edit `src/data/projects.js`. Copy a project object, change the fields, drop a cover image in `public/images/projects/`. The technology filter updates automatically.
3. **Skills** → edit `src/data/skills.js` (categories, names, and `level` 0–100).
4. **Profile photo** → replace `public/images/profile.svg` with your image and update `profileImage` in `info.js`.
5. **Resume** → replace `public/resume.pdf` with your real PDF.
6. **SEO** → update the title and meta tags in `index.html`.

## 📧 Contact Form (EmailJS — optional)

The form works out of the box by simulating a send. To receive real emails:

1. Create a free account at [emailjs.com](https://www.emailjs.com/), add an email service and a template.
2. Copy `.env.example` to `.env` and fill in your IDs:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
3. Make sure your EmailJS template uses fields named `name`, `email`, `subject`, and `message`.

Restart `npm run dev` after editing `.env`.

## ☁️ Deployment

### Vercel
1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
4. Add your `VITE_EMAILJS_*` variables under **Settings → Environment Variables** (optional). Deploy.

### Netlify
1. Push to GitHub.
2. On [netlify.com](https://netlify.com), "Add new site → Import an existing project".
3. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
4. Add EmailJS env variables under **Site settings → Environment variables** (optional). Deploy.

---

Built with React & JavaScript.
