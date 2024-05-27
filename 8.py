num = int(input("Enter a non-negative integer: "))
factorial = 1

# Check if the number is negative
if num < 0:
    print("Factorial is not defined for negative numbers.")
elif num == 0:
    print("Factorial of 0 is 1.")
else:
    # Calculate factorial iteratively
    for i in range(2, num + 1):
        factorial *= i
    print(f"The factorial of {num} is {factorial}.")
#This code first asks the user for a non-negative integer. 
#Then, it checks if the number is negative and prints a message if it is.
#If the number is zero, it prints that the factorial of 0 is 1. 
#Otherwise, it calculates the factorial by multiplying numbers from 1 to the input number using a loop and prints the result.
