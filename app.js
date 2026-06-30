/* Bygrest — web demo. Mirrors the iOS app on the same mock data.
   Positioning: Bygrest connects buyers and sellers of reusable surplus
   building materials. NO buy/checkout/pay/delivery. Read-only demo. */

// ---------------------------------------------------------------- i18n
const I18N = {
  da: {
    "tab.feed": "Marked", "tab.sell": "Sælg", "tab.messages": "Beskeder", "tab.profile": "Profil",
    "feed.search": "Søg på nøgleord eller materiale",
    "feed.favoritesOnly": "Kun favoritter", "feed.clear": "Ryd",
    "common.free": "Gratis", "common.km": "km", "common.soon": "Snart",
    "common.private": "Privat", "common.company": "Virksomhed",
    "common.back": "Tilbage", "common.done": "Færdig", "common.cancel": "Annullér",
    "co2": "kg CO₂ sparet",
    "feed.empty": "Ingen annoncer matcher.", "fav.empty": "Ingen favoritter endnu. Tryk på hjertet på en annonce.",
    "detail.contact": "Skriv til sælger", "detail.pickup": "Anmod om afhentning",
    "detail.prePickup": "Forhåndsanmod om afhentning", "detail.requested": "Afhentning anmodet",
    "detail.quantity": "Mængde", "detail.condition": "Stand", "detail.category": "Kategori",
    "detail.availableFrom": "Ledig fra", "detail.area": "Område (omtrentligt)",
    "detail.exactLater": "Den præcise afhentningsadresse deles i chatten.",
    "detail.disclaimer": "Betaling og afhentning aftales direkte med sælgeren. Bygrest kontrollerer, ejer, transporterer, opbevarer, sælger eller garanterer ikke materialet.",
    "detail.reviews": "anmeldelser", "detail.noReviews": "Ingen anmeldelser endnu",
    "detail.report": "Anmeld annonce", "detail.save": "Gem", "detail.saved": "Gemt",
    "detail.aiSuggested": "AI-forslag",
    "report.toast": "Tak — vi gennemgår annoncen.",
    "cond.new_surplus": "Nyt overskud", "cond.used_good": "Brugt — god", "cond.used_worn": "Brugt — slidt",
    "status.active": "Aktiv", "status.pickup_requested": "Afhentning anmodet",
    "status.picked_up": "Afhentet", "status.unavailable": "Utilgængelig",
    "sell.title": "Ny annonce", "sell.intro": "Sælg overskud på sekunder",
    "sell.introBody": "Fotografér dine rester — AI foreslår kategori og pris. Du fastsætter altid den endelige pris.",
    "sell.pickPhoto": "Vælg et demo-billede", "sell.analyze": "Genkend materiale",
    "sell.analyzing": "Genkender materiale…", "sell.aiNote": "AI-forslag skal gennemgås af dig før offentliggørelse.",
    "sell.field.title": "Titel", "sell.field.category": "Kategori", "sell.field.qty": "Mængde",
    "sell.field.cond": "Stand", "sell.field.price": "Pris (DKK)", "sell.free": "Gratis",
    "sell.field.area": "Afhentningsområde", "sell.field.deadline": "Afhentningsfrist",
    "sell.checklistTitle": "Sikkerhedstjek før offentliggørelse",
    "sell.c1": "Jeg har ret til at annoncere materialet.",
    "sell.c2": "Materialet er egnet til genbrug og er ikke affald.",
    "sell.c3": "Materialet indeholder ikke asbest, PCB, blymaling eller andre farlige stoffer.",
    "sell.c4": "Beskrivelsen og billederne er korrekte.",
    "sell.c5": "Afhentning og betaling aftales direkte med køberen.",
    "sell.create": "Opret annonce", "sell.published": "Annonce oprettet!", "fb.cta": "Hjælp os — giv feedback",
    "sell.formidler": "Kun afhentning — ingen levering. Betaling aftales direkte med køber; Bygrest håndterer aldrig penge.",
    "sell.prohibited": "Forbudte materialer",
    "msg.empty": "Ingen beskeder endnu.", "chat.placeholder": "Besked",
    "chat.disclaimer": "Betaling og afhentning aftales direkte mellem køber og sælger. Bygrest er ikke part i handlen.",
    "chat.q1": "Hej, er materialet stadig tilgængeligt?", "chat.q2": "Hvornår kan det afhentes?",
    "chat.q3": "Kan du bekræfte mængden?", "chat.q4": "Hvor er afhentningsstedet?",
    "profile.you": "Demo Sælger", "profile.seller": "Sælger",
    "profile.summary": "I år", "profile.listings": "Annoncer", "profile.co2": "Est. CO₂ sparet", "profile.year": "Annoncer i år",
    "profile.myListings": "Mine annoncer", "profile.pickupRequests": "Indkomne afhentningsanmodninger",
    "profile.favorites": "Favoritter", "profile.language": "Sprog", "profile.about": "Om Bygrest",
    "profile.noPickups": "Ingen afhentningsanmodninger endnu.",
    "res.confirm": "Bekræft", "res.pickedUp": "Marker afhentet", "res.cancel": "Annullér",
    "about.title": "Om Bygrest",
    "about.what": "Bygrest forbinder købere og sælgere af genbrugsegnede overskudsmaterialer i Danmark. Annoncer oprettes af sælgere. Afhentning og betaling aftales direkte mellem brugerne.",
    "about.intermediary.t": "Vi er formidler",
    "about.intermediary.b": "Bygrest forbinder kun købere og sælgere. Handel og betaling sker direkte mellem parterne uden for platformen. Vi ejer, kontrollerer, transporterer, opbevarer, sælger eller garanterer ikke materialet og håndterer ikke betaling eller levering.",
    "about.prohibited.t": "Forbudte materialer",
    "about.prohibited.b": "Af sikkerheds- og lovmæssige grunde må følgende ikke annonceres:",
    "about.privacy.t": "Privatliv",
    "about.privacy.b": "Kun et omtrentligt afhentningsområde vises offentligt. Den præcise adresse deles i chatten. Skatteoplysninger (DAC7) opbevares sikkert og vises aldrig på annoncer.",
    "about.terms": "Brugervilkår", "about.privacyPolicy": "Privatlivspolicy", "about.placeholder": "(placeholder)",
    "onb.next": "Videre", "onb.start": "Kom i gang", "onb.skip": "Spring over",
    "onb1t": "Genbrug i stedet for spild", "onb1b": "Bygrest forbinder købere og sælgere af genbrugsegnede overskudsmaterialer i Danmark.",
    "onb2t": "Opret på sekunder", "onb2b": "Fotografér dine rester — AI foreslår kategori og pris. Du fastsætter altid den endelige pris.",
    "onb3t": "Trygt og enkelt", "onb3b": "Bygrest forbinder kun købere og sælgere. Betaling og afhentning aftales direkte — vi håndterer aldrig penge og leverer ikke. Farlige materialer er forbudt."
  },
  en: {
    "tab.feed": "Market", "tab.sell": "Sell", "tab.messages": "Messages", "tab.profile": "Profile",
    "feed.search": "Search by keyword or material",
    "feed.favoritesOnly": "Favorites only", "feed.clear": "Clear",
    "common.free": "Free", "common.km": "km", "common.soon": "Soon",
    "common.private": "Private", "common.company": "Company",
    "common.back": "Back", "common.done": "Done", "common.cancel": "Cancel",
    "co2": "kg CO₂ saved",
    "feed.empty": "No listings match.", "fav.empty": "No favorites yet. Tap the heart on a listing.",
    "detail.contact": "Contact seller", "detail.pickup": "Request pickup",
    "detail.prePickup": "Pre-request pickup", "detail.requested": "Pickup requested",
    "detail.quantity": "Quantity", "detail.condition": "Condition", "detail.category": "Category",
    "detail.availableFrom": "Available from", "detail.area": "Area (approximate)",
    "detail.exactLater": "The exact pickup address is shared in chat.",
    "detail.disclaimer": "Payment and pickup are agreed directly with the seller. Bygrest does not inspect, own, transport, store, sell or guarantee the material.",
    "detail.reviews": "reviews", "detail.noReviews": "No reviews yet",
    "detail.report": "Report listing", "detail.save": "Save", "detail.saved": "Saved",
    "detail.aiSuggested": "AI suggested",
    "report.toast": "Thanks — we'll review this listing.",
    "cond.new_surplus": "New surplus", "cond.used_good": "Used — good", "cond.used_worn": "Used — worn",
    "status.active": "Active", "status.pickup_requested": "Pickup requested",
    "status.picked_up": "Picked up", "status.unavailable": "Unavailable",
    "sell.title": "New listing", "sell.intro": "List surplus in seconds",
    "sell.introBody": "Photograph your leftovers — AI suggests a category and price. You always set the final price.",
    "sell.pickPhoto": "Pick a demo photo", "sell.analyze": "Recognise material",
    "sell.analyzing": "Recognising material…", "sell.aiNote": "AI suggestions must be reviewed by you before publishing.",
    "sell.field.title": "Title", "sell.field.category": "Category", "sell.field.qty": "Quantity",
    "sell.field.cond": "Condition", "sell.field.price": "Price (DKK)", "sell.free": "Free",
    "sell.field.area": "Pickup area", "sell.field.deadline": "Pickup deadline",
    "sell.checklistTitle": "Safety checklist before publishing",
    "sell.c1": "I have the right to list this material.",
    "sell.c2": "The material is intended for reuse, not waste disposal.",
    "sell.c3": "The material does not contain asbestos, PCB, lead paint or other dangerous substances.",
    "sell.c4": "The description and photos are accurate.",
    "sell.c5": "Pickup and payment will be agreed directly with the buyer.",
    "sell.create": "Create listing", "sell.published": "Listing created!", "fb.cta": "Help us — give feedback",
    "sell.formidler": "Pickup only — no delivery. Payment is arranged directly with the buyer; Bygrest never handles money.",
    "sell.prohibited": "Prohibited materials",
    "msg.empty": "No messages yet.", "chat.placeholder": "Message",
    "chat.disclaimer": "Payment and pickup are agreed directly between buyer and seller. Bygrest is not part of the transaction.",
    "chat.q1": "Hi, is this still available?", "chat.q2": "When can I pick it up?",
    "chat.q3": "Can you confirm the quantity?", "chat.q4": "What is the exact pickup location?",
    "profile.you": "Demo Seller", "profile.seller": "Seller",
    "profile.summary": "This year", "profile.listings": "Listings", "profile.co2": "Est. CO₂ saved", "profile.year": "Listings this year",
    "profile.myListings": "My listings", "profile.pickupRequests": "Incoming pickup requests",
    "profile.favorites": "Favorites", "profile.language": "Language", "profile.about": "About Bygrest",
    "profile.noPickups": "No pickup requests yet.",
    "res.confirm": "Confirm", "res.pickedUp": "Mark picked up", "res.cancel": "Cancel",
    "about.title": "About Bygrest",
    "about.what": "Bygrest connects buyers and sellers of reusable surplus building materials in Denmark. Listings are created by sellers. Pickup and payment are arranged directly between users.",
    "about.intermediary.t": "We are an intermediary",
    "about.intermediary.b": "Bygrest only connects buyers and sellers. The deal and the payment happen directly between the parties, off-platform. Bygrest does not own, inspect, transport, store, sell or guarantee the material, and does not handle payment or delivery.",
    "about.prohibited.t": "Prohibited materials",
    "about.prohibited.b": "For safety and legal reasons, the following may not be listed:",
    "about.privacy.t": "Privacy",
    "about.privacy.b": "Only an approximate pickup area is shown publicly. The exact address is shared in chat. Tax (DAC7) details are stored securely and never shown on listings.",
    "about.terms": "Terms of use", "about.privacyPolicy": "Privacy policy", "about.placeholder": "(placeholder)",
    "onb.next": "Next", "onb.start": "Get started", "onb.skip": "Skip",
    "onb1t": "Reuse, don't waste", "onb1b": "Bygrest connects buyers and sellers of reusable surplus building materials in Denmark.",
    "onb2t": "List in seconds", "onb2b": "Photograph your leftovers — AI suggests a category and price. You always set the final price.",
    "onb3t": "Safe & simple", "onb3b": "Bygrest only connects buyers and sellers. Payment and pickup are arranged directly — we never handle money or deliver. Hazardous materials are banned."
  }
};

