#TeamName -- Matthew Ming & Rubin Peci
# Softdev pd 8
# K06 -- Yummy Mongo Py
# 2019-02-28

import pymongo 

SERVER_ADDR="206.189.227.59"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants


