/* ============================================================
   Hisaab — site analytics. One file, loaded on every page.

   GA4 is live and needs nothing.
   The Meta pixel stays switched off until PIXEL_ID below is filled in —
   an empty ID loads nothing, so this file is safe to ship today.

   Events, and where they fire:
     page_view      every page          (automatic)
     begin_checkout #buyBtn clicked     GA4 + Meta "InitiateCheckout"
     generate_lead  email captured      GA4 + Meta "Lead"
     purchase       thank-you page      GA4 + Meta "Purchase"

   Nothing here blocks rendering, and nothing here breaks the page if a
   network call fails.
   ============================================================ */
(function () {
  "use strict";

  var GA4_ID   = "G-NECBK7EB6W";
  var PIXEL_ID = "";   /* ← paste the Meta pixel ID here (digits only). Empty = pixel off. */

  var THANKS_PAGE = "z3m8kq71x4p9f2rt";  /* the post-payment page */
  var PRICE = 112, CURRENCY = "INR";

  /* ---------- GA4 ---------- */
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA4_ID);

  /* ---------- Meta pixel (only if an ID is set) ---------- */
  if (PIXEL_ID) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
      t = b.createElement(e); t.async = true; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function fb(name, params) {
    if (window.fbq) window.fbq("track", name, params || {});
  }

  /* One call sends both. Anything on the site can use it. */
  window.hisaab = window.hisaab || {};
  window.hisaab.track = function (gaName, fbName, params) {
    if (typeof gtag === "function") gtag("event", gaName, params || {});
    if (fbName) fb(fbName, params);
  };

  /* ---------- buy button → begin_checkout ---------- */
  document.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest && e.target.closest("#buyBtn");
    if (!btn) return;
    window.hisaab.track("begin_checkout", "InitiateCheckout", {
      value: PRICE, currency: CURRENCY, items: [{ item_name: "Hisaab sheet" }]
    });
  });

  /* ---------- thank-you page → purchase ----------
     Fires once per browser session, so a refresh or a back-button
     never counts a second sale. */
  if (location.pathname.indexOf(THANKS_PAGE) !== -1) {
    var seen = false;
    try { seen = sessionStorage.getItem("hisaab_purchase") === "1"; } catch (err) {}
    if (!seen) {
      try { sessionStorage.setItem("hisaab_purchase", "1"); } catch (err) {}

      /* Razorpay appends its payment id on redirect when it can — use it
         as the transaction id so the same sale is never counted twice. */
      var q = new URLSearchParams(location.search);
      var txn = q.get("razorpay_payment_id") || q.get("payment_id") ||
                ("hs-" + Date.now().toString(36));

      window.hisaab.track("purchase", "Purchase", {
        transaction_id: txn, value: PRICE, currency: CURRENCY,
        items: [{ item_name: "Hisaab sheet", price: PRICE, quantity: 1 }]
      });
    }
  }
})();
