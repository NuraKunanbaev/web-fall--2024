l = input().split()

l = [int(i) for i in l]
res = []
for i in range(1, len(l)):
    if l[i] > l[i - 1]:
        res.append(l[i])
print(*res)