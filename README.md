# EnergyCheck

A responsive front-end prototype that helps Australian renters understand and manage their household electricity usage — built as part of the Design Thinking in IT unit (2008ICT) at Griffith University.

🔗 **[Live Site](https://vy-trg.github.io/energycheck/)**

---



---

## About

EnergyCheck was designed to address a real gap: most energy feedback tools assume homeowners, not renters. Our solution focuses on what renters can actually control — appliance usage, habits, and timing — without requiring landlord involvement.

The project followed a full design thinking process: empathy research, problem definition, ideation, prototyping, and user testing across five sprints.

**My role:** Team Leader & Design Thinking Lead — I led the team and the design process, architected the shared stylesheet, and built the Settings and Report pages. I also reviewed and updated all pages for visual and structural consistency.

---

## Built With

- HTML5
- CSS3 (custom properties, responsive grid, dark mode)
- No JavaScript frameworks, no external APIs, no backend

---

## Features

- Colour-coded energy status indicator (green / amber / red)
- Monthly bar chart comparing 6 months of usage history
- Household comparison showing usage against similar households
- Renter-focused tips and control advice
- FAQ with plain-English explanations
- Dark mode via CSS variable overrides
- Responsive layout with mobile hamburger menu
- Accessible navigation with `aria-label` and `aria-expanded`
- Page transition animation

---

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home — energy meter and usage summary |
| `comparison.html` | Comparison — monthly bar chart and household data |
| `tips.html` | Tips — 8 actionable energy saving tips |
| `control.html` | Control — what renters can and cannot control |
| `alerts.html` | Alerts — usage alerts with suggested actions |
| `report.html` | Report — monthly usage report summary |
| `profile.html` | Profile — household preferences and energy score |
| `faq.html` | FAQ — plain-English answers for common questions |
| `settings.html` | Settings — notifications, display, and dark mode |
| `about.html` | About — project purpose and how it works |

---

## Known Limitations

- Static prototype — no data is saved between visits
- All usage values are hardcoded placeholder data
- Dark mode requires manual toggle via Settings (no OS preference detection)
- No authentication or backend

---

## Team — Group NA17, Trimester 1 2026

| Name | Role |
| --- | --- |
| Thi Tuong Vy Truong | Team Leader / Design Thinking Lead |
| Yuxin Wang | Requirements |
| Ayat Taher Abdul Wahed | Storyboards |
| Vinoothna Vaddi | Control & Alerts |
| Rana Toor | Prototype & Branding |
