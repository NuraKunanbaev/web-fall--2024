def lone_sum(a, b, c):
    if a != b and a != c:
        sum_a = a
    else:
        sum_a = 0
    if b != a and b != c:
        sum_b = b
    else:
        sum_b = 0
    if c != a and c != b:
        sum_c = c
    else:
        sum_c = 0
    return sum_a + sum_b + sum_c