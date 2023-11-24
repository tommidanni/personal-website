from flask import Flask, send_file
from config import Config
import os

os.environ['FLASK_DEBUG']='1'
app = Flask(__name__)
app.config.from_object(Config)


from app import routes