const PROHIBITED = {
  da: ["Asbest", "PCB-materialer", "Blymaling", "Ukendt isolering", "Gamle tagplader (eternit)",
    "Elektriske dele", "VVS-dele", "Brandsikringsprodukter", "Bærende konstruktionselementer",
    "Kemikalier", "Forurenet træ", "Materialer med ukendte farlige stoffer"],
  en: ["Asbestos", "PCB materials", "Lead paint", "Unknown insulation", "Old roofing sheets",
    "Electrical parts", "Plumbing / VVS parts", "Fire safety products", "Structural load-bearing elements",
    "Chemicals", "Contaminated wood", "Materials with unknown dangerous substances"]
};

const CATEGORIES = {
  brick: { da: "Mursten", en: "Bricks" }, timber: { da: "Træ", en: "Wood" },
  tiles: { da: "Fliser", en: "Tiles" }, insulation: { da: "Isolering", en: "Insulation" },
  plasterboard: { da: "Plader", en: "Boards" }, doors: { da: "Døre", en: "Doors" },
  paving: { da: "Belægningssten", en: "Paving stones" }, fixtures: { da: "Beslag", en: "Fixtures" }
};

// ---------------------------------------------------------------- data
const SELLERS = {
  s1: { name: "Murermester Jensen", type: "company", cvr: "12345678", rating: { avg: 4.5, count: 2 },
    reviews: [{ stars: 5, text: { da: "Hurtig og nem afhentning.", en: "Quick and easy pickup." }, days: 5 },
              { stars: 4, text: null, days: 2 }] },
  s2: { name: "Anna P.", type: "private", cvr: null, rating: { avg: 5.0, count: 1 },
    reviews: [{ stars: 5, text: { da: "Fin stand, som beskrevet.", en: "Good condition, as described." }, days: 9 }] },
  s3: { name: "Byg & Bo ApS", type: "company", cvr: "87654321", rating: { avg: 4.0, count: 1 },
    reviews: [{ stars: 4, text: { da: "Alt fint.", en: "All good." }, days: 12 }] }
};

