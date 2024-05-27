def is_valid_date(date):
    # Split the date into day, month, and year
    day, month, year = map(int, date.split('/'))

    # List of days in each month (considering leap years)
    days_in_month = {
        1: 31,  # January
        2: 29 if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0) else 28,  # February
        3: 31,  # March
        4: 30,  # April
        5: 31,  # May
        6: 30,  # June
        7: 31,  # July
        8: 31,  # August
        9: 30,  # September
        10: 31,  # October
        11: 30,  # November
        12: 31   # December
    }

    # Check if month is valid
    if month < 1 or month > 12:
        return False

    # Check if day is valid for the given month
    if day < 1 or day > days_in_month[month]:
        return False

    # If all checks passed, the date is valid
    return True

# Given dates
dates = ['30/02/2020', '31/03/2000', '31/07/2029']

# Check validity of each date and print the result
for date in dates:
    validity = "valid" if is_valid_date(date) else "invalid"
    print(f"The date {date} is {validity}.")
