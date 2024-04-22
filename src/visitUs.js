import logoImage from './images/donLogo.webp';

const createBottomSection = () => {
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

export default createBottomSection;