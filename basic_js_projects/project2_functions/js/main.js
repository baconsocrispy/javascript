// Function assignment
function myFunc1(text1, text2)  {
  var var1 = text1,  var2 = text2
  document.getElementById("par_id_1").innerHTML = var1 + " and " + var2
}

// Operator assignment
function myFunc2(text1, text2) {
  var var1 = text1, var2 = text2
  document.getElementById("par_id_2").innerHTML += " " + var1 + " and " + var2
}

// Write and execute your own JS function
function myFunc3(num1, num2)  {
  return num1 * num2 / num1 + num2 - num1 * 11
}
document.write(myFunc3(72, 32))

// Write and execute the document.getElementsById() method

function changeH1(color, text, id) {
  var h1 = document.getElementById(id);
  h1.style.color = color;
  h1.innerHTML = text;
}



