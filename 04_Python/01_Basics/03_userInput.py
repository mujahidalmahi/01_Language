# input() = A function that prompts the user to enter data Returns the entered data as a string

name = input("\nWhat is your name?: ")
age = int(input("How old are you?:")) # returns a string
age = age + 1
print(f"\nHello {name}!")
print("Happy birthday")
print(f"You are {age} years old\n")

# Exercise 1: Rectangle Area Calc

length = int(input("Enter the length: "))
width = int(input("Enter the width: "))
area = length * width
print(f"\nArea: {area}")

# Exercise 2: Shopping Cart Program

item = input("\nWhat item would you like to buy?: ")
price = float(input("What is the price?: "))
quantity = int(input("How many would you like?: "))
total = price * quantity
print(f"You have bought {quantity}x {item}")
print(f"Your total is: ${total}\n")