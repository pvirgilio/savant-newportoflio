function importHeaderFooter() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  header.innerHTML = `
    <div class="logo_savant">
      <img class="img_logosavant" src="/img/SavantWeb.png" alt="" />
      <h1 class="nome_savant">
        Savant<span class="span_savantLogo">Web</span>
      </h1>
    </div>

    <div class="menu">
      <div id="btnMenu" class="menu_button">
        <i class="fa-solid fa-bars"></i>
      </div>

      <div id="containerMenu" class="container_menu">
        <div class="linha_menu"></div>
        <a href="/index.html">Home</a>
        <div class="linha_menu"></div>
        <a href="/pages/aboutus.html">Sobre nós</a>
        <div class="linha_menu"></div>
        <a href="/src/projetos.html">Projetos</a>
        <div class="linha_menu"></div>
        <div class="button_contato_header">
          <?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg" color="#017bf3">
            <path d="M7 12h10M7 8h6" stroke="#017bf3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path
              d="M3 20.29V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7.961a2 2 0 00-1.561.75l-2.331 2.914A.6.6 0 013 20.29z"
              stroke="#017bf3" stroke-width="1.5"></path>
          </svg>
          <a href="">Entre em Contato</a>
        </div>
      </div>
    </div>

        

        
        `;

  footer.innerHTML = `
    <div class="main__footer">
    <div id="btnTop" class="button_top">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-chevrons-up-filled"
        width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0000FF" fill="none"
        stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm-.707 9.293a1 1 0 0 1 1.32 -.083l.094 .083l3 3a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l3 -3zm0 -4a1 1 0 0 1 1.32 -.083l.094 .083l3 3a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l3 -3z"
          fill="currentColor" stroke-width="0" />
      </svg>
    </div>
    <div class="atendimento">
      <h2 class="titulo__atendimento">Atendimento</h2>
      <div class="container__atendimento">
        <div class="email__atendimento">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-share" width="44"
            height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0000FF" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 9h8" />
            <path d="M8 13h6" />
            <path d="M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
            <path d="M16 22l5 -5" />
            <path d="M21 21.5v-4.5h-4.5" />
          </svg>
          <a class="link__email" href="">contato.savantweb@gmail.com</a>
        </div>

        <div class="endereco__atendimento">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-share" width="44"
            height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0000FF" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
            <path d="M16 22l5 -5" />
            <path d="M21 21.5v-4.5h-4.5" />
          </svg>
          <a class="link__endereco" href="#">Teresina-Piauí</a>
        </div>
      </div>
    </div>

    <div class="fale__conosco">
      <h2 class="titulo__fale__conosco">Contato</h2>
      <div class="texto__fale__conosco">
        <a href="#">Fale Conosco</a>
        <a href="">Vagas</a>
      </div>
    </div>

    <div class="explore">
      <h2 class="titulo__explore">Explore</h2>
      <div class="container__explore">
        <a href="#">Home</a>
        <a href="#">Sobre nós</a>
        <a href="#">Projetos</a>
      </div>
    </div>

    <div class="nos__acompanhe">
      <h2 class="titulo_nosacompanhe">Nos acompanhe</h2>
      <div class="icons__social">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram"
            width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0000FF" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg></a>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin"
            width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0000FF" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg></a>
      </div>
    </div>
  </div>

  <div class="copyright">
    <div class="linha__footer"></div>
    <div class="texto__copyright">
      <div class="container__img__footer__savant">
        <img class="savant_logo_footer" src="/img/savantwebicon.png" alt="" />
      </div>
      <p>
        © 2023 – <span class="span__savant__footer">SavantWeb</span> Todos
        os direitos reservados.
      </p>
    </div>
  </div>
    
    `;
}

importHeaderFooter();

const btnMenu = document.getElementById("btnMenu");

const containerMenu = document.getElementById("containerMenu");

btnMenu.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 767px)")) {
    if (containerMenu.style.display === "none") {
      containerMenu.style.overflow = "hidden";
      containerMenu.style.display = "flex";
    } else {
      containerMenu.style.display = "none";
    }
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.getElementById("btnTop").addEventListener("click", scrollToTop);
