import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const newElement = createRoot(document.getElementById("newElement"));
const jsxHeadingElement = createRoot(document.getElementById("jsxHeading"));
const mutilpleLineJSXElement = createRoot(
  document.getElementById("mutilpleLineJSX")
);

const jsxHeading = (
  <h1 className="jsxheading">
    JSX is not html in JS where as its html like syntax
  </h1>
);
const mutilpleLineJSX = (
  <h1 className="jsxheading">Multiple lines of JSX code</h1>
);

const siblings = React.createElement("div", {}, [
  React.createElement("p", {}, "Nested tags"),
  React.createElement("p", {}, "Siblings 1"),
  React.createElement("p", {}, "Siblings 2"),
  React.createElement("p", {}, "Siblings 3"),
]);

console.log(jsxHeading);
root.render(siblings);
newElement.render(siblings);
jsxHeadingElement.render(jsxHeading);
mutilpleLineJSXElement.render(mutilpleLineJSX);

const FunctionalComponent1 = () => {
          return <h1>Functional Component 1</h1>;
        };

const FunctionalComponentElement1 = createRoot(
  document.getElementById("FunctionalComponent1")
);
FunctionalComponentElement1.render(<FunctionalComponent1 />);
console.log(FunctionalComponent1);

const element1 = <span>Elemnt composistion</span>;
const element2 = (
  <div>
    {" "}
    {element1}
    <div>We can run JS code inside JSX within {}</div>
  </div>
);

const Title =()=>(
          <h1>We can call function from JSX</h1>
);
const FunctionalComponent2 = () => {
  return (
    <div>
      Component composistion, Rendering a component inside other
      <FunctionalComponent1 />
      {element2}
      {Title()}
      {console.log("This would be printed in the browser console")}
    </div>
  );
};

const FunctionalComponentElement2 = createRoot(
  document.getElementById("FunctionalComponent2")
);
FunctionalComponentElement2.render(<FunctionalComponent2 />);

console.log(FunctionalComponent2);
