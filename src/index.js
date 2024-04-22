import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

const content = document.getElementById('content');

const tabHandlers = {
    home: loadHome, 
    menu: loadMenu, 
    contact: loadContact,
};

const clearContent = () => {
    content.innerHTML = '';
};

const handleTabClick = (event) => {
    const tabName = event.target.getAttribute('data-tab');
    if (tabName && typeof tabHandlers[tabName] === 'function') {
        clearContent();
        tabHandlers[tabName]();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
    content.addEventListener('click', handleTabClick);
});