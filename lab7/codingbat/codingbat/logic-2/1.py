def make_bricks(small, big, goal):
    return goal <= small + 5 * big and goal % 5 <= small