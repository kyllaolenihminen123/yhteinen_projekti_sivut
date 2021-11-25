var kokeilu = 0;
var arvo =  Math.floor(Math.random() * 11);
function alka()
{
  arvo= Math.floor(Math.random() * 11);
  kokeilu =0;
  for(let i = 0; i < 11; i++)
  {
  document.getElementById(i).disabled = false;
  }
  //return document.getElementById("tulos").innerHTML = arvo.toString();
}

function paina (a)
{
  kokeilu ++;
  if (kokeilu > 3)
  {
    alka();
    return alert( "Olet kokeillut 4 kertaa. Valitettavasti hävisit pelin ");
  }
  if( parseInt(a) === arvo)
  {
    let ukokeilu = kokeilu;
    alka();
    return alert(" Onnea! voitit " + ukokeilu + " yrityksellä" );

  }
  else if (a > arvo)
  {
   for(let i = a; i < 11; i++)
   {
   document.getElementById(i).disabled = true;
   }

    return alert("  Liian suuri  ");
  }

  for(let i = 0; i <= a; i++)
  {
  document.getElementById(i).disabled = true;
  }
   return  alert("  Liian pieni  ");
}
