/* 📦 PRODUCTS */
const products = [
  {name:'BRELLA', subtitle:'MASTERCARD|DEBIT|CLASSIC,🧘‍♀️ADDED RENT NUMBER 🤌Set Alerts & Block to our email and phone number for Transaction Amount, Internet & Phone transactions, Trans[...]'},
  {name:'AMER*** CU', subtitle:'APP,Instant minics, Alerts, Travel center, SSN+DOB', price:'$120', detail:'Available - $35,215.92, STATE - NY, ZIP-13021', category:'C'},
  {name:'Google Play $25', subtitle:'Secure Delivery', price:'$25', detail:'ZIP', category:'D'},
  {name:'IDAHO CENTRAL CREDIT UNION', subtitle:'APP, Alerts, SSN+DOB', price:'$50', detail:'STATE - ID', category:'C'},
  {name:'VISA Primium', subtitle:'AU | BALANCE= $100', price:'$30', detail:'ZIP', category:'D'},
  {name:'NFC Basic', subtitle:'Tap Enabled', price:'$30', detail:'ZIP', category:'NFC'},
  {name:'NFC Pro', subtitle:'High Security', price:'$45', detail:'ZIP', category:'NFC'},
  {name:'Google Play $25', subtitle:'Secure Delivery', price:'$25', detail:'ZIP', category:'D'},
  {name:'OTP Basic', subtitle:'SMS Verified', price:'$15', detail:'ZIP', category:'OTP'},
  {name:'OTP Pro', subtitle:'High Success', price:'$25', detail:'ZIP', category:'OTP'}
];

/* 🛒 RENDER */
function render(f = 'D') {
  const c = document.getElementById('products');
  if (!c) return;

  let html = '';

  products
    .filter(p => p.category === f)
    .forEach(p => {
      html += `
      <div class="card">
        <h3>${p.name}</h3>
        <p class="subtitle">${p.subtitle}</p>
        <p class="details">${p.detail}</p>
        <p class="price">${p.price}</p>
        <button onclick="buy('${p.name}')">Buy</button>
      </div>`;
    });

  c.innerHTML = html;
}

/* ❌ POPUP */
function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

/* ⋮ MENU */
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  if (!menu) return;
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

/* CLOSE MENU */
document.addEventListener("click", function(e) {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".menu-icon");

  if (!menu || !icon) return;

  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.style.display = "none";
  }
});

/* 🚀 LOAD */
window.addEventListener("DOMContentLoaded", () => {
  render();

  const popup = document.getElementById("popup");
  if (popup && !localStorage.getItem("popupShown")) {
    popup.style.display = "flex";
    localStorage.setItem("popupShown", "true");
  }

  addDeepMessage();
});

/* FILTER */
function filterCategory(c) {
  render(c);
}

/* BUY */
function buy(i) {
  window.open("https://t.me/Spin011_cc?text=" + encodeURIComponent(i));
}

/* NAV */
function goPage(p) {
  window.location.href = p;
}

/* 🕒 LIVE CLOCK (SYSTEM TIMEZONE) */
function updateClock() {
  const clock = document.getElementById("menuClock");
  if (!clock) return;

  const now = new Date();

  // get system timezone automatically
  const timeString = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false   // 👈 change to true if you want AM/PM
  });

  clock.innerText = timeString;
}

/* run every second */
setInterval(updateClock, 1000);
updateClock();

/* SAFETY FLAGS */
// Disable any harmful/annoying UX by default
const ENABLE_JUMPSCARE = false;

/* MESSAGES (sanitized) */
const horrorMessages = [
  "Please proceed carefully...",
  "Tip: use filters to find cards faster",
  "Explore categories to discover offerings",
  "Reminder: check descriptions before purchase",
  "Need help? Contact support"
];

