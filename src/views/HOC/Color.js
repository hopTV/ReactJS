import React from "react";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

const color = (WrappedComponent) => {

    const colorRamdom = getRandomColor();
    return (props) => (
        <div style={{ color: colorRamdom}}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default color;