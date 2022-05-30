function learnAbout(person) {
  var backstory = person.getAttribute("data-backstory")
  alert(person.innerHTML + backstory)
}