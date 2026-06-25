/*
    EnergyCheck — nav.js
    Author: Thi Tuong Vy Truong

    Handles four things:
    1. Hamburger menu toggle on mobile
    2. Dark mode — reads Settings radio + persists via localStorage
    3. Text size — reads Settings radio + persists via localStorage
    4. Active nav link — highlights the current page in the nav
*/

(function () {

    /* ── 1. HAMBURGER MENU ─────────────────────────────────────── */

    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', function (e) {
            if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }


    /* ── 2. DARK MODE ──────────────────────────────────────────── */

    const savedTheme = localStorage.getItem('ec-theme');
    const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && osPrefersDark)) {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'contrast') {
        document.body.classList.add('high-contrast');
    }

    document.querySelectorAll('input[name="colourTheme"]').forEach(function (radio) {
        const activeTheme = savedTheme === 'contrast' ? 'contrast'
            : (savedTheme === 'dark' || (!savedTheme && osPrefersDark)) ? 'dark'
                : 'default';

        if (radio.value === activeTheme) radio.checked = true;

        radio.addEventListener('change', function () {
            document.body.classList.remove('dark-mode', 'high-contrast');
            if (this.value === 'dark') document.body.classList.add('dark-mode');
            else if (this.value === 'contrast') document.body.classList.add('high-contrast');
            localStorage.setItem('ec-theme', this.value);
        });
    });


    /* ── 3. TEXT SIZE ──────────────────────────────────────────── */

    const savedSize = localStorage.getItem('ec-textsize');

    /* apply text size by updating the CSS variable on :root —
       all font-size values in style.css use var(--font-size-body)
       so changing the variable cascades everywhere */
    function applyTextSize(size) {
        const root = document.documentElement;
        if (size === 'large') {
            root.style.setProperty('--font-size-body', '18px');
            root.style.setProperty('--font-size-small', '16px');
            root.style.setProperty('--font-size-h1', '36px');
            root.style.setProperty('--font-size-h2', '28px');
        } else if (size === 'xlarge') {
            root.style.setProperty('--font-size-body', '20px');
            root.style.setProperty('--font-size-small', '18px');
            root.style.setProperty('--font-size-h1', '40px');
            root.style.setProperty('--font-size-h2', '32px');
        } else {
            root.style.removeProperty('--font-size-body');
            root.style.removeProperty('--font-size-small');
            root.style.removeProperty('--font-size-h1');
            root.style.removeProperty('--font-size-h2');
        }
    }

    if (savedSize) applyTextSize(savedSize);

    document.querySelectorAll('input[name="textSize"]').forEach(function (radio) {
        if (radio.value === (savedSize || 'normal')) radio.checked = true;

        radio.addEventListener('change', function () {
            applyTextSize(this.value);
            localStorage.setItem('ec-textsize', this.value);
        });
    });


    /* ── 4. ACTIVE NAV LINK ────────────────────────────────────── */

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-header nav a').forEach(function (link) {
        const linkFile = link.getAttribute('href').split('/').pop();
        if (linkFile === currentFile) link.classList.add('active');
        else link.classList.remove('active');
    });

})();
