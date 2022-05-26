// write and execute the string length property
function callLoop() {
  let i = ""
  while (i.length < alphabet().length)  {
    i += alphabet()[i.length]
  }
  replaceInner("loop", i)
}

// array assignment
function arrayFunc() {
  let array = []
  for (i = 0; alphabet().length > array.length; i++)  {
    array.unshift(alphabet()[i])
  }
  replaceInner("array", array)
}

// constant assignment
const toad = {handsome: true, color: "Mustard Green", age: 87}

function  constantFunc()  {
   string = "The " + toad.age + " year old " + toad.color + " toad was " + handsomeToad(toad) + " handsome indeed"
  function  handsomeToad(toad)  {
    return (toad) ? "quite" : "not"
  }
  replaceInner("constant", string)
}

// utilize the let keyword
let age = toad.age
alert("The toad is " + toad.age + " today")

// object assignment
let evilStepmother = {
  name: "Joyce",
  age: 47,
  trait: "chews with her mouth open",
  description: function() {
    return this.name + " is " + this.age + " and " + this.trait
  }
}
function stepMom() {
  replaceInner("object", evilStepmother.description())
}

// break assignment
function addBreak() {
  let s = ""
  let ninjas = ["Don", "Mike", "Leo", "Raph"]
  for (i = 0; i < ninjas.length; i++) {
    if (ninjas[i] == "Raph") { break }
    s += ninjas[i] + "<br>"
  }
  replaceInner("break", s)
}

// continue assignment
function continueOn() {
  let s = ""
  let ninjas = ["Don", "Mike", "Leo", "Raph"]
  for (i = 0; i < ninjas.length; i++) {
    if (ninjas[i] == "Leo") { continue }
    s += ninjas[i] + "<br>"
  }
  replaceInner("continue", s)
}

// helpers
function alphabet() {
  return "abcdefghijklmnopqrstuvwxyz"
}
function replaceInner(id, content) {
  document.getElementById(id).innerHTML = content
}