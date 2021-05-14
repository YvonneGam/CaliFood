let starter = [{
    'name': 'Chilli Cheese Nachos',
    'info': 'blablaba',
    'price': 5.90,
    'img': 'img/nachos-pexels-photo-1200354.jpeg',
    'amount': 1,
    'type': 'starter'
}, {
    'name': 'Clam Chowder',
    'info': 'blablaba',
    'price': 7.90,
    'img': 'img/clamchowder_pexels-photo-3296680.jpeg',
    'amount': 1,
    'type': 'starter'
}, {
    'name': 'Mini Burger',
    'info': '3 Miniburger, etc etc',
    'price': 7.50,
    'img': 'img/pexels-photo-1841108.jpeg',
    'amount': 1,
    'type': 'starter'
}, {
    'name': 'Süßkartoffel Fries',
    'info': 'mit Guacamole, Mango-Senf-Soße und hausgemachter Aioli',
    'price': 5.50,
    'img': 'img/süßkartoffel_pexels-photo-1893555.jpeg',
    'amount': 1,
    'type': 'starter'
}
];

let maincourse = [{
    'name': 'San Francisco Bowl',
    'info': 'mit Lachs, Gurken, Mi-Nudeln, Granatapfelkernen, Guacamole',
    'price': 10.50,
    'img': 'img/bowl_pexels-photo-7594049.jpeg',
    'amount': 1,
    'type': 'maincourse'
}, {
    'name': 'San Diego Bowl',
    'info': 'Guacamole, Mini-Burritos, Nachos, Salsa, Chilli sin Carne',
    'price': 11.50,
    'img': 'img/sanfranciso-bowl_pexels-photo-6546181.jpeg',
    'amount': 1,
    'type': 'maincourse'
}, {
    'name': 'Hollywood-Salat',
    'info': 'Gemischter Salat mit Tofu-Streifen und Sesamdressing',
    'price': 10.90,
    'img': 'img/hollywood-salat_food-salad-healthy-lunch.jpg',
    'amount': 1,
    'type': 'maincourse'
}, {
    'name': 'Chicken Ceasar Salad',
    'info': 'Gemischter Salat mit Tofu-Streifen und Sesamdressing',
    'price': 12.90,
    'img': 'img/ceasar-salad_pexels-photo-5490900.jpeg',
    'amount': 1,
    'type': 'maincourse'
}, {
    'name': 'Monterey Club-Sandwich',
    'info': 'Pastrami, 180g Beef-Patty, Salat, Tomate, Cheddar, BBQ-Sauce, Onion-Rings',
    'price': 13.40,
    'img': 'img/monterey_pexels-photo-5634630.jpeg',
    'amount': 1,
    'type': 'maincourse'
}, {
    'name': 'Cowboy-Burger',
    'info': '250 g Beef-Patty, Cheddar, BBQ-Sauce, Onion-Rings, Bacon, Aioli, Spiegelei',
    'price': 14.20,
    'img': 'img/doppelburger_pexels-photo-2983098.jpeg',
    'amount': 1,
    'type': 'maincourse'
}, {
    'name': 'Yosemite-Sandwich',
    'info': 'Hummus, Falafel, Granatapfelkerne, Joghurt-Soße, Jalapenos, Paprika, Minze',
    'price': 11.50,
    'img': 'img/pexels-photo-6546029.jpeg',
    'amount': 1,
    'type': 'maincourse'
}
];


let dessert = [{
    'name': 'Pancakes',
    'info': 'mit Beerentopping',
    'price': 6.50,
    'img': 'img/pexels-photo-376464.jpeg',
    'amount': 1,
    'type': 'dessert'
}, {
    'name': 'Macarons',
    'info': '4x Schoko-Macarons mit Vanillefüllung',
    'price': 5.50,
    'img': 'img/pexels-photo-2226977.jpeg',
    'amount': 1,
    'type': 'dessert'
}, {
    'name': 'Cheesecake',
    'info': 'mit Pecanuss-Karamell-Topping',
    'price': 4.50,
    'img': 'img/pexels-photo-3071821.jpeg',
    'amount': 1,
    'type': 'dessert'
}, {
    'name': 'Brownie',
    'info': 'mit Vanilleeis',
    'price': 4.90,
    'img': 'img/pexels-photo-683499.jpeg',
    'amount': 1,
    'type': 'dessert'
}
];

//every order is pushed to this array
let cart = [];

let deliverycosts = 5.00;
let freedelivery = 0.00;

let nodiscount = 0.00;

let discount = 2.00;