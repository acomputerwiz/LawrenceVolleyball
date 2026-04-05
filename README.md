# Elevate Volleyball — elevatelawrencevb.com

Multi-page volleyball coaching website for Lawrence, KS. Plain HTML + CSS, GitHub Pages hosted, with clean URLs at `elevatelawrencevb.com`.

## Clean URL Structure
```
elevatelawrencevb.com/             → Home (mission, ELEVATE acronym, open gym, survey, contact)
elevatelawrencevb.com/coaches/     → Coach profiles, philosophy, what parents can expect
elevatelawrencevb.com/tryouts/     → Tryout registration + FAQ + HOA age calculator
elevatelawrencevb.com/schedule/    → Google Calendar embed + subscribe instructions
elevatelawrencevb.com/sponsors/    → Tiered sponsor logos + become-a-sponsor CTA
```

## File Structure
```
elevate-volleyball/
├── CNAME                       # Tells GitHub Pages to use elevatelawrencevb.com
├── index.html                  # Home page
├── styles.css                  # Shared stylesheet
├── og-image.jpg                # Social preview image 1200x630px (add this)
├── coaches/
│   └── index.html              # → elevatelawrencevb.com/coaches/
├── tryouts/
│   └── index.html              # → elevatelawrencevb.com/tryouts/
├── schedule/
│   └── index.html              # → elevatelawrencevb.com/schedule/
├── sponsors/
│   └── index.html              # → elevatelawrencevb.com/sponsors/
└── images/                     # Coach photos, sponsor logos (create this)
```

## Deploy to GitHub Pages

### 1. Create Repo & Push
```bash
git clone https://github.com/YOUR-USERNAME/elevate-volleyball.git
cd elevate-volleyball
# copy all files/folders into the repo maintaining the structure above
git add .
git commit -m "Launch Elevate VB — elevatelawrencevb.com"
git push origin main
```

### 2. Enable GitHub Pages
1. Repo → **Settings → Pages**
2. Source: **Deploy from a branch** → **main** / **/ (root)**
3. Click **Save**

### 3. Connect elevatelawrencevb.com

**At your domain registrar (Namecheap, Cloudflare, GoDaddy, etc.):**

Add these DNS records:

| Type  | Host/Name | Value                        |
|-------|-----------|------------------------------|
| A     | @         | 185.199.108.153              |
| A     | @         | 185.199.109.153              |
| A     | @         | 185.199.110.153              |
| A     | @         | 185.199.111.153              |
| CNAME | www       | YOUR-USERNAME.github.io      |

These are GitHub Pages' official IP addresses documented at:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-github-pages/managing-a-custom-domain-for-your-github-pages-site

**Back in GitHub:**
1. Settings → Pages → **Custom domain** → type `elevatelawrencevb.com` → Save
2. Check **Enforce HTTPS** (may take a few minutes to become available)
3. The `CNAME` file in the repo ensures the setting persists across deploys

**DNS propagation takes 10 minutes to 48 hours.** You can check status at https://dnschecker.org

## Customization Checklist

### Find & Replace

| Placeholder | Replace With |
|---|---|
| `YOUR-GITHUB-USERNAME` | Your GitHub username |
| `YOUR_TRYOUT_FORM_ID` | Google Form ID — tryout registration |
| `YOUR_SURVEY_FORM_ID` | Google Form ID — player survey |
| `YOUR_CONTACT_FORM_ID` | Google Form ID — contact form |
| `YOUR_CALENDAR_ID` | Public Google Calendar ID |
| `YOUR_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key (optional) |
| `your-email@example.com` | Your real email |
| `(785) 555-0000` | Your real phone number |
| `Venue Name` | Your actual practice facility |
| Coach names/bios | Your real coaching staff |
| Schedule days/times | Your actual session times |

### Embed Google Forms
1. Open your Google Form → **Send** → `<>` embed icon
2. Copy the `src` URL
3. In the relevant HTML file, uncomment the `<iframe>`, paste URL
4. Delete the `.form-placeholder` div

### Embed Google Calendar
1. Google Calendar → **Settings** → your calendar
2. **Access permissions** → check **Make available to public**
3. **Integrate calendar** → copy the **Calendar ID**
4. In `schedule/index.html`, replace `YOUR_CALENDAR_ID` in all 3 spots:
   - The `<iframe>` src
   - The subscribe button href
   - The iCal URL in subscribe instructions
5. Uncomment the `<iframe>`, delete the placeholder

The `.ics` subscribe URL format:
```
https://calendar.google.com/calendar/ical/YOUR_CALENDAR_ID/public/basic.ics
```

### reCAPTCHA (Optional)
Google Forms already handle spam. If you want extra protection on the tryouts page:
1. Register at https://www.google.com/recaptcha/admin → v2 checkbox
2. Add `elevatelawrencevb.com` to allowed domains
3. Uncomment the script + div in `tryouts/index.html`
4. Replace `YOUR_RECAPTCHA_SITE_KEY`

## SEO & Geo (Built In)

Every page includes: targeted meta titles/descriptions with Lawrence KS keywords, Open Graph + Twitter cards, JSON-LD structured data (`SportsOrganization` on home, `SportsEvent` on tryouts), geo meta tags for Lawrence KS (38.9717, -95.2353), canonical URLs at elevatelawrencevb.com, semantic HTML5, and mobile responsive design.

**ELEVATE Acronym** (featured on home + coaches pages):
**E**nergy · **L**eadership · **E**ffort · **V**ision · **A**gility · **T**eamwork · **E**xcellence

**Separate pages = separate rankings.** The tryouts page targets "volleyball tryouts Lawrence KS" while the schedule page targets "volleyball schedule Lawrence Kansas" — each ranks independently.

### Maximize Local SEO
1. Create a **Google Business Profile** → link to elevatelawrencevb.com
2. Register with **Google Search Console** → submit sitemap
3. Get listed on **Lawrence Chamber of Commerce**, **KVA**, local directories
4. Add real photos with descriptive alt text
5. Create the `og-image.jpg` (1200x630px) for social sharing previews

## Tech Stack
- HTML5 + CSS3 (no build step)
- Google Fonts (Bebas Neue + Barlow)
- Google Forms (embedded iframes)
- Google Calendar (embedded + subscribable via iCal)
- GitHub Pages (free hosting)
- Custom domain via CNAME + A records
