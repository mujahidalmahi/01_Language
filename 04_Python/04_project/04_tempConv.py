# Temperature Converter in Python: 

unit = input("Is this temperature in Celsius or Fahrenheit (C/F): ")
if unit == 'C':
    print("Convert Celsius into Fahrenheit......")
    temp = float(input("Enter the temperature in Celsius: "))
    temp = round((((9*temp)/5)+32),1)
    print(f"The temperture in Fahrenheit is: {temp}~F")
elif unit == 'F':
    print("Convert Fahrenheit into Celsius......")
    temp = float(input("Enter the temperature in Fahrenheit: "))
    temp = round(((temp -32)*5/9),1)
    print(f"The temperature is Celsius is: {temp}~C")
else:
    print(f"{unit} is an invalid unit of measurement")