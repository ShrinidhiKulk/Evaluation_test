function reverseString(str) {
    let left = 0;
    let right = str.length - 1;
    let strArray = str.split(''); 
	
    while (left < right) {
        // Swap characters at left and right pointers
        let temp = strArray[left];
        strArray[left] = strArray[right];
        strArray[right] = temp;
        
        // Move pointers inward
        left++;
        right--;
    }

    // Join array elements to form the reversed string
    return strArray.join('');
}

let originalString = 'Hello, World!';
let reversedString = reverseString(originalString);
console.log(reversedString);
