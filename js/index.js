const btnMenu = document.getElementById("btnMenu");

const containerMenu = document.getElementById("containerMenu");

function menubar() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // Obtém o estilo computado atual do elemento (incluindo CSS)
    const displayStyle = window.getComputedStyle(containerMenu).display;

    if (displayStyle === "none") {
      containerMenu.style.overflow = "hidden";
      containerMenu.style.display = "flex";
    } else {
      containerMenu.style.display = "none";
    }
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.getElementById("btnTop").addEventListener("click", scrollToTop);
