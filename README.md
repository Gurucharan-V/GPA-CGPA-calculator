# Easwari Engineering College GPA Calculator

A free GPA / CGPA calculator for **Easwari Engineering College** students, using the **Anna University 10-point grading scale**. Runs entirely in the browser with no dependencies.

> Unofficial student project. Not affiliated with Easwari Engineering College or Anna University. Always confirm your final GPA and CGPA with your official results.

## PR0JECT-EEC

## Features

- Add or remove any number of courses with credits and grades
- Anna University grades: O (10), A+ (9), A (8), B+ (7), B (6), C (5), U / SA / W (0)
- Credit-weighted semester GPA
- Cumulative CGPA using your previous CGPA and credits
- Responsive layout with automatic dark mode
- SEO-ready: title, meta description, structured data, sitemap and robots.txt

## Usage

Open `index.html` in a browser. No build step or install needed.

### Run the tests

```bash
node gpa.test.js
```

## Deploy with GitHub Pages

1. Create a repo named `easwari-gpa-calculator` and push these files to the `main` branch.
2. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`.
3. Your site will be live at `https://<your-username>.github.io/easwari-gpa-calculator/`.
4. Replace `YOUR-USERNAME` with your GitHub username in `index.html`, `robots.txt` and `sitemap.xml`.

## Getting found on Google

Search ranking can't be guaranteed, but these steps are what make a new site show up for searches like "GPA calculator Easwari Engineering College":

1. Go to [Google Search Console](https://search.google.com/search-console) and add your Pages URL as a property.
2. Use **URL Inspection** on your homepage and click **Request indexing**.
3. Under **Sitemaps**, submit `sitemap.xml`.
4. Add the live link to your GitHub repo description and README, and share it in class groups, college communities, LinkedIn and Instagram. Links from other sites help ranking.
5. Indexing usually takes a few days to a few weeks.

## How it works

```
GPA = Σ (credits × grade points) / Σ credits
```

Grade points live in `GRADES` inside `gpa.js`.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page markup and SEO metadata |
| `style.css` | Styling |
| `gpa.js` | Pure calculation logic |
| `script.js` | UI and DOM handling |
| `gpa.test.js` | Unit tests for the calculation logic |
| `robots.txt`, `sitemap.xml` | Search engine crawling files |

## License

MIT
