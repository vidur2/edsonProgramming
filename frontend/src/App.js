import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
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
    body
  })
}

function App() {
  useEffect(() => {
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");

    leftBtn.ontouchstart = () => {
      sendPower(true, 0.5);
    }

    rightBtn.ontouchstart = () => {
      sendPower(false, 0.5)
    }

    rightBtn.ontouchend = () => {
      sendPower(false, 0);
    }

    leftBtn.ontouchend = () => {
      sendPower(true, 0)
    }
  })
  
  return (
    <div className="App">
      <table>
        <tr>
          <td><button id="left">Left</button></td>
          <td><button id="right">Right</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
