def sum13(nums):
    total = 0
    skip_next = False
    for num in nums:
        if num == 13:
            skip_next = True
        elif not skip_next:
            total += num
        else:
            skip_next = False
    return total