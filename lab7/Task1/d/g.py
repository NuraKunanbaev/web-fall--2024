l = input().split()
l = [int(i) for i in l]
maxl = max(l)
indexl = l.index(maxl)

print(maxl, ' ', indexl)