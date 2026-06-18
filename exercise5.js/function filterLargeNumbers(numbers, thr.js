function filterLargeNumbers(numbers, threshold) {
    return numbers.filter(function(num) {
        return num > threshold;
    });
}
console.log(filterLargeNumbers([10, 25, 5, 40, 15], 20));  
console.log(filterLargeNumbers([100, 200, 300], 150));     