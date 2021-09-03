(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    // body: document.querySelector('[data-body]'),
  };

  

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    // refs.body.classList.toggle('is-overflow-hidden');
    document.body.classList.toggle("is-overflow-hidden");
  }

  const menuBtn = document.querySelector('[data-menu-button]');
  const menuRef = document.querySelector('[data-menu]');
  const contactsRef = document.querySelector('[data-contacts]');
  menuBtn.addEventListener("click", toggleNavMenu);

  function toggleNavMenu() {
    menuBtn.classList.toggle("is-open");
    menuRef.classList.toggle("is-open");
    contactsRef.classList.toggle("is-open");
    document.body.classList.toggle("is-overflow-hidden");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
    menuBtn.setAttribute("aria-expanded", !expanded)
  }
})();