/* const student = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25
};

for (let key in student){
    console.log(key, student [key]);  //student.key would return undefined because there is no object property of key
    
}


let arrayOfKeys = Object.keys(student);
let arrayOfValues = Object.values(student); //makes an array
console.log(arrayOfKeys);
console.log(arrayOfValues); //array can be less intense to compute
*/

//for this keyword:

const student = {
    firstName: "Alex",
    lastName: "Miller",
    age: 25,
    printStudentInfo: function(){
    console.log(this.firstName, this.lastName, this.age);
  },
    addTwoNumbers: function(num1, num2){
        console.log("The result is", num1 + num2);
        this.printStudentInfo();
    }
};

student.addTwoNumbers(50, 100);

const student2 = {
    firstName: "Martha",
    lastName: "Smith",
    age: 23,
    printStudentInfo: function() {
        console.log(this.firstName, this.lastName, this.age);
    },
    addTwoNumbers: function(num1, num2){
        console.log("The result is", num1 + num2);
        this.printStudentInfo();
    }
}
student.addTwoNumbers(30, 40);
