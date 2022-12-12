import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
const HOSTNAME = "http://localhost:5001/"

async function sendPower(isLeft, power) {
  const body = {
    lPower: null,
    rPower: null
  }

  if (isLeft) {
    body["lPower"] = power;
  } else {
    body["rPower"] = power;
  }

  await fetch(HOSTNAME, {
    method: "POST",
    body: JSON.stringify(body)
  })
}

function App() {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const fLeft = document.getElementById("left");
    const fRight = document.getElementById("right");
    const bLeft = document.getElementById("bleft");
    const bRight = document.getElementById("bright")


    fLeft.onclick = () => {

      if (!clicked) {
        sendPower(true, 0.5);
      } else {
        sendPower(true, 0);
      }
      setClicked(!clicked);
    }

    fRight.onclick = () => {
      if (!clicked) {
        sendPower(false, 0.5);
      } else {
        sendPower(false, 0);
      }
      setClicked(!clicked);
    }

    bLeft.onclick = () => {
      if (!clicked) {
        sendPower(true, -0.5);
      } else {
        sendPower(true, 0);
      }
      setClicked(!clicked);
    }

    bRight.onclick = () => {
      if (!clicked) {
        sendPower(false, -0.5);
      } else {
        sendPower(false, 0);
      }
      setClicked(!clicked);
    }
  })
  
  return (
    <div className="App">
      <table>
        <tr>
          <td><button id="left">Forward Left</button></td>
          <td><button id="right">Forward Right</button></td>
        </tr>
        <tr>
          <td><button id="bleft">Backward Left</button></td>
          <td><button id="bright">Backward Right</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
