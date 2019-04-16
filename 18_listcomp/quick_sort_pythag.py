# pythagorean triplets

def pythag(n):
    a = [(i,j,k) for k in range(n+1) for j in range(k) for i in range (j) if (i**2 + j**2 == k**2) ]
    return a

print(pythag(5))
print(pythag(10))

test=[5,8,2,1,6,7,3,4]
def quicksort(arr):
    red=quicksort([i for i in arr[1:] if i < arr[0]]) + [arr[0]] + quicksort([j for j in arr[1:] if j >= arr[0]]) if arr else []
    return red
print(quicksort(test))
    
