# Git Flasking -- Addison Huang & Matthew Ming
# Softdev pd 8
# K08 -- Ay Mon , Go Git It From Yer Flask
# 2019-03-06
# prizes dataset

import pymongo
from flask import Flask, render_template, session , request, url_for, redirect, flash

SERVER_ADDR= "206.189.227.59"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.prize

app=Flask(__name__)

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

#test with Arthur Ashkin or George P. Smith
@app.route("/", methods=['GET','POST'])
def root():
    try:
        name=request.form['name']
        if name == "":
            return render_template("index.html", results = "You did not submit a query")
        elif not result(name):
            return render_template("index.html", results = "Your search did not yield any results")
        else:
            return render_template("index.html", results = result(name))
    except:
        return render_template("index.html", results = "")    
if __name__ == "__main__":
    app.debug = True
    app.run()
