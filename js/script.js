const el = document.querySelector(".coding-conf");
const hero = el.querySelector(".coding-conf__hero");
const form = el.querySelector(".coding-conf__form");
const btn = el.querySelector(".coding-conf__btn");
const ticket = el.querySelector(".coding-conf__ticket");

// Event Listener
// btn.addEventListener("click", something);

form.addEventListener("submit", copy);

function copy(e) {
  e.preventDefault();
  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const githubUserName = form.githubUsername.value.trim();
  const fileInput = form.querySelector('input[type="file"]');
  const file = fileInput.files[0];

  console.log({ file });
}
function something() {
  hero.style.display = "none";
  form.style.display = "none";
  ticket.style.display = "grid";
}
