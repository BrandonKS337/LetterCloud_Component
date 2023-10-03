import React, { useEffect, useState } from "react";
import "./floatingLettersV2.css";

const FloatingLettersV2 = () => {
  const [letters, setLetters] = useState([]);
  const [containerSize, setContainerSize] = useState({ width: 40, height: 30 });
  
  const generateLetters = (width, height) => {
    let newLetters = [];
    const area = width * height; 
    const letterCount = Math.floor(area * 1.5); 

    for (let i = 0; i < letterCount; i++) {
      const char = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      const speed = Math.random() * 5 + 1;
      const fontSize = Math.random() * (20 - 12) + 12;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const directionX = Math.random() > 0.5 ? 1 : -1;
      const directionY = Math.random() > 0.5 ? 1 : -1;
      const moveX = Math.random() * 100 * directionX;
      const moveY = Math.random() * 100 * directionY;
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

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".floating-letters-container-v2");
      if (container) {
        setContainerSize({
          width: container.offsetWidth / 16,
          height: container.offsetHeight / 16,
        });
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    generateLetters(containerSize.width, containerSize.height);
  }, [containerSize]);

  return (
    <div className="floating-letters-container-v2">
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
export default FloatingLettersV2;
