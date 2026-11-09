const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.querySelector("span").textContent = isOpen ? "−" : "＋";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector("span").textContent = "＋";
    });
  });
}

const printButton = document.querySelector("#print-resume");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Placeholder social links should not navigate until replaced with real URLs.
document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
