console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket= [];

function addItem(newItem){
    basket.push(newItem);
    return true;
}

console.log('Basket is', basket);
console.log('Adding bread to basket', addItem('Bread'));
console.log('Basket is now:', basket);

function listItems() {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}

addItem('Apples');
addItem('Honey Buns');
console.log('Items in basket:');
listItems();

function empty() {
    basket.splice(0, basket.length);
}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
