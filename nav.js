// Mauldin Insurance Group — South Carolina Medicare Agency
// Central Navigation — edit this file to update ALL pages at once

document.addEventListener('DOMContentLoaded', function () {
  const navHTML = `
  <nav class="site-nav" id="site-nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <img src="https://irp.cdn-website.com/ed566c5d/dms3rep/multi/favicon.png" alt="Mauldin Insurance Group" class="nav-logo-img" />
        <div class="nav-logo-text">
          <span class="nav-logo-top">Mauldin Insurance Group</span>
          <span class="nav-logo-sub">South Carolina Medicare Agency</span>
        </div>
      </a>

      <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav-links" id="nav-links">
        <li class="nav-dropdown">
          <button class="nav-link nav-drop-btn">Medicare <span class="nav-arrow">▾</span></button>
          <ul class="nav-submenu">
            <li><a href="/medicare-advantage-south-carolina">📋 Medicare Advantage</a></li>
            <li><a href="/medicare-supplement-south-carolina">🛡️ Medicare Supplement</a></li>
            <li><a href="/medicare-part-d-south-carolina">💊 Medicare Part D</a></li>
            <li><a href="/turning-65-south-carolina">🎂 Turning 65 in SC</a></li>
            <li><a href="/why-medicare-advantage-networks-change-by-county-south-carolina">🗺️ County-Based Networks Explained</a></li>
            <li><a href="/moving-to-sc-medicare-guide.html" style="color:#c9a227;font-weight:bold;">🎁 Free Relocation Guide</a></li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <button class="nav-link nav-drop-btn">Local Areas <span class="nav-arrow">▾</span></button>
          <ul class="nav-submenu">
            <li><a href="/medicare-lexington-sc">📍 Lexington, SC</a></li>
            <li><a href="/medicare-columbia-sc">📍 Columbia, SC</a></li>
            <li><a href="/service-areas">🗺️ All SC Service Areas</a></li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <button class="nav-link nav-drop-btn">Other Coverage <span class="nav-arrow">▾</span></button>
          <ul class="nav-submenu">
            <li><a href="/aca-health-insurance-south-carolina">🌿 ACA Health Insurance</a></li>
            <li><a href="/final-expense-south-carolina">💛 Final Expense</a></li>
          </ul>
        </li>
        <li class="nav-dropdown">
          <button class="nav-link nav-drop-btn">Resources <span class="nav-arrow">▾</span></button>
          <ul class="nav-submenu">
            <li><a href="/medicare-advantage-county-based-south-carolina">📘 County-Based Plans Explained</a></li>
            <li><a href="/how-to-check-doctor-in-network-south-carolina">🔍 Check Your Doctor's Network</a></li>
            <li><a href="/what-happens-if-you-move-counties-medicare-advantage-south-carolina">📦 Moving Counties on Medicare</a></li>
            <li><a href="/hmo-vs-ppo-medicare-advantage-south-carolina">⚖️ HMO vs PPO in SC</a></li>
          </ul>
        </li>
        <li><a href="/service-areas" class="nav-link">Service Areas</a></li>
      </ul>

      <div class="nav-ctas">
        <a href="tel:+18435092462" class="nav-phone">843-509-2462</a>
        <a href="/quiz.html" class="nav-quiz">Free Quiz</a>
        <a href="https://www.mauldininsurancegroup.com/contact" class="nav-consult" target="_blank">Free Consultation</a>
      </div>
    </div>
  </nav>`;

  const navCSS = `
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: 'Georgia', 'Times New Roman', serif; }

    .site-nav {
      background: #1a2e5a;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 12px rgba(0,0,0,0.25);
    }
    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 20px;
      height: 68px;
    }
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      flex-shrink: 0;
    }
    .nav-logo-img {
      height: 44px;
      width: auto;
      max-width: 130px;
      object-fit: contain;
      flex-shrink: 0;
      display: block;
    }
    .nav-logo-text { display: flex; flex-direction: column; }
    .nav-logo-top { color: white; font-size: 13px; font-weight: bold; letter-spacing: 0.5px; line-height: 1.2; }
    .nav-logo-sub { color: #c9a227; font-size: 10px; letter-spacing: 0.5px; line-height: 1.2; }

    .nav-links {
      display: flex;
      list-style: none;
      margin: 0 0 0 auto;
      padding: 0;
      gap: 2px;
      align-items: center;
    }
    .nav-link {
      color: rgba(255,255,255,0.9);
      text-decoration: none;
      font-size: 13px;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background 0.2s, color 0.2s;
      background: none;
      border: none;
      cursor: pointer;
      font-family: Georgia, serif;
      white-space: nowrap;
    }
    .nav-link:hover, .nav-drop-btn:hover { background: rgba(255,255,255,0.12); color: #c9a227; }
    .nav-arrow { font-size: 10px; margin-left: 3px; }

    .nav-dropdown { position: relative; }
    .nav-dropdown:hover .nav-submenu,
    .nav-dropdown.open .nav-submenu { display: block; }
    .nav-submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: #1a2e5a;
      border: 1px solid rgba(201,162,39,0.3);
      border-radius: 6px;
      list-style: none;
      padding: 6px 0;
      margin: 0;
      min-width: 220px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
      z-index: 100;
    }
    .nav-submenu li a {
      display: block;
      padding: 9px 18px;
      color: rgba(255,255,255,0.88);
      text-decoration: none;
      font-size: 13px;
      transition: background 0.15s, color 0.15s;
      white-space: nowrap;
    }
    .nav-submenu li a:hover { background: rgba(201,162,39,0.15); color: #c9a227; }

    .nav-ctas {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: 12px;
      flex-shrink: 0;
      flex-wrap: nowrap;
    }
    .nav-phone {
      color: #c9a227;
      text-decoration: none;
      font-size: 13px;
      font-weight: bold;
      white-space: nowrap;
    }
    .nav-phone:hover { color: white; }
    .nav-quiz {
      background: #0e7490;
      color: white;
      text-decoration: none;
      font-size: 12px;
      font-weight: bold;
      padding: 8px 14px;
      border-radius: 4px;
      white-space: nowrap;
      transition: background 0.2s;
    }
    .nav-quiz:hover { background: #0c6377; }
    .nav-consult {
      background: #c9a227;
      color: #1a2e5a;
      text-decoration: none;
      font-size: 12px;
      font-weight: bold;
      padding: 8px 14px;
      border-radius: 4px;
      white-space: nowrap;
      transition: background 0.2s;
    }
    .nav-consult:hover { background: #e0b82d; }

    .nav-hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      margin-left: auto;
    }
    .nav-hamburger span {
      display: block;
      width: 24px;
      height: 2px;
      background: white;
      border-radius: 2px;
      transition: all 0.3s;
    }

    .nav-links-mobile-ctas { display: none; }
    @media (max-width: 900px) {
      .nav-hamburger { display: flex; }
      .nav-ctas { display: none; }
      .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 68px;
        left: 0;
        right: 0;
        background: #1a2e5a;
        padding: 12px 0 20px;
        border-top: 1px solid rgba(201,162,39,0.3);
        margin: 0;
        gap: 0;
        z-index: 999;
      }
      .nav-links.open { display: flex; }
      .nav-links > li { width: 100%; }
      .nav-link, .nav-drop-btn { width: 100%; text-align: left; padding: 12px 24px; font-size: 15px; }
      .nav-submenu {
        position: static;
        box-shadow: none;
        border: none;
        border-left: 3px solid #c9a227;
        margin-left: 20px;
        border-radius: 0;
        background: rgba(0,0,0,0.2);
        padding: 4px 0;
      }
      .nav-submenu li a { padding: 10px 20px; font-size: 14px; }
      .nav-dropdown:hover .nav-submenu { display: none; }
      .nav-dropdown.open .nav-submenu { display: block; }
      .nav-links-mobile-ctas {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 24px 4px;
        border-top: 1px solid rgba(255,255,255,0.1);
        margin-top: 8px;
      }
      .nav-links-mobile-ctas a {
        display: block;
        text-align: center;
        padding: 11px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
      }
      .mobile-quiz-btn { background: #0e7490; color: white; }
      .mobile-phone-btn { background: #c9a227; color: #1a2e5a; }
      .mobile-consult-btn { border: 1.5px solid rgba(255,255,255,0.4); color: rgba(255,255,255,0.85); }
    }
  </style>`;

  // Inject styles into head
  document.head.insertAdjacentHTML('beforeend', navCSS);

  // Inject nav HTML
  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) {
    placeholder.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }

  // Mobile hamburger toggle — also injects mobile CTAs into open menu
  setTimeout(() => {
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
      // Add mobile CTA buttons to the bottom of the mobile menu
      const mobileCTAs = document.createElement('li');
      mobileCTAs.innerHTML = `
        <div class="nav-links-mobile-ctas">
          <a href="tel:+18435092462" class="mobile-phone-btn">📞 843-509-2462</a>
          <a href="/quiz.html" class="mobile-quiz-btn">📋 Free Medicare Quiz</a>
          <a href="https://www.mauldininsurancegroup.com/contact" class="mobile-consult-btn" target="_blank">Free Consultation</a>
        </div>`;
      navLinks.appendChild(mobileCTAs);

      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
    }
    // Mobile dropdown toggles
    document.querySelectorAll('.nav-drop-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const li = btn.closest('li');
        const isOpen = li.classList.contains('open');
        document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
        if (!isOpen) li.classList.add('open');
      });
    });
    // Highlight current page
    const current = window.location.pathname.replace(/\/$/, '');
    document.querySelectorAll('.nav-submenu a, .nav-links > li > a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === current || href === current + '/')) {
        link.style.color = '#c9a227';
        link.style.fontWeight = 'bold';
      }
    });
  }, 0);
});
