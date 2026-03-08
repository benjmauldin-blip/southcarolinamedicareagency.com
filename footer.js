// Mauldin Insurance Group — South Carolina Medicare Agency
// Central Footer — edit this file to update ALL pages at once

document.addEventListener('DOMContentLoaded', function () {
  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="https://irp.cdn-website.com/ed566c5d/dms3rep/multi/Screenshot+2024-07-02+at+11.29.07%C3%A2--AM.png" alt="Mauldin Insurance Group" style="height:40px;width:auto;max-width:120px;object-fit:contain;" />
            <div class="footer-logo-text">
              <span class="footer-logo-name">Mauldin Insurance Group</span>
              <span class="footer-logo-sub">South Carolina Medicare Agency</span>
            </div>
          </div>
          <p class="footer-tagline">Independent Medicare agents serving all of South Carolina. Based in Lexington, SC. We shop dozens of plans to find your best fit — at no cost to you.</p>
        </div>

        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p class="footer-agent-name">Jennifer Mauldin</p>
          <p><a href="tel:+18435092462">843-509-2462</a></p>
          <p><a href="mailto:jennifer@mauldininsurancegroup.com">jennifer@mauldininsurancegroup.com</a></p>
          <p class="footer-agent-name" style="margin-top:10px;">Ben Mauldin</p>
          <p><a href="tel:+18039208827">803-920-8827</a></p>
          <p><a href="mailto:ben@mauldininsurancegroup.com">ben@mauldininsurancegroup.com</a></p>
          <p style="margin-top:10px;"><a href="https://www.mauldininsurancegroup.com" target="_blank">MauldinInsuranceGroup.com</a></p>
          <p><a href="https://www.mauldininsurance.com" target="_blank">Auto, Home & Business Insurance →</a></p>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/medicare-advantage-south-carolina">Medicare Advantage</a></li>
            <li><a href="/medicare-supplement-south-carolina">Medicare Supplement</a></li>
            <li><a href="/medicare-part-d-south-carolina">Medicare Part D</a></li>
            <li><a href="/turning-65-south-carolina">Turning 65 in SC</a></li>
            <li><a href="/medicare-lexington-sc">Medicare in Lexington</a></li>
            <li><a href="/medicare-columbia-sc">Medicare in Columbia</a></li>
            <li><a href="/aca-health-insurance-south-carolina">ACA Health Insurance</a></li>
            <li><a href="/final-expense-south-carolina">Final Expense</a></li>
            <li><a href="/service-areas">&#x1F5FA;&#xFE0F; All Service Areas</a></li>
          </ul>
        </div>
      </div>

      <p class="footer-disclaimer">By dialing the phone number you will contact a licensed insurance agent. We do not offer every plan in your area. Currently, we represent 6 organizations which offer 52 products in your area. Please contact Medicare.gov, 1-800-MEDICARE (TTY users call 1-877-486-2048) 24 hours a day/7 days a week, or your local State Health Insurance Program (SHIP) to get information on all your options. JWM_WEB_060125_C</p>
      <p class="footer-copy">&copy; 2026 Mauldin Insurance Group. All rights reserved. | Lexington, SC | Serving All of South Carolina</p>
    </div>
  </footer>`;

  const footerCSS = `
  <style>
    .footer-agent-name {
      color: white;
      font-weight: 700;
      font-size: 13px;
      margin-bottom: 2px !important;
    }
  </style>`;

  document.head.insertAdjacentHTML('beforeend', footerCSS);

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
});
