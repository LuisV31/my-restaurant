import woodBorderImage from './images/woodBorder.jpg';
import tacoPlateImage from './images/tacoPlate.jpg';
import woodBackground from './images/woodBackground.jpg';
import logoImage from './images/donLogo.webp';

const createBannerSection = () => {
    const banner = document.createElement('div');
    banner.classList.add('banner-section');

    banner.style.backgroundImage = `url('${woodBackground}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundRepeat = 'no-repeat';

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
    navContainer.appendChild(homeButton);

    // Menu button 
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.setAttribute('data-tab', 'menu');
    navContainer.appendChild(menuButton);

    // Contact button
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact Us';
    contactButton.setAttribute('data-tab', 'contact');
    navContainer.appendChild(contactButton);

    banner.appendChild(navContainer); // Append the navContainer to the banner

    return banner;
};

const createMainSection = () => {
    const main = document.createElement('div');
    main.classList.add('main-section');

    // main.style.border = '10px solid transparent';
    // main.style.borderImage = `url('${woodBorderImage}') 30 round`;


    main.style.backgroundImage = `url('${tacoPlateImage}')`;

    const intro = document.createElement('p');
    intro.textContent = 'Welcome to our taqueria! We use the best local ingrediants to make your food fresh daily!';    
    main.appendChild(intro);
    
    return main;
};

const createVisitUsSection = () => {
    const visitUs = document.createElement('div');
    visitUs.classList.add('visitUs-section');

    const logo = document.createElement('img');
    logo.src = logoImage;
    logo.classList.add('logo');
    logo.alt = 'Taqueria Dont Luis Logo';
    visitUs.appendChild(logo);

    const header = document.createElement('h2');
    header.textContent = 'Come join us!';
    visitUs.appendChild(header);

    const address = document.createElement('address');
    address.textContent = '742 Evergreen Terrace, Chicago, CO 60420';
    visitUs.appendChild(address);

    return visitUs;
};

const loadHome = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList.add('home-container');

    content.appendChild(createBannerSection());
    content.appendChild(createMainSection());
    content.appendChild(createVisitUsSection());
};
    

export default loadHome;