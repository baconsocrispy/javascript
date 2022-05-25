// write a global variable
var global_var = 200

// write a local variable
function localVar() {
  var local = 72
  return local * global_var
}

// intentional error
// function badFunc() {
//   var = local 
//   return local + 100
// }

// Write out a function with an if statement that utilizes the 
// new Date().getHours() method
function  timeFunc()  {
  current_time = new Date().getHours()
  if (current_time >= 18) {
    document.getElementById("time").innerHTML = "Getting kinda late, eh?"
  }
  else  {
    document.getElementById("time").innerHTML = "Is it time to go home yet?"
  }
}

// else assignment
function  dimSum()  {
  var ans = document.getElementById("input").value
  if (ans == 'y') {
    document.getElementById("else").innerHTML = "Yes, that's the right answer"
  }
  else  {
    document.getElementById("else").innerHTML = "For shame."
  }
}

// else if assignment
function  timeFunc2() {
  time2 = new Date().getHours()
  if (time2 < 12) {
    document.getElementById("time2").innerHTML = "It's the morning!"
  }
  else if (time2 == 12) {
    document.getElementById("time2").innerHTML = "It's noon folks"
  }
  else  {
    document.getElementById("time2").innerHTML = "Guess it's afternoon"
  }
}