/**
 * This funciton loads all items onload at order.html
 */
function openMenu() { //Menü wird beim Öffnen der Seite geladen
    loadItem(starter, 'starter');
    loadItem(maincourse, 'maincourse');
}


/**
 * This function loads all items of each category
 * @param {*} items 
 * @param {*} id 
 */
function loadItem(items, id) {
    for (let i = 0; i < items.length; i++) {
        console.log(items);

        document.getElementById(id).innerHTML +=
            `
        <div class="food-selection" id="starter-selection">

        <div class="image-container">
        <img class="food-img" src="${items[i]['img']}">
        <div class="plus" onclick="addToBasket('${id}', ${i}), calcSumPrice(${i}), calcTotalPrice(${i}), showNewElement(${i})"> + </div>
        </div>

        <h3>${items[i]['name']}</h3>
        <div class="info-price">
            <div class="infotext-food"> ${items[i]['info']}</div>
            <div class="price-menu">${items[i]['price'].toFixed(2).replace(".", ",")} €</div>
        </div>
    `
    }
}

/**
 * This function visualized if an item is pushed to the basket
 */
function showNewElement() {
    document.getElementById('basketIcon').classList.add('animation-basket');
    console.log('Es ist jetzt ein neues Element im Warenkorb');
}


// Shopping Cart

//Hier wird geprüft ob das Produkt bereits im Warenkorb ist
function checkBasket(type, index) {
    let item;
    if (type == 'starter') {
        item = starter[index]; // Z.b. Cheesebuger wenn type=burger && index = 0
    }
    if (type == 'maincourse') {
        item = maincourse[index];
    }
    /*     checkBasketExist(); */
}

/**
 * This funciton checks if the item is already in the basket
 * @param {*} type 
 * @param {*} index 
 * @param {*} item
 */
/* function checkBasketExist(type, index, item) {
    let itemInCart = cart.find(e => e.name == item.name);
    console.log(itemInCart);
    if (itemInCart) {
        alert('Das Gericht ist bereits im Warenkorb, du kannst die Anzahl direkt im Warenkorb erhöhen.');
    } else { //if the item isn´t already in basket, its added here
        addToBasket(type, index);
    }
} */

/**
 * Item is pushed to array when clicking on the "plus"
 */

function addToBasket(type, index) {
    if (type == 'starter') {
        cart.push(starter[index]);
    }
    if (type == 'maincourse') {
        cart.push(maincourse[index]);
    }
    updateBasket();
    checkBasket();
}


/**
 * This function updates the basket after every change on the basket
 */
function updateBasket() {
    document.getElementById('currentShoppingCart').innerHTML = '';

    for (let index = 0; index < cart.length; index++) {
        let cartItem = cart[index];
        document.getElementById('currentShoppingCart').innerHTML += `
    <div class="delivery-items">
    
    <div class="basket-names"> ${cartItem['name']} </div>
    <div class="plusminus-container">
    <button onclick="lessAmount('${cartItem['type']}', ${index})" class="plusminus" data-min="0"> - </button>
    <button onclick="increaseAmount('${cartItem['type']}', ${index})" class="plusminus"> + </button>
    </div>
    <div class="basket-price"> ${calculatePrice(cartItem)} € </div> 

    </div>`;
    }
}


/**
 * This function removes the class "d-none", so the basket is visible
 */
function openShoppingcart() {
    document.getElementById('shoppingCart').classList.remove('d-none');
    checkBasketInput();
}

/**
 * This function adds the class "d-none", so the basket isn´t visible
 */
function closeShoppingcart() {
    document.getElementById('shoppingCart').classList.add('d-none');
}

/**
 * This function checks if the basket is empty 
 */
function checkBasketInput() {
    if (cart == 0) {
        document.getElementById('currentShoppingCart').innerHTML =
            ' <div class="empty-cart">Dein Warenkorb ist noch leer. <br> Bitte füge zuerst noch ein Gericht deiner Wahl hinzu. </div>'
        document.getElementById('priceContainer').classList.add('d-none'); //price is hidden if the basket is empty
    } else {
        document.getElementById('priceContainer').classList.remove('d-none'); //price is shown if the basket is filled with minimum one item
    }
}


/**
 * This funtion increases the amount of the product when clicking on the "+" on the shopping basket
 * @param {*} type 
 * @param {*} i 
 */
function increaseAmount(type, i) {
    cart[i]['amount']++;
    console.log(cart[i]['amount']);
    calcSumPrice();
    freeDelivery();
    calcTotalPrice();
    updateBasket();
}

/**
 * This funtion substracts the amount of the product when clicking on the "+" on the shopping basket
 * @param {*} type 
 * @param {*} i 
 */
function lessAmount(type, i) {
    cart[i]['amount']--;
    console.log(cart[i]['amount']);
    calcPayPrice();
    calcTotalPrice();
    updateBasket();
    freeDelivery();
}

/**This function calculates the price based on the selected amount
 * 
 * @param {*} cartItem 
 * @returns 
 */
function calculatePrice(cartItem) {
    return Math.abs(cartItem['amount'] *
        cartItem['price'] * 100 / 100).toFixed(2).replace(".", ",");
}


function calcPayPrice() {
    calcSumPrice();
    calcTotalPrice();
    updateBasket();
}


/**
 * This function calculates the sum price
 */
function calcSumPrice() {
    let summe = 0;
    for (i = 0; i < cart.length; i++) {
        summe += cart[i]['price'] * cart[i]['amount'];
        console.log('summe', summe);
    }
    document.getElementById('sum').innerHTML = `${summe.toFixed(2).replace(".", ",")} €`;
}


/**
 * Checks if the delivery is for free, when the sum is more than 20€
 * @param {*} summe 
 */
function freeDelivery(summe) {
    if (summe >= 20) {
        document.getElementById('deliverycosts').innerHTML = '0';
        console.log('free');
    }
}

/**
 * This function calculates the discount
 * @param {*} summe 
 */
function calcSale(summe) {
    let discount = 0;
    let promotion = document.getElementById('promotioncode').value;
    console.log('promotion:', promotion);

    if (promotion == 'food10') {
        discount += summe * 0.10;
        console.log('discount:', discount);
        document.getElementById('discount').innerHTML = `${discount} €`;
    } else {
        disount = summe; 
        document.getElementById('discount').innerHTML = `${discount},00 €`;
    }
}

/**
 * This function calculates the total price including delivery costs
 */
function calcTotalPrice(summe) {
    let total = 0;
    if (summe >= 20) {
        document.getElementById('deliverycosts').innerHTML = 0;
    } else {
        for (let i = 0; i < cart.length; i++) {
            total = summe + 5.00;
            console.log(total);
            document.getElementById('totalprice').innerHTML = `${total.toFixed(2).replace(".", ",")} €`;
        }
    }
}




