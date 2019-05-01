def repeat(x):
    def times(y):
        return x+times(y-1) if y > 1 else x
    return times
x=0
def make_counter():
    x=0
    def adder():
        nonlocal x
        x+=1
        make_counter.x=x
        return x
    return adder
#have to call function before to differentiate between different calls
def access():
    return make_counter.x
