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

console.log(root);
root.render(parent);
