// dictionary assignment
function dictFunc1() {
  var piano = {
    type: "Electric",
    brand: "Yamaha",
    keys: 88,
  }
  document.getElementById("dictionary").innerHTML = piano.brand
}

// dictionary challenge
function dictFunc2() {
  var piano = {
    type: "Electric",
    brand: "Yamaha",
    keys: 88,
    brand: "Kawai"
  }
  document.getElementById("dict2").innerHTML = piano.brand
}

// delete assignment
function dictFunc3() {
  var piano = {
    type: "Electric",
    brand: "Yamaha",
    keys: 88,
  }
  delete piano.brand
  document.getElementById("dict3").innerHTML = piano.brand
}