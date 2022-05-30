// form assignment
function formValid()  {
  let inputs = document.getElementsByTagName("input")
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      alert(inputs[i].name + " must be filled out")
      return false
    }
  }
}