class Student {

    fullName : string;
    constructor(public firstName : string,
                public middleName : string,
                public lastName : string) {

                    this.fullName = firstName + "" + middleName + "" + lastName;

                }

}

//interface Person {

//    firstName : string;
//    lastName : string;

//}

function greeter(person: Student) {

    return "Hello," + person.firstName + "" + person.lastName;

}

let user = new Student("Jame", "M", "User");

document.body.textContent = greeter(user);