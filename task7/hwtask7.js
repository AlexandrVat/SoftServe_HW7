let listOfCountry=document.getElementById("country");
let listOfCity=document.getElementById("userСity");


function chListCountry(){

   //listOfCity.querySelector('#userСity > option[value="ger"]').style.display = "none";
 
 
   for (let i=0; i < listOfCity.options.length ; i++) {

      if (listOfCity[i].value != listOfCountry.value) {
       
        listOfCity[i].style.display = "none";

      }
      else{
        listOfCity[i].style.display = 'initial';
      }
   }
}

listOfCountry.onchange = chListCountry;