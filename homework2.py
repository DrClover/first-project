def randomOperation(x):
  return x**2 / 3
  
# loop through numbers 3 to 10 and
# print out only numbers more than 10 after random operation

# for i in range(0,20):
#   result = randomOperation(i)
#   print(result)

for i in range(8):
  num = randomOperation(i+3)
  # print(num)

  if num > 10:
    print(num)








