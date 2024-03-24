v = int(input())
t = int(input())
path = v * t
position = (path % 109 + 109) % 109 
print(position)
