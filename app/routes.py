from app import app, send_file
from flask import url_for, render_template, redirect, request, jsonify
import os




@app.route('/')
def index():
    return render_template('index.html')

@app.route('/portofolio')   
def portofolio():
     return render_template('portofolio.html')

@app.route('/contact')   
def contact():
     return render_template('contact.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/receive_message', methods=['POST'])
def receive_message():
     if request.method=='POST':
          try:
               data = request.get_json()
               
               email = data['email']
               message=data['message']
               print(email)
               print(message)
               print("je suis passé par la")
               f = open("messages.txt" , "a")
               f.write(email)
               f.write('\r')
               f.write(message)
               f.write('\n')
               return jsonify({"message" : "success"})
          except Error as e:
               return jsonify({"message" : "failure"})