const mat = (m) => `assets/mat_${["brick", "insulation", "timber", "tiles", "plasterboard"].includes(m) ? m : "other"}.png`;

const LISTINGS = [
  { id: "l1", seller: "s1", t: { da: "Røde mursten — overskud fra facade", en: "Red bricks — facade surplus" },
    d: { da: "Ca. 320 røde teglsten i blandet stand.", en: "Approx. 320 red bricks, mixed condition." },
    material: "brick", cat: "brick", qty: 320, unit: "stk", cond: "new_surplus", price: 480, ai: 520, co2: 96, area: "København NV", km: 3, status: "active" },
  { id: "l2", seller: "s2", t: { da: "Rockwool isolering, 95 mm", en: "Rockwool insulation, 95 mm" },
    d: { da: "8 pakker mineraluld, uåbnede.", en: "8 packs of mineral wool, unopened." },
    material: "insulation", cat: "insulation", qty: 8, unit: "pallet", cond: "new_surplus", price: 600, ai: 640, co2: 140, area: "Aarhus C", km: 6, status: "active" },
  { id: "l3", seller: "s1", t: { da: "Spær og lægter — fra nedrivning", en: "Rafters & battens — from demolition" },
    d: { da: "Konstruktionstræ fra carport. Kan forhåndsanmodes.", en: "Structural timber from a carport. Pre-requestable." },
    material: "timber", cat: "timber", qty: 24, unit: "stk", cond: "used_good", price: 350, ai: 380, co2: 210, area: "Odense", km: 12, status: "active", soonDays: 55 },
  { id: "l4", seller: "s3", t: { da: "Gulvfliser, lysegrå — rest", en: "Floor tiles, light grey — leftover" },
    d: { da: "Ca. 14 m² fliser, ubrugte.", en: "Approx. 14 m² tiles, unused." },
    material: "tiles", cat: "tiles", qty: 14, unit: "m2", cond: "new_surplus", price: 0, ai: 250, co2: 60, area: "Aalborg", km: 21, status: "active" },
  { id: "l5", seller: "s2", t: { da: "Gipsplader 13 mm — 12 stk", en: "Plasterboard 13 mm — 12 pcs" },
    d: { da: "Hele plader, tørt opbevaret.", en: "Full boards, stored dry." },
    material: "plasterboard", cat: "plasterboard", qty: 12, unit: "stk", cond: "used_good", price: 180, ai: 220, co2: 48, area: "Roskilde", km: 9, status: "active" },
  { id: "l6", seller: "s1", t: { da: "Gule mursten — parti", en: "Yellow bricks — batch" },
    d: { da: "Ca. 200 gule sten.", en: "Approx. 200 yellow bricks." },
    material: "brick", cat: "brick", qty: 200, unit: "stk", cond: "used_good", price: 300, ai: 340, co2: 72, area: "Esbjerg", km: 31, status: "active" },
  { id: "l7", seller: "s3", t: { da: "Brædder og lægter — blandet", en: "Boards & battens — mixed" },
    d: { da: "Diverse konstruktionstræ.", en: "Assorted structural timber." },
    material: "timber", cat: "timber", qty: 18, unit: "stk", cond: "used_worn", price: 225, ai: 260, co2: 120, area: "Vejle", km: 18, status: "active" },
  { id: "l8", seller: "s2", t: { da: "Mineraluld — 4 pakker", en: "Mineral wool — 4 packs" },
    d: { da: "Overskud fra loftsprojekt.", en: "Surplus from a loft project." },
    material: "insulation", cat: "insulation", qty: 4, unit: "pallet", cond: "new_surplus", price: 320, ai: 360, co2: 90, area: "København S", km: 5, status: "active", soonDays: 20 },
  { id: "l9", seller: "s1", t: { da: "Klinker, terracotta — rest", en: "Clinker tiles, terracotta — leftover" },
    d: { da: "Ca. 6 m².", en: "Approx. 6 m²." },
    material: "tiles", cat: "tiles", qty: 6, unit: "m2", cond: "new_surplus", price: 0, ai: 180, co2: 40, area: "Aarhus V", km: 7, status: "active" }
];

