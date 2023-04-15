const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

// Creates install prompt 
window.addEventListener("beforeinstallprompt", (e) => {
  console.log(e.platforms); // e.g., ["web", "android", "windows"]
  e.userChoice.then((choiceResult) => {
    console.log(choiceResult.outcome); 
  }, handleError);
});

window.addEventListener('beforeinstallprompt', (event) => {
  console.log(event.platforms);
  event.preventDefault();
  installBtn.style.visibility = 'visible';
  textHeader.textContent = 'Install Hello Stranger Today!';

  installBtn.addEventListener('click', () => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
  });
});

window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Hello Stranger!';
  console.log('Hello is installed', event);
});
