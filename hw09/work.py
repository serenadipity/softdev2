import time

def test(k):
	def inner(*arg):
		print k.func_name + " --> " + str(arg)
		return k(*arg)
	return inner

def log(f):
	def inner(*arg):
		t = time.time()
		m = f(*arg)
		print "time: " + str(time.time() - t)
		return m
	return inner

@test
def cartesian(a,b):
    return [[x, y] for x in a for y in b]

d = log(cartesian)
print d([1, 2], ["red","white"])