import math
friends = 7
print(friends)
friends += 1 # Augmented operator
print(friends)
friends -= 4
print(friends)
friends *= 3
print(friends)
friends /= 2
print(friends)
friends **= 2
print(friends)
friends %= 3
print(friends)

x = 3.14
y = -8
z = 5

result1 = round(x)
result2 = abs(y)
result3 = pow(result1, z)
result4 = max(x,y,z)
result5 = min(x,y,z)
result6 = math.sqrt(z)
result7 = math.ceil(x)
result8 = math.floor(x)
print(result1)
print(result2)
print(result3)
print(result4)
print(result5)
print(result6)
print(result7)
print(result8)

print(math.pi)
print(math.e)

# Exercise 1: The circumference of a circle

radius1 = int(input("Enter the radius of a circle: "))
circumference = 2 * math.pi * radius1
print(f"The circumference is: {round(circumference, 2)}")

# Exercise 2: The Area of a circle

radius2 = int(input("Enter the radius of a circle: "))
area = math.pi * pow(radius2,2)
print(f"The area of the circle is: {round(area,2)}cm^2")

# Exercise 3: The hypotenuse of a circle

a = float(input("Enter side of A: "))
b = float(input("Enter side of B: "))
c = math.sqrt(pow(a,2)+pow(b,2))
print(f"Side C = {round(c,2)}")