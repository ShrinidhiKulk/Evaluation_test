/*Think of map() like a little helper that goes through each item in your array, does something to it, and gives you back a new array with the results. 
It's like having a bunch of blocks (your array elements), running each block through a machine (the map() method), and getting shiny new blocks (the transformed array) out on the other side.

Let's take your example:*/

	const originalArray = [1, 2, 3, 4, 5];

	// Now, let's use map() to square each number in the original array
	const squaredArray = originalArray.map(function(number) {
  		return number * number;
		});

	console.log(squaredArray); // Output: [1, 4, 9, 16, 25]

//Here's how: const squaredArray = [1, 2, 3, 4, 5].map(number => number * number);.
 //This would give you a new array [1, 4, 9, 16, 25], where each element is the square of the corresponding element in the original array.
