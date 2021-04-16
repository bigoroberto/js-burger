//REFERENCES

var prezzoElementi = document.getElementById('price');
var button = document.getElementById('button');
var nameUser = document.getElementById('name');
var ingredientiVari = document.getElementsByClassName('ingredient-checkbox');


//SETTINGS

var defaultPrezzo = 50;
var coupons =  ['sconto2021','sconto-bool'];
var sconto = 0.2;
writeprice(defaultPrezzo, prezzoElementi);

//EVENTS

button.addEventListener('click', function (){
  //controllo del nome
  //verifico la presenza del nome
  var nomeInserito = nameUser.value.trim();

  if(nomeInserito.length === 0){
    alert("Inserirsci il numer del tuo burger");
  }else{
    //sommare gli elementi checkati
    var prezzoIngrediente = 0;
    //ciclo la lista degli input checkbox
    for(var i = 0; i < ingredientiVari.length; i++){
      var ingredient = ingredientiVari [i];
      //se un checkbox è checked === true sonno il suo valore
      if(ingredient.checked === true){
        prezzoIngrediente += parseInt(ingredient.checked);
      }
    }
    prezzoIngrediente.innerHTML= defaultPrezzo + prezzoIngrediente 
    writeprice((defaultPrezzo + prezzoIngrediente), prezzoElementi);
  }
  //verificare la presenza del coupon e nel caso applicare lo sconto
  var prezzoTotale = defaultPrezzo + prezzoIngrediente;

  // verifico la presenza del codice inserito dentro l'arrau dei coupons
  if(coupons.includes('coupon.value')){
    prezzoTotale -= prezzoTotale * sconto;
    //oppure scriviamo ------prezzoTotale * (1-sconto);------- modalità da fico fatta vedere da stefano xD  
  }else{
    alert("Il coupon inserito non è scaduto oppure non è valido!")
  }
  //stampare il prezzo totale
  writeprice(prezzoTotale, prezzoElementi),
})

//FUNCTIONS

//ricevere il valore da scrivere (value) e l'elemento dove essere scritto (target)
function writeprice(value , target){
  //assegnamo a targer un valore, al valore assegnamo il toFixed(2) per far comparire un esadecimale;
  target.innerHTML = value.toFixed(2);
}