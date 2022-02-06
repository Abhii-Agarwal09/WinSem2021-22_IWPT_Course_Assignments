// Question 2

// Selecting all the table fields that display total amount
const product1TotalInput = document.getElementById('p-1');
const product2TotalInput = document.getElementById('p-2');
const product3TotalInput = document.getElementById('p-3');
const product4TotalInput = document.getElementById('p-4');
const product5TotalInput = document.getElementById('p-5');

// Initialising all product total sales with 0
let product1TotalPrice = 0;
let product2TotalPrice = 0;
let product3TotalPrice = 0;
let product4TotalPrice = 0;
let product5TotalPrice = 0;

// Runing the loop
while (true) {
    // Taking input of product number
    const productNumber = Number(prompt('Enter Product number'));
    // If product number is -1, then update details in table and exit the loop
    if (productNumber === -1) {
        // Setting the inner text of table fields
        product1TotalInput.innerText = `$ ${product1TotalPrice}`;
        product2TotalInput.innerText = `$ ${product2TotalPrice}`;
        product3TotalInput.innerText = `$ ${product3TotalPrice}`;
        product4TotalInput.innerText = `$ ${product4TotalPrice}`;
        product5TotalInput.innerText = `$ ${product5TotalPrice}`;
        break;
    }
    // Taking input of quantity of a particular input
    const quantity = Number(prompt('Enter quantity'));

    // Switch statement to calculate the total price of product
    switch (productNumber) {
        case 1:
            product1TotalPrice += quantity * 2.98;
            break;
        case 2:
            product2TotalPrice += quantity * 4.5;
            break;
        case 3:
            product3TotalPrice += quantity * 9.98;
            break;
        case 4:
            product4TotalPrice += quantity * 4.49;
            break;
        case 5:
            product5TotalPrice += quantity * 6.87;
            break;
        default:
            break;
    }
}
