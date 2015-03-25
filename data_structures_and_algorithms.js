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
// console.log(book.title);
book.title = 'Generation P';
book.isbn = 'isbnisbnisbn1234'
// updates the value of the book title
// console.log(book.title); // outputs the updated value
// console.log(book.isbn);

Book.prototype.printTitle = function(){
	// console.log(this.title + " yo");
};
book.printTitle();


function Book(title, pages, isbn) {
	this.title = title;
	this.pages = pages;
	this.isbn = isbn;
	this.printIsbn = function(){
		// console.log(this.isbn);
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
	// console.log('Avg temp in the ' + i + ' month is ' +averageTemp[i]);
}


// say we want to find out the first 20 numbers of the Fibonacci sequence

// the first two numbers of the Fibonacci sequence are 
// either 1 and 1 or 0 and 1 or 1 and 2 depending on the chosen starting point of the sequesnce
// and each subsequent number is the sum of the previous two

var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 21; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for (var i = 1; i < fibonacci.length; i++) {
	// console.log(fibonacci[i]);
}

var numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);
numbers[numbers.length] = 10;
console.log(numbers);

numbers.push(11);
console.log(numbers);
numbers.push(12, 13, 14, 9);
console.log(numbers);


// implement unshift without using unshift method
for (var i = numbers.length; i >= 0; i--) {
	// shift the previous element i - 1 to the new position
	numbers[i] = numbers[i-1];
}
numbers[0] = -1;
console.log(numbers);
console.log(numbers.length);

// implement shift without using shift!
for (var i = 0; i < numbers.length; i++) {
	// take an element i, and give its value to the space before it, evenutally overwriting the very first value!
	numbers[i] = numbers[i+1];
	// the length of the array is still the same, meaning that we still have an extra element in our array (with an undefined value)
	//the last time the loop is executed, i+1 is a reference to a position that does not exist
		// (in some languages, the code would throw an exception and we would have to end our loop at numbers.length - 1);
}
// takes care of extra undefined value
numbers.shift();




// day 1 
averageTemp[ 0] = []; 
averageTemp[ 0][ 0] = 72; 
averageTemp[ 0][ 1] = 75; 
averageTemp[ 0][ 2] = 79; 
averageTemp[ 0][ 3] = 79; 
averageTemp[ 0][ 4] = 81; 
averageTemp[ 0][ 5] = 81; 
// day 2 
averageTemp[ 1] = []; 
averageTemp[ 1][ 0] = 81; 
averageTemp[ 1][ 1] = 79; 
averageTemp[ 1][ 2] = 75; 
averageTemp[ 1][ 3] = 75;
averageTemp[ 1][ 4] = 73;
averageTemp[ 1][ 5] = 72;

function printMatrix(myMatrix) {
	// loop through top level
	for (var i = 0; i < myMatrix.length; i++) {
		// loop through next level, so using [i]
		for (var j = 0; j < myMatrix[i].length; j++) {
			console.log(myMatrix[i][j]);
		}
	}
}

printMatrix(averageTemp);

// multidimensional arrays

var matrix3x3x3 = [];

// for (var i = 0; i < 3; i++) {
// 	matrix3x3x3[i] = [];
// 	for (var j = 0; j < 3; j++) {
// 		matrix3x3x3[i][j] = [];
// 		for (var z = 0; z < 3; z++) {
// 			matrix3x3x3[i][j][z] = i+j+z;
// 			console.log(matrix3x3x3);
// 		}
// 	}
// }


// to output the matrix, we can use the following code

// for (var i=0; i < matrix3x3x3.length; i++) {
// 	for (var j=0; j < matrix3x3x3[i].length; j++) {
// 		for (var z=0; z < matrix3x3x3[i][j].length; z++) {
// 			console.log(matrix3x3x3[i][j][z]);
// 		}
// 	}
// }



// join multiple arrays

