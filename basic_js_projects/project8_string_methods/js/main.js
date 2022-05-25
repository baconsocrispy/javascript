// concat assignment
function concatFunc(text1, text2) {
  document.getElementById("id1").innerHTML = text1.concat(text2)
}

// slice assignment
function  sliceThis() {
  document.getElementById("slice").innerHTML = "Slice this string into bits".slice(11,26)
}

// uppercase method
function  upThis()  {
  document.getElementById("upper").innerHTML = "click for upper".toUpperCase()
}

// search method
function searchThis() {
  document.getElementById("search").innerHTML = "This is the string to be searched".search("e")
}

// toString() method
function numString()  {
  var num = 576
  document.getElementById("to_string").innerHTML = num.toString()
}

// toPrecision()method
function numPrecise()  {
  var num = 5234.42304985723094875
  document.getElementById("precise").innerHTML = num.toPrecision(8)
}

// toFixed() method
function numFix()  {
  var num = 239847239
  document.getElementById("fixed").innerHTML = num.toFixed(30)
}

// valueOf() method
function primString()  {
  var str1 = "This is a prim string"
  document.getElementById("prim").innerHTML = str1.valueOf()
}