import React, { useEffect, useState } from "react";
import "../stylesheets/LettersCloud.css";

const LettersCloud = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const generateLetters = () => {
      let newLetters = [];
      for (let i = 0; i < 500; i++) {
        //generates the amount of letters generated
        let char = String.fromCharCode(65 + Math.floor(Math.random() * 26)); //generates a random letter from the 26 char alphabet
        let speed = Math.random() * 5 + 1; // Sets a random speed between 1 and 4
        let fontSize = Math.random() * (20 - 12) + 12; // Random font size between 12 and 20 (pixels)
        let left = Math.random() * 100; //random left position
        let top = Math.random() * 100; // random top position
        let directionX = Math.random() > 0.5 ? 1 : -1; //randomly chooses between left and right
        let directionY = Math.random() > 0.5 ? 1 : -1 //randomly chooses between up or down
        let moveX = Math.random() * 100 * directionX; // random horizontal movement%
        let moveY = Math.random() * 100 * directionY; //random vertical movement%
        newLetters.push({
          char,
          speed,
          fontSize,
          left,
          top,
          moveX,
          moveY
        });
      }
      setLetters(newLetters);
    };

    generateLetters();
  }, []);

  return (
    <div className="floating-letters-container">
      {letters.map((letter, index) => (
        <div
          key={index}
          className="letter"
          style={{
            fontSize: `${letter.fontSize}px`,
            animationDuration: `${letter.speed}s`,
            left: `${letter.left}%`,
            top: `${letter.top}%`,
            animationName: `float-${index}`,
          }}
        >
          {letter.char}
          <style>
            {`
              @keyframes float-${index} {
                0% {
                  opacity: 1;
                  transform: translate(0, 0);
                }
                100% {
                  opacity: 0;
                  transform: translate(${letter.moveX}px, ${letter.moveY}px);
                }
              }
            `}
          </style>
        </div>
      ))}
    </div>
  );
};
export default LettersCloud;
