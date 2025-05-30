# if = Do some code only IF some condition is True 
# Else do something else

age = int(input("Enter your age: "))
if age >= 100:
    print("You are too old to sign up!")
elif age >= 18:
    print("You are now signed up!")
elif age < 0:
    print("You haven't been born yet")
else:
    print("You must be 18+ to sign up")

response = input("Would you like food? (Y/N): ")
if response == "Y":
    print("Have some food!")
else: 
    print("No food for you")

name = input("Enter your name: ")
if name == "" :
    print("You did not type your name!")
else :
    print(f"Hello {name}")

for_sale = True
if for_sale:
    print("This item is for sell")
else :
    print("This item is not for sell")

is_online = False
if is_online:
    print("The user is online")
else:
    print("The user is not online")