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

#####################################################################

#a simple example of applying multiple decorators
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML
