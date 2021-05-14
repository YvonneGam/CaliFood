
/**
 * This funciton loads all items onload at order.html
 */
function openMenu() { //Menü wird beim Öffnen der Seite geladen
    loadItem(starter, 'starter');
    loadItem(maincourse, 'maincourse');
    loadItem(dessert, 'dessert');
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
        <div class="plus" onclick="addToBasket('${id}', ${i}), calcPayPrice(${i})"> + </div>
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
    setTimeout(function () {
        document.getElementById('basketIcon').classList.remove('animation-basket');
    }, 900); //animation is removed every 900ms, so it can animate again
}




// Shopping Cart

//Hier wird geprüft welches das jeweilige Produkt ist
function checkBasket(type, index) {
    let item;
    if (type == 'starter') {
        item = starter[index]; // Z.b. Cheesebuger wenn type=burger && index = 0
    }
    if (type == 'maincourse') {
        item = maincourse[index];
    }
    if (type == 'dessert') {
        item = dessert[index];
    }
}



/**
 * Item is pushed to array when clicking on the "plus" &checks if the item already exist in the basket
 */
function addToBasket(type, index, i) {
    checkBasket();
    if (type == 'starter' && !cart.includes(starter[index])) {
        cart.push(starter[index]);
        showNewElement();
    }
    else if (type == 'starter' && cart.includes(starter[index])) {
        /* increaseAmount(type, index); */
        alert('Produkt ist bereits im Warenkorb, du kannst die Anzahl direkt im Warenkorb erhöhen');
    }
    if (type == 'maincourse' && !cart.includes(maincourse[index])) {
        cart.push(maincourse[index]);
        showNewElement();
    }
    else if (type == 'maincourse' && cart.includes(maincourse[index])) {
        /*    increaseAmount(type, index, i); */
        alert('Produkt ist bereits im Warenkorb, du kannst die Anzahl direkt im Warenkorb erhöhen');
    }
    if (type == 'dessert' && !cart.includes(dessert[index])) {
        cart.push(dessert[index]);
        showNewElement();
    }
    else if (type == 'dessert' && cart.includes(dessert[index])) {
        /*    increaseAmount(type, index); */
        alert('Produkt ist bereits im Warenkorb, du kannst die Anzahl direkt im Warenkorb erhöhen');
    }
    calcPayPrice();
    updateBasket();
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
    
<div class="basket-style1">
    <div class="basket-amount"> ${cartItem['amount']}x </div>
    <div class="basket-names"> ${cartItem['name']} </div>
</div>

<div class="basket-style2">
    <div class="plusminus-container">
    <button onclick="lessAmount('${cartItem['type']}', ${index})" class="plusminus" data-min="0"> - </button>
    <button onclick="increaseAmount('${cartItem['type']}', ${index})" class="plusminus"> + </button>
    </div>
    <img class="dustbin" onclick="deleteDish()" src="img/dustbin.svg">
    <div class="basket-price"> ${calculatePrice(cartItem)} € </div> 

</div>
`;
    }
    calcSale();
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
    calcPayPrice();
    updateBasket();
}

/**
 * This funtion substracts the amount of the product when clicking on the "+" on the shopping basket
 * @param {*} type 
 * @param {*} i 
 */
function lessAmount(type, i) {
    if (cart[i]['amount'] > 1) {
        cart[i]['amount']--;
        console.log(cart[i]['amount']);
        calcPayPrice();
        updateBasket();
    } else {
        deleteDish(i)
    };
}

/**
 * This function deletes the dish from the basket
 * @param {} type 
 * @param {*} index 
 */
function deleteDish(index) {
    cart.splice([index], 1);
    updateBasket();
    checkBasketInput();
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

/**
 * This function calculates the Sum & Totalprice
 */
function calcPayPrice() {
    let result = calcSumPrice();
    calcTotalPrice(result);
    console.log('result', result);
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
    return summe;
}



/**
 * This function calculates the discount
 */
function calcSale() {
    let result = calcSumPrice();
    let discount = 0;
    let promotion = document.getElementById('promotioncode').value;
    console.log('promotion:', promotion);

    if (promotion == 'food-10') {
        discount = result * 0.10;
        console.log('discount:', discount);
        document.getElementById('discount').innerHTML = `-${discount.toFixed(2).replace(".", ",")} €`;
    } else {
        document.getElementById('discount').innerHTML = `${discount.toFixed(2).replace(".", ",")} €`;
    }
    return discount;
}



/**
 * This function calculates the total price including delivery costs & discount
 */
function calcTotalPrice(summe, discount) {
    let total = 0;
    discount = calcSale();

    if (summe >= 20) {
        document.getElementById('deliverycosts').innerHTML = `${freedelivery.toFixed(2).replace(".", ",")} €`; //freedelivery is defined at vriables.js (0€)
        noDeliveryCosts(total, summe, discount);
    } else {
        payDeliveryCosts(total, summe, discount);
    }
}

/**
 * This function calculats the total costs and adds the delivery costs, deliverycosts are defined at vriables.js
 * @param {} total 
 * @param {*} summe 
 * @param {*} discount 
 */
function payDeliveryCosts(total, summe, discount) {
    for (let i = 0; i < cart.length; i++) {
        total = summe + deliverycosts - discount;
        console.log('total', total);
        document.getElementById('totalprice').innerHTML = `${total.toFixed(2).replace(".", ",")} €`;
        document.getElementById('deliverycosts').innerHTML = `${deliverycosts.toFixed(2).replace(".", ",")} €`;
    }
}

/**
 * This function calculates the total costs 
 * @param {} total 
 * @param {*} summe 
 * @param {*} discount 
 */
function noDeliveryCosts(total, summe, discount) {
    for (let i = 0; i < cart.length; i++) {
        total = summe - discount;
        console.log('total ohne lieferkosten', total);
        document.getElementById('totalprice').innerHTML = `${total.toFixed(2).replace(".", ",")} €`;
    }
}