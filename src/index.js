import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

// Clear the content for the #content div

const clearContent = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
};

document.addEventListener('DOMContentLoaded', () => {
    loadHome(); // Load the homepage content when the page is first loaded
    // Static parent element for event delegation
    const content = document.getElementById('content');

    // Event delegation for handling clicks on dynamically added buttons
    content.addEventListener('click', (event) => {
        const tab = event.target.getAttribute('data-tab');
        if (tab) {
            clearContent(); // Clear current content
            switch (tab) {
                case 'home':
                    loadHome();
                    break;
                case 'menu':
                    loadMenu();
                    break;
                case 'contact':
                    loadContact();
                    break;
            }
        }
    });
});