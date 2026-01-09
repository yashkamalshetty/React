import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World from React JS"
// );

// console.log(heading) //object

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

//*************************************************************************** */

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */}


// const parent = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child"}, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
//     React.createElement("div", {id: "child"}, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag"),
//     ]), 
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent)

//*************************************************************************** */

//JSX
//React Element
// const jsxHeading = <h1 className="heading" tabIndex={5}>Namaste Using JSX</h1>

// console.log(jsxHeading);

//*************************************************************************** */

//React Component
// const HeadingComponent = () => {
//     return <h1>Namaste Using Component</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading);

//React Component2
// const HeadingComponent2 = () => (
//     <h1 className="heading">Namaste Using Component2</h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<HeadingComponent />);

//*************************************************************************** */

// const Title = () => (
//     <h1 className="heading" tabIndex={5}>
//         Namaste From Title
//     </h1>
// );

// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1 className="heading">Namaste Using Component</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<HeadingComponent />);

//*************************************************************************** */

const title = (
    <h1 className="heading" tabIndex={5}>
        Namaste From Title
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste Using Component</h1>
        <h2>{200+300}</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />);

