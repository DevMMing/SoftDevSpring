#Team Keyboard Warriors -- Matthew Ming & Stefan Tan
#SoftDev02Pd08
#K19 --
#2019-04-16

a = [1 , 2, 3]
b = [2, 3, 4]
c = []
d = [4,3,1,2]
e = ["red", "white"]
f = [x for x in range(100)]

'''
Union of the 2 sets 
'''
def union(a, b):
    list = [x for x in a if x not in b] + b
    return list

'''
Intersection of the 2 sets
'''
def intersection(a, b):
    list = [x for x in a if x in b]
    return list

'''
Set difference of the 2 sets 
'''
def setdiff(a,b):
    list = [x for x in a if x not in b]
    return list

'''
Symmetric difference of the 2 sets
'''
def symdiff(a,b):
    list = [x for x in a if x not in b]+[y for y in b if y not in a]
    return list

'''
Cartesian product of the 2 sets 
'''
def cartprod(a,b):
    list = [(x, y) for x in a for y in b]
    return list
 

print(union(a, b)) #Expected Result: [1, 2, 3, 4]
print(union(b,d)) #Expected Result: [4, 3, 1, 2]
print(union(e, f)) #Expected Result: ['red', 'white', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

print(intersection(a, b)) #Expected Result: [2, 3]
print(intersection(a, c)) #Expected Result: []

print(setdiff(a,b)) #Expected Result: [1]
print(setdiff(b,a)) #Expected Result: [4]

print(symdiff(a,b)) #Expected Result: [1, 4]
print(symdiff(b,a)) #Expected Result: [4, 1]

print(cartprod(d, e)) #Expected Result: [(4, 'red'), (4, 'white'), (3, 'red'), (3, 'white'), (1, 'red'), (1, 'white'), (2, 'red'), (2, 'white')]
print(cartprod(e, d)) #Expected Result: [('red', 4), ('red', 3), ('red', 1), ('red', 2), ('white', 4), ('white', 3), ('white', 1), ('white', 2)]
