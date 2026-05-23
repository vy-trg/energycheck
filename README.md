# EnergyCheck

EnergyCheck is a static front-end website built for the 2008ICT Design Thinking in IT project at Griffith University, Trimester 1, 2026.

The website helps Australian renters understand and compare their household electricity usage through simple colour-coded indicators, monthly comparisons, practical saving tips, and renter-appropriate advice.

Built with HTML and CSS only. No JavaScript frameworks, no external APIs, no backend required.

---

## Team — Group NA17

| Name | Student ID | Role |
|---|---|---|
| Thi Tuong Vy Truong | s5434825 | Design Thinking Lead / Shared CSS & Settings |
| Yuxin Wang | s5415967 | Requirements / Comparison & FAQ |
| Ayat Taher Abdul Wahed | s5438900 | Storyboards / Tips & Profile |
| Vinoothna Vaddi | s5381413 | Team Leader / Control & Alerts |
| Rana Toor | s5371045 | Prototype & Branding / Home & About |

---

## Website Pages

| File | Page | Author |
|---|---|---|
| `index.html` | Home — energy meter and usage summary | Rana Toor (updated by Vy) |
| `about.html` | About — project purpose, how it works, team | Rana Toor (updated by Vy) |
| `comparison.html` | Comparison — monthly bar chart and household comparison | Yuxin Wang (updated by Vy) |
| `tips.html` | Tips — 8 actionable energy saving tips | Ayat Taher Abdul Wahed (updated by Vy) |
| `control.html` | Control — what renters can and cannot control | Vinoothna Vaddi (updated by Vy) |
| `alerts.html` | Alerts — usage alerts with suggested actions | Vinoothna Vaddi (updated by Vy) |
| `report.html` | Report — monthly usage report summary | Vy |
| `profile.html` | Profile — household preferences and energy score | Ayat Taher Abdul Wahed (updated by Vy) |
| `faq.html` | FAQ — plain-English answers for common questions | Yuxin Wang (updated by Vy) |
| `settings.html` | Settings — notifications, display, and preferences | Vy |

---

## Shared Stylesheet

All pages link to `style.css`. This file contains:

- CSS custom properties (brand colours, spacing, typography)
- Shared layout classes (`.container`, `.page-section`, `.card`, `.card-grid`)
- Navigation and footer styles
- Button styles (`.btn`, `.btn-secondary`, `.btn-outline`)
- Status badge styles (`.status-badge.low / .medium / .high`)
- Form and toggle switch styles
- Dark mode variable overrides
- Page transition animation
- Responsive breakpoints

Individual page styles go in a `<style>` block in each HTML file's `<head>`.

---

## Key Features

- Colour-coded energy status indicator (green / amber / red) on the Home page
- Monthly bar chart comparing 6 months of usage history
- Household comparison showing usage against similar households
- Renter-focused tips and control advice — no landlord approval needed
- FAQ page with plain-English explanations
- Profile page with household preferences and energy score
- Alerts page with suggested actions for high usage
- Dark mode support via CSS variable overrides
- Responsive layout — mobile hamburger menu, fluid grids
- Page transition animation on every page load
- Accessible navigation with `aria-label`, `aria-expanded`, and `aria-controls`

---

## Known Limitations

- This is a static front-end prototype — no data is saved between visits
- All usage values (kWh, savings, comparisons) are hardcoded placeholder data
- The Profile form does not connect to a backend
- Dark mode must be toggled manually via the Settings page (no OS preference detection in this version)
- No real account authentication or database

---

## Testing Checklist

Run through this before the demo or submission:

- [ ] Open each HTML page directly in a browser and confirm it loads
- [ ] Click every navigation link and confirm correct page opens
- [ ] Confirm the current page is highlighted (`.active` class) in the nav
- [ ] Resize browser to mobile width — confirm hamburger menu appears and opens
- [ ] Confirm dark mode toggle on Settings page changes the page appearance
- [ ] Confirm bar chart labels and status badges are readable at all widths
- [ ] Confirm all `.btn` links navigate to the correct page
- [ ] Confirm footer appears on every page
- [ ] Confirm no assignment PDFs or private files are tracked in Git

---

## Suggested Demo Flow

1. **index.html** — introduce EnergyCheck and the colour-coded status indicator
2. **comparison.html** — show the monthly bar chart and household comparison table
3. **tips.html** — walk through the 8 tips and quick wins section
4. **control.html** — explain what renters can and cannot control
5. **alerts.html** — show the alert cards with suggested actions
6. **profile.html** — show household preferences and energy score
7. **settings.html** — demonstrate dark mode and notification toggles
8. **faq.html** — show the sidebar FAQ layout and plain-English explanations
9. **about.html** — connect the website back to the project problem and solution

---

## Security Notes

This is a static prototype with no backend. No user data is collected or stored.

If EnergyCheck were developed into a real product, it would require:

- HTTPS hosting
- Server-side validation for all form inputs
- Secure authentication for real user accounts
- Careful handling of household energy data under Australian privacy law
- Protection against injection attacks if a backend or database is added

---

## Git Workflow — Team Reminders

### Before coding

```bash
git checkout main
git pull origin main
```

### Saving work before pulling

```bash
git add .
git commit -m "Describe your changes"
git pull origin main
```

### Pushing your work

```bash
git add .
git commit -m "Describe your changes"
git push origin your-branch-name
```

### Rules

- Always pull before coding and before pushing
- Never use `git push --force`
- Never delete a teammate's file
- Commit frequently — uncommitted code is not safe