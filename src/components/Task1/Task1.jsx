import React from "react";

export function ElementWithJSX() {
    return (
        <div>
            <h1>I'm element with JSX</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident corporis aliquam vel quidem ducimus corrupti!</p>
        </div>
    )
};

export function ElementWithoutJSX() {
    const header = React.createElement('h1', null, "I'm element without JSX");
    const paragraph = React.createElement('p', null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident corporis aliquam vel quidem ducimus corrupti!");
    
  return(
    React.createElement('div', {style: {border:'1px solid green', padding: '10px'}}, [ header, paragraph ])
  )  
} 