// ---------------------------------------------------------------- state
const S = {
  lang: localStorage.getItem("bg_lang") || "da",
  tab: "feed",
  layout: localStorage.getItem("bg_layout") || "grid",
  search: "",
  favOnly: false,
  fav: new Set(JSON.parse(localStorage.getItem("bg_fav") || "[]")),
  route: { view: "feed" },
  chat: {} // listingId -> [{me, text}]
};
const t = (k) => (I18N[S.lang][k] ?? I18N.en[k] ?? k);
const saveFav = () => localStorage.setItem("bg_fav", JSON.stringify([...S.fav]));
const money = (p) => p === 0 ? `<span class="free">${t("common.free")}</span>` :
  new Intl.NumberFormat(S.lang === "da" ? "da-DK" : "en-DK", { style: "currency", currency: "DKK", maximumFractionDigits: 0 }).format(p);
const catName = (c) => (CATEGORIES[c]?.[S.lang]) || c;

function avatarColor(name) {
  const palette = ["#2563eb", "#16a34a", "#e8870c", "#7c3aed", "#db2777", "#0d9488"];
  let h = 0; for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return palette[h % palette.length];
}
function initials(name) { return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase(); }
function starStr(avg) {
  let s = ""; for (let i = 1; i <= 5; i++) s += avg >= i ? "★" : (avg >= i - 0.5 ? "⯨" : "☆");
  return s;
}

// ---------------------------------------------------------------- helpers
const el = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function toast(msg) {
  const old = document.querySelector(".toast"); if (old) old.remove();
  const d = document.createElement("div"); d.className = "toast"; d.textContent = msg;
  el("screen").appendChild(d); setTimeout(() => d.remove(), 1800);
}
function go(view, params = {}) { S.route = { view, ...params }; window.scrollTo(0, 0); el("view").scrollTop = 0; render(); }

// ---------------------------------------------------------------- views
function topbar(title, opts = {}) {
  const langBtn = `<button class="icon-btn lang" data-act="lang">${S.lang.toUpperCase()}</button>`;
  if (opts.back) {
    return `<button class="icon-btn" data-act="back">‹</button>
      <h1 style="font-size:18px">${esc(title)}</h1>${opts.right || ""}`;
  }
  let right = langBtn;
  if (opts.feedControls) {
    const favN = S.fav.size;
    // Language lives on the LEFT for the feed; right holds favorites + layout.
    right = `
      <button class="icon-btn ${S.favOnly ? "active" : ""}" data-act="favToggle">♥${favN ? `<span class="badge-dot red">${favN}</span>` : ""}</button>
      <button class="icon-btn" data-act="layout">${S.layout === "grid" ? "☰" : "▦"}</button>`;
  }
  const logo = opts.feedControls ? `<img src="assets/icon.png" alt="" style="width:32px;height:32px;border-radius:8px">` : "";
  return `${opts.feedControls ? langBtnLeft() : ""}${logo}<h1>${esc(title)}</h1>${right}`;
}
function langBtnLeft() { return `<button class="icon-btn lang" data-act="lang">${S.lang.toUpperCase()}</button>`; }

function tabbar() {
  const tabs = [
    ["feed", "▦", t("tab.feed")], ["sell", "＋", t("tab.sell")],
    ["messages", "💬", t("tab.messages")], ["profile", "👤", t("tab.profile")]
  ];
  return tabs.map(([id, ic, label]) => {
    const badge = id === "messages" ? `<span class="tbadge">1</span>` : "";
    return `<button class="tab ${S.route.view === id || (id === "feed" && S.route.view === "detail") ? "active" : ""}" data-tab="${id}">
      <span class="ic">${ic}</span>${badge}<span>${esc(label)}</span></button>`;
  }).join("");
}

function listingMatchesSearch(l) {
  if (!S.search) return true;
  const q = S.search.toLowerCase();
  return (l.t[S.lang] + " " + l.material + " " + (l.d[S.lang] || "") + " " + catName(l.cat)).toLowerCase().includes(q);
}

function cardHTML(l) {
  const fav = S.fav.has(l.id);
  const seller = SELLERS[l.seller];
  const soon = l.soonDays ? `<span class="badge soon">${t("common.soon")}</span>` : "";
  const co2 = `<span class="badge co2">🌿 ${l.co2} ${t("co2")}</span>`;
  const stars = seller.rating.count ? `<span class="stars">${starStr(seller.rating.avg)} <span class="val">${seller.rating.avg.toFixed(1)}</span></span>` : "";
  return `<div class="card" data-open="${l.id}">
    <div class="thumb"><img src="${mat(l.material)}" alt="">
      ${soon ? `<div style="position:absolute;top:8px;left:8px">${soon}</div>` : ""}
      <button class="heart ${fav ? "on" : ""}" data-fav="${l.id}">${fav ? "♥" : "♡"}</button>
    </div>
    <div class="body">
      <div class="title">${esc(l.t[S.lang])}</div>
      <div class="price">${money(l.price)}</div>
      <div class="meta">${esc(l.area)} · ${l.km} ${t("common.km")}</div>
      <div class="meta" style="justify-content:space-between">${co2}${stars}</div>
    </div></div>`;
}
function rowHTML(l) {
  const fav = S.fav.has(l.id);
  const seller = SELLERS[l.seller];
  const stars = seller.rating.count ? `<span class="stars">${starStr(seller.rating.avg)} <span class="val">${seller.rating.avg.toFixed(1)}</span></span>` : "";
  const soon = l.soonDays ? `<span class="badge soon">${t("common.soon")}</span>` : "";
  return `<div class="row" data-open="${l.id}">
    <div class="thumb"><img src="${mat(l.material)}" alt=""></div>
    <div class="body">
      <div class="title">${esc(l.t[S.lang])}</div>
      <div style="font-weight:800">${money(l.price)} ${soon}</div>
      <div class="meta">${esc(l.area)} · ${l.km} ${t("common.km")} ${stars}</div>
    </div>
    <button class="heart ${fav ? "on" : ""}" data-fav="${l.id}" style="position:static;background:var(--bg-secondary)">${fav ? "♥" : "♡"}</button>
    <span class="chev">›</span></div>`;
}

