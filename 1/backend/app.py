import os
from flask import Flask, request, jsonify, render_template
from flask_wtf.csrf import CSRFProtect, generate_csrf
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__)
csrf = CSRFProtect(app)


app.debug = os.environ.get('DEBUG') == 'True'

# Set the secret key
app.secret_key = os.environ.get('SECRET_KEY')

if not app.secret_key:
    raise RuntimeError('The SECRET_KEY environment variable is not set. Set it in the .env file.')



@app.route('/sum', methods=['POST'])
def sum():
    valueX = request.json['valueX']
    valueY = request.json['valueY']
    result = valueX + valueY
    return jsonify({'sum': result})

@app.route('/csrf', methods=['GET'])
def get_csrf():
    token = generate_csrf()
    return jsonify({'csrf_token': token})

@app.route("/")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)