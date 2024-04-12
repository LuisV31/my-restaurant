import instagramLogoPath from './images/instagram.png';
import facebookLogoPath from './images/facebook.png';
import youTubeLogoPath from './images/youtube.png';
import woodBackground from './images/woodBackground.jpg';

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

const loadContact = () => {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear current content

    content.appendChild(createBannerSection());

    const header = document.createElement('h1');
    header.textContent = 'Contact and Follow us';
    content.appendChild(header);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Phone: 773-555-5555 <br> Email: contact@taqueriaDonLuis.com';
    content.appendChild(contactInfo);

    // Create a div for solcial media logos
    const socialMediaDiv = document.createElement('div');
    content.appendChild(socialMediaDiv);

    // Add IG logo
    const instagramLogo = document.createElement('img');
    instagramLogo.src = instagramLogoPath;
    instagramLogo.alt = 'Follow us on Instagram';
    socialMediaDiv.appendChild(instagramLogo);

    // Add the Facebook logo
    const facebookLogo = document.createElement('img');
    facebookLogo.src = facebookLogoPath;
    facebookLogo.alt = 'Follow us on Facebook';
    socialMediaDiv.appendChild(facebookLogo);

    // Add the YouTube logo
    const youTubeLogo = document.createElement('img');
    youTubeLogo.src = youTubeLogoPath;
    youTubeLogo.alt = 'Follow us on YouTube';
    socialMediaDiv.appendChild(youTubeLogo);
};

export default loadContact;