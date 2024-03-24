def squirrel_play(temp, is_summer):
    upper_limit = 90 if not is_summer else 100
    return 60 <= temp <= upper_limit