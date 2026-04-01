/* 📦 PRODUCTS */
const products = [
  {name:'BRELLA', subtitle:'MASTERCARD|DEBIT|CLASSIC,🧘‍♀️ADDED RENT NUMBER 🤌Set Alerts & Block to our email and phone number for Transaction Amount, Internet & Phone transactions, Transactions Outsite U.S. 🤥 Travel Notice', price:'$150', detail:'Balance - 2299.25, STATE - MO, ZIP-64842', category:'D'},
  {name:'Steam $20', subtitle:'Global Key • Fast', price:'$20', detail:'ZIP', category:'C'},
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

/* 😈 HORROR SYSTEM */
const horrorMessages = [
  "go back nigga...",
  "go back nigga...",
  "go back nigga...",
  "go back nigga...",
  "go back nigga...",
  "go back nigga...",
  "go back nigga..."
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

  /* 💀 MESSAGES AFTER 22000px */
  if (y > 32000 && y - lastMessageY > 800) {
    spawnMessage();
    lastMessageY = y;
  }

  /* 😱 JUMPSCARE AT 100000px */
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
  const msg = document.createElement("div");

  msg.innerText = horrorMessages[
    Math.floor(Math.random() * horrorMessages.length)
  ];

  msg.style.position = "absolute";
  msg.style.left = Math.random() * 80 + "%";
  msg.style.top = window.scrollY + window.innerHeight + "px";
  msg.style.color = "red";
  msg.style.fontSize = "14px";
  msg.style.opacity = "0.7";
  msg.style.pointerEvents = "none";

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

/* 😱 JUMPSCARE */
function triggerJumpScare() {
  const scare = document.createElement("div");

  scare.innerHTML = `
    <div style="
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:black;
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:99999;
    ">
      <img src="https://i.ibb.co/4pDNDk1/horror-face.png"
           style="width:300px; animation: scareZoom 0.2s infinite;">
    </div>
  `;

  document.body.appendChild(scare);

  /* screen flash */
  document.body.style.background = "black";

  setTimeout(() => {
    scare.remove();
    document.body.style.background = "";
  }, 2000);
      }
