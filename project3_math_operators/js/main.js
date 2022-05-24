// Create a function that returns the result of 
// an addition operation to <p> element with id "math"
function myFunc1() {
  var Id = document.getElementById("math")
  Id.innerHTML = 7 + 20876
}

// write a subtraction operation that displays the result.
function  subtract()  {
  var id = document.getElementById("subtract")
  id.innerHTML = 8909843534 - 29837409843
}

// write a multiplication operation and a division 
// operation and display the results of both
function  funMath()  {
  var id = document.getElementById("mult")
  var mult = 102398 * 093248023, div = 293847928374 / 1923812
  id.innerHTML = "This is mult: " + mult + " This is div: " + div
}

// write multiple mathematical operations 
// and display the results
function  multi() {
  var id = document.getElementById("multi")
  id.innerHTML = 1234 * 13452345 / 1234 + 12 - 987
}

// utilize the modulus operator and display the results
function mod() {
  var id = document.getElementById("mod")
  id.innerHTML = (1234 * 13452345 / 1234 + 12 - 987) % 298374
}

// utilize the negation operator and display the results
function unary() {
  var id = document.getElementById("unary")
  id.innerHTML = -((1234 * 13452345 / 1234 + 12 - 987) % 298374)
}

// utilize the increment operator and the 
// decrement operator, and display the result of each
function incDec() {
  var id = document.getElementById("inc_dec")
  var inc = 2076, dec = 24567
  inc++
  dec--
  id.innerHTML = "This is increment: " + inc + " This is decrement: " + dec
}

// utilize the Math.random() function
function rando() {
  var id = document.getElementById("rando")
  id.innerHTML = Math.random() * 938472398
}

// utilize a Math object method and display its result
function  circleArea() {
  var id = document.getElementById("circ")
  id.innerHTML = Math.pow((Math.PI * 25), 2)
}