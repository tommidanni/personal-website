from app import app, send_file
from flask import url_for, render_template




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