function lähetä() {
  var nimi=document.getElementById('nimi').value;
  var ika=document.getElementById('ika').value;
  var email=document.getElementById('email').value;
  if(nimi.length < 2) {
    alert("Tarkista nimi kenttä.");
    return false;
  }
  if (ika <18 || ika >64) {
    alert("Tarkista ikä kenttä.");
    return false;
  }
  if (email < /^[^\s@]+@[^\s@]+\.[^\s@]+$/) {
    alert("Tarkista sähköposti kenttä");
    return false;
  }
  document.getElementById("kirjautumislomake").submit();
  alert("Lähetetty!");
  return true;
}
