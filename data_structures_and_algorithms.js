// Javascript is currently the most popular programming language; the Internet language; Internet browsers understand JS natively w/o installing any plugins

// Choosing the correct data structure, impact the performance of program we are writing

// data structures and algorithms can solve the most common problems efficiently

// javascript available types are numbers, strings, booleans, functions, and objects
// also undefined, null and arrays, dates and regular expressions

// javascript is not a strongly-typed language meaning that you can declare a variable and initialize it with a number and then update it with a string or any other data type
	// assigining a value to a variable that is different from its original type is also not a good practice

	var myVariable = 'global';
	myOtherVariable = 'global';

	function myFunction(){
		var myVariable = 'local';
		return myVariable;
	}

	function myOtherFunction(){
		myOtherVariable = 'local';
		return myOtherVariable;
	}

	console.log(myVariable); // 'global'
	console.log(myFunction()); // 'local'

	// this line will output global because we are referencing the global variable named myOtherVariable that was initialized in the second line of the last example
	console.log(myOtherVariable); // 'global'
	console.log(myOtherFunction()); // 'local'

	// inside the myOtherFunction function, we are referencing the myOtherVarialbe global variable and assigining the value local to it, because we are not declaring the variable internally using the var keyword
	// for this reason, the following line will output local
	console.log(myOtherVariable); // 'local'


	// global variables in JS are evil!!!

	// the typeof operator returns the type of the variable or expression
	var num = 1;
	console.log('typeof num: ', typeof num); // number
	console.log('typeof Packt: ', typeof 'Packt'); // string
	console.log('typeof true: ', typeof true); // boolean
	console.log('typeof [1,2,3]: ', typeof [1,2,3]); // object
	console.log('typeof {name: John}: ', typeof {name: 'John'}); // object

	// delete operator deletes a property from an object

	var myObj = {name: 'John', age: 21};
	console.log(myObj);
	delete myObj.age;
	console.log(myObj);


	// Truthy and Falsey

	function testTruthy(val) {
		return val ? console.log('truthy') : console.log('falsey');
	}

	testTruthy(true);
	testTruthy(false);
	testTruthy(new Boolean(false)); // true.... an object is always true
	// you are declaring a new boolean object

	testTruthy(''); // false
	testTruthy('Packt'); // true
	testTruthy(new String('')); // true (object is always true)
	testTruthy(1); // true
	testTruthy(-1); // true
	testTruthy(NaN); // false
	testTruthy(new Number(NaN)); // true (object is always true!!!)
	testTruthy({}); // true (object is always true)

	var obj = {name: 'John'};
	testTruthy(obj); // true
	testTruthy(obj.name); // true
	testTruthy(obj.age); // false, the property age does not exist


	var num = 1;
	if (num === 1) {
		console.log("num is equal to 1!");
	} else {
		console.log("num is not equal to 1, the value of num is " + num);
	}


	// ternary operator
	console.log("num, with ternary operator:");
	(num === 1) ? num-- : num++;
	console.log(num);

	var month = 5;

	switch(month) {
		case 1:
			console.log("January");
			break;
		case 2:
			console.log("February");
			break;
		case 3: 
			console.log("March");
			break;
		default: 
			console.log("Month is not January, February, or March!");
	}


	// loops: loop counter, usually an assigned numeric value, then the variable is compared against another value and the script inside the for loop is executed while this condition is true; and then the numeric value is increased or decreased

	for (var i = 0; i < 11; i++) {
		console.log(i);
		console.log("in the loop!");
	}


// super basic review

var num = 1;
if (num === 1) {
	console.log("num is equal to 1 in type and value");
}


// functions with arguments

function output(text){
	console.log(text);
}

output('Hola!');
// in this case, only the first argument is used by the function and the second one is ignored
output('Wilkommen, Bienvenue, Welcome!', 'Hello!');


// returns
function sum(num1, num2) {
	return num1 + num2;
}

var result = sum(1, 2);
output(result);


function Book(title, pages, isbn){
	this.title = title;
	this.pages = pages;
	this.isbn = isbn;
}

var book = new Book('title', 'pag', 'isbn');
console.log(book.title);
book.title = 'Generation P';
book.isbn = 'isbnisbnisbn1234'
// updates the value of the book title
console.log(book.title); // outputs the updated value
console.log(book.isbn);

Book.prototype.printTitle = function(){
	console.log(this.title + " yo");
};
book.printTitle();


function Book(title, pages, isbn) {
	this.title = title;
	this.pages = pages;
	this.isbn = isbn;
	this.printIsbn = function(){
		console.log(this.isbn);
	}
}

var new_book = new Book('new title', 768, 'isbnisbnisbn1234');
new_book.printIsbn();


var daysOfWeek = new Array();
var daysOfWeek = new Array(7); // specify length of array
var daysOfWeek = new Array('Sunday', 'Monday', 'etc'); // passing the array elements directly to its constructor

var averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;

for (var i = 0; i < averageTemp.length; i++) {
	console.log('Avg temp in the ' + i + ' month is ' +averageTemp[i]);
}


// say we want to find out the first 20 numbers of the Fibonacci sequence

// the first two numbers of the Fibonacci sequence are 
// either 1 and 1 or 0 and 1 or 1 and 2 depending on the chosen starting point of the sequesnce
// and each subsequent number is the sum of the previous two

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 20; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for (var i = 1; i < fibonacci.length; i++) {
	console.log(fibonacci[i]);
}
