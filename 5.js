/*In JavaScript, while there's no direct support for keyword arguments, you can achieve similar functionality by passing an object with named properties and destructuring it in the function parameter. 
This allows for flexibility in argument order and enables default values for optional parameters, simulating keyword arguments. 
As for positional arguments, you can access them using the arguments object or by defining parameters directly in the function signature.

Here's a concise example:*/

		function greet({ name = "Guest", age = 18 }) {
  		 console.log(`Hello, ${name}! You are ${age} years old.`);
		}

		const person = { name: "Charlie", age: 30 };
		greet(person); 
		// Output: Hello, Charlie! You are 30 years old.

	
