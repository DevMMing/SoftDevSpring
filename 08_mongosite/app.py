'''
Team Git Flasking -- Addison Huang, Matthew Ming, and Hasif Ahmed
SoftDev2 pd8
K #08: Ay Mon, Go Git It From Yer Flask
'''

from flask import Flask, render_template, request
from util import search 

app=Flask(__name__)


@app.route("/", methods=['GET','POST'])
def root():
    try:
        ip = request.form['ip']
        if ip != "":
            search.changeIp(ip)
    except:
        pass
    try:
        name = request.form['name']
        if name == "":
            return render_template("index.html", results = "You did not submit a query")
        #result = function
        elif not search.result(name):
            return render_template("index.html", results = "Your search did not yield any results")
        else:
            return render_template("index.html", results = search.result(name))
    except:
        return render_template("index.html", results = "")

if __name__ == "__main__":
    app.debug = True
    app.run()#host="0.0.0.0")
