# Benjamin Tan — Portfolio

Personal portfolio site for **Benjamin Tan En Zhe**, Software Engineering (Honours) graduate.

**Live:** https://bentez7.github.io/portfolio

## Sections

- **Home** — availability badge, positioning statement, CV download
- **About** — professional summary and headline stats
- **Skills** — frontend, backend & data, cloud/tools/practices, design
- **Experience** — tabbed timeline: work history and education/leadership
- **Projects** — EcoStyle, ERS Odoo helpdesk, Santorini, Agile tool, Ecoshop, WordPress store
- **Credentials** — certificates and reference letters (carousel, all viewable)
- **References** — quotes from Western Digital and Monash supervisors
- **Contact** — email, phone, LinkedIn, GitHub, location, and a FormSubmit contact form

## Stack

HTML, CSS (custom properties, light/dark theme), vanilla JavaScript, Swiper.js, AOS, Typed.js.

## Editing

- **Content:** `index.html`
- **Styles:** `assets/css/style.css` (variables at the top; new sections appended at the bottom)
- **Behaviour:** `assets/js/main.js` (nav, skills accordion, experience tabs, carousels, theme)
- **CV / letters:** `assets/pdf/`
- **Images & certificates:** `assets/img/`

To preview locally:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

> Asset paths are relative (`assets/...`), not root-absolute (`/assets/...`), so the site works
> from the `/portfolio` sub-path on GitHub Pages. Keep it that way when adding files.

---

Template originally based on [Bedimcode's responsive portfolio](https://github.com/MRINMOY662/Modern-Portfolio-Website-Template), heavily modified.
