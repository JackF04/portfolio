# Portfolio

Personal portfolio site for Jack Fernando, a Computer Science student at the University of St Andrews and Olympic weightlifter. Showcases projects, technical skills, and competition history.

Live at [jack-fernando.netlify.app](https://jack-fernando.netlify.app).

Built with React and deployed on Netlify.

## Pages

- **Home**: profile, education, previous experience
- **Projects**: technical skills and project list
- **Weightlifting**: rankings, gallery, and competition history
- **About**: bio and contact links

## Tech stack

- React 19 with `react-router-dom` for client-side routing
- Create React App (`react-scripts`) build pipeline
- Plain CSS with a terminal-inspired theme
- Netlify for hosting and continuous deployment

## Local development

```bash
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000) with hot reload.

## Production build

```bash
npm run build
```

Outputs to `build/`. To preview locally:

```bash
npx serve -s build
```

## Project structure

```
public/             Static assets (images, favicon, _redirects)
src/
  App.js            Router setup
  components/       CustomNavBar, ProjectCard
  pages/            Home, Projects, Weightlifting, About
```

## Deployment

Hosted on Netlify with auto-deploy on push to `main`:

- **Build command:** `npm run build`
- **Publish directory:** `build`
- **SPA fallback:** `public/_redirects` rewrites all paths to `index.html` so client-side routes survive a refresh

## Contact

- GitHub: [JackF04](https://github.com/JackF04)
- LinkedIn: [jack-fernando](https://linkedin.com/in/jack-fernando)
- Email: fernandojack14@gmail.com
