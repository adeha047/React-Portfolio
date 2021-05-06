import React from "react";


function Firefly() {
    return (
        <Firefly numberOfBirths={2} canvasWidth={window.innerWidth} canvasHeight={window.innerHeight} colors={colors} changeDirectionFrequency={10} randomMotion={true}></Firefly>
    );
  }
  
  export default Firefly;
