import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML or XML like syntax - (transplied before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

const jsxHeading = (
  <h1 className="head" tabIndex={5}>
    Namaste react using JSX
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
