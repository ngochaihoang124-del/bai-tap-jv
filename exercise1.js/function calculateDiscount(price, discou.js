function calculateDiscount(price, discountPercent) {
    let finalPrice = price - (price * (discountPercent / 100));
    return finalPrice;
}
console.log(calculateDiscount(100, 20));  
console.log(calculateDiscount(500, 10));  
console.log(calculateDiscount(1000, 5));  