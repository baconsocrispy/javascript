// ternary constructors assignment
function  rideFunction()  {
  var height, can_ride;
  height = document.getElementById("height").value;
  can_ride = (height < 52) ? "You're too short" : "You're tall enough";
  document.getElementById("ride").innerHTML = can_ride + " to ride";
}

// Utilizing HTML, JavaScript and ternary operators, 
// create a basic program that outputs whether or not 
// a user is old enough to vote.
function  votingAge() {
  var age, can_vote;
  age = document.getElementById("age").value
  can_vote = (age >= 18) ? "You can vote!" : "Too young sorry"
  document.getElementById("output").innerHTML = can_vote
}

// object coding assignment
function  piano(make, keys, type)  {
  this.piano_make = make;
  this.piano_keys = keys;
  this.piano_type = type;
}
var piano = new piano("Yamaha", 88, "Acoustic")
function  myFunc()  {
  document.getElementById("print_object").innerHTML = piano.piano_keys + " key " + piano.piano_make + " " + piano.piano_type
}

// 'new' keyword assignment
function creepyNeighbor(age, type_of_creep) {
  this.age = age;
  this.type = type_of_creep;
}
var creep1 = new creepyNeighbor(75, "Flasher")
var creep2 = new creepyNeighbor(16, "Peeping Tom")
var creep3 = new creepyNeighbor(55, "Garbage Snoop")

var creepy_neighbors = [creep1, creep2, creep3]


function whichCreep() {
  var random_idx = Math.floor(Math.random() * creepy_neighbors.length);
  var random_creep = creepy_neighbors[random_idx];
  var creep_name = document.getElementById("which_creep").value;
  document.getElementById("creep_display").innerHTML = creep_name + " is a " + random_creep.age + " year old " + random_creep.type
}

// Assign a variable the value of a reserved word. 
// Attempt to display this in the browser.
// var true = true
// document.write(true)

// write an object constructor function
function  officeFurniture(type, material) {
  this.type = type;
  this.material = material
}

// nested functions assignment
function  outerFunc() {
  var num1 = Math.floor(Math.random() * 1230983);
  document.getElementById("nested_function").innerHTML = innerFunc(num1);
  function  innerFunc(num) {
    return num * 1000000000
  };
}