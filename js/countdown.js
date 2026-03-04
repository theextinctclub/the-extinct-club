'use strict';

// Launch target — 04 March 2026, 3:00 PM UTC
const LAUNCH_DATE = new Date('2099-03-04T15:10:00.000Z');

// Contract address — update this value after launch
const CONTRACT_ADDRESS = 'TBA';

const pad = n => String(Math.floor(n)).padStart(2, '0');

function onLaunchTriggered() {
  const wrap = document.getElementById('countdownWrap');
  if (wrap) {
    wrap.style.transition = 'opacity 0.8s ease';
    wrap.style.opacity    = '0';
    setTimeout(() => {
      wrap.style.display = 'none';
      showContractAddress();
    }, 850);
  }
  activatePhaseOne();
}

function showContractAddress() {
  const hero = document.querySelector('.hero-stats');
  if (!hero) return;

  const isTBA = CONTRACT_ADDRESS === 'TBA';

  const box = document.createElement('div');
  box.id = 'caBox';
  box.innerHTML = `
    <div class="ca-launched-label">
      <span class="ca-live-dot"></span>
      $EXTINCT IS LIVE
    </div>
    <div class="ca-row">
      <span class="ca-prefix">CA</span>
      <span class="ca-address" id="caAddress">${isTBA ? 'Announced at Launch' : CONTRACT_ADDRESS}</span>
      ${!isTBA ? `<button class="ca-copy-btn" onclick="copyCA()" title="Copy address">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      </button>` : ''}
    </div>
    ${isTBA ? `<div class="ca-tba-note">Contract address will be announced at launch on Pump.fun</div>` : ''}
  `;

  box.style.opacity   = '0';
  box.style.transition = 'opacity 0.8s ease 0.2s';
  hero.insertAdjacentElement('afterend', box);
  requestAnimationFrame(() => requestAnimationFrame(() => { box.style.opacity = '1'; }));
}

window.copyCA = function () {
  if (CONTRACT_ADDRESS === 'TBA') return;
  navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
    const btn = document.querySelector('.ca-copy-btn');
    if (!btn) return;
    btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1aff8c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    setTimeout(() => {
      btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
    }, 2000);
  });
};

function activatePhaseOne() {
  const phase0 = document.querySelector('.phase.phase-active');
  if (phase0) {
    phase0.classList.remove('phase-active');
    const b = phase0.querySelector('.badge-live');
    if (b) b.remove();
  }

  const phases = document.querySelectorAll('.phase');
  if (phases.length >= 2) {
    const phase1 = phases[1];
    phase1.classList.add('phase-active');
    const soon = phase1.querySelector('.badge-soon');
    if (soon) soon.remove();
    const pill = phase1.querySelector('.phase-launch-date');
    if (pill) pill.remove();

    const badge = document.createElement('span');
    badge.className = 'badge badge-live';
    badge.innerHTML = `<span style="width:6px;height:6px;background:var(--green);border-radius:50%;display:inline-block;animation:blink 1.5s infinite" aria-hidden="true"></span> Active Now`;
    phase1.appendChild(badge);
  }
}

function initCountdown() {
  const daysEl  = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl  = document.getElementById('cd-mins');
  const secsEl  = document.getElementById('cd-secs');
  const wrapEl  = document.getElementById('countdownWrap');

  if (!wrapEl) return;

  if (LAUNCH_DATE.getTime() - Date.now() <= 0) {
    onLaunchTriggered();
    return;
  }

  if (!daysEl) return;

  let prevSec  = null;
  let launched = false;

  const flash = el => {
    el.classList.add('tick');
    setTimeout(() => el.classList.remove('tick'), 280);
  };

  const tick = () => {
    const diff = LAUNCH_DATE.getTime() - Date.now();

    if (diff <= 0 && !launched) {
      launched = true;
      onLaunchTriggered();
      return;
    }

    const totalSecs = Math.floor(diff / 1000);
    const d = Math.floor(totalSecs / 86400);
    const h = Math.floor((totalSecs % 86400) / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;

    daysEl.textContent  = pad(d);
    hoursEl.textContent = pad(h);
    minsEl.textContent  = pad(m);
    secsEl.textContent  = pad(s);

    if (prevSec !== s) {
      flash(secsEl);
      if (prevSec !== null && s === 59) flash(minsEl);
      if (prevSec !== null && s === 59 && m === 59) flash(hoursEl);
      prevSec = s;
    }

    setTimeout(tick, 1000);
  };

  tick();
}

document.addEventListener('DOMContentLoaded', initCountdown);
