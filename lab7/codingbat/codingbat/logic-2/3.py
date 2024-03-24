def make_chocolate(small, big, goal):
    max_big_bars = goal // 5
    big_bars_used = min(big, max_big_bars)
    remaining_goal = goal - (big_bars_used * 5)
    if remaining_goal <= small:
        return remaining_goal
    return -1