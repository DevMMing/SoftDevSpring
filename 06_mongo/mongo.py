#TeamName -- Matthew Ming & Rubin Peci
# Softdev pd 8
# K06 -- Yummy Mongo Py
# 2019-02-28

import pymongo 

SERVER_ADDR= "0.0.0.0" #"206.189.227.59"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants
def findBorough(b):
    return list(collection.find({"borough": b}))

def findZip(z):
    return list(collection.find({"address.zip": z}))

def findZipGrade(zip, grade):
    return list(collection.find({"address.zip": zip, "grades.0.grade": grade}))

def findZipScore(zip, score):
    return list(collection.find({"address.zip": zip, "grades.0.score": {"$lt": score}}))
print(findBorough("Manhattan"))
print(findZip("10462"))
print(findZipGrade("10462", "A"))
print(findZipScore("10462", 10))
