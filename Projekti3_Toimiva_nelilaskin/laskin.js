var luku1="";
var luku2 =[];
var tulos= 0;
function lukusyotta(a)
{
    luku1 += a ;
    document.getElementById("input1").value = luku1.toString();
}
function laske(b)
{
  luku2.push(document.getElementById("input1").value);
  luku1="";
  luku2.push((b =='%')? '*1/100':b);
  document.getElementById("input1").value = "";
}
function on()
{
  luku2.push(document.getElementById("input1").value);
  luku1="";
  tulos = eval(luku2.toString().replace(/,/g, ''));
  document.getElementById("input1").value= tulos.toString();
  luku2=[];
  tulos=0;
}
function poista(c)
{
   luku1="";
   luku2 = (c=='C')? luku2=[]: luku2 ;
   tulos= 0;
   document.getElementById("input1").value = "";
}
