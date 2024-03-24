def sum67(nums):
    total = 0
    ignore_section = False
    for num in nums:
        if num == 6:
            ignore_section = True
        elif num == 7 and ignore_section:
            ignore_section = False
        elif not ignore_section:
            total += num
    return total