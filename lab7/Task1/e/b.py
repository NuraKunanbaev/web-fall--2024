def power_of_number(a, n):
    if a == 0:
        return 1
    else:
        return a ** n

a, n = map(float, input().split())
print(power_of_number(a, int(n)))
    