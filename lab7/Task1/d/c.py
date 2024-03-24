l = input().split()
l =[int(i) for i in l]
count = 0
for i in l:
    if i > 0:
        count += 1
print(count)


