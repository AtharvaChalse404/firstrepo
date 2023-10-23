# Get user inputs for w, x, y, and z
w = (input("Enter the value for w: "))
x = (input("Enter the value for x: "))
y = (input("Enter the value for y: "))
z = (input("Enter the value for z: "))

# Compare the values and find the largest one
Greater = max(w, x, y, z)

print(f"The Greatest value among {w}, {x}, {y}, and {z} is {Greater}.")