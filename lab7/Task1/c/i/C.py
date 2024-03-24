
from math import sqrt


a = int(input())
b = int(input())
for i in range(a,b + 1):
    if sqrt(i) == int(sqrt(i)):
        print(i)