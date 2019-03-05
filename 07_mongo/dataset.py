# Solo -- Matthew Ming & 
# Softdev pd 8
# K07 -- Import/Export Bank
# 2019-03-01
# prizes dataset
# - has list of Nobel Prize winners with motivations and year acquired
#http://api.nobelprize.org/v1/prize.json
#no import mechanism required

import pymongo

SERVER_ADDR= "206.189.227.59"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.prize

def find_year(year):
    return list(collection.find_one({"prizes.year", year}))

def find_category(category):
    return list(collection.find_one({"prizes.category", category}))

def find_year_category(year, category):
    return list(collection.find_one({"$and": [{"prizes.year": year}, {"prizes.category": category}]}));

def find_share_category(share, category):
    return list(collection.find_one({"$and": [{"prizes.laureates.share": {"%gt": share}}, {"prizes.category": category}]}));

print(find_year("2018"))
print(find_category("medicine"))
print(find__year_category("2017", "medicine"))
print(find_share_category("2", "physics"))
