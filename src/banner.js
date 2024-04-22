import woodBackground from './images/woodBackground.jpg';

const createBannerSection = () => {
    const banner = document.createElement('div');
    banner.classList.add('banner-section');

    banner.style.backgroundImage = `url('${woodBackground}')`;
    
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Taqueria Don Luis';
    banner.appendChild(restaurantName);

    // Navigation button container
    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');

    // Home button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home'
    homeButton.setAttribute('data-tab', 'home');

    // Menu button 
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.setAttribute('data-tab', 'menu');

    // Contact button
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact Us';
    contactButton.setAttribute('data-tab', 'contact');

    navContainer.append(homeButton, menuButton, contactButton);
    banner.appendChild(navContainer); // Append the navContainer to the banner
    return banner;
};

export default createBannerSection;