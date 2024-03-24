def find_max_digit(string, index=0, max_digit=None):
    if index == len(string):
        return max_digit
    
    digit = int(string[index])
    
    if max_digit is None or digit > max_digit:
        max_digit = digit
    
    return find_max_digit(string, index + 1, max_digit)


digits_string = input()


max_digit = find_max_digit(digits_string)

print(max_digit)
