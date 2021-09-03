(() => {
  const menuBtn = document.querySelector('[data-menu-button]');
  const menuRef = document.querySelector('[data-menu]');
  //const mainRef = document.querySelector('[data-main]');
  menuBtn.addEventListener("click", toggleNavMenu);

  function toggleNavMenu() {
    menuBtn.classList.toggle("is-open");
    menuRef.classList.toggle("is-open");
    //mainRef.classList.toggle("is-overflow-hidden");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
    menuBtn.setAttribute("aria-expanded", !expanded)
  }
})();