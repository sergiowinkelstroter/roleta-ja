"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./App.css";

const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  { ssr: false }
);

const data = [
  { option: "Pregue com objeto" },
  { option: "Traga uma visita" },
  { option: "Cante uma música" },
  { option: "Fale um verso sobre amor" },
  { option: "Explique os 4 AS de MRNT" },
  { option: "Poste no Instagram" },
];

const backgroundColors = ["#ff8f43", "#70bbe0", "#f9dd50"];
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
      setResult(null); // Limpa o resultado enquanto a roda gira
      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setResult(data[prizeNumber].option);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        {result ? (
          <div className="result-container">
            <h2 className="result font-bold">Resultado: {result}</h2>
            <button
              className="bg-black p-2 rounded-lg text-white text-base"
              onClick={handleReset}
            >
              Girar novamente
            </button>
          </div>
        ) : (
          <>
            <h1 className="pt-16 font-bold text-5xl">Roleta JA</h1>
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
                onStopSpinning={handleStopSpinning}
              />
              <button className="spin-button" onClick={handleSpinClick}>
                Girar
              </button>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
