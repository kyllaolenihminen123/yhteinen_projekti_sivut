var laske = 0;
var nolla = false;
// Tarkistaa kysymyksien valintojen arvot.
function tarkista() {
  if (nolla) {
    nolla = false;
    window.location.reload();
  }
  vastaa("b", 1);
  vastaa("a", 2);
  vastaa("d", 3);
  vastaa("b", 4);
  vastaa("b", 5);
  document.getElementById("tulos").innerHTML = laske + "/5" + " Oikein";
  nolla = true;
}

function vastaa(oikeinvastaa, kysymys) {
  var k = document.forms["lomake"]["k" + kysymys.toString()].value;
  document.getElementById(k + kysymys.toString()).style.color = "red";
  if (oikeinvastaa == k) {
    document.getElementById(oikeinvastaa + kysymys.toString()).style.color = "green";
    laske++;
  }

}
