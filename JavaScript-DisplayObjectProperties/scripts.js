var steveAustin = {name: "Stone Cold Steve Austin", signature: "Stone Cold Stunner", homeTown: "Victoria, TX"};
var bretHart = {name: "Bret 'Hitman' Hart", signature: "Sharp Shooter", homeTown: "Cagary, Alberta, Canada"};
var Undertaker = {name: "The Undertaker", signature: "Tombstone Piledriver", homeTown: "Death Valley"};
var johnCena = {name: "John Cena", signature: "Attitude Adjustment", homeTown: "West Newbury, Massachusetts"};
var ajStyles = {name: "AJ Styles", signature: "Phenomenal Forearm", homeTown: "Gainsville, Georgia"};

var Wrestlers = [steveAustin, bretHart, Undertaker, johnCena, ajStyles];

function austinInfo() {
  document.getElementById("wrestName").innerHTML = steveAustin.name;
  document.getElementById("sigMove").innerHTML = steveAustin.signature;
  document.getElementById("homeTown").innerHTML = steveAustin.homeTown;
  console.log(steveAustin);
}

function hartInfo() {
  console.log(bretHart);
  document.getElementById("wrestName").innerHTML = bretHart.name;
  document.getElementById("sigMove").innerHTML = bretHart.signature;
  document.getElementById("homeTown").innerHTML = bretHart.homeTown;
}

function takerInfo() {
  console.log(Undertaker);
  document.getElementById("wrestName").innerHTML = Undertaker.name;
  document.getElementById("sigMove").innerHTML = Undertaker.signature;
  document.getElementById("homeTown").innerHTML = Undertaker.homeTown;
}

function cenaInfo() {
  console.log(johnCena);
  document.getElementById("wrestName").innerHTML = johnCena.name;
  document.getElementById("sigMove").innerHTML = johnCena.signature;
  document.getElementById("homeTown").innerHTML = johnCena.homeTown;
}

function stylesInfo() {
  console.log(ajStyles);
  document.getElementById("wrestName").innerHTML = ajStyles.name;
  document.getElementById("sigMove").innerHTML = ajStyles.signature;
  document.getElementById("homeTown").innerHTML = ajStyles.homeTown;
}