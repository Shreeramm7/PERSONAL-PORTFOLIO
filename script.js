let sideMenu = document.getElementById('sidemenu');

function openmenu() {
  sideMenu.style.right = '0';
  sideMenu.style.display = 'block';
}

function closemenu() {
  sideMenu.style.right = ' -200px';
  sideMenu.style.display = 'none';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxx0SElcBOlS4xMYd94EQEPPGDMoqZJC0DqKhxDowrkczfi2XeR_E95uIWo8ilSCaL7/exec';
const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML="Message sent successfully!"
      setTimeout(function(){
        msg.innerHTML=""
      },3000)
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
