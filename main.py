from flask import Flask
from flask import request
from json import loads
# from motor import Motor

# lMotor = Motor(13, 15, False)
# rMotor = Motor(16, 18, True)
app = Flask(__name__)

@app.route("/", methods=["POST"])
def index():
    data = loads(request.get_data())
    # print(data)
    rPower = data["rPower"]
    lPower = data["lPower"]
    if (rPower != None):
        if (rPower > 0):
            rMotor.forward()
        elif (rPower < 0):
            rMotor.backward()
        else:
            rMotor.stop()
    if (lPower != None):
        if (lPower > 0):
            lMotor.forward()
        elif (lPower < 0):
            lMotor.backward()
        else:
            lMotor.stop()
    return "Success"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5001")