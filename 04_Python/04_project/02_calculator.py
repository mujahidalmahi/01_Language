# Python Calculator

operator = input("Enter an operator (+ - * /): ")
num1 = float(input("Enter the 1st number: "))
num2 = float(input("Enter the 2nd number: "))

if operator == "+":
    result = num1 + num2
    print(f"Result: {round(result,3)}")
elif operator == "-":
    result = num1 - num2
    print(f"Result: {round(result,3)}")
elif operator == "*":
    result = num1 * num2
    print(f"Result: {round(result,3)}")
elif operator == "/":
    result = num1 / num2
    print(f"Result: {round(result,3)}")
else:
    print("You have made a mistake!")