var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3,-2,-1];
var the_numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(the_numbers);


var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var isEven = function(x) {
	// returns true if x is a multiple of 2
	console.log(x);
	console.log((x % 2 == 0) ? true : false);
	return (x % 2 == 0) ? true : false;
}

numbers.every(isEven); // the first method we will look at is the very method
// the every method will iterate each element of the array until the return of the function is false; in this case, our first element of the numbers array is the number 1. 1 is not a multiple of 2 (it is an odd number), so the isEven function will return false and this will be the only time the function will be executed

numbers.some(isEven); // first element will return false, and the some function will keep looking for true
// second element is Even, so it will return true and the iteration will stop

// numbers.forEach(function(x){
// 	console.log((x%2 == 0));
// });


// js has two other iterator methods that return a new array with a result:
// first is map
var myMap = numbers.map(isEven);

var evenNumbers = numbers.filter(isEven);
console.log("filter the evens ", evenNumbers);

var numbers_reduce = numbers.reduce(function(previous, current, index){
	return previous + current;
});

console.log(numbers_reduce);


numbers.sort(function(a,b){
	return (a-b);
});


var friends = [
	{name: 'John', age: 30},
	{name: 'Ana', age: 20},
	{name: 'Chris', age: 25}
];

function comparePerson(a, b) {
	if (a.age < b.age) {
		return -1;
	}
	if (a.age > b.age) {
		return 1;
	}
	return 0;
}

console.log(friends.sort(comparePerson));

console.log(numbers.indexOf(10)); // yields 9
		console.log(numbers.indexOf(100));
















// STACKS
// push and pop!

function Stack() {
	// properties and methods go here

	// first we need a data structure that will store the elements of the stack. we can use an array to do this
	var items = [];

	this.push = function (element) {
		// adds a newe item or several items to the top of the stack
		items.push(element);
	}

	// reoves the top item from the stack and returns removed element
	this.pop = function(){
		return items.pop();
	}

	this.peek = function(){
		return items[items.length-1];
	} // non destructive look at top element from stack
	// as we are using an array to store the elements internally, we can obtain the last item from an array using length - 1

	this.isEmpty = function(){
		return items.length == 0;
	} // true if stack contains no elements, false if stack size bigger than 0

	this.clear = function(){
		// referring to the global items array
		items = [];
	} // removes all elements of stack
	// you could also call pop until the stack is empty


	this.size = function(){
		return items.length;
	} // return how many elements the stack cnotains; similar to length property of an array

	// herlper method, inspect contents of our stack!
	this.print = function(){
		console.log(items.toString());
	}

}


// USING THE STACK CLASS

var stack = new Stack();
console.log(stack.isEmpty()); // outputs true

// next lets add some elements to our stack we just instantiated

stack.push(5);
stack.push(8);


console.log(stack.peek()); // returns 8

stack.push(11);
console.log(stack.size()); // outputs 3
console.log(stack.isEmpty()); // false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size()); // 2
stack.print(); // 5 and 8


function divideBy2(decNumber) {

	var remStack = new Stack(),
		rem,
		binaryString = '';

	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}

	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}

	return binaryString;
}

// in this code, while the division result is not zero, we get the remainder of the division, the modulous, and push it to the stack
// finally we update the number that will be divided by 2
// js has a numeric data type but it does ot distinguish integers from floating points
// for this reason, we need to use the Math.floor function to obtain only the integer value from the division operations

// finally we pop the elements from the stack until it is empty, concatenating the elements that were removed from the stack into a sring

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));


// generalize converter to any base

function baseConverter(decNumber, base) {

	var remStack = new Stack(),
		rem,
		baseString = '',
		digits = '0123456789ABCDEF';

	while (decNumber > 0) {
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}

	while (!remStack.isEmpty()) {
		baseString += digits[remStack.pop()];
	}

	return baseString;
}


console.log(baseConverter(233, 16));
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
