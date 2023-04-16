const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

let deferredPrompt;
// Creates install prompt 
window.addEventListener('beforeinstallprompt', (event) => {
  console.log(event.platforms);
  event.userChoice.then((choiceResult) => {
    console.log(choiceResult.outcome);
  }
  )

  event.preventDefault();
  
  const installButton = document.getElementById('install-button');
  installButton.classList.add('show'); 

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
