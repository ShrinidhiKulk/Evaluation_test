/*Absolutely! The filter() method in JavaScript is like a friendly bouncer at a club who only lets in certain people based on a criteria.
Similarly, it goes through each element of an array, checks if it meets a condition defined by a function, and creates a new array with only the elements that pass the test. 
For instance, if you have an array [1, 2, 3, 4, 5] and you want to keep only the even numbers.*/

	const originalArray = [1, 2, 3, 4, 5];
	const evenNumbersArray = originalArray.filter(number => number % 2 === 0);
	console.log(evenNumbersArray); // Output: [2, 4]

//Here, number => number % 2 === 0 is a function that checks if a number is even (returns true) or not (returns false), 
//and filter() uses this function to create a new array containing only the even numbers from the original array.
