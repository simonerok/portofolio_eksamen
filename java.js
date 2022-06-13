// En variabel som vi kan referer til som toggle-btn senere

const btn = document.querySelector(".toggle-btn");
// Variabel til ".main-menu"
const menu = document.querySelector(".menu");

// Funktion kaldet togglemenu
function toggleMenu() {
  // ClassList.toggle gør at menu at der sker noget når klassen bliver vist (shown)
  menu.classList.toggle("shown");

  // Variablen menuShown skal indeholde shown -brug ClassList contains
  const menuShown = menu.classList.contains("shown");

  // Bruger if sætning til at spørge om funktionen er shown eller ej
  if (menuShown) {
    console.log(menuShown);

    // menuen skal lukke hvis menuShown er til stede (true) -textcontent er det der bliver vist på hjemmesiden og som man kan trykke på for at lukke burgermenun
    btn.textContent = "Luk";
  } else {
    console.log(menuShown);

    // luk bliver til menu hvis menuShown ikke er til stede (false)
    btn.textContent = "Menu";
  }
}

// lytter efter klik til "knappen" menu. dette starter funktionen
btn.addEventListener("click", toggleMenu);
