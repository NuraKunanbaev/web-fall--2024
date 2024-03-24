def centered_average(nums):
    nums.sort()
    total = sum(nums) - nums[0] - nums[-1]
    return total // (len(nums) - 2)