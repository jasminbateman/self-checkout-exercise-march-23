const {catalogue} = require('./data/data.js');
let basket = [];

function scanBarcode(inputBarcode){
    if(inputBarcode) {
        return catalogue.find(element => element.barcode === inputBarcode)
        // matching object
    } else {
        return "Not found.";
    }
};

function addItem(item, basket){
    basket.push(item);
}

function totalPrice(basket){
    return basket.reduce((acc, curr) => {
        return acc + curr.price
    }, 0)
}

function removeItem(basket, item){
    const index = basket.indexOf(item)
    basket.splice(index, 1);
}

module.exports = {scanBarcode, basket, addItem, totalPrice, removeItem};