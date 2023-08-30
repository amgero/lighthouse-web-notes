// Object; has properties

/*
const book = {
  title: "Title of Book 1",
  authors: ["Author A", "Author B", "Author C"],
  numOfPages: 365,
  isPublished: true,
  printHello: function(name){
  console.log("Hello there", name);
  },
    volumeInfo: {
        datePublished: '10-20-2015',
        numPrintedCopies: 100000
    }
};
*/

let students = [{ //array of objects
    firstName: "Alex",
    lastName: "Miller",
    age: 25,
}, {
    firstName: "Martha",
    lastName: "Smith",
    age: 23
}];

// function nameOfTheFunction(optional parameters go here) {code here}

/*
function printHello(name) {
  console.log("Hello there", name);
};
*/


/* console.log(book):
console.log("Authors", book.authors);
console.log("Authors", book['authors']);

let title = 'title';
console.log("Title", book[title]);
console.log(book['authors'][2]); // this can help you find what you're looking for inside an array'
console.log(book.authors[2]); // . dot method

book.printHello("Amelie");
book.printHello("Kaite");


console.log(book.volumeInfo.datePublished);
console.log(book.volumeInfo.numPrintedCopies);
*/

console.log(students[0].firstName);