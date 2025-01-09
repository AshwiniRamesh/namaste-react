import React from "react";
import { createRoot } from "react-dom/client"; 

const root = createRoot(document.getElementById('root'));
const siblings = React.createElement("div", {}, [
React.createElement("p", {}, "Nested tags"),
React.createElement("p", {}, "Siblings 1"),
React.createElement("p", {}, "Siblings 2"),
React.createElement("p", {}, "Siblings 3")]);

root.render(siblings);
