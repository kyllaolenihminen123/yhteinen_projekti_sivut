
var luku1="";
var luku2;
var tulos= 0;
var lasketus ;
var ensimainen = true;
function lukusyotta(a)
{
    luku1 += a ;
    document.getElementById("input1").value = luku1.toString();
}
function laske(a)
{
let intluku = parseInt(luku1);
lasketus = (a < 19 )? a:lasketus;
switch (a) {
  case 11:
  tulos += parseInt(luku1);
  luku1 ="";
  document.getElementById("input1").value ="";
  break;
  case 12:
  tulos = (ensimainen)? intluku :tulos - intluku;
  luku1 ="";
  ensimainen = false;
  document.getElementById("input1").value ="";
  break;
  case 13:
  tulos = (ensimainen)? intluku: tulos*intluku;
  luku1 ="";
  ensimainen = false;
  document.getElementById("input1").value ="";
  break;
  case 14:
  tulos = (ensimainen)? intluku: tulos/intluku;
  luku1 ="";
  document.getElementById("input1").value ="";
  break;
  case 15:
  luku1 ="";
  document.getElementById("input1").value ="";
  break;
  case 19:
  laske(lasketus);
  luku1 ="";
  return  document.getElementById("input1").value = tulos.toString();
  break;
}
}
