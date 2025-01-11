import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");

console.log(heading);

// JSX - HTML or XML like syntax

const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