function renderFeed() {
  el("topbar").innerHTML = topbar(t("tab.feed"), { feedControls: true });
  let items = LISTINGS.filter(listingMatchesSearch);
  if (S.favOnly) items = items.filter(l => S.fav.has(l.id));
  const filterBar = S.favOnly ? `<div class="filterbar">♥ ${S.fav.size}<button data-act="clearFav">${t("feed.clear")}</button></div>` : "";
  const body = items.length === 0
    ? `<div class="empty"><div class="glyph">🔍</div><p>${S.favOnly ? t("fav.empty") : t("feed.empty")}</p></div>`
    : `<div class="${S.layout === "grid" ? "grid" : "list"}">${items.map(S.layout === "grid" ? cardHTML : rowHTML).join("")}</div>`;
  el("view").innerHTML = `
    <div class="search">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <input id="searchInput" placeholder="${esc(t("feed.search"))}" value="${esc(S.search)}">
    </div>${filterBar}${body}`;
  const inp = el("searchInput");
  if (inp) inp.oninput = (e) => { S.search = e.target.value; const items2 = renderFeedListOnly(); };
}
function renderFeedListOnly() {
  // live search without re-rendering the whole view (keeps input focus)
  let items = LISTINGS.filter(listingMatchesSearch);
  if (S.favOnly) items = items.filter(l => S.fav.has(l.id));
  const host = el("view").querySelector(".grid, .list, .empty");
  const html = items.length === 0
    ? `<div class="empty"><div class="glyph">🔍</div><p>${t("feed.empty")}</p></div>`
    : `<div class="${S.layout === "grid" ? "grid" : "list"}">${items.map(S.layout === "grid" ? cardHTML : rowHTML).join("")}</div>`;
  if (host) host.outerHTML = html;
}

function renderDetail() {
  const l = LISTINGS.find(x => x.id === S.route.id);
  if (!l) return go("feed");
  const seller = SELLERS[l.seller];
  const fav = S.fav.has(l.id);
  const requested = S.route.requested;
  const soon = !!l.soonDays;
  el("topbar").innerHTML = topbar(l.t[S.lang], {
    back: true,
    right: `<button class="icon-btn ${fav ? "active" : ""}" data-fav="${l.id}">${fav ? "♥" : "♡"}</button>
            <button class="icon-btn" data-act="report" style="color:var(--red)">⚑</button>`
  });
  const reviews = seller.rating.count
    ? `<button class="btn ghost" data-act="reviews" style="justify-content:flex-start;padding:6px 0">
         <span class="stars">${starStr(seller.rating.avg)}</span> ${seller.rating.avg.toFixed(1)} (${seller.rating.count} ${t("detail.reviews")}) ›</button>`
    : `<div class="disclaimer">${t("detail.noReviews")}</div>`;
  el("view").innerHTML = `
    <div class="detail-hero"><img src="${mat(l.material)}" alt="">
      ${soon ? `<div style="position:absolute;top:12px;left:12px"><span class="badge soon">${t("common.soon")}</span></div>` : ""}</div>
    <div class="pad stack">
      <div class="detail-price">${money(l.price)}${l.ai && l.price !== l.ai ? `<div class="disclaimer">${t("detail.aiSuggested")} ${money(l.ai)}</div>` : ""}</div>
      <div>
        <div class="fact"><span class="k">${t("detail.quantity")}</span><b>${l.qty} ${l.unit}</b></div>
        <div class="fact"><span class="k">${t("detail.condition")}</span><b>${t("cond." + l.cond)}</b></div>
        <div class="fact"><span class="k">${t("detail.category")}</span><b>${esc(catName(l.cat))}</b></div>
        ${soon ? `<div class="fact"><span class="k">${t("detail.availableFrom")}</span><b>${new Date(Date.now() + l.soonDays * 864e5).toLocaleDateString()}</b></div>` : ""}
      </div>
      <p style="margin:0">${esc(l.d[S.lang])}</p>
      <span class="badge co2" style="align-self:flex-start">🌿 ${l.co2} ${t("co2")}</span>

      <div class="section-title">${t("detail.area")}</div>
      <div class="map"><div class="pin"><div class="ring"></div></div></div>
      <div class="disclaimer">📍 ${t("detail.exactLater")}</div>

      <div class="seller">
        <div class="avatar" style="background:${avatarColor(seller.name)}">${initials(seller.name)}</div>
        <div style="flex:1">
          <div style="font-weight:700">${esc(seller.name)}</div>
          <div class="disclaimer">${seller.type === "company" ? t("common.company") + (seller.cvr ? " · CVR " + seller.cvr : "") : t("common.private")}</div>
          ${reviews}
        </div>
      </div>

      <div class="disclaimer">${t("detail.disclaimer")}</div>
      <button class="btn primary" data-act="contact">💬 ${t("detail.contact")}</button>
      <button class="btn secondary" data-act="pickup" ${requested ? "disabled" : ""}>${requested ? "✓ " + t("detail.requested") : (soon ? t("detail.prePickup") : t("detail.pickup"))}</button>
    </div>`;
}

