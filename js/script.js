const el = document.querySelector(".coding-conf");
const hero = el.querySelector(".coding-conf__hero");
const form = el.querySelector(".coding-conf__form");
const btn = el.querySelector(".coding-conf__btn");

const ticket = el.querySelector(".coding-conf__ticket");

function something() {
  hero.style.display = "none";
  form.style.display = "none";
  ticket.style.display = "grid";
}

btn.addEventListener("click", something);
