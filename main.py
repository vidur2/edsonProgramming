from flask import Flask
from json import loads
from motor import Motor

lMotor = Motor(16, 25, 12, False)
rMotor = Motor(5, 6, 13, True)
app = Flask(__name__)

@app.route("/")
def index():
    data = loads(request.get_data())
    rPower = data["rPower"]
    lPower = data["lPower"]
    if (rPower != None):
        rMotor.forward(rPower)
    if (lPower != None):
        lMotor.forward(lPower)
    return "Success"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5001")