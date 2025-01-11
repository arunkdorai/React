import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = (
  <h1 className="head" tabIndex={5}>
    Namaste react using JSX
  </h1>
);

/*
* React Component

! 1. Class Based Component  - Old way to write React components
? 2. Functional Component - New way to write React components

*/

// * Functional Component

const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

const HeadingComponent2 = () => (
  <div>
    <h1 className="heading">Functional Component 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
