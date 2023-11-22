from app import app, send_file
from flask import url_for, render_template, redirect, request, jsonify
import os


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/receive_message', methods=['POST'])
def receive_message():
     if request.method=='POST':
          try:
               data = request.get_json()
               
               email = data['email']
               message=data['message']
               print(message)
               f = open("/tmp/messages.txt" , "a")
               f.write(email)
               f.write('\r')
               f.write(message)
               f.write('\n')
               new_url=url_for("index", _external=True)
               return jsonify({"message" : "success", "redirect_url" : new_url})
          except Error as e:
               new_url=url_for("index", _external=True)
               return jsonify({"message" : "failure", "redirect_url" : new_url})



