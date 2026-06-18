function findMax(numbers) {
    if (numbers.length === 0) return undefined;
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMax([45, 23, 89, 12, 67])); 
console.log(findMax([100, 50, 200]));      
console.log(findMax([1, 2, 3]));         