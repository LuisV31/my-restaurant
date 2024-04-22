import createBannerSection from './banner';
import createBottomSection from './visitUs';
import tacoPlateImage from './images/tacoPlate.jpg';

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


const loadHome = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(createBannerSection());
    content.appendChild(createMainSection());
    content.appendChild(createBottomSection());
};
    

export default loadHome;