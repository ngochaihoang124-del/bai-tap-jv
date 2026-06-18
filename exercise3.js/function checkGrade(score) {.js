function checkGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else {
        return 'F';
    }
}
console.log(checkGrade(85));
console.log(checkGrade(75)); 
console.log(checkGrade(65));
console.log(checkGrade(55)); 