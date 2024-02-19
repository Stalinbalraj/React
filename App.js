import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "main-heading" },
  "Hello World from React"
);

const parent = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "im an h1 tag"),
    React.createElement("h2", {}, "im an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "im an h1 tag"),
    React.createElement("h2", {}, "im an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const JSX = () => (
  <div>
    <h1 id="main-heading">Hello World from React</h1>
    <h1 id="parent">
      <div id="child1">
        <h1>im an h1 tag</h1>
        <h2>im an h2 tag</h2>
      </div>
      <div id="child2">
        <h1>im an h1 tag</h1>
        <h2>im an h2 tag</h2>
      </div>
    </h1>
  </div>
);

console.log(root);

const FunctionalBasedComponent = () => {
  return (
    <h2>
      This is from function based component
      <JSX />
    </h2>
  );
};
root.render(<FunctionalBasedComponent />);
