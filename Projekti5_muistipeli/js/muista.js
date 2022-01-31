var taulu="<table>";
let koko =4;
var dizi =[];
var b =0, valitus1 = "",valitus2 = "", ensi="tyhja", toinen="", kokeilu=0;
var imgsrc = [];
function luotaulu()
 {
   document.getElementById("aloitusnappi").innerHTML= "Aloita uudelleen";
   document.getElementById('div1').setAttribute("class", "div");
  taulu="<table>"; b =0; dizi =[];
  do {
    let a= Math.floor(Math.random()*16);
     if(dizi.indexOf(a) < 0){dizi.push(a)};
  } while (dizi.length < 16);
  for (var i = 1; i <= koko; i++) {
    taulu +="<tr>";
    for (var j = 1; j <= koko; j++) {
      dizi[b]= dizi[b]%8 +1;
      imgsrc.push('"../kuvat/' + dizi[b] + '.png"');
      taulu += '<td id="td' + b +'"><img src="../kuvat/9.png" id="' + b +'" onclick = "cevir('+ b +')"></td>';
      b++;
    }
    taulu += "</tr>";
  }
  taulu +="</table>";
  return document.getElementById("div1").innerHTML=taulu;
}
function cevir(d)
{
   kokeilu ++;
  if (ensi == d){

    return d;
  }
  if (valitus1 == "")
  {
    ensi = d;
    valitus1= "../kuvat/" + dizi[d] + ".png";
    return document.getElementById(d).src = valitus1;
  }
  else if (valitus2 == "")
  {
    toinen = d;
    valitus2 = "../kuvat/" + dizi[d] + ".png";

    if (valitus1 == valitus2)
     {
        document.getElementById(ensi).onclick =false;
        document.getElementById(toinen).onclick = false;
        document.getElementById("td"+ensi).style.backgroundColor="#8EB9A4";
        document.getElementById("td"+toinen).style.backgroundColor="#8EB9A4";
        document.getElementById(ensi).src = valitus1;
        document.getElementById(toinen).src = valitus2;
        valitus1 = "";//"../kuvat/" + dizi[d] + ".png";
        valitus2 =""; ensi=""; toinen= "";
        return document.getElementById(d).src = "../kuvat/" + dizi[d] + ".png";
     }
       return document.getElementById(d).src = valitus2;
  }
  else
  {
    document.getElementById(ensi).src = "../kuvat/9.png";
    document.getElementById(toinen).src = "../kuvat/9.png";
    valitus1 = "../kuvat/" + dizi[d] + ".png";
    valitus2 =""; ensi=d; toinen= "";
    return document.getElementById(d).src = valitus1;
  }
}
