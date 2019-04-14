# Jellyfish -- Shafali Gupta & Matthew Ming 
# Softdev pd 8
# K16 -- PPFTLCW
# 2019-04-12

#1
print("1.")
a=[]
for i in range(5):
    a.append(str(i*2)+str(i*2))
print(a)
a=[str(i*2)+str(i*2) for i in range(5)]
print(a)
print("--------------------")
#2
print("2.")
a=[]
for i in range(5):
    a.append(7+i*10)
print(a)
a=[7+i*10 for i in range(5)]
print(a)
print("--------------------")
#
#while(i<101):
#    if i/

#for i in range(1,101):
    
#6
print("6.")
def div(num):
    a= []; 
    for i in range(1,num+1):
        if (num%i ==0):
            a.append(i)
    return a

print(div(10))
def div2(num):
    a=[i for i in range(1,num+1) if num%i==0]
    return a
print(div2(10))
print("--------------------")

#5
print("5.")
def prime():
    a = []
    for i in range(100):
        if (len(div(i)) ==2):
            a.append(i)
    return a
print(prime())
a=[i for i in range(100) if(len(div2(i))==2)]
print(a)
print("--------------------")
#4
print("4.")
a=[]
for i in range (100):
    if (i not in prime()):
        a.append(i)
print(a)
a=[i for i in range(100) if i not in prime()]
print(a)
print("--------------------")
#3
print("3.")
a= []
for i in range(0,3):
    #b = [0, i, i*2]
    a.append(0)
    a.append(i)
    a.append(i*2)
print(a)
a=[int(i) for i in "000012024"]
print(a)
print("--------------------")
#7
print("7.")
test=[[1,2,3,4],[2,3,1,4]]
print("original:")
print(test)
def transpose(matrix):
    a=[]
    for i in range(len(matrix[0])):
        a.append([])
        for j in range(len(matrix)):
            a[i].append(matrix[j][i])
    return a
print("transpose")
print(transpose(test))
def transpose2(matrix):
    a=[[] for i in range(len(matrix[0]))]
    [a[i].append(matrix[j][i]) for i in range(len(matrix[0])) for j in range(len(matrix))]
    return a
print(transpose2(test))
