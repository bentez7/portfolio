# Benjamin Tan — Portfolio

Personal portfolio site for **Benjamin Tan En Zhe**, Software Engineering (Honours) graduate.

**Live:** https://benjamin.stable.com.my

## Sections

- **Home** — availability badge, positioning statement, CV download
- **About** — professional summary and headline stats
- **Skills** — frontend, backend & data, cloud/tools/practices, design
- **Experience** — tabbed timeline: work history and education/leadership
- **Projects** — EcoStyle, ERS Odoo helpdesk, Santorini, Agile tool, Ecoshop, plus the live client
  sites [stable.com.my](https://www.stable.com.my) and [tangconcept.com.my](https://www.tangconcept.com.my).
  The first three open an in-page screenshot gallery.
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

## Deployment

Hosted on GitHub Pages, served at `benjamin.stable.com.my`. GitHub holds the files; the
`stable.com.my` cPanel only holds the DNS record.

- **cPanel → Zone Editor** (on the `stable.com.my` zone): `CNAME  benjamin → bentez7.github.io`.
  Use Zone Editor, *not* the Subdomains tool — that creates an A record pointing at the Stable
  server, which conflicts with the CNAME.
- **Repo → Settings → Pages**: custom domain `benjamin.stable.com.my`, then enable *Enforce HTTPS*
  once the certificate is issued.
- The `CNAME` file in the repo root pins the domain across deploys — don't delete it.

Deploys are just `git push` to `main`.

> `preview.png` is the Open Graph card shown when the link is shared (LinkedIn, WhatsApp, Slack).
> It is a 1200×630 screenshot of the hero — regenerate it if the homepage changes noticeably.

> Asset paths are relative (`assets/...`), not root-absolute (`/assets/...`), so the site works
> from the `/portfolio` sub-path on GitHub Pages. Keep it that way when adding files.

---

Template originally based on [Bedimcode's responsive portfolio](https://github.com/MRINMOY662/Modern-Portfolio-Website-Template), heavily modified.
