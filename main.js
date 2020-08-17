const burgerBtn = document.getElementById("burger-btn");

function toggleSiteNav({ target }) {
  // target is the button itself
  const expanded = target.getAttribute("aria-expanded") === "true" || false;
  console.log(expanded);
  this.setAttribute("aria-expanded", !expanded);
}
burgerBtn.addEventListener("click", toggleSiteNav);