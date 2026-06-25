/*
    EnergyCheck — tooltips.js
    Author: Thi Tuong Vy Truong

    Adds hover/focus tooltips to bar chart elements on
    comparison.html and report.html.

    Reads the title attribute already on each .bar element
    (e.g. title="May — 490 kWh") and shows a styled tooltip
    near the cursor instead of the browser's plain yellow box.
*/

(function () {

    const bars = document.querySelectorAll('.bar[title]');
    if (!bars.length) return;

    /* create one shared tooltip element */
    const tip = document.createElement('div');
    tip.setAttribute('role', 'tooltip');
    tip.style.cssText = [
        'position: fixed',
        'background: #1a1a1a',
        'color: #fff',
        'padding: 6px 12px',
        'border-radius: 6px',
        'font-size: 13px',
        'font-weight: 600',
        'pointer-events: none',
        'opacity: 0',
        'transition: opacity 0.15s',
        'z-index: 1000',
        'white-space: nowrap',
        'box-shadow: 0 2px 8px rgba(0,0,0,0.25)',
    ].join(';');
    document.body.appendChild(tip);

    function show(e) {
        const label = this.getAttribute('title');
        if (!label) return;

        /* hide native tooltip by temporarily removing the attribute */
        this._tipLabel = label;
        this.removeAttribute('title');

        tip.textContent = label;
        tip.style.opacity = '1';
        move.call(this, e);
    }

    function move(e) {
        const x = e.clientX + 12;
        const y = e.clientY - 36;
        tip.style.left = x + 'px';
        tip.style.top = y + 'px';
    }

    function hide() {
        tip.style.opacity = '0';
        /* restore title so accessibility tools can still read it */
        if (this._tipLabel) {
            this.setAttribute('title', this._tipLabel);
            this._tipLabel = null;
        }
    }

    bars.forEach(function (bar) {
        bar.addEventListener('mouseenter', show);
        bar.addEventListener('mousemove', move);
        bar.addEventListener('mouseleave', hide);

        /* keyboard focus support */
        bar.setAttribute('tabindex', '0');
        bar.addEventListener('focus', function (e) {
            show.call(this, { clientX: 0, clientY: 0 });
            /* position near the bar itself for keyboard users */
            const rect = this.getBoundingClientRect();
            tip.style.left = (rect.left + rect.width / 2) + 'px';
            tip.style.top = (rect.top - 44) + 'px';
            tip.style.opacity = '1';
        });
        bar.addEventListener('blur', hide);
    });

})();
