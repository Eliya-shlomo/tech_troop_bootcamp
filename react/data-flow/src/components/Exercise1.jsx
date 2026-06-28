import React, { useState } from 'react'; 
import './Exercise1.css';
function Exercise1(){
    
    const [data] = useState({
        images: [
          "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
          "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
          "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
        ],
        currentImg: 0
      });

      const [currentIndex, setCurrentIndex] = useState(data.currentImg);

      const shiftImageBack = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
      };
    
      const shiftImageForward = () => {
        setCurrentIndex(prev => Math.min(data.images.length - 1, prev + 1));
      };

      return (
        <div className="gallery-container">
          <img src={data.images[currentIndex]} alt="fruit" />
          <div className="buttons">
            <button className="back" onClick={shiftImageBack}>Previous</button>
            <button className="forward" onClick={shiftImageForward}>Next</button>
          </div>
        </div>
      );
}


export default Exercise1