function renderReviews() {
  const l = LISTINGS.find(x => x.id === S.route.id); const seller = SELLERS[l.seller];
  el("topbar").innerHTML = topbar(seller.name, { back: true });
  el("view").innerHTML = `<div class="pad stack">
    <div style="display:flex;align-items:center;gap:12px">
      <div style="font-size:40px;font-weight:800">${seller.rating.avg.toFixed(1)}</div>
      <div><div class="stars" style="font-size:18px">${starStr(seller.rating.avg)}</div>
        <div class="disclaimer">${seller.rating.count} ${t("detail.reviews")}</div></div>
    </div>
    ${seller.reviews.map(r => `<div class="seller" style="flex-direction:column;align-items:flex-start;gap:4px">
      <div class="stars">${starStr(r.stars)}</div>
      ${r.text ? `<div>${esc(r.text[S.lang])}</div>` : ""}
      <div class="disclaimer">${S.lang === "da" ? "Verificeret køber" : "Verified buyer"} · ${r.days} ${S.lang === "da" ? "dage siden" : "days ago"}</div>
    </div>`).join("")}
  </div>`;
}

// ---- Sell flow (demo walkthrough)
const SELL = { step: 1, material: null, draft: null, checks: [false, false, false, false, false] };
function renderSell() {
  el("topbar").innerHTML = topbar(t("sell.title"));
  let body;
  if (SELL.step === 1) {
    const opts = ["brick", "timber", "tiles", "insulation", "plasterboard"];
    body = `<div class="pad stack" style="text-align:center;align-items:center">
      <div style="font-size:64px">📷</div>
      <h2 style="margin:0">${t("sell.intro")}</h2>
      <p class="disclaimer">${t("sell.introBody")}</p>
      <div class="section-title" style="align-self:flex-start">${t("sell.pickPhoto")}</div>
      <div class="grid" style="padding:0;width:100%">
        ${opts.map(m => `<div class="card" data-pick="${m}"><div class="thumb"><img src="${mat(m)}"></div>
          <div class="body"><div class="title">${esc(catName(m))}</div></div></div>`).join("")}
      </div></div>`;
  } else if (SELL.step === 2) {
    body = `<div class="empty"><div class="glyph">✨</div><p>${t("sell.analyzing")}</p></div>`;
    setTimeout(() => { if (S.route.view === "sell" && SELL.step === 2) { buildDraft(); SELL.step = 3; render(); } }, 900);
  } else if (SELL.step === 3) {
    const d = SELL.draft;
    body = `<div class="pad stack">
      <div class="banner">✨ ${t("detail.aiSuggested")} — ${t("sell.aiNote")}</div>
      <div><label class="fl">${t("sell.field.title")}</label><input class="field" id="d_title" value="${esc(d.title)}"></div>
      <div><label class="fl">${t("sell.field.category")}</label><input class="field" value="${esc(catName(d.cat))}" readonly></div>
      <div style="display:flex;gap:10px">
        <div style="flex:1"><label class="fl">${t("sell.field.qty")}</label><input class="field" id="d_qty" value="${d.qty}"></div>
        <div style="flex:1"><label class="fl">${t("sell.field.cond")}</label><input class="field" value="${t("cond." + d.cond)}" readonly></div>
      </div>
      <div><label class="fl">${t("sell.field.price")}</label>
        <input class="field" id="d_price" value="${d.price}" ${d.free ? "disabled" : ""}>
        <label class="check ${d.free ? "on" : ""}" data-act="freeToggle"><span class="box">${d.free ? "✓" : ""}</span>${t("sell.free")}</label></div>
      <div><label class="fl">${t("sell.field.area")}</label><input class="field" id="d_area" value="${esc(d.area)}"></div>
      <div><label class="fl">${t("sell.field.deadline")}</label><input class="field" type="date" id="d_deadline"></div>

      <div class="section-title">${t("sell.checklistTitle")}</div>
      ${[1, 2, 3, 4, 5].map(i => `<label class="check ${SELL.checks[i - 1] ? "on" : ""}" data-check="${i - 1}">
        <span class="box">${SELL.checks[i - 1] ? "✓" : ""}</span>${t("sell.c" + i)}</label>`).join("")}

      <div class="disclaimer">${t("sell.formidler")}</div>
      <button class="btn primary" data-act="create" ${SELL.checks.every(Boolean) ? "" : "disabled"}>${t("sell.create")}</button>
    </div>`;
  } else {
    body = `<div class="empty"><div class="glyph" style="color:var(--accent)">✅</div>
      <h2 style="margin:8px 0">${t("sell.published")}</h2>
      <p>${esc(SELL.draft.title)}</p>
      <button class="btn primary" style="max-width:240px;margin:12px auto 0" data-act="fbOpen">${t("fb.cta")}</button>
      <button class="btn ghost" style="max-width:240px;margin:6px auto 0" data-act="sellDone">${t("common.done")}</button></div>`;
  }
  el("view").innerHTML = body;
}
function buildDraft() {
  const m = SELL.material;
  const samples = {
    brick: { title: { da: "Røde mursten — overskud", en: "Red bricks — surplus" }, qty: 240, cond: "new_surplus", price: 420 },
    timber: { title: { da: "Konstruktionstræ — rest", en: "Structural timber — leftover" }, qty: 20, cond: "used_good", price: 300 },
    tiles: { title: { da: "Gulvfliser — rest", en: "Floor tiles — leftover" }, qty: 10, cond: "new_surplus", price: 0, free: true },
    insulation: { title: { da: "Mineraluld — pakker", en: "Mineral wool — packs" }, qty: 6, cond: "new_surplus", price: 360 },
    plasterboard: { title: { da: "Gipsplader — stk", en: "Plasterboard — pcs" }, qty: 14, cond: "used_good", price: 200 }
  };
  const s = samples[m];
  SELL.draft = { title: s.title[S.lang], cat: m, qty: s.qty, cond: s.cond, price: s.price, free: !!s.free, area: "København" };
}

