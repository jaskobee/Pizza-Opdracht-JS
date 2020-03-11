// Button Betalen --------------------------------------------------------------------------------
// Als ik .toFixed(2) gebruik bij de return van de functies dan telt hij het totaal niet meer correct op..

function betalen() {
  var teBetalen = 0;
  var s = size();
  var c = cheese();
  var cr = crust();
  var sa = sauce();
  var t = toppings();
  var v = vegetables();
  var teBetalen = s + c + cr + sa + t + v;

  document.getElementById("prijsSize").innerHTML = "&euro; " + s;
  document.getElementById("prijsCheese").innerHTML = "&euro; " + c;
  document.getElementById("prijsCrust").innerHTML = "&euro; " + cr;
  document.getElementById("prijsSauce").innerHTML = "&euro; " + sa;
  document.getElementById("prijsToppings").innerHTML = "&euro; " + t;
  document.getElementById("prijsVegetables").innerHTML = "&euro; " + v;
  document.getElementById("teBetalen").innerHTML = "&euro; " + teBetalen;
}

// Size Tab ----------------------------------------------------------------------------------- Size Tab

function size() {
  var prijsSize = 0;

  if (document.getElementById("kidsSize").checked) {
    prijsSize = parseFloat(document.getElementById("kidsSize").value);
  }
  if (document.getElementById("smallSize").checked) {
    prijsSize = parseFloat(document.getElementById("smallSize").value);
  }
  if (document.getElementById("mediumSize").checked) {
    prijsSize = parseFloat(document.getElementById("mediumSize").value);
  }
  if (document.getElementById("largeSize").checked) {
    prijsSize = parseFloat(document.getElementById("largeSize").value);
  }
  if (document.getElementById("familySize").checked) {
    prijsSize = parseFloat(document.getElementById("familySize").value);
  }

  return prijsSize;
}

// Cheese Tab --------------------------------------------------------------------------------------- Cheese Tab

function cheese() {
  var prijsCheese = 0;
  if (document.getElementById("noCheese").checked) {
    prijsCheese = parseFloat(document.getElementById("noCheese").value);
  }
  if (document.getElementById("normalCheese").checked) {
    prijsCheese = parseFloat(document.getElementById("normalCheese").value);
  }
  if (document.getElementById("extraCheese").checked) {
    prijsCheese = parseFloat(document.getElementById("extraCheese").value);
  }

  return prijsCheese;
}

// Crust Type ----------------------------------------------------------------------------------------- Crust Type

function crust() {
  var prijsCrust = 0;
  if (document.getElementById("normalCrust").checked) {
    prijsCrust = parseFloat(document.getElementById("normalCrust").value);
  }
  if (document.getElementById("garlicCrust").checked) {
    prijsCrust = parseFloat(document.getElementById("garlicCrust").value);
  }
  if (document.getElementById("cheesyCrust").checked) {
    prijsCrust = parseFloat(document.getElementById("cheesyCrust").value);
  }
  if (document.getElementById("spicyCrust").checked) {
    prijsCrust = parseFloat(document.getElementById("spicyCrust").value);
  }
  if (document.getElementById("cheffCrust").checked) {
    prijsCrust = parseFloat(document.getElementById("cheffCrust").value);
  }

  return prijsCrust;
}

// Pizza Sauce ----------------------------------------------------------------------------------------- Pizza Sauce

function sauce() {
  var prijsSauce = 0;
  if (document.getElementById("noSauce").checked) {
    prijsSauce = parseFloat(document.getElementById("noSauce").value);
  }
  if (document.getElementById("bbqSauce").checked) {
    prijsSauce = parseFloat(document.getElementById("bbqSauce").value);
  }
  if (document.getElementById("whiteSauce").checked) {
    prijsSauce = parseFloat(document.getElementById("whiteSauce").value);
  }
  if (document.getElementById("mariaraSauce").checked) {
    prijsSauce = parseFloat(document.getElementById("mariaraSauce").value);
  }
  return prijsSauce;
}

// Pizza Sauce ----------------------------------------------------------------------------------------- Pizza Sauce
// Pepperoni, Sausage, Canadian Bacon, Ground Beef, Anchovis, Chicken.

function toppings() {
  var array = []; // Hier komen alle toppings in
  var totaal = 0; // totaal van de prijs op 0 zetten, hier komt dan de "checked" toppings prijs in
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked"); // kan ook "input[name=toppings]:checked" als het meerdere checkboxes heeft.

  for (var i = 0; i < checkboxes.length; i++) {
    // loopt door al mijn checkboxes
    array.push(checkboxes[i].value); // "pushed" de [i]tems van mijn checked chackboxes in de Array

    if (checkboxes[i].value == "pepperoni") {
      // als de checkbox [i]tem == pepperoni is dan is de prijs 3euro
      totaal += 3; // slaat de waarde 3 op in totaal
    } else if (
      checkboxes[i].value == "sausage" ||
      checkboxes[i].value == "canadianBacon"
    ) {
      totaal += 3.5;
    } else if (
      checkboxes[i].value == "groundBeef" ||
      checkboxes[i].value == "anchovis" ||
      checkboxes[i].value == "chicken"
    ) {
      totaal += 4;
    }
  }
  return totaal; // return totaal waarde van alle "checked" boxes
}

// Vegetables ----------------------------------------------------------------------------------------- Vegetables
// Verse tomaten, uien, Zwarte Olijven, Groene Peper, Spinazie of Jalapeño.

function vegetables() {
  var array = [];
  var totaal = 0;
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked"); // kan ook "input[name=toppings]:checked" als het meerdere checkboxes heeft.

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);

    if (
      checkboxes[i].value == "verseTomaten" ||
      checkboxes[i].value == "uien" ||
      checkboxes[i].value == "zwarteOlijven" ||
      checkboxes[i].value == "groenePepers" ||
      checkboxes[i].value == "spinazie"
    ) {
      totaal += 0.5;
    } else if (checkboxes[i].value == "jalapenos") {
      totaal += 1;
    }
  }
  return totaal;
}
