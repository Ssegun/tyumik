from flask import Flask, render_template,request,redirect
import os,json
app = Flask(__name__)

@app.errorhandler(Exception)
def error_handler(e):
    return render_template('500.html')

@app.errorhandler(404) 
def page_not_found(e):
    return render_template('404.html')

@app.route("/")
def index():
    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'static','gastro.json'), 'rt',encoding="utf-8") as file:
        return render_template('index.html',gastro_items=json.load(file))

@app.route("/quiz")
def quiz():
    with open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'static','quiz.json'), 'rt',encoding="utf-8") as file:
        return render_template('quiz.html',quiz_items=json.load(file))

if __name__ == '__main__':
    #app.run(host="0.0.0.0")
    app.run()