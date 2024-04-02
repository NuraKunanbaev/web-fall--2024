def bool_function(number1, number2):
    if number1 < number2 or number1 > number2:
        return 1
    elif number1 == 1 and number2 == 1:
        return 0
    else:
        return 0
number1, number2 = map(int, input().split())
print(bool_function(number1, number2))

# def bool_function(number1, number2):
#     return (number1 or number2) and not (number1 and number2)

# number1, number2 = map(int, input().split())

# print(int(bool_function(number1, number2)))
