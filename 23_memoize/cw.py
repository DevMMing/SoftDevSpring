import random

def make_HTML_heading(f):
        txt=f()
        def inner():
                return '<h1>' + txt + '</h1>'
        return inner
#equiv to greet = makeHTMLheading(greet)
@make_HTML_heading
def greet():
        greetings=['Hello','Welcome','AYO!','Hola','Bonjour','Word up']
        return random.choice(greetings)
print(greet())

def memoize(f):
    memo = {}
    def helper(x):
        if x not in memo:
                memo[x]=f(x)
        return memo[x]
    return helper
def fib(n):
    if n ==0:
        return 0
    if n ==1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
fib=memoize(fib)
print(fib(40))
