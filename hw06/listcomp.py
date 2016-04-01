def passtest(str):
    UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
    nums = "1234567890"
    symbols = ".?!&#,;:-_*"
    p = [1 if x in UC_LETTERS else 2 if x in LC_LETTERS else 3 if x in nums
    else 4 if x in symbols else 0 for x in str]
    if 1 in p and 2 in p and 3 in p and 4 in p:
    	return "strong"
    else:
    	return "doesn't meet requirements"
