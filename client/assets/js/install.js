const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

let deferredPrompt;
// Creates install feature and prompt 
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  deferredPrompt = event;

  const installButton = document.getElementById('install-button');
  installButton.classList.add('show'); 

 // Add event listener, 'click' to install 
  installBtn.addEventListener('click', () => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
  });
});

// showInAppInstallPromotion();

// Confirm app has been installed
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Hello Stranger!';
  console.log('Hello is installed', event);
});
