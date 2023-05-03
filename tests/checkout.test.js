// 1- As a user, I would like to be able to scan an item using barcode 
//         so its details can be found from products list (test data).

// 2 - As a user, I would like to be able to add an item to my basket.

// 3 - As a user, I would like to be able to see the total price of all items in my basket.

// 4 - As a user, I would like to be able to remove an item from my basket.
const { scanBarcode, basket, addItem, totalPrice, removeItem } = require("../checkout");
const { orange } = require("../data/data.js")

describe("scanBarcode", () => {
    it("find product details in catalogue using barcode", () => {
        expect(scanBarcode(orange.barcode)).toBe(orange);
    })

    it("adds an item to the basket", () => {
        expect(basket.length).toBe(0);
        addItem(orange, basket);
        expect(basket.length).toBe(1);
        expect(basket[0]).toBe(orange);
    })

    it("displays total price", () => {
        expect(totalPrice(basket)).toBe(7);
    })

    it("removes an item from the basket", () => {
        removeItem(basket, orange);
        expect(basket.length).toBe(0);
        expect(totalPrice(basket)).toBe(0);
    })
});