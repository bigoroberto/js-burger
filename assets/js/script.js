//REFERENCES sono referenze che collegano la variante all'elemento index ( collegamenti all'index)
var nameBurger = document.getElementById('name');
var selectIngredient = document.getElementsByClassName('ingredient-checkbox');
var discountCoupon = document.getElementById('coupon');
var button = document.getElementById('button');
var totalPrice = document.getElementById('price');

//SETTINGS sono le variabili globali non ancora collegate strettamente ad un elemento nell'index
var arrCoupon = ['sconto2021', 'sconto-bool'];
var discount = 0.3;
var defaultPrice = 50;
//adesso uso la funzione creata, con le mie variabili "reali" per scrivere il prezzo
writePrice(defaultPrice, totalPrice);

//EVENTS
button.addEventListener('click', function(){
  var nomePanino = nameBurger.value.trim(); // quello che scrivo nel nome del panino diventa il suo value quindi richiamo quello
  if(nomePanino.length === 0){   //mettiamo il (.length) perche il panino deve avere almeno un carattere all'interno di esso
    alert("Nome inserito non valido!\nRiprova");
  }else{
    //creiamo un ciclo per gli ingredienti all'interno
    // ci serve una variabile di partenza per il prezzo ( il panino non esiste)
    var ingredientPrice = 0;
    for(var i =0; i < selectIngredient.length; i++){
      // creiamo la variabile per i singoli elementi
      var singleElements = selectIngredient[i];
      if(singleElements.checked === true){
        //adesso sommiamo ogni singolo valore checkato alla variante iniziale 
        ingredientPrice += parseInt(singleElements.value);
      }
    }
  }

  // ho il prezzo di default e il prezzo degli ingredienti li sommo
  var finalPrice = defaultPrice + ingredientPrice;
  // facciamo lo sconto se viene utilizzato un coupon dell'array coupon
  if(arrCoupon.includes(discountCoupon.value)){
    finalPrice *= (1 - discount); // finalprice = finalprice * (1- discount)
  }

  //stampiamo
  writePrice(finalPrice, totalPrice);


});


//FUNCTIONS
function writePrice(value, target){
  target.innerHTML = value.toFixed(2);
}