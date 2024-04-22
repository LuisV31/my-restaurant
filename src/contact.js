import createBannerSection from './banner';
import createBottomSection from './visitUs';
import instagramLogoPath from './images/instagram.png';
import facebookLogoPath from './images/facebook.png';
import youTubeLogoPath from './images/youtube.png';

const loadContact = () => {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear current content
    content.appendChild(createBannerSection());

    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-section';

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact and Follow us';
    contactHeader.className = 'contact-header';
    contactContainer.appendChild(contactHeader);

    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.innerHTML = `
        <p>Phone: 773-555-5555</p>
        <p>Email: contact@taqueriaDonLuis.com</p>
        <p>Address: 742 Evergreen Terrace, Springfield</p>
    `;
    contactContainer.appendChild(contactInfo);

    // Create a div for solcial media logos
    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.className = 'social-media-links';
    contactContainer.appendChild(socialMediaDiv);

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

    content.appendChild(contactContainer);
    content.appendChild(createBottomSection());
};

export default loadContact;