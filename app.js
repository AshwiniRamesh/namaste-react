import React from "react";
import { createRoot } from "react-dom/client"; 

const root = createRoot(document.getElementById('root'));
const newElement = createRoot(document.getElementById('newElement'));
const jsxHeadingElement = createRoot(document.getElementById('jsxHeading'));
const mutilpleLineJSXElement = createRoot(document.getElementById('mutilpleLineJSX'));


const jsxHeading = <h1 className="jsxheading">JSX is not html in JS where as its html like syntax</h1>
const mutilpleLineJSX = (<h1 className="jsxheading">Multiple lines of JSX code</h1>)

const siblings = React.createElement("div", {}, [
React.createElement("p", {}, "Nested tags"),
React.createElement("p", {}, "Siblings 1"),
React.createElement("p", {}, "Siblings 2"),
React.createElement("p", {}, "Siblings 3")]);

console.log(jsxHeading)
root.render(siblings);
newElement.render(siblings);
jsxHeadingElement.render(jsxHeading);
mutilpleLineJSXElement.render(mutilpleLineJSX);

const FunctionalComponent1 = () =>{
          return (<h1>Functional Component 1</h1>);

}
const FunctionalComponentElement1 = createRoot(document.getElementById('FunctionalComponent1'));
FunctionalComponentElement1.render(<FunctionalComponent1 />);
console.log(FunctionalComponent1)


const FunctionalComponent2 = () =>{
          return (<h1>
                    <FunctionalComponent1 />
                    Functional Component 2</h1>);

}
const FunctionalComponentElement2 = createRoot(document.getElementById('FunctionalComponent2'));
FunctionalComponentElement2.render(<FunctionalComponent2 />);
console.log(FunctionalComponent2)
