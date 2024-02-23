i = 19
limit = 1
limit_reached = False
to_add = 1
result = 0
j = 1

while j <= i:
    print("iteration = " +str(j))
    print("+" +str(to_add))
    result += to_add
    if to_add == 1:
        if limit_reached:
            limit += 2
            limit_reached = False
        else:
            limit_reached = True
        to_add = limit
    else:
        to_add -= 2
    j += 1
    print("result = " +str(result))
    print()
