var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleName + "" + lastName;
    }
    return Student;
}());
//interface Person {
//    firstName : string;
//    lastName : string;
//}
function greeter(person) {
    return "Hello," + person.firstName + "" + person.lastName;
}
var user = new Student("Jame", "M", "User");
document.body.textContent = greeter(user);
