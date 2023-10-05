import React from 'react';
import styled, { keyframes } from 'styled-components';

// Generate random X and Y translations for each letter.
const generateRandomXY = () => {
  const centerX = 0; //Center is 0 on x-axis
  const centerY = -18 //sets y spawn point center at 10rem above the component

  //let vs const. let allows math.random to change the axis. Const picks one and then you're stuck for that whole animation.
  let x = centerX + (Math.random() * 25 - 10); // adjust to change x access animation start point
  let y = centerY + (Math.random() * 10 - 10); // adjust to change y access animation start point
  return { x, y };
};

const zoomOutText = props => keyframes`
  from {
    opacity: 0;
    transform: scale(1) translate(${props.x}rem, ${props.y}rem);
  }
  to {
    opacity: 1;
    transform: scale(1) translate(0, 0);
  }
`;

const StyledH2 = styled.h2`
  position: relative;
  overflow: visible; 
  height: 3rem; 
`;

const Letter = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${props => zoomOutText(props)} 2.5s forwards;
  ${({ isSpace }) => isSpace && 'opacity: 1; width: 0.3em;'}
  animation-delay: ${({ delay }) => delay}s;
`;


const PopOutText = () => {
  const text = '"Hello! My Name is FletcherRat and I love to code!"';
  return (
    <StyledH2>
      {text.split('').map((char, index) => {
        const { x, y } = generateRandomXY();
        return (
          <Letter key={index} isSpace={char === ' '} delay={index * 0.05} x={x} y={y}>
            {char}
          </Letter>
        );
      })}
    </StyledH2>
  );
};

export default PopOutText;
