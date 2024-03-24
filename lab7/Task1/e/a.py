def can_get_N_from_1(N):
    if N < 1:
        return False
    if N == 1:
        return True
    return can_get_N_from_1(N - 3) or can_get_N_from_1(N - 5)

N = int(input())

if can_get_N_from_1(N):
    print("YES")
else:
    print("NO")