function renderMessages() {
  el("topbar").innerHTML = topbar(t("tab.messages"));
  const l = LISTINGS[0]; const seller = SELLERS[l.seller];
  el("view").innerHTML = `<div class="list" style="padding-top:8px">
    <div class="row" data-chat="${l.id}">
      <div class="avatar" style="background:${avatarColor(seller.name)};width:46px;height:46px">${initials(seller.name)}</div>
      <div class="body">
        <div style="display:flex;justify-content:space-between"><b>${esc(seller.name)}</b><span class="disclaimer">${S.lang === "da" ? "nu" : "now"}</span></div>
        <div class="disclaimer">${esc(l.t[S.lang])}</div>
        <div style="font-weight:600">${t("chat.q1")}</div>
      </div>
      <span class="tbadge" style="position:static;background:var(--accent)">1</span>
    </div></div>`;
}
function renderChat() {
  const l = LISTINGS.find(x => x.id === S.route.id) || LISTINGS[0];
  el("topbar").innerHTML = topbar(l.t[S.lang], { back: true });
  if (!S.chat[l.id]) S.chat[l.id] = [{ me: false, text: t("chat.q1") }];
  const msgs = S.chat[l.id];
  const quicks = ["chat.q2", "chat.q3", "chat.q4"].map(q => `<button class="btn secondary" style="width:auto;padding:8px 12px;font-size:13px" data-quick="${esc(t(q))}">${esc(t(q))}</button>`).join("");
  el("view").innerHTML = `
    <div class="pad"><div class="banner">${t("chat.disclaimer")}</div></div>
    <div class="pad chat-wrap" id="chatWrap">
      ${msgs.map(m => `<div class="bubble ${m.me ? "me" : "them"}">${esc(m.text)}</div>`).join("")}
    </div>
    <div class="pad" style="display:flex;gap:8px;flex-wrap:wrap">${quicks}</div>`;
  // composer lives in tabbar slot? Put it above tabbar:
  el("tabbar").innerHTML = `<div class="composer" style="width:100%">
    <input id="chatInput" placeholder="${esc(t("chat.placeholder"))}">
    <button class="icon-btn active" data-act="send" style="background:var(--accent-soft)">➤</button></div>`;
}

function renderProfile() {
  el("topbar").innerHTML = topbar(t("tab.profile"));
  const me = SELLERS.s1;
  const mine = LISTINGS.filter(l => l.seller === "s1");
  const favs = LISTINGS.filter(l => S.fav.has(l.id));
  const co2 = mine.reduce((a, l) => a + l.co2, 0);
  el("view").innerHTML = `<div class="pad stack">
    <div class="seller">
      <div class="avatar" style="background:${avatarColor(t("profile.you"))}">${initials(t("profile.you"))}</div>
      <div><div style="font-weight:700">${t("profile.you")}</div>
        <div class="disclaimer">${t("profile.seller")} · <span class="stars">${starStr(me.rating.avg)}</span> ${me.rating.avg.toFixed(1)}</div></div>
    </div>
    <div class="seller" style="justify-content:space-around;text-align:center">
      <div><div style="font-size:22px;font-weight:800">${mine.length}</div><div class="disclaimer">${t("profile.listings")}</div></div>
      <div><div style="font-size:22px;font-weight:800">${co2}</div><div class="disclaimer">${t("profile.co2")} (kg)</div></div>
    </div>

    <div class="section-title">${t("profile.pickupRequests")}</div>
    <div class="seller" style="flex-direction:column;align-items:stretch;gap:8px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><b>${esc(mine[0].t[S.lang])}</b><div class="disclaimer">${t("status.pickup_requested")}</div></div>
        <span class="badge soon">${t("status.pickup_requested")}</span>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn secondary" style="padding:8px" data-act="resAction">${t("res.confirm")}</button>
        <button class="btn secondary" style="padding:8px" data-act="resAction">${t("res.pickedUp")}</button>
        <button class="btn ghost" style="padding:8px;color:var(--red)" data-act="resAction">${t("res.cancel")}</button>
      </div>
    </div>

    <div class="section-title">${t("profile.myListings")}</div>
    ${mine.map(l => `<div class="row" data-open="${l.id}"><div class="thumb"><img src="${mat(l.material)}"></div>
      <div class="body"><b>${esc(l.t[S.lang])}</b><span class="badge status" style="align-self:flex-start">${t("status." + l.status)}</span></div><span class="chev">›</span></div>`).join("")}

    <div class="section-title">${t("profile.favorites")} (${favs.length})</div>
    ${favs.length ? favs.map(l => `<div class="row" data-open="${l.id}"><div class="thumb"><img src="${mat(l.material)}"></div>
      <div class="body"><b>${esc(l.t[S.lang])}</b><span style="font-weight:700">${money(l.price)}</span></div><span class="chev">›</span></div>`).join("")
      : `<div class="disclaimer">${t("fav.empty")}</div>`}

    <div class="section-title">${t("profile.language")}</div>
    <div style="display:flex;gap:8px">
      <button class="btn ${S.lang === "da" ? "primary" : "secondary"}" data-lang="da">Dansk</button>
      <button class="btn ${S.lang === "en" ? "primary" : "secondary"}" data-lang="en">English</button>
    </div>
    <button class="btn secondary" data-act="about">${t("profile.about")}</button>
  </div>`;
}

function renderAbout() {
  el("topbar").innerHTML = topbar(t("about.title"), { back: true });
  el("view").innerHTML = `<div class="pad stack">
    <p>${t("about.what")}</p>
    <div class="section-title">${t("about.intermediary.t")}</div>
    <div class="banner">${t("about.intermediary.b")}</div>
    <div class="section-title">${t("about.prohibited.t")}</div>
    <div class="banner warn">${t("about.prohibited.b")}<ul style="margin:8px 0 0;padding-left:18px">
      ${PROHIBITED[S.lang].map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>
    <div class="section-title">${t("about.privacy.t")}</div>
    <p class="disclaimer">${t("about.privacy.b")}</p>
    <div class="section-title">Legal</div>
    <a class="link" href="#" data-act="legal">${t("about.terms")} ${t("about.placeholder")}</a>
    <a class="link" href="#" data-act="legal">${t("about.privacyPolicy")} ${t("about.placeholder")}</a>
  </div>`;
}

