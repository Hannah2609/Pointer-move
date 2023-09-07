// Lytter efter når musen bevæger sig, så går den til funktionen changeColor
document.addEventListener("mousemove", changeColor);

// i funktionen tager vi evt properti med
function changeColor(evt) {
    // vi finder her musens position på x aksen
  const mousePos = evt.clientX;

//  tjekker i konsol log 
  console.log(mousePos);

//   sætter sat til at være postionen / med skærmbredde * 100
// vi får dermed et tal mellem o - 100.
  const sat = (mousePos / window.innerWidth) * 100;

//   sætter vores property "--sat" til at være sat som vi lige har fundet ud af
// tilføjer % så den kan indlæses korrekt
document.body.style.setProperty("--sat", `${sat}%`);
}
