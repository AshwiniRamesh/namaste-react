const heading = React.createElement("h1", { id: 'myElement' }, "Hello");
const root = ReactDOM.createRoot(document.getElementById('root'));
const siblings = React.createElement("div", {}, [
React.createElement("p", {}, "Nested tags"),
React.createElement("p", {}, "Siblings 1"),
React.createElement("p", {}, "Siblings 2"),
React.createElement("p", {}, "Siblings 3")]);

root.render(siblings);
