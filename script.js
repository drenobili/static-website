/* =========================================================
   1. LIVE TIME COUNTER
   Updates the hero clock every second.
========================================================= */
function updateClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;

  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;
  const hoursStr = String(hours).padStart(2, "0");

  clockEl.textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

/* =========================================================
   2. COUNTDOWN TIMER
   Edit TARGET_DATE below to point this at your own event
   (e.g. a tournament tip-off, a launch date, a deadline).
========================================================= */
const TARGET_DATE = new Date("2026-10-20T00:00:00");

function updateCountdown() {
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");
  if (!daysEl) return;

  const now = new Date();
  let diff = TARGET_DATE - now;

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minsEl.textContent = "00";
    secsEl.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minsEl.textContent = String(minutes).padStart(2, "0");
  secsEl.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* =========================================================
   3. INTERACTIVE BUTTON
   Shows a random basketball-analytics insight on click.
========================================================= */
const insights = [
  "Efficient scoring is about shot selection as much as shot-making \u2014 shot quality data often predicts winning better than raw points.",
  "A team's turnover rate can swing a close game more than its shooting percentage does.",
  "Plus-minus tells a story, but it reads best next to minutes played and lineup context.",
  "Rebounding rate is a better predictor of possession control than total rebounds alone.",
  "Pace-adjusted stats let you compare a fast, run-and-gun team fairly against a slow, half-court team.",
  "Assist-to-turnover ratio is one of the simplest windows into a point guard's decision-making.",
];

const insightBtn = document.getElementById("insight-btn");
const insightText = document.getElementById("insight-text");

if (insightBtn) {
  insightBtn.addEventListener("click", () => {
    const random = insights[Math.floor(Math.random() * insights.length)];
    insightText.textContent = random;
  });
}

/* =========================================================
   EXTRA: Mobile nav toggle
========================================================= */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

/* =========================================================
   EXTRA: Scroll-spy nav highlighting
========================================================= */
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

function highlightNav() {
  let current = "home";
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", highlightNav);
highlightNav();

/* =========================================================
   EXTRA: Footer year
========================================================= */
const footerYear = document.getElementById("footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
