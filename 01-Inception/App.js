/*

<div id = "parent">
    <div id = "child">
        <h1> I'm h1 tag</h1>
    </div>
</div>

ReactElement(Object) => HTML(Brower Understands)

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from using React CDN"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
