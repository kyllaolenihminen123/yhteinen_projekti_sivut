// Tarkistaa onko kentät täytetty.
function lähetä() {
  var nimi = document.getElementById('nimi').value;
  var salasana = document.getElementById('salasana').value;
  var himopelaaja = document.getElementById('himopelaaja').value;
  var opiskelija = document.getElementById('opiskelija').value;
  var enkayta = document.getElementById('enkayta').value;
  var hienot = document.getElementById('hienot').value;
  var ammattimaiset = document.getElementById('ammattimaiset').value;
  var ostan = document.getElementById('ostan').value;
  var ammattiaineet = document.getElementById('ammattiaineet').value;
  var ohjelmointi = document.getElementById('ohjelmointi').value;
  var matematiikka = document.getElementById('matematiikka').value;
  var kielet = document.getElementById('kielet').value;
  var kehitys = document.getElementById('kehitys').value;
  if (nimi == "" || salasana == "" || himopelaaja == "" || opiskelija == "" || enkayta == "" || hienot == "" || ammattimaiset == "" || ostan == "" || salasana == "" || ammattiaineet == "" || ohjelmointi == "" || matematiikka == "" || kielet == "" || kehitys == "")
  // Ilmoittaa käyttäjälle, jos kaikki kentät ei ole täytetty.
  {
    alert("Et ole täyttänyt kaikkia kenttiä.");
    return;
  }
  // Jos kaikki kentät on täytetty, "lähettää" ja ilmoittaa käyttäjälle siitä.
  document.getElementById("kirjautumislomake").submit();
  alert("Lähetetty!");
}
