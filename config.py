import os


basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    
    STATIC_FOLDER='/app/static'

    FLASK_DEBUG=1
