#Team Jellyfish -- Shafali Gupta & Matthew Ming
#SoftDev02Pd08
#K20 -- Reductio ad Absurdum
#2019-04-17

from functools import reduce

file = open("16.txt",'r')
a=[j for x in file.readlines()for j in x.split()]
##print(a)
def freq_single(n):
    b=[x for x in a if x==n]
    return len(b)
print(freq_single("the"))#Expecting 280
print(freq_single("a"))#Expecting 121
def freq_mult(g):
    b=reduce(lambda i,j: i+" "+j,a)
    #print(b)
    c = [x for x in range(len(b)-len(g)) if b[x:x+len(g)] == g]  
    return len(c)
print(freq_mult("under the"))#Expecting 5
def freq():
    z=[len([y for y in a if y==x]) for x in a]
    return a[z.index(max(z))]
print(freq())#Expecting the
##No need to use reduce to find frequecy mult or singular
#wow reduce functions the same as max except its longer!!
def red_freq():
    z=[len([y for y in a if y==x]) for x in a]
    return a[z.index(reduce(lambda x,y,: x if x > y else y,z))]
print(red_freq())#Expecting the
