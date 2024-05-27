//You have a friend called getUserData, who's tasked with fetching user information for you. But, like any good friend, they're a bit unpredictable with their timing. 
//So, you ask them to let you know when they're back with the data, and you'll figure out what to do with it.

// Function to simulate fetching user data asynchronously
	function getUserData(userId, callback) {
  	// Simulate an asynchronous operation (e.g., fetching data from a server)
 	 setTimeout(() => {
    	// Simulated user data
   	 const userData = {
    	  id: userId,
     	 name: "John Doe",
     	 email: "john@example.com"
   	 };
	
   	 // Invoke the callback with the fetched user data
   	 callback(userData);
 	 }, 1000); // Simulate delay of 1 second
	}

	// Callback function to handle the fetched user data
	function handleUserData(userData) {
	  console.log(`User ID: ${userData.id}`);
 	  console.log(`User Name: ${userData.name}`);
  	  console.log(`User Email: ${userData.email}`);
	}

	// Call getUserData and pass the handleUserData function as a callback
	getUserData(123, handleUserData);

/*In this example:

We have a function getUserData that simulates fetching user data asynchronously. 
It takes two parameters: userId (to identify the user whose data to fetch) and callback (the function to execute when the data is fetched).
Inside getUserData, after simulating the asynchronous operation (here, represented by a setTimeout function), when the data is available, we invoke the callback function with the fetched user data.
We define a callback function called handleUserData which simply logs the user's ID, name, and email to the console.
Finally, we call getUserData, passing 123 as the userId and handleUserData as the callback function.

When your friend (getUserData) returns with the user data, they execute your plan (handleUserData) and pass along the fetched data. 
And just like that, you've got the information you needed, thanks to the callback mechanism in JavaScript!*/
