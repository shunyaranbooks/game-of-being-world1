
# Architecture

- **Vite + React + TypeScript** SPA
- **Content-first**: `/src/content.json` drives UI sections
- **Minimal CSS** in `index.html` for portability; replace with Tailwind or CSS Modules as you grow
- **HUD** mock in DOM (Resonance stars + Save)
- **Actions**: `.github/workflows/deploy.yml` deploys to GitHub Pages on push to `main`

## Files
- `index.html` – shell + styles
- `src/main.tsx` – entry
- `src/App.tsx` – layout and components
- `src/content.json` – book/world structure
