

function lataa()
{
  document.getElementById("vadita").innerHTML = "";
  var auto = "";
  auto = document.getElementById("merkki").value;
  auto += " " + document.getElementById("malli").value ;
  auto += " " + document.getElementById("hinta").value;
  let tunusid = document.getElementById("id1").value;
  if (tunusid == "")
  {
    document.getElementById("vadita").innerHTML = " ole hyvä  ja syötä ID";
  }
  else {
    window.localStorage.setItem(tunusid, auto);
  }
}
function hae1()
{

  let a = document.getElementById("hae").value;
  if ( a !== "" )
  {
  document.getElementById("tulos1").innerHTML= localStorage[a];
}
}
function poista()
{
  let a = document.getElementById("tpoista").value;
  if ( a !== "")
  {
    localStorage.removeItem(a);
  }
  document.getElementById("tpoista").value = "";
}