// ---- Onboarding
const ONB = [
  { g: "♻️", t: "onb1t", b: "onb1b" }, { g: "📷", t: "onb2t", b: "onb2b" }, { g: "🤝", t: "onb3t", b: "onb3b" }
];
let onbPage = 0;
function renderOnboarding() {
  const s = ONB[onbPage];
  const o = document.createElement("div"); o.className = "onb"; o.id = "onb";
  o.innerHTML = `<div class="glyph">${s.g}</div><h2>${t(s.t)}</h2><p>${t(s.b)}</p>
    <div class="dots">${ONB.map((_, i) => `<i class="${i === onbPage ? "on" : ""}"></i>`).join("")}</div>
    <button class="btn primary" style="max-width:280px" id="onbNext">${onbPage < ONB.length - 1 ? t("onb.next") : t("onb.start")}</button>
    <button class="btn ghost" id="onbSkip" style="max-width:280px">${t("onb.skip")}</button>
    <button class="icon-btn lang" id="onbLang" style="position:absolute;top:16px;right:16px">${S.lang.toUpperCase()}</button>`;
  el("screen").appendChild(o);
  el("onbNext").onclick = () => { if (onbPage < ONB.length - 1) { onbPage++; o.remove(); renderOnboarding(); } else finishOnb(); };
  el("onbSkip").onclick = finishOnb;
  el("onbLang").onclick = () => { S.lang = S.lang === "da" ? "en" : "da"; localStorage.setItem("bg_lang", S.lang); o.remove(); renderOnboarding(); };
}
function finishOnb() { localStorage.setItem("bg_onb", "1"); const o = el("onb"); if (o) o.remove(); }

// ---------------------------------------------------------------- render dispatch
function render() {
  document.documentElement.lang = S.lang;
  const v = S.route.view;
  el("tabbar").innerHTML = tabbar(); // default; chat overrides
  if (v === "feed") renderFeed();
  else if (v === "detail") renderDetail();
  else if (v === "reviews") renderReviews();
  else if (v === "sell") renderSell();
  else if (v === "messages") renderMessages();
  else if (v === "chat") renderChat();
  else if (v === "profile") renderProfile();
  else if (v === "about") renderAbout();
}

// ---------------------------------------------------------------- events
document.addEventListener("click", (e) => {
  const tgt = e.target.closest("[data-tab],[data-open],[data-fav],[data-act],[data-pick],[data-check],[data-lang],[data-quick],[data-chat]");
  if (!tgt) return;
  const d = tgt.dataset;

  if (d.tab) { SELL.step = 1; go(d.tab === "feed" ? "feed" : d.tab); return; }
  if (d.open) { go("detail", { id: d.open }); return; }
  if (d.chat) { go("chat", { id: d.chat }); return; }
  if (d.fav !== undefined) {
    e.stopPropagation();
    if (S.fav.has(d.fav)) S.fav.delete(d.fav); else S.fav.add(d.fav);
    saveFav(); render(); return;
  }
  if (d.lang) { S.lang = d.lang; localStorage.setItem("bg_lang", S.lang); render(); return; }
  if (d.quick) { addChat(true, d.quick); return; }
  if (d.pick) { SELL.material = d.pick; SELL.step = 2; SELL.checks = [false, false, false, false, false]; render(); return; }
  if (d.check !== undefined) { SELL.checks[+d.check] = !SELL.checks[+d.check]; render(); return; }

  const act = d.act;
  if (act === "lang") { S.lang = S.lang === "da" ? "en" : "da"; localStorage.setItem("bg_lang", S.lang); render(); }
  else if (act === "back") { go(S.route.view === "chat" ? "messages" : (S.route.view === "reviews" ? "detail" : "feed"), S.route.view === "reviews" ? { id: S.route.id } : {}); }
  else if (act === "favToggle") { S.favOnly = !S.favOnly; render(); }
  else if (act === "clearFav") { S.favOnly = false; render(); }
  else if (act === "layout") { S.layout = S.layout === "grid" ? "list" : "grid"; localStorage.setItem("bg_layout", S.layout); render(); }
  else if (act === "contact") { go("chat", { id: S.route.id }); }
  else if (act === "pickup") { go("detail", { id: S.route.id, requested: true }); toast(t("detail.requested")); }
  else if (act === "report") { toast(t("report.toast")); }
  else if (act === "reviews") { go("reviews", { id: S.route.id }); }
  else if (act === "freeToggle") { SELL.draft.free = !SELL.draft.free; if (SELL.draft.free) SELL.draft.price = 0; render(); }
  else if (act === "create") { SELL.step = 4; render(); }
  else if (act === "sellDone") { SELL.step = 1; go("feed"); }
  else if (act === "fbOpen") { if (window.bygrestFeedback) window.bygrestFeedback.open(); }
  else if (act === "send") { const i = el("chatInput"); if (i && i.value.trim()) addChat(true, i.value.trim()); }
  else if (act === "about") { go("about"); }
  else if (act === "reviews") { go("reviews", { id: S.route.id }); }
  else if (act === "resAction") { toast(S.lang === "da" ? "Opdateret (demo)" : "Updated (demo)"); }
  else if (act === "legal") { e.preventDefault(); toast(S.lang === "da" ? "Tilføjes senere" : "Coming soon"); }
});

function addChat(me, text) {
  const id = S.route.id || LISTINGS[0].id;
  if (!S.chat[id]) S.chat[id] = [];
  S.chat[id].push({ me, text });
  render();
  setTimeout(() => { const w = el("chatWrap"); if (w) w.scrollTop = w.scrollHeight; }, 0);
}

// ---------------------------------------------------------------- boot
render();
if (!localStorage.getItem("bg_onb")) renderOnboarding();
