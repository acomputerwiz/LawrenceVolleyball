# Elite Positive Volleyball — Website

A single-page volleyball coaching website built with plain HTML/CSS. Designed for GitHub Pages hosting with embedded Google Forms.

## Quick Start — GitHub Pages Deployment

### 1. Create the Repository
```bash
# On github.com: create a new repo called "elite-positive-volleyball"
# Then locally:
git clone https://github.com/YOUR-USERNAME/elite-positive-volleyball.git
cd elite-positive-volleyball
```

### 2. Add Your Files
```bash
# Copy index.html into the repo root
cp /path/to/index.html .
git add .
git commit -m "Initial site launch"
git push origin main
```

### 3. Enable GitHub Pages
1. Go to **Settings → Pages** in your repo
2. Under **Source**, select **Deploy from a branch**
3. Select **main** branch, **/ (root)** folder
4. Click **Save**
5. Your site will be live at: `https://YOUR-USERNAME.github.io/elite-positive-volleyball/`

---

## Customization Checklist

### Replace Placeholder Values
Search the `index.html` file for these strings and replace them:

| Placeholder | Replace With |
|---|---|
| `YOUR-GITHUB-USERNAME` | Your actual GitHub username |
| `YOUR_TRYOUT_FORM_ID` | Google Form ID for tryout registration |
| `YOUR_SURVEY_FORM_ID` | Google Form ID for player survey |
| `YOUR_CONTACT_FORM_ID` | Google Form ID for contact form |
| `YOUR_RECAPTCHA_SITE_KEY` | Your Google reCAPTCHA v2 site key |
| `your-email@example.com` | Your contact email |
| `(555) 123-4567` | Your phone number |
| `Your City, Your State` | Actual city and state |
| `00.0000;-00.0000` | Actual lat/long coordinates |
| `00000` | Actual zip code |
| Coach names and bios | Your real coaching staff info |
| Venue Name / address | Your real practice facility |
| Schedule days/times | Your actual open gym schedule |

### Embedding Google Forms
1. Open your Google Form
2. Click **Send** → click the `< >` embed icon
3. Copy the `src="..."` URL (looks like `https://docs.google.com/forms/d/e/XXXXX/viewform?embedded=true`)
4. In `index.html`, uncomment the `<iframe>` tag and paste the URL
5. Delete or comment out the `.form-placeholder` div

### Adding reCAPTCHA
Google Forms have their own CAPTCHA built-in. If you want an extra layer:
1. Register at [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Choose **reCAPTCHA v2** ("I'm not a robot" checkbox)
3. Add your GitHub Pages domain to allowed domains
4. Uncomment the reCAPTCHA script tag in `<head>`
5. Uncomment the `g-recaptcha` div in the tryout section
6. Replace `YOUR_RECAPTCHA_SITE_KEY` with your actual key

> **Note:** reCAPTCHA on a static site only works as a visual deterrent unless you process form submissions through a server. Since you're using Google Forms (which handle spam protection internally), this is optional.

### Adding Coach Photos
Replace the placeholder `<div class="coach-img">` contents with actual images:
```html
<div class="coach-img">
    <img src="images/coach-name.jpg" alt="Coach Name headshot" style="width:100%;height:100%;object-fit:cover;">
</div>
```

### Adding Sponsor Logos
Replace `.sponsor-slot` divs:
```html
<div class="sponsor-slot">
    <img src="images/sponsor-logo.png" alt="Sponsor Name" style="max-height:60px;">
</div>
```

### HOA Age Calculator Link
The default links to `https://www.usav.org/age-definition`. Update this to your region's specific HOA age calculator if different.

---

## SEO & Geo Optimization (Already Included)

- **Meta title & description** — targeted volleyball coaching keywords
- **Open Graph / Twitter cards** — social media preview optimization
- **JSON-LD structured data** — `SportsOrganization` schema for rich search results
- **Geo meta tags** — `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- **Canonical URL** — prevents duplicate content issues
- **Semantic HTML** — proper `<header>`, `<nav>`, `<section>`, `<footer>` tags
- **Alt text ready** — add descriptive alt text to all images
- **Mobile responsive** — Google's mobile-first indexing compliant

### To Maximize Local SEO
1. **Fill in real geo coordinates** (use Google Maps to find lat/long)
2. **Create a Google Business Profile** and link to this site
3. **Add an `og-image.jpg`** (1200×630px) to the repo root for social previews
4. **Register with Google Search Console** and submit your sitemap

---

## File Structure
```
elite-positive-volleyball/
├── index.html          # Complete website (single file)
├── README.md           # This file
├── og-image.jpg        # Social media preview image (add this)
└── images/             # Coach photos, sponsor logos (create this)
    ├── coach-1.jpg
    ├── coach-2.jpg
    └── sponsor-logo.png
```

## Tech Stack
- **HTML5** + **CSS3** (no frameworks, no build step)
- **Google Fonts** (Bebas Neue + Barlow)
- **Google Forms** (embedded iframes)
- **GitHub Pages** (free hosting)
- **Google reCAPTCHA v2** (optional)
