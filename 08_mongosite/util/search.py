from pymongo import MongoClient
import json

SERVER_ADDR= "206.189.227.59"
#connection = pymongo.MongoClient(SERVER_ADDR)
client = MongoClient(SERVER_ADDR, 27017)
db = client.test
collection = db.prize
#db = connection.test
#collection = db.prize

def result(name):
    data=list(collection.find({"prizes.year":"2018"},{'_id': False}))
    parse=data[0]['prizes']
    output=[]
    for prizes in parse:
        for prize in prizes['laureates']:
            output.append(prize['firstname']+" "+prize['surname'])
    print(output)
    for i in output:
        if name==i:
            return name
    return False

def changeIp(ip):
    print("hi1")
    with open('data/prizes.json') as doc:
        print("hi")
        file_data = json.load(doc)
        print("hi")
        client.drop_database(prize)
        print("hi")
        db=connection["test"]
        print("hi")
        collection=db["prize"]
        print("hi")
        collection.insert_many(file_data['prizes'])
    print("hi")
    client.close()
