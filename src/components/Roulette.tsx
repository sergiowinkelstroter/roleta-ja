"use client";
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./App.css";

const data = [
  { option: "Pregue com objeto" },
  { option: "Traga uma visita" },
  { option: "Cante uma música" },
  { option: "Fale um verso sobre amor" },
  { option: "Explique o 4 AS de MRNT" },
  { option: "Poste no Instagram" },
];

const backgroundColors = ["#ff8f43", "#70bbe0", "#0b3351", "#f9dd50"];
const textColors = ["#0b3351"];
const outerBorderColor = "#eeeeee";
const outerBorderWidth = 10;
const innerBorderColor = "#30261a";
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = "#eeeeee";
const radiusLineWidth = 8;
const fontFamily = "Nunito";
const fontWeight = "bold";
const fontSize = 12;
const fontStyle = "normal";
const textDistance = 60;
const spinDuration = 0.5;

const App: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const onStopSpinning = () => {
    setMustSpin(false);
    setResult(data[prizeNumber].option);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wheel-container">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            spinDuration={spinDuration}
            textDistance={textDistance}
            onStopSpinning={onStopSpinning}
          />
        </div>
        <button className="spin-button" onClick={handleSpinClick}>
          Rodar
        </button>
        {result && (
          <div className="result">
            <h3>Resultado: {result}</h3>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
