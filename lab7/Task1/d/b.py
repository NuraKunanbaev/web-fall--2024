# l = [int(j) for j in input().split()]

# for i in l:
#     if i % 2 == 0:
#         print(l[i])
numbers = input().split()


numbers = [int(num) for num in numbers]

even_numbers = []

for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
print(*even_numbers)