import createBannerSection from "./banner";
import createBottomSection from "./visitUs";
import paperBackgroundImage from './images/paperbackground.webp';
import menuBackground from './images/menu-background.webp'

// Menu data structure 
const menuItems = {
    tacos: [
        { name: 'Prime Steak', price: 7.10 },
        { name: 'Carne Asada', price: 4.20 },
        { name: 'Pork Al Pastor', price: 4.20 },
    ],
    drinks: [
        { name: 'Limon'},
        { name: 'Jamaica'},
        { name: 'Horchata'},
    ],
    sides: [
        { name: 'Frijoles/Beans'},
        { name: 'Arroz/Spanish Rice'},
        { name: 'Tortilla Chips & Salsa'},
    ],
};

// Helper function to create a menu item
const createMenuItemWithPrices = (itemName, price) => {
    const item = document.createElement('p');
    item.textContent = `${itemName} - $${price.toFixed(2)}`;
    return item;
};

// Helper function to create a menu item w/o prices
const createMenuItem = (itemName) => {
    const item = document.createElement('p');
    item.textContent = itemName;
    return item;
};

// Helper function to create menu section
const createMenuSection = (sectionTitle, items) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = `${sectionTitle.toLowerCase()}`;

    const header = document.createElement('h2');
    header.textContent = sectionTitle;
    sectionDiv.appendChild(header);

    if (sectionTitle === 'Sides') {
        const sidePrices = document.createElement('p');
        sidePrices.className = 'side-prices';
        sidePrices.textContent = '$3.00 per side';
        sectionDiv.appendChild(sidePrices);
    } else if (sectionTitle === 'Drinks') {
        const drinkPrices = document.createElement('p');
        drinkPrices.className = 'side-prices'
        drinkPrices.textContent = 'Small: $3.00 | Large: $5.00'
        sectionDiv.appendChild(drinkPrices);
    }

    items.forEach(item => {
        if (item.price) {
            sectionDiv.appendChild(createMenuItemWithPrices(item.name, item.price));
        } else {
            sectionDiv.appendChild(createMenuItem(item.name));
        }
    });

    return sectionDiv;
};

// Main function to load the menu
const loadMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content    
    
    content.appendChild(createBannerSection());

    const menuBackgroundWrapper = document.createElement('div');
    menuBackgroundWrapper.className = 'menu-background-wrapper';
    menuBackgroundWrapper.style.backgroundImage = `url('${menuBackground}')`;

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-section';
    menuContainer.style.backgroundImage = `url('${paperBackgroundImage}')`;

    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Our Menu';
    menuHeader.className = 'menu-header';
    menuContainer.appendChild(menuHeader);
    
    // Append sections for Tacos, Sides, and Drinks
    menuContainer.appendChild(createMenuSection('Tacos', menuItems.tacos));
    menuContainer.appendChild(createMenuSection('Sides',menuItems.sides));
    menuContainer.appendChild(createMenuSection('Drinks', menuItems.drinks));

    menuBackgroundWrapper.appendChild(menuContainer);

    // Append all sections to the content div
    content.appendChild(menuBackgroundWrapper);

    content.appendChild(createBottomSection());
};

export default loadMenu;



 
