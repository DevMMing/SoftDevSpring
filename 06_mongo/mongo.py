#TeamName -- Matthew Ming & Rubin Peci
# Softdev pd 8
# K06 -- Yummy Mongo Py
# 2019-02-28

import pymongo 

SERVER_ADDR= "206.189.227.59"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants
def find_borough(borough):
    '''
    returns restaurants at the specified borough
    '''
    ret = []
    for doc in collection.find({"borough" : borough}):
        ret.append(doc)
    return ret

def find_zip(zip_code):
    '''
    returns restaurants at the specified zipcode
    '''
    ret = []
    for doc in collection.find({"address.zipcode" : zip_code}):
        ret.append(doc)
    return ret

def find_zip_grade(zip_code, grade):
    '''
    returns restaurants at the specified zipcode with the given grade
    '''
    ret = []
    for doc in collection.find({"address.zipcode" : zip_code, "grades.0.grade" : grade}):
        ret.append(doc)
    return ret

def find_zip_score(zip_code, score):
    '''
    returns restaurants at the specified zipcode with a score less than the given score
    '''
    ret = []
    for doc in collection.find({"address.zipcode" : zip_code, "grades.0.score" : {'$lt': score}}):
        ret.append(doc)
    return ret

def find_zip_avgscore(zip_code, score):
    '''
    returns restaurants at the specified zipcode with an average score higher than the given score
    '''
    ret = []
    for doc in collection.find({"address.zipcode" : zip_code}):
        sum = 0
        length = len(doc["grades"])
        if length == 0 :
            continue
        for i in range(length):
            sum += doc["grades"][i]["score"]
        avg = sum / length
        if avg > score:
            ret.append(doc)
    return ret
    
print("###############################")
print("testing find_borough:")
print(find_borough("Queens"))
print("###############################")
print("testing find_borough:")
print(find_zip("10452"))
print("###############################")
print("testing find_zip_grade:")
print(find_zip_grade("10452", "A"))
print("###############################")
print("testing find_zip_score:")
print(find_zip_score("10452", 10))
print("###############################")
print("testing find_zip_avgscore:")
print(find_zip_avgscore("10452", 20))
