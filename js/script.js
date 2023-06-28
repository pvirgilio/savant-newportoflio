const btnMenu = document.getElementById("btnMenu");

const containerMenu = document.getElementById("containerMenu")

btnMenu.addEventListener('click', function () {
    if (window.matchMedia("(max-width: 767px)")) {


        if (containerMenu.style.display === 'none') {
            containerMenu.style.overflow = 'hidden'
            containerMenu.style.display = 'flex'
        } else {
            containerMenu.style.display = 'none';
        }
    }

})



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

document.getElementById("btnTop").addEventListener("click", scrollToTop);