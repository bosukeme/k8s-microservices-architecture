from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime, timezone

import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/")
def get_datetime():
    response = {
        'now': datetime.now(timezone.utc),
        'api': 'flask'
    }

    return jsonify(response)

@app.route("/ping")
def ping():
    return "pong"


if __name__ == "__main__":
    port  = int(os.getenv('PORT', 5000))
    app.run(host="0.0.0.0", port=port)