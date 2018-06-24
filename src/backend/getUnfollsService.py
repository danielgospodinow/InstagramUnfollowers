from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
from flask import request

from utils.utils import *

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    unfollowers = getUnfollowers(getInstaAPI(request.args["username"], request.args["password"]))
    return jsonify(unfollowers)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)