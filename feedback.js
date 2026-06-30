/* Bygrest demo — feedback capture via ntfy.sh (free, no signup, instant push).
   Subscribe: https://ntfy.sh/bygrest-fb-0fc2690a99c57c35 (browser or ntfy app).
   All responses also stored in localStorage as backup.
*/
const NTFY_TOPIC = "bygrest-fb-0fc2690a99c57c35";

(function () {
  // Bilingual copy (reuses the demo's current language via global S).
  const L = {
    da: {
      open: "Feedback", title: "Hjælp os med Bygrest", sub: "30 sekunder. Anonymt.",
      q1: "Hvad synes du om idéen?",
      q2: "Jeg er…", role_co: "Firma / håndværker", role_priv: "Privat", role_other: "Andet",
      q3: "Interessant for mig som…", i_sell: "Sælger", i_buy: "Køber", i_both: "Begge", i_no: "Ikke relevant",
      q4: "Hvad ville du udbyde eller købe — eller hvad stopper dig?",
      ph: "Skriv gerne et par ord (valgfrit)", send: "Send", later: "Senere",
      thanks: "Tak! 🙏", thanksb: "Din feedback hjælper os meget.",
      promptT: "Hvad synes du? 👀", promptB: "Del din reaktion på 30 sek.", promptBtn: "Giv feedback", dismiss: "Luk",
      needStars: "Vælg venligst en bedømmelse",
    },
    en: {
      open: "Feedback", title: "Help shape Bygrest", sub: "30 seconds. Anonymous.",
      q1: "What do you think of the idea?",
      q2: "I am…", role_co: "Company / tradesperson", role_priv: "Private", role_other: "Other",
      q3: "Interesting to me as…", i_sell: "Seller", i_buy: "Buyer", i_both: "Both", i_no: "Not for me",
      q4: "What would you list or buy — or what stops you?",
      ph: "A few words (optional)", send: "Send", later: "Later",
      thanks: "Thanks! 🙏", thanksb: "Your feedback helps us a lot.",
      promptT: "What do you think? 👀", promptB: "Share your reaction in 30s.", promptBtn: "Give feedback", dismiss: "Dismiss",
      needStars: "Please pick a rating",
    },
  };
  const lang = () => (typeof S !== "undefined" && S.lang) || document.documentElement.lang || "da";
  const tt = (k) => (L[lang()] || L.en)[k];
  const host = () => document.getElementById("screen") || document.body;

  let rating = 0, role = "", interest = "";

  function submit() {
    if (rating === 0) { flash(tt("needStars")); return; }
    const comment = (document.getElementById("fb_comment") || {}).value || "";
    const context = `lang=${lang()} screen=${(typeof S !== "undefined" && S.route && S.route.view) || "?"} ua=${navigator.userAgent.slice(0, 60)}`;
    const payload = { rating, role: role || "—", interest: interest || "—", comment, context, at: new Date().toISOString() };

    // Always persist locally as backup.
    const all = JSON.parse(localStorage.getItem("bg_feedback") || "[]");
    all.push(payload); localStorage.setItem("bg_feedback", JSON.stringify(all));

    // Send via ntfy.sh (free push notifications, no account needed).
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const body = [
      `${stars}  (${rating}/5)`,
      `Role: ${role || "—"}`,
      `Interest: ${interest || "—"}`,
      comment ? `Comment: ${comment}` : "",
      `Context: ${context}`,
    ].filter(Boolean).join("\n");

    fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      headers: { "Title": "Bygrest feedback", "Tags": "memo,construction_worker" },
      body,
    }).catch(() => console.log("[Bygrest feedback] ntfy send failed, saved locally"));
    localStorage.setItem("bg_fb_done", "1");
    showThanks();
  }

  function flash(msg) {
    const e = document.getElementById("fb_err"); if (e) { e.textContent = msg; e.style.opacity = 1; }
  }

  function close() { const m = document.getElementById("fb_modal"); if (m) m.remove(); }

  function showThanks() {
    close();
    const m = document.createElement("div"); m.id = "fb_modal"; m.className = "fb-overlay";
    m.innerHTML = `<div class="fb-card" style="text-align:center">
      <div style="font-size:48px">${tt("thanks")}</div>
      <p style="color:var(--text-secondary)">${tt("thanksb")}</p>
      <button class="btn primary" id="fb_close2">OK</button></div>`;
    host().appendChild(m);
    m.addEventListener("click", (e) => { if (e.target === m || e.target.id === "fb_close2") close(); });
  }

  function openForm() {
    close();
    rating = 0; role = ""; interest = "";
    const m = document.createElement("div"); m.id = "fb_modal"; m.className = "fb-overlay";
    m.innerHTML = `<div class="fb-card">
      <div class="fb-head"><b>${tt("title")}</b><button class="fb-x" id="fb_x">✕</button></div>
      <div class="fb-sub">${tt("sub")}</div>

      <div class="fb-q">${tt("q1")}</div>
      <div class="fb-stars" id="fb_stars">${[1,2,3,4,5].map(i => `<span data-star="${i}">☆</span>`).join("")}</div>

      <div class="fb-q">${tt("q2")}</div>
      <div class="fb-seg" id="fb_role">
        <button data-role="company">${tt("role_co")}</button>
        <button data-role="private">${tt("role_priv")}</button>
        <button data-role="other">${tt("role_other")}</button>
      </div>

      <div class="fb-q">${tt("q3")}</div>
      <div class="fb-seg fb-seg4" id="fb_interest">
        <button data-int="seller">${tt("i_sell")}</button>
        <button data-int="buyer">${tt("i_buy")}</button>
        <button data-int="both">${tt("i_both")}</button>
        <button data-int="no">${tt("i_no")}</button>
      </div>

      <div class="fb-q">${tt("q4")}</div>
      <textarea id="fb_comment" class="field" rows="3" placeholder="${tt("ph")}"></textarea>

      <div id="fb_err" class="fb-err"></div>
      <button class="btn primary" id="fb_send">${tt("send")}</button>
      <button class="btn ghost" id="fb_later">${tt("later")}</button>
    </div>`;
    host().appendChild(m);

    m.querySelectorAll("#fb_stars span").forEach(s => s.onclick = () => {
      rating = +s.dataset.star;
      m.querySelectorAll("#fb_stars span").forEach(x => x.textContent = (+x.dataset.star <= rating) ? "★" : "☆");
      flash("");
    });
    m.querySelectorAll("#fb_role button").forEach(b => b.onclick = () => {
      role = b.dataset.role;
      m.querySelectorAll("#fb_role button").forEach(x => x.classList.toggle("on", x === b));
    });
    m.querySelectorAll("#fb_interest button").forEach(b => b.onclick = () => {
      interest = b.dataset.int;
      m.querySelectorAll("#fb_interest button").forEach(x => x.classList.toggle("on", x === b));
    });
    m.querySelector("#fb_send").onclick = submit;
    m.querySelector("#fb_x").onclick = close;
    m.querySelector("#fb_later").onclick = close;
    m.addEventListener("click", (e) => { if (e.target === m) close(); });
  }

  // Floating launcher (always visible, inside the phone frame).
  function mountButton() {
    if (document.getElementById("fb_fab")) return;
    const b = document.createElement("button");
    b.id = "fb_fab"; b.className = "fb-fab"; b.innerHTML = `💬 <span>${tt("open")}</span>`;
    b.onclick = openForm;
    host().appendChild(b);
  }

  // One-time gentle auto-prompt after the visitor has engaged.
  function maybeAutoPrompt() {
    if (localStorage.getItem("bg_fb_done") || sessionStorage.getItem("bg_fb_prompted")) return;
    // Don't interrupt onboarding.
    if (document.getElementById("onb")) { setTimeout(maybeAutoPrompt, 5000); return; }
    sessionStorage.setItem("bg_fb_prompted", "1");
    const p = document.createElement("div"); p.id = "fb_prompt"; p.className = "fb-prompt";
    p.innerHTML = `<div><b>${tt("promptT")}</b><div class="fb-sub">${tt("promptB")}</div></div>
      <div class="fb-prow"><button class="btn ghost" id="fb_pdismiss">${tt("dismiss")}</button>
      <button class="btn primary" id="fb_pgo">${tt("promptBtn")}</button></div>`;
    host().appendChild(p);
    p.querySelector("#fb_pgo").onclick = () => { p.remove(); openForm(); };
    p.querySelector("#fb_pdismiss").onclick = () => p.remove();
    setTimeout(() => { if (document.getElementById("fb_prompt")) p.remove(); }, 15000);
  }

  // expose so app.js can trigger after the demo "Listing created!" moment.
  window.bygrestFeedback = { open: openForm, prompt: maybeAutoPrompt };

  function boot() { mountButton(); setTimeout(maybeAutoPrompt, 40000); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
