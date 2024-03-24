# l = []

# n = int(input())

# for i in range(n):
#     num = int(input())
    # l.append(num)
l = [int(j) for j in input().split()]
even_l = []
for i in range(0, len(l), 2):
    even_l.append(l[i])
    
print(*even_l) 