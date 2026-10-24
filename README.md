# Survive the System

An original, React/Vite portfolio interface for Suviksha Viswanath Biranthabail.

## Run

```bash
npm install
npm run dev
```

Use `npm run build` for a production build.

## GitHub Pages

The included GitHub Actions workflow deploys the site after every push to `main`.
In the repository's **Settings → Pages**, set the source to **GitHub Actions**. The published address will be shown by the completed **Deploy portfolio to GitHub Pages** workflow.

## Content edits

- `src/data.js` holds email, social links, resume path, project copy, experience, skills, and achievements.
- Place an updated resume in `public/` and update `config.resume`.
- Add verified repository/live links to project data before publishing. The UI deliberately does not claim links that were not supplied.
- `src/style.css` contains the palette, textures, responsive layout, and reduced-motion handling.

## Resume discrepancies to review

The supplied source material has resume-version differences. The contact email is deliberately a single editable configuration value. The site only includes experience entries supported by the extracted source content and preserves “On Hold” statuses; entries mentioned only in the design brief are not silently merged. Verify which resume is authoritative before publishing.
