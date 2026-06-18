function findStudent(students, name) {
    return students.includes(name);
}
let students = ["An", "Binh", "Chi", "Dung"];
console.log(findStudent(students, "Chi"));  
console.log(findStudent(students, "Minh")); 
console.log(findStudent(students, "An"));   