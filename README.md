# Namaste React

# parcel
- Dev build
- Local server
- HMR = Hot Module Replacement
- File watching algorithm - written in c++
- caching - faster builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistence hashing
- Code splitting
- Differential bundling - Support older verion of browser
- Diagnostic - gives beautiful errors
- Error handling
- HTTPs
- Tree shaking - Remove unused app



// practices
/*
// <div id="parent">
//    <div id="child">
//       <h1>i am a h1 tag</h1>
// <h2>i am a h2 tag</h2>
//    </div>
//    <div id="child2">
//       <h1>i am a h1 tag</h1>
// <h2>i am a h2 tag</h2>
//    </div>
// </div>

// now implement in react

// const parent = React.createElement(
//         "div",
//          {id: "parent"},
//           [React.createElement(
//             "div",
//              {id: "child1"},
//               [React.createElement("h1", {}, "hello namaste-react"),
//                React.createElement("h2", {}, "hello from prateek")]
//           ),
//           React.createElement(
//             "div",
//              {id: "child2"},
//               [React.createElement("h1", {}, "i am a h1 tag"),
//                React.createElement("h2", {}, "i am a h2 tag")]
//           )]
//     );

//     // jsx ......

//     // const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     // root.render(heading);
//     root.render(parent);

// React.createElement => Object => HTMLElement(render)
//jsx (react element)

// practice sets

// const heading = (<h1 className="head">Namaste React using JSX</h1>);
// // React component...
// const Title = () => (
//         <h1 className="heads">Hello Prateek</h1>
// );
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     {Title()}
//     <Title></Title>
//     {heading}
//     <h1 className="header">Namaste from Functional component</h1>
//   </div>);
*/

app layout


/*
 * - Header
 *   - logo
 *   - Nav items
 * - Body
 *   - search
 *   - ResturantContainer
 *     - ResturantCart
 * - Footer
 *   - Copyrights
 *   - Links
 *   - Address
 *   - Contact
 */

if(lisOfResturant.length===0) {
    return <Shimmer />;
  }

  or

  lisOfResturant.length===0 ? <Shimmer /> :   are same