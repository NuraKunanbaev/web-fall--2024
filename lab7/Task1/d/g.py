numbers = input().split()

numbers = [int(num) for num in numbers]

max_number = max(numbers)

index_of_max = numbers.index(max_number)

print(max_number, index_of_max)
