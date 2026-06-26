/* Bygrest demo — feedback capture.
   Native in-app form (anonymous, no respondent login → max conversion) that
   posts to a Google Form in the background. Configure GF below.

   ── HOW TO CONNECT (2 min, free, unlimited, anonymous) ───────────────────────
   1. Create a Google Form (forms.google.com) with 4 questions IN THIS ORDER:
        Q1  Short answer  — "Rating (1-5)"
        Q2  Multiple choice — "Would you use Bygrest?"  options: Yes / Maybe / No
        Q3  Paragraph    — "What's missing / what would make it useful?"
        Q4  Short answer  — "Context"   (language/screen, filled automatically)
      In Settings, make sure "Collect email addresses" is OFF (anonymous).
   2. Click the ⋮ menu → "Get pre-filled link", type dummy answers, "Get link".
      The copied URL contains entry.NUMBERS for each question.
   3. Paste the form id and the 4 entry numbers below.
        - action: replace FORM_ID in the URL (keep /formResponse)
        - fields: the entry.NNN values, matching the questions above
   4. Re-deploy (push). Done — answers land in the Form's Responses tab / Sheet.
   Until configured, the form still works in the demo and stores responses
   locally (window/console) so you can test the UX.
*/
const GF = {
  action: "",                  // e.g. "https://docs.google.com/forms/d/e/FORM_ID/formResponse"
  fields: {
    rating: "entry.000000001", // Q1
    intent: "entry.000000002", // Q2
    comment: "entry.000000003",// Q3
    context: "entry.000000004",// Q4
  },
};

(function () {
  // Bilingual copy (reuses the demo's current language via global S).
  const L = {
    da: {
      open: "Feedback", title: "Hjælp os med Bygrest", sub: "30 sekunder. Anonymt.",
      q1: "Hvad synes du om idéen?", q2: "Ville du bruge Bygrest?",
      yes: "Ja", maybe: "Måske", no: "Nej",
      q3: "Hvad mangler — eller hvad ville gøre det nyttigt for dig?",
      ph: "Skriv gerne et par ord (valgfrit)", send: "Send", later: "Senere",
      thanks: "Tak! 🙏", thanksb: "Din feedback hjælper os meget.",
      promptT: "Hvad synes du? 👀", promptB: "Del din reaktion på 30 sek.", promptBtn: "Giv feedback", dismiss: "Luk",
      needStars: "Vælg venligst en bedømmelse",
    },
    en: {
      open: "Feedback", title: "Help shape Bygrest", sub: "30 seconds. Anonymous.",
      q1: "What do you think of the idea?", q2: "Would you use Bygrest?",
      yes: "Yes", maybe: "Maybe", no: "No",
      q3: "What's missing — or what would make it useful to you?",
      ph: "A few words (optional)", send: "Send", later: "Later",
      thanks: "Thanks! 🙏", thanksb: "Your feedback helps us a lot.",
      promptT: "What do you think? 👀", promptB: "Share your reaction in 30s.", promptBtn: "Give feedback", dismiss: "Dismiss",
      needStars: "Please pick a rating",
    },
  };
  const lang = () => (typeof S !== "undefined" && S.lang) || document.documentElement.lang || "da";
  const tt = (k) => (L[lang()] || L.en)[k];
  const host = () => document.getElementById("screen") || document.body;

  let rating = 0, intent = "";

  // Hidden iframe so the Google Form POST doesn't navigate the page.
  function ensureSink() {
    if (document.getElementById("gf_sink")) return;
    const f = document.createElement("iframe");
    f.id = "gf_sink"; f.name = "gf_sink"; f.style.display = "none";
    document.body.appendChild(f);
  }

  function submit() {
    if (rating === 0) { flash(tt("needStars")); return; }
    const comment = (document.getElementById("fb_comment") || {}).value || "";
    const context = `lang=${lang()} screen=${(typeof S !== "undefined" && S.route && S.route.view) || "?"} ua=${navigator.userAgent.slice(0, 60)}`;
    const payload = { rating, intent: intent || "—", comment, context, at: new Date().toISOString() };

    if (GF.action && !GF.action.includes("FORM_ID")) {
      ensureSink();
      const form = document.createElement("form");
      form.action = GF.action; form.method = "POST"; form.target = "gf_sink";
      const add = (name, val) => { const i = document.createElement("input"); i.type = "hidden"; i.name = name; i.value = val; form.appendChild(i); };
      add(GF.fields.rating, rating);
      add(GF.fields.intent, intent || "—");
      add(GF.fields.comment, comment);
      add(GF.fields.context, context);
      document.body.appendChild(form); form.submit(); form.remove();
    } else {
      // Demo mode — keep responses locally so the UX is testable.
      const all = JSON.parse(localStorage.getItem("bg_feedback") || "[]");
      all.push(payload); localStorage.setItem("bg_feedback", JSON.stringify(all));
      console.log("[Bygrest feedback] (demo mode, not sent):", payload);
    }
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
    rating = 0; intent = "";
    const m = document.createElement("div"); m.id = "fb_modal"; m.className = "fb-overlay";
    m.innerHTML = `<div class="fb-card">
      <div class="fb-head"><b>${tt("title")}</b><button class="fb-x" id="fb_x">✕</button></div>
      <div class="fb-sub">${tt("sub")}</div>

      <div class="fb-q">${tt("q1")}</div>
      <div class="fb-stars" id="fb_stars">${[1,2,3,4,5].map(i => `<span data-star="${i}">☆</span>`).join("")}</div>

      <div class="fb-q">${tt("q2")}</div>
      <div class="fb-seg" id="fb_intent">
        <button data-intent="yes">${tt("yes")}</button>
        <button data-intent="maybe">${tt("maybe")}</button>
        <button data-intent="no">${tt("no")}</button>
      </div>

      <div class="fb-q">${tt("q3")}</div>
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
    m.querySelectorAll("#fb_intent button").forEach(b => b.onclick = () => {
      intent = b.dataset.intent;
      m.querySelectorAll("#fb_intent button").forEach(x => x.classList.toggle("on", x === b));
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
