import { headerClick } from './header';
import { boxClick } from './box';
// Require registerSW
import { registerSW } from './register-sw';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

// Call registerSW 
registerSW();