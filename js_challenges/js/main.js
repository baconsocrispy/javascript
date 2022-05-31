// popup contact form challenge
function openContact()  {
  document.getElementById('popup-form').style.display = 'block';
}
function closeContact() {
  document.getElementById('popup-form').style.display = 'none';
}

// form validation
function validateContact() {
  var formInputs = document.getElementsByClassName('form-input');

  for (i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value == "") {
      alert(formInputs[i].name + " can't be blank");
      break;
    }
  }
}

// fade challenge
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});