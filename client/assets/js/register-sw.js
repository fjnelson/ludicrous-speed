// Register service workers 
const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            // If the registration is successful
            console.log('SW Reg:', registration);
          })
          .catch (err => {
            // if the registration is unsuccessful
            console.log('SW Reg:', err);
        });
    });
  }}

  registerServiceWorker ();