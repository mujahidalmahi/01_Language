# Logical operators = evaculate multiple conditions (or, and, not)
#               or = at least one condition must be True
#               and =  both conditions must be True
#               not = inverts the condition (not False, not True)

temp1 = 15
is_raining = False
if temp1 > 35 or temp1 < 0 or is_raining:
    print("\nThe outdoor event is cancelled\n")
else:
    print("\nThe outdoor event is still scheduled\n")

temp2 = 0
is_sunny = False
if temp2 >= 28 and is_sunny:
    print("It is HOT outside")
    print("It is sunny")
elif temp2 <= 0 and is_sunny:
    print("It is Cold outside")
    print("It is sunny")
elif 28 > temp2 > 0 and is_sunny:
    print("It is WARM outside")
    print("It is sunny")
elif temp2 >= 28 and not is_sunny:
    print("It is HOT outside")
    print("It is cloudy")
elif temp2 <= 0 and not is_sunny:
    print("It is Cold outside")
    print("It is cloudy")
elif 28 > temp2 > 0 and not is_sunny:
    print("It is WARM outside")
    print("It is cloudy")
else:
    print("Invalid Temperature or condition!")