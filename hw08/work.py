def qsort(l):
    if len(l)<=1:
        return l
    return qsort([x for x in l[1:] if x<=l[0]]) + [l[0]] + qsort([x for x in l[1:] if x>l[0]])

def union(a,b):
    a = list(set(a))
    b = list(set(b))
    return qsort([x for x in a if x not in b] + b)

def intersection(a,b):
    return [x for x in a if x in b]

def setdiff(a,b):
    return [x for x in a if x not in b]

def symmdiff(a,b):
    return qsort([x for x in a if x not in b] + [x for x in b if x not in a])

def cartesian(a,b):
    return [[x, y] for x in a for y in b]

print intersection([1,2,3, 4, 5],[3,4,5])
print union([1,2,3,4],[4,5,6])
print setdiff([1,2,3],[3,4,5])
print symmdiff([1,2,3,4],[3,4,5,6])
print cartesian([1, 2], ["red","white"])
