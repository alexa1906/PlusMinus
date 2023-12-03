import React, { useState } from 'react';
import './Div.css'; // If you have any specific CSS for your Div component

const Div = () => {
  const [squareCount, setSquareCount] = useState(0);
  // squareCount is the state variable that holds the number of squares.
  // setSquareCount is a function to update squareCount.

  const handlePlusClick = () => {
    setSquareCount(squareCount + 1);
  };

  const handleMinusClick = () => {
    if (squareCount > 0) {
      setSquareCount(squareCount - 1);
    }
  };

  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < squareCount; i++) {
      squares.push(
        <div key={i}>
          <div className="square">
          <div className="buttons-container">
            <button className='button-20' onClick={() => handlePlusClick()}>Plus</button>
            <button className='button-20' onClick={() => handleMinusClick()}>Minus</button>
          </div>
          </div>
        </div>
      );
    }
    return squares;
  };
  return (
    <div className='all'>
      <div>
      <button className='button-20' onClick={handlePlusClick}>Plus</button>
      <button className='button-20' onClick={handleMinusClick}>Minus</button>
      </div>
      <div>
      <div className="square-container">
        {renderSquares()}
      </div>
      </div>
    </div>
  );
};

export default Div;