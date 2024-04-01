import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';


const homeButton = document.querySelector('button[data-tab="home"]');
const menuButton = document.querySelector('button[data-tab="menu"]');
const contactButton = document.querySelector('button[data-tab="contact"]');

document.addEventListener('DOMContentLoaded', () => {
    loadHome(); // Load the homepage content when the page is first loaded
});

homeButton.addEventListener('click', () => {
    clearContent();
    loadHome();
});

menuButton.addEventListener('click', () => {
    clearContent();
    loadMenu();
});

contactButton.addEventListener('click', () => {
    clearContent();
    loadContact();
});

const clearContent = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
};
