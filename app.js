// <div id="parent">
//    <div id="child">
//       <h1>i am a h1 tag</h1>
//    </div>
// </div>

// now implement in react

const parent = React.createElement(
    "div",
     {id: "parent"},
      [React.createElement(
        "div",
         {id: "child1"},
          [React.createElement("h1", {}, "i am a h1 tag"),
           React.createElement("h2", {}, "i am a h2 tag")]
      ),
      React.createElement(
        "div",
         {id: "child2"},
          [React.createElement("h1", {}, "i am a h1 tag"),
           React.createElement("h2", {}, "i am a h2 tag")]
      )]
);


// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);