// Tarkistaa onko nimi, ikä tai sähköposti osoite virheellinen. Jos kaikki ok "lähettää"".
function lähetä() {
  var nimi = document.getElementById('nimi').value;
  var ika = document.getElementById('ika').value;
  var email = document.getElementById('email').value;
  // Nimi alle 2 merkkiä. Lähettää käyttäjälle ilmoituksen, että tarkistaa nimi kentän.
  if (nimi.length < 2) {
    alert("Tarkista nimi kenttä.");
    return false;
  }
  // Ikä alle 18 tai suurempi kuin 64 numeroa. Lähettää käyttäjälle ilmoituksen, että tarkistaa ikä kentän.
  if (ika < 18 || ika > 64) {
    alert("Tarkista ikä kenttä.");
    return false;
  }
  // Sähköpostista puuttuu @ merkki. Lähettää käyttäjälle ilmoituksen, että tarkistaa sähkposti kentän.
  if (email < /^[^\s@]+@[^\s@]+\.[^\s@]+$/) {
    alert("Tarkista sähköposti kenttä");
    return false;
  }
  // "Lähettää" ja antaa ilmoituksen käyttäjälle, että lähetetty.
  document.getElementById("kirjautumislomake").submit();
  alert("Lähetetty!");
  return true;
}
