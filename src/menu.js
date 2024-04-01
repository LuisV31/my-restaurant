function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear current content

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Our Menu';

    content.appendChild(menuHeader);
    
}

export default loadMenu;