var kokeilu = 0;
var arvo = Math.floor(Math.random() * 11);
// Valitsee random numeron
function alka() {
  arvo = Math.floor(Math.random() * 11);
  kokeilu = 0;
  for (let i = 0; i < 11; i++) {
    document.getElementById(i).disabled = false;
  }
  //return document.getElementById("tulos").innerHTML = arvo.toString();
}
// Jos pelaaja on yrittänyt 4 kertaa, pelaaja häviää pelin.
function paina(a) {
  kokeilu++;
  if (kokeilu > 3) {
    alka();
    return alert("Olet kokeillut 4 kertaa. Valitettavasti hävisit pelin ");
  }
  // Jos pelaaja valitsee oikein, peli onnittelee ja kertoo montako yritystä teit.
  if (parseInt(a) === arvo) {
    let ukokeilu = kokeilu;
    alka();
    return alert(" Onnea! voitit " + ukokeilu + " yrityksellä");

  }
  // Kertoo luvun olevan liian suuri.
  else if (a > arvo) {
    for (let i = a; i < 11; i++) {
      document.getElementById(i).disabled = true;
    }

    return alert("  Liian suuri  ");
  }
  // Kertoo luvun olevan liian pieni.
  for (let i = 0; i <= a; i++) {
    document.getElementById(i).disabled = true;
  }
  return alert("  Liian pieni  ");
}
