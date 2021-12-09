
var luku1="";
var luku2;
var tulos= 0;
var lasketus ;
function lukusyotta(a)
{
    luku1 += a ;
    document.getElementById("input1").value = luku1.toString();
}
function laske(a)
{
lasketus ="";
switch (a) {
  case 11:
    tulos += parseInt(luku1);
    luku1 ="";
    return document.getElementById("input1").value="";
    break;
  case 12:
    return  document.getElementById("input1").value = tulos.toString();
    break;
}
}
