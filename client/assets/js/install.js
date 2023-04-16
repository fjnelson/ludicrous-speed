const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

let deferredPrompt;
// Creates install feature and prompt 
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  deferredPrompt = event;
  
  // showInAppInstallPromotion();

  const installButton = document.getElementById('install-button');
  installButton.classList.add('show'); 

  //installBtn.style.visibility = 'visible';
 //textHeader.textContent = 'Install Hello Stranger Today!';

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
