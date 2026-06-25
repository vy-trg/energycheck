/*
    EnergyCheck — nav.js
    Author: Thi Tuong Vy Truong

    Handles three things:
    1. Hamburger menu toggle on mobile
    2. Dark mode — reads Settings radio button + persists via localStorage
    3. Active nav link — highlights the current page in the nav
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

    const saved = localStorage.getItem('ec-theme');

    /* apply saved preference on every page load */
    if (saved === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (saved === 'contrast') {
        document.body.classList.add('high-contrast');
    }

    /* listen for the colour theme radio buttons on settings.html */
    document.querySelectorAll('input[name="colourTheme"]').forEach(function (radio) {

        /* pre-select based on actual body state, not just saved value.
           if OS dark mode is active with no saved preference, show
           "Dark mode" selected rather than "Default (light)" */
        const isDark = document.body.classList.contains('dark-mode');
        const isContrast = document.body.classList.contains('high-contrast');
        const osPrefersDark = !saved && window.matchMedia('(prefers-color-scheme: dark)').matches;

        const actualTheme = isContrast ? 'contrast'
            : (isDark || osPrefersDark) ? 'dark'
            : 'default';

        if (radio.value === actualTheme) {
            radio.checked = true;
        }

        radio.addEventListener('change', function () {
            document.body.classList.remove('dark-mode', 'high-contrast');
            if (this.value === 'dark') {
                document.body.classList.add('dark-mode');
            } else if (this.value === 'contrast') {
                document.body.classList.add('high-contrast');
            }
            localStorage.setItem('ec-theme', this.value);
        });
    });


    /* ── 3. ACTIVE NAV LINK ────────────────────────────────────── */

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-header nav a').forEach(function (link) {
        const linkFile = link.getAttribute('href').split('/').pop();
        if (linkFile === currentFile) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

})();
