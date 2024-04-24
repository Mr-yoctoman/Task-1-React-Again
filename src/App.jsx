import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const cardDetails1 = [
  [1, "Single User"],
  [1, "50GB Storage"],
  [1, "Unlimited Public Projects"],
  [1, "Community Access"],
  [0, "Unlimited Private Projects"],
  [0, "Dedicated Phone support"],
  [0, "Free sub domain"],
  [0, "Monthly Status Reports"],
];

const cardDetails2 = [
  [1, "Single User"],
  [1, "50GB Storage"],
  [1, "Unlimited Public Projects"],
  [1, "Community Access"],
  [1, "Unlimited Private Projects"],
  [1, "Dedicated Phone support"],
  [1, "Free sub domain"],
  [0, "Monthly Status Reports"],
];

const cardDetails3 = [
  [1, "Single User"],
  [1, "50GB Storage"],
  [1, "Unlimited Public Projects"],
  [1, "Community Access"],
  [1, "Unlimited Private Projects"],
  [1, "Dedicated Phone support"],
  [1, "Free sub domain"],
  [1, "Monthly Status Reports"],
];

function App() {
  return (
    <div className="mainContainer">
      <div className="container1">
        <p className="cardTitle1">Free</p>
        <p className="cardPrice1">$0 /Month</p>
        <div>
          {cardDetails1.map((details, index) => (
            <div
              key={index}
              className={details[0] === 0 ? "there" : "notThere"}
            >
              {details[1]}
            </div>
          ))}
        </div>
        <button className="button">Button</button>
      </div>
      <div className="container2">
        <p className="cardTitle1">Plus</p>
        <p className="cardPrice1">$9 /Month</p>
        <div>
          {cardDetails2.map((details, index) => (
            <div
              key={index}
              className={details[0] === 0 ? "there" : "notThere"}
            >
              {details[1]}
            </div>
          ))}
        </div>
        <button className="button">Button</button>
      </div>
      <div className="container3">
        <p className="cardTitle1">Pro</p>
        <p className="cardPrice1">$49 /Month</p>
        <div>
          {cardDetails3.map((details, index) => (
            <div
              key={index}
              className={details[0] === 0 ? "there" : "notThere"}
            >
              {details[1]}
            </div>
          ))}
        </div>
        <button className="button">Button</button>
      </div>
    </div>
  );
}

export default App;
