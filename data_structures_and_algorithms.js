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