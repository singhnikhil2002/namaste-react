const heading = React.createElement(
  // this is object created
  "h1", // type/parent
  { id: "heading" }, // hear you can pass a attribute ... this line and below this both are child to the line above
  "Hello from React"
); // creating and element and storing some value to it.

const root = ReactDOM.createRoot(document.getElementById("root")); // creating a root(rasta) through which existing tag is fetched

root.render(heading); // now the fetched tag is render(chalna) with new created element. also here the object which is created above is converted back to the html tag.

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hey I am a H1 tag"),
    React.createElement("h2", {}, "Hey I am a H2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey I am a H1 tag"),
    React.createElement("h2", {}, "Hey I am a H2 tag"),
  ]),
]);

root.render(parent);
