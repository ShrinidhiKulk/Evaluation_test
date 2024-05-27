def is_leap_year(year):
    # Leap year condition:
    # 1. If the year is evenly divisible by 4,
    # 2. If the year is not evenly divisible by 100, unless it is also evenly divisible by 400.

    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    else:
        return False

# Given year
year = int(input("Enter a year: "))

# Check if it's a leap year and print the result
if is_leap_year(year):
    print(f"{year} is a leap year.")
else:
    print(f"{year} is not a leap year.")
