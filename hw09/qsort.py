def qsort(l):
    if len(l)<=1:
        return l
    return qsort([x for x in l[1:] if x<=l[0]]) + [l[0]] + qsort([x for x in l[1:] if x>l[0]])

print qsort([3,8,4,3,2,7,43,3,4,6,])
