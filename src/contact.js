import instagramLogoPath from './images/instagram.png';
import facebookLogoPath from './images/facebook.png';
import youTubeLogoPath from './images/youtube.png';

function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear current content

    const header = document.createElementById('h1');
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
}

export default loadContact;