let lastMessageY = 0;
let jumpScareTriggered = false;

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  /* 📼 GLITCH EFFECT */
  const intensity = Math.min(y / 32000, 1);

  document.body.style.filter =
    `contrast(${1 + intensity}) brightness(${1 - intensity * 0.3})`;

  document.body.style.textShadow =
    `${intensity}px 0 red, ${-intensity}px 0 blue`;

  /* 💀 MESSAGES AFTER 22000px (skip if user prefers reduced motion) */
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && y > 32000 && y - lastMessageY > 800) {
    spawnMessage();
    lastMessageY = y;
  }

  /* 😱 JUMPSCARE AT 100000px (disabled by default) */
  if (y > 100000 && !jumpScareTriggered) {
    jumpScareTriggered = true;
    triggerJumpScare();
  }

  /* ♾️ INFINITE SCROLL */
  const scrollBottom = window.innerHeight + y;
  const pageHeight = document.body.offsetHeight;

  if (scrollBottom >= pageHeight - 100) {
    document.body.style.minHeight =
      document.body.offsetHeight + 1500 + "px";
  }
});

/* 💀 FLOAT MESSAGE */
function spawnMessage() {
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return; // don't spawn moving messages

  const msg = document.createElement("div");

  msg.innerText = horrorMessages[
    Math.floor(Math.random() * horrorMessages.length)
  ];

  msg.style.position = "absolute";
  msg.style.left = Math.random() * 80 + "%";
  msg.style.top = window.scrollY + window.innerHeight + "px";
  msg.style.color = "#ffdddd";
  msg.style.fontSize = "14px";
  msg.style.opacity = "0.9";
  msg.style.pointerEvents = "none";
  msg.style.zIndex = 9999;

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.style.transition = "1s";
    msg.style.opacity = "0";
  }, 2000);

  setTimeout(() => msg.remove(), 3000);
}

/* 👁️ DEEP MESSAGE */
function addDeepMessage() {
  const deep = document.createElement("div");

  deep.innerText = "Don't waste your time...";

  deep.style.position = "absolute";
  deep.style.top = "32000px";
  deep.style.width = "100%";
  deep.style.textAlign = "center";
  deep.style.color = "darkred";
  deep.style.fontSize = "18px";
  deep.style.opacity = "0.6";

  document.body.appendChild(deep);
}

/* 😱 JUMPSCARE (NO-OP unless ENABLE_JUMPSCARE = true) */
function triggerJumpScare() {
  if (!ENABLE_JUMPSCARE) return;

  // Build overlay safely via DOM methods
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'black';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '99999';

  const img = document.createElement('img');
  img.src = 'https://i.ibb.co/4pDNDk1/horror-face.png';
  img.alt = '';
  img.style.width = '300px';
  img.style.animation = 'scareZoom 0.2s infinite';

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  /* screen flash */
  const previousBackground = document.body.style.background;
  document.body.style.background = 'black';

  setTimeout(() => {
    overlay.remove();
    document.body.style.background = previousBackground;
  }, 2000);
}

// Animated headline — words rotate every 2.5s, characters stagger-in 50ms each
function startHeroHeadline() {
  const heroWords = ["Cards", "Logs", "Bots"];
  const target = document.getElementById("heroWord");
  if (!target) return;

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // If the user prefers reduced motion, show the first word statically
  if (prefersReducedMotion) {
    target.textContent = heroWords[0];
    return;
  }

  let wordIndex = 0;
  let intervalId = null;

  function renderWord(word) {
    // Clear previous content and remove enter class to allow replay
    target.textContent = "";
    target.classList.remove("hero-word--enter");

    // Force reflow so the animation restarts reliably
    void target.offsetWidth;

    // Append each character as a span, staggered by 50ms, hidden from SRs
    Array.from(word).forEach((char, i) => {
      const span = document.createElement("span");
      span.className = "hero-char";
      span.textContent = char;
      span.style.animationDelay = `${i * 50}ms`;
      span.setAttribute("aria-hidden", "true");
      target.appendChild(span);
    });

    // Trigger the CSS animation
    target.classList.add("hero-word--enter");
  }

  // initial render
  renderWord(heroWords[wordIndex]);

  intervalId = setInterval(() => {
    wordIndex = (wordIndex + 1) % heroWords.length;
    renderWord(heroWords[wordIndex]);
  }, 2500);

  // cleanup on unload to avoid leaks
  window.addEventListener("beforeunload", () => {
    if (intervalId) clearInterval(intervalId);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startHeroHeadline);
} else {
  startHeroHeadline();
}
