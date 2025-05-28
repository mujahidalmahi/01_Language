# Type Casting = The process of converting a variable from one data type to another through [str(), int(), float(), bool()]
name = "Mujahid Mahi"
age = 20
gpa = 3.2
is_student = True

print(type(name))
print(type(age))
print(type(gpa))
print(type(is_student))
print('\n')

gpa =  int(gpa)
print(gpa)

age = float(age)
print(age)

age = str(age)
print(type(age))

name = bool(name)
print(name) # empty string will give False