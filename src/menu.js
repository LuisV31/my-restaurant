import woodBackground from './images/woodBackground.jpg';

// Menu data structure 
const menuItems = {
    tacos: [
        { name: 'Carne Asada', price: 4.20 },
        { name: 'Pork Al Pastor', price: 4.20 },
        { name: 'Prime Steak', price: 7.10 },
    ],
    drinks: [
        { name: 'Horchata', sizes: { small: 3.00, large: 5.00 } },
        { name: 'Limon', sizes: { small: 3.00, large: 5.00 } },
        { name: 'Jamaica', sizes: { small: 3.00, large: 5.00 } },
    ],
    sides: [
        { name: 'Arroz/Spanish Rice', price: 3.00 },
        { name: 'Frijoles/Beans', price: 3.00 },
    ],
};

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

// Helper function to create a menu item
const createMenuItem = (itemName, price) => {
    const item = document.createElement('p');
    item.textContent = `${itemName} - $${price.toFixed(2)}`;
    return item;
};

// Helper function to create a menu item w/sizes
const createMenuItemWithSizes = (itemName, sizes) => {
    const item = document.createElement('p');
    item.textContent = `${itemName} - Sm: $${sizes.small.toFixed(2)} Lrg: $${sizes.large.toFixed(2)}`;
    return item;
};

// Helper function to create menu section
const createMenuSection = (sectionTitle, items) => {
    const sectionDiv = document.createElement('div');
    const header = document.createElement('h2');
    header.textContent = sectionTitle;
    sectionDiv.appendChild(header);

    items.forEach((item) => {
        if (item.price) {
            sectionDiv.appendChild(createMenuItem(item.name, item.price));
        } else {
            sectionDiv.appendChild(createMenuItemWithSizes(item.name, item.sizes));
        }
    });

    return sectionDiv;
};

// Main function to load the menu
const loadMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    content.appendChild(createBannerSection());
    
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Our Menu';
    content.appendChild(menuHeader);

    // Create each section of the menu
    const tacoSection = createMenuSection('Tacos', menuItems.tacos);
    const drinkSection = createMenuSection('Drinks', menuItems.drinks);
    const sideSection = createMenuSection('Sides', menuItems.sides);

    // Append all sections to the content div
    
    content.appendChild(tacoSection);
    content.appendChild(drinkSection);
    content.appendChild(sideSection);
};
 
export default loadMenu;