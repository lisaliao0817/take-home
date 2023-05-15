import os
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager, create_access_token
from flask import Flask, request, jsonify, Response, stream_with_context

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = os.getenv("MONGO_URI")
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@app.route('/')
def hello_world():
    return jsonify({ 
        "status": "success",
        "message": "Hello World!"
    })

@app.route('/register', methods=['POST'])
def register():
    users = mongo.db.users
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if username and password:
        user = users.find_one({ "username": username })
        if user:
            return jsonify({ 
                "error": "Duplicate user", 
                "message": "User already exists"
            }), 400
        else:
            hash_pass = bcrypt.generate_password_hash(password).decode('utf-8')
            users.insert_one({ "username": username, "password": hash_pass })
            return jsonify({
                "status": "success",
                "message": "User registered successfully"
            }), 201
    else:
        return jsonify({
            "error": "Insufficient information",
            "message": "Missing username or password"
        }), 400


@app.route('/login', methods=['POST'])
def login():
    users = mongo.db.users
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if username and password:
        user = users.find_one({ "username": username })
        if user and bcrypt.check_password_hash(user["password"], password):
            access_token = create_access_token(identity=username)
            return jsonify(access_token=access_token), 200
        else:
            return jsonify({
                "error": "Invalid information",
                "message": "Invalid username or password"
            }), 401
    else:
        return jsonify({
            "error": "Insufficient information",
            "message": "Missing username or password"
        }), 400

@app.route('/stream')
def stream():
    def generate():
        counter = 0
        while True:
            yield f'data:{counter}\n\n'
            counter += 1
    return Response(stream_with_context(generate()), mimetype='text/event-stream')

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({
        "error": "Not Found", 
        "message": "Resource not found"
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        "error": "Internal Server Error", 
        "message": "An internal server error occurred"
    }), 500

if __name__ == '__main__':
    app.run()