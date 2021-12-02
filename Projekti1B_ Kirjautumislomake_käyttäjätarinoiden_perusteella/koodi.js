function lähetä() {
  var nimi=document.getElementById('nimi').value;
  if (nimi == "" || salasana == "" ||)   {
    alert("Et ole täyttänyt kaikkia kenttiä.");
    return;
  }
  document.getElementById("kirjautumislomake").submit();
  alert("Lähetetty!");
}
