# Variable = A container for a value (string, integer, floot, boolean)
# A variable behaves as if it was the value it contains

# Strings:
first_name = "Mujahid"
last_name = "Mahi"
food = "pizza"

print(first_name)
print(f"My full name is {first_name} {last_name}") # this is a f string
print(f"{first_name} likes {food}")
print(f"{first_name}@gmail.com \n")

# Integers:
age = 20
quantity = 3
numOfStudents = 30

print(f"You are {age} years old")
print(f"You are buying {quantity} items")
print(f"Your class has {numOfStudents} studnets\n")

# Floats:
price = 10.99
gpa = 3.2
distance = 5.5

print(f"The price is ${price}")
print(f"Your gpa is: {gpa}")
print(f"You ran {distance}km\n")

# Booleans:

isStudent = True # first letter must be capital letter
forSale = False
is_online = True

print(f"Are you a student? : {isStudent}")
print(f"Is it for sale?: {forSale}")
print(f"Is online?: {is_online}\n")