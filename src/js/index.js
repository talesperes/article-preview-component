import { share } from './share.js'
import { navigatorShare } from './navigator.js'
import { uuid } from './uuid.js'
import '../css/style.css';

share.forEach( value => {
    if(value.actived) {
        const button = document.querySelector(`#${value.name}`);
        button.removeAttribute('disabled');
        button.addEventListener('click', () => navigatorShare(uuid()));
    }
})
