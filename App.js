import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const heading = React.createElement(
//   // this is object created
//   "h1", // type/parent
//   { id: "heading" }, // hear you can pass a attribute ... this line and below this both are child to the line above
//   "Hello from React"
// ); // creating and element and storing some value to it.

// const root = ReactDOM.createRoot(document.getElementById("root")); // creating a root(rasta) through which existing tag is fetched

// root.render(heading); // now the fetched tag is render(chalna) with new created element. also here the object which is created above is converted back to the html tag.

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {id: "heading" }, "Hey I am a H1 tag"),
//     React.createElement("h2", {id: "heading1" }, "Hey I am a H2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hey I am a H1 tag"),
//     React.createElement("h2", {}, "Hey I am a H2 tag"),
//   ]),
// ]);

// root.render(parent);

// JSX format coding starts from here...

// React element
const jsxHeading = <h1 className="head">Hello from JSX element</h1>;

const element = <span>Hello from element</span>;

const title = ( 
  <div>
    { element } {jsxHeading} 
    <h1>Hello from title</h1>
  </div>
)
const JsxHeading = () => <h1 className="head">Hello from JSX</h1>;

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <JsxHeading />
    {title}
    <h1 className="heading">Hello from functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); // this how you render a React Element

root.render(<HeadingComponent />);
