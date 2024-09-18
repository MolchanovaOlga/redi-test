(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const closeMenuLink = document.querySelectorAll(".header-link-js");
  const backdrop = document.querySelector(".backdrop");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  };

  closeMenuLink.forEach((item) => item.addEventListener("click", toggleMenu));
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      closeMenu();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    closeMenu();
  });